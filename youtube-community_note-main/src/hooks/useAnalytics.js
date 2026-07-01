import React from 'react';
import { useLocation } from 'react-router-dom';
import { db } from '../firebase';
import { doc, setDoc, increment } from 'firebase/firestore';

// --- Analytics Hook ---
const useAnalytics = (videoId, isModalOpen = false) => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  
  let pid = null;
  for (const [key, value] of params.entries()) {
    const lowerKey = key.toLowerCase();
    if (lowerKey === 'prolific_pid' || lowerKey === 'prolofic_pid' || lowerKey === 'uid') {
      pid = value;
      break;
    }
  }
  
  if (!pid && location.search.includes('PID?')) {
    const match = location.search.match(/PID\?([^&]+)/);
    if (match) pid = match[1];
  }

  const analyticsData = React.useRef({
    'training-video': { viewTimeMs: 0, hoverTimeMs: 0, clicks: 0, revisitCount: 0, firstSeenTimeSec: null, firstClickTimeSec: null },
    'training-user-data': { viewTimeMs: 0, hoverTimeMs: 0, clicks: 0, revisitCount: 0, firstSeenTimeSec: null, firstClickTimeSec: null },
    'training-platform-data': { viewTimeMs: 0, hoverTimeMs: 0, clicks: 0, revisitCount: 0, firstSeenTimeSec: null, firstClickTimeSec: null },
    'training-community-tool': { viewTimeMs: 0, hoverTimeMs: 0, clicks: 0, revisitCount: 0, firstSeenTimeSec: null, firstClickTimeSec: null },
    'training-comments': { viewTimeMs: 0, hoverTimeMs: 0, clicks: 0, revisitCount: 0, firstSeenTimeSec: null, firstClickTimeSec: null },
    'training-c2pa-button': { viewTimeMs: 0, hoverTimeMs: 0, clicks: 0, revisitCount: 0, firstSeenTimeSec: null, firstClickTimeSec: null },
  });
  // Tracks whether an element was actively intersecting *before* a pause.
  // Used to correctly resume without counting re-entries as revisits.
  const wasIntersectingBeforePause = React.useRef({});

  const activeIntersections = React.useRef({});
  const activeHovers = React.useRef({});
  const pausedIntersections = React.useRef(null);
  const pausedHovers = React.useRef(null);
  const isModalOpenRef = React.useRef(isModalOpen);
  const lastSavedDataStr = React.useRef(null);
  
  // Track start time for offset calculations
  const sessionStartTimeMs = React.useRef(Date.now());
  
  // Track total active time
  const totalActiveTimeMs = React.useRef(0);
  const lastActiveTickMs = React.useRef(Date.now());
  
  // Track scroll speed
  const totalScrollPixels = React.useRef(0);
  const lastScrollPos = React.useRef(0);

  const saveToFirebase = React.useCallback(async (forceSave = false) => {
    if (!pid || !videoId) return;

    // Prevent background interval from spamming Firebase when the tab is hidden!
    if (document.visibilityState === 'hidden' && forceSave !== true) return;

    const KEY_MAPPING = {
      'training-video': 'video',
      'training-user-data': 'Creator-driven indicators',
      'training-platform-data': 'platform-provided indicators',
      'training-community-tool': 'communitylens',
      'training-comments': 'user comments',
      'training-c2pa-button': 'c2pa design'
    };

    const now = Date.now();
    const finalData = {};
    Object.keys(analyticsData.current).forEach(id => {
      const mappedKey = KEY_MAPPING[id] || id.replace('training-', '');
      
      let currentViewTimeMs = analyticsData.current[id].viewTimeMs;
      if (activeIntersections.current && activeIntersections.current[id]) {
        currentViewTimeMs += (now - activeIntersections.current[id]);
      }
      
      let currentHoverTimeMs = analyticsData.current[id].hoverTimeMs;
      if (activeHovers.current && activeHovers.current[id]) {
        currentHoverTimeMs += (now - activeHovers.current[id]);
      }

      finalData[mappedKey] = {
        viewTimeSec: Math.round(currentViewTimeMs / 1000),
        hoverTimeSec: Math.round(currentHoverTimeMs / 1000),
        clicks: analyticsData.current[id].clicks,
        revisitCount: analyticsData.current[id].revisitCount,
        firstSeenTimeSec: analyticsData.current[id].firstSeenTimeSec,
        firstClickTimeSec: analyticsData.current[id].firstClickTimeSec
      };
    });

    let currentTotalActiveMs = totalActiveTimeMs.current;
    if (document.visibilityState === 'visible' && !isModalOpenRef.current && pausedIntersections.current === null) {
      if (lastActiveTickMs.current) {
        currentTotalActiveMs += (now - lastActiveTickMs.current);
      }
    }
    const activeSecs = Math.max(1, currentTotalActiveMs / 1000);
    const avgScroll = Math.round(totalScrollPixels.current / activeSecs);

    const payloadStr = JSON.stringify({ analytics: finalData, totalActiveSessionTimeSec: Math.round(activeSecs), averageScrollSpeedPxPerSec: avgScroll });
    if (!forceSave && payloadStr === lastSavedDataStr.current) {
      return; // Skip write if data is exactly the same (dirty check)
    }

    try {
      const docRef = doc(db, 'users analytical data', pid, 'videos', videoId);
      
      await setDoc(docRef, { 
        analytics: finalData,
        totalActiveSessionTimeSec: Math.round(activeSecs),
        averageScrollSpeedPxPerSec: Math.round(totalScrollPixels.current / activeSecs),
        writeCount: increment(1)
      }, { merge: true });
      console.log("Analytics saved successfully:", finalData);
    } catch (error) {
      console.error("Error saving analytics:", error);
    }
  }, [pid, videoId]);

  const pauseTracking = React.useCallback(() => {
    if (pausedIntersections.current !== null) return; // Already paused
    
    const now = Date.now();
    pausedIntersections.current = { ...activeIntersections.current };
    pausedHovers.current = { ...activeHovers.current };

    Object.keys(activeIntersections.current).forEach(id => {
      if (activeIntersections.current[id]) {
        analyticsData.current[id].viewTimeMs += (now - activeIntersections.current[id]);
        // Remember which elements were actively being tracked when we paused
        wasIntersectingBeforePause.current[id] = true;
        activeIntersections.current[id] = null;
      } else {
        wasIntersectingBeforePause.current[id] = false;
      }
    });
    Object.keys(activeHovers.current).forEach(id => {
      if (activeHovers.current[id]) {
        analyticsData.current[id].hoverTimeMs += (now - activeHovers.current[id]);
        activeHovers.current[id] = null;
      }
    });
    
    totalActiveTimeMs.current += (now - lastActiveTickMs.current);
    lastActiveTickMs.current = now;

    saveToFirebase(true); // Force a save to record the paused state
  }, [saveToFirebase]);

  const resumeTracking = React.useCallback(() => {
    if (pausedIntersections.current === null) return; // Already running
    if (document.visibilityState === 'hidden' || isModalOpenRef.current) return; // Cannot resume if still hidden/blocked
    
    lastActiveTickMs.current = Date.now();
    
    if (pausedIntersections.current) {
      Object.keys(pausedIntersections.current).forEach(id => {
        // Only resume if the element was actually being tracked before the pause
        if (wasIntersectingBeforePause.current[id]) {
          activeIntersections.current[id] = Date.now();
        }
      });
    }
    if (pausedHovers.current) {
      Object.keys(pausedHovers.current).forEach(id => {
        if (pausedHovers.current[id]) activeHovers.current[id] = Date.now();
      });
    }
    pausedIntersections.current = null;
    pausedHovers.current = null;
  }, []);

  // Update modal ref and pause/resume logic
  React.useEffect(() => {
    isModalOpenRef.current = isModalOpen;
    if (isModalOpen) {
      pauseTracking();
      // Specifically start tracking view time for the C2PA modal since it's the only thing visible
      activeIntersections.current['training-c2pa-button'] = Date.now();
    } else {
      // Finalize tracking for the C2PA modal
      if (activeIntersections.current['training-c2pa-button']) {
        analyticsData.current['training-c2pa-button'].viewTimeMs += (Date.now() - activeIntersections.current['training-c2pa-button']);
        activeIntersections.current['training-c2pa-button'] = null;
      }
      resumeTracking();
    }
  }, [isModalOpen, pauseTracking, resumeTracking]);

  React.useEffect(() => {
    if (!pid || !videoId) return;

    // Immediately trigger an initial save so 0-value fields appear in Firebase right away
    saveToFirebase();

    const observer = new IntersectionObserver((entries) => {
      if (isModalOpenRef.current || document.visibilityState === 'hidden') return;

      entries.forEach(entry => {
        const id = entry.target.id;
        if (!analyticsData.current[id]) return;

        // Use 20% for normal elements, but >0% for the comments since it's very long
        const requiredThreshold = id === 'training-comments' ? 0 : 0.2;

        if (entry.isIntersecting && entry.intersectionRatio >= requiredThreshold) {
          if (id === 'training-c2pa-button') {
            if (analyticsData.current[id].firstSeenTimeSec === null) {
              analyticsData.current[id].firstSeenTimeSec = Math.round((Date.now() - sessionStartTimeMs.current) / 1000);
              analyticsData.current[id].revisitCount = 1;
            }
            return; // Skip accumulating viewTimeMs for the button itself
          }

          // Start the timer only if not already running
          if (!activeIntersections.current[id]) {
            activeIntersections.current[id] = Date.now();
            // Count as revisit only if element has been seen before AND it was not running
            // when the modal/tab paused it (to avoid counting resume-from-pause as a new visit)
            if (analyticsData.current[id].firstSeenTimeSec === null) {
              // Very first time ever seen
              analyticsData.current[id].firstSeenTimeSec = Math.round((Date.now() - sessionStartTimeMs.current) / 1000);
              analyticsData.current[id].revisitCount = 1;
            } else if (!wasIntersectingBeforePause.current[id]) {
              // Genuinely scrolled back to it (not a resume from pause)
              analyticsData.current[id].revisitCount += 1;
            }
          }
        } else {
          // If it dropped below the threshold, pause the timer
          if (activeIntersections.current[id]) {
            analyticsData.current[id].viewTimeMs += (Date.now() - activeIntersections.current[id]);
            activeIntersections.current[id] = null;
          }
        }
      });
    }, { 
      rootMargin: '0px 0px -40% 0px', // Shave 40% off the bottom (only track top 60% of screen)
      threshold: [0, 0.05, 0.1, 0.2, 0.25] // Fire updates at these intervals so our logic catches it
    });

    const handleMouseEnter = (e) => {
      let id = e.currentTarget.id;
      if (id === 'training-c2pa-modal' || id === 'training-c2pa-overlay') id = 'training-c2pa-button';

      if (analyticsData.current[id]) {
        if (isModalOpenRef.current && id !== 'training-c2pa-button') return;
        
        activeHovers.current[id] = Date.now();
        
        // Guarantee the window is focused when hovering over the video.
        // This ensures that if the user clicks the video (even if they just clicked out to DevTools),
        // the browser will correctly fire a 'blur' event.
        if (id === 'training-video') {
          window.focus();
        }
      }
    };

    const handleMouseLeave = (e) => {
      let id = e.currentTarget.id;
      if (id === 'training-c2pa-modal' || id === 'training-c2pa-overlay') id = 'training-c2pa-button';

      if (analyticsData.current[id] && activeHovers.current[id]) {
        analyticsData.current[id].hoverTimeMs += (Date.now() - activeHovers.current[id]);
        activeHovers.current[id] = null;
      }
    };

    const handleClick = (e) => {
      let target = e.target;
      while (target && target !== document) {
        let id = target.id;
        // Map clicks inside the modal wrapper itself to the c2pa button tracker
        if (id === 'training-c2pa-modal' || id === 'training-c2pa-overlay') id = 'training-c2pa-button';

        if (id && analyticsData.current[id]) {
          analyticsData.current[id].clicks += 1;
          if (analyticsData.current[id].firstClickTimeSec === null) {
            analyticsData.current[id].firstClickTimeSec = Math.round((Date.now() - sessionStartTimeMs.current) / 1000);
          }
          break;
        }
        target = target.parentNode;
      }
    };

    // Special handler for cross-origin iframe clicks (like YouTube video)
    const handleBlur = () => {
      // Wait a tiny bit to ensure hover states are accurate
      setTimeout(() => {
        // If the window loses focus while the mouse is hovering over the video, 
        // it strictly means the user clicked the iframe.
        if (activeHovers.current['training-video'] && !isModalOpenRef.current) {
          analyticsData.current['training-video'].clicks += 1;
          if (analyticsData.current['training-video'].firstClickTimeSec === null) {
            analyticsData.current['training-video'].firstClickTimeSec = Math.round((Date.now() - sessionStartTimeMs.current) / 1000);
          }
          console.log(`Video click tracked! Total: ${analyticsData.current['training-video'].clicks}`);
          
          // Force focus back to the main window so the next click registers as another blur event
          window.focus();
        }
      }, 50);
    };

    const handleScroll = (e) => {
      if (isModalOpenRef.current) return;
      const currentPos = e.target.scrollTop;
      totalScrollPixels.current += Math.abs(currentPos - lastScrollPos.current);
      lastScrollPos.current = currentPos;
    };

    const attachListeners = () => {
      const sections = Object.keys(analyticsData.current);
      sections.forEach(id => {
        const el = document.getElementById(id);
        if (el && !el.dataset.analyticsAttached) {
          observer.observe(el);
          el.addEventListener('mouseenter', handleMouseEnter);
          el.addEventListener('mouseleave', handleMouseLeave);
          el.dataset.analyticsAttached = 'true';
        }
      });
      ['training-c2pa-modal', 'training-c2pa-overlay'].forEach(id => {
        const el = document.getElementById(id);
        if (el && !el.dataset.analyticsAttached) {
          el.addEventListener('mouseenter', handleMouseEnter);
          el.addEventListener('mouseleave', handleMouseLeave);
          el.dataset.analyticsAttached = 'true';
        }
      });
    };

    // Attach initially after a brief timeout to let DOM render
    const attachTimeout = setTimeout(() => {
      const mainEl = document.getElementById('main-content');
      if (mainEl) {
        lastScrollPos.current = mainEl.scrollTop;
        mainEl.addEventListener('scroll', handleScroll, { passive: true });
      }
      attachListeners();
    }, 500);

    // Watch for DOM changes (like modal appearing) to re-attach listeners
    const mutObserver = new MutationObserver(() => {
      attachListeners();
    });
    mutObserver.observe(document.body, { childList: true, subtree: true });

    document.addEventListener('click', handleClick, true);
    window.addEventListener('blur', handleBlur);

    const intervalId = setInterval(() => saveToFirebase(false), 60000);

    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden') {
        pauseTracking();
      } else {
        resumeTracking();
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      clearTimeout(attachTimeout);
      clearInterval(intervalId);
      mutObserver.disconnect();
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      document.removeEventListener('click', handleClick, true);
      window.removeEventListener('blur', handleBlur);
      
      const mainEl = document.getElementById('main-content');
      if (mainEl) mainEl.removeEventListener('scroll', handleScroll);
      
      observer.disconnect();
      const sections = Object.keys(analyticsData.current);
      sections.forEach(id => {
        const el = document.getElementById(id);
        if (el) {
          el.removeEventListener('mouseenter', handleMouseEnter);
          el.removeEventListener('mouseleave', handleMouseLeave);
          delete el.dataset.analyticsAttached;
        }
      });
      ['training-c2pa-modal', 'training-c2pa-overlay'].forEach(id => {
        const el = document.getElementById(id);
        if (el) {
          el.removeEventListener('mouseenter', handleMouseEnter);
          el.removeEventListener('mouseleave', handleMouseLeave);
          delete el.dataset.analyticsAttached;
        }
      });
      saveToFirebase(true); // Final save on unmount
    };
  }, [pid, videoId, saveToFirebase]);
};

export default useAnalytics;