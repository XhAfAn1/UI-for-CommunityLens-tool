import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize } from 'lucide-react';

const formatTime = (seconds) => {
  if (isNaN(seconds)) return '00:00';
  const date = new Date(seconds * 1000);
  const hh = date.getUTCHours();
  const mm = date.getUTCMinutes();
  const ss = date.getUTCSeconds().toString().padStart(2, '0');
  if (hh) return `${hh}:${mm.toString().padStart(2, '0')}:${ss}`;
  return `${mm}:${ss}`;
};

export default function CustomVideoPlayer({ ytId, title }) {
  const containerRef = useRef(null);
  const iframeRef = useRef(null);
  const playerRef = useRef(null);

  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);
  const [volume, setVolume] = useState(0.8);
  const [played, setPlayed] = useState(0);
  const [duration, setDuration] = useState(0);
  const [showControls, setShowControls] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  
  let controlsTimeout = useRef(null);

  // Load YouTube Iframe API
  useEffect(() => {
    if (!window.YT) {
      const tag = document.createElement('script');
      tag.src = "https://www.youtube.com/iframe_api";
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    }

    const initPlayer = () => {
      playerRef.current = new window.YT.Player(iframeRef.current, {
        events: {
          'onReady': (event) => {
            setDuration(event.target.getDuration());
            // Play muted automatically
            event.target.mute();
            event.target.playVideo();
            setPlaying(true);
          },
          'onStateChange': (event) => {
            if (event.data === window.YT.PlayerState.PLAYING) {
              setPlaying(true);
              setDuration(event.target.getDuration());
            } else if (event.data === window.YT.PlayerState.PAUSED) {
              setPlaying(false);
            } else if (event.data === window.YT.PlayerState.ENDED) {
              setPlaying(false);
            }
          }
        }
      });
    };

    if (window.YT && window.YT.Player) {
      initPlayer();
    } else {
      window.onYouTubeIframeAPIReady = initPlayer;
    }

    return () => {
      if (playerRef.current && playerRef.current.destroy) {
        playerRef.current.destroy();
      }
    };
  }, [ytId]);

  // Update progress bar
  useEffect(() => {
    let interval;
    if (playing) {
      interval = setInterval(() => {
        if (playerRef.current && playerRef.current.getCurrentTime) {
          const currentTime = playerRef.current.getCurrentTime();
          const dur = playerRef.current.getDuration();
          if (dur > 0) {
            setPlayed(currentTime / dur);
          }
        }
      }, 500);
    }
    return () => clearInterval(interval);
  }, [playing]);

  const handleMouseMove = () => {
    setShowControls(true);
    setIsHovering(true);
    clearTimeout(controlsTimeout.current);
    controlsTimeout.current = setTimeout(() => {
      if (playing) {
        setShowControls(false);
        setIsHovering(false);
      }
    }, 2500);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    if (playing) setShowControls(false);
  };

  const togglePlay = (e) => {
    e.stopPropagation();
    if (playing) {
      playerRef.current?.pauseVideo();
    } else {
      playerRef.current?.playVideo();
    }
  };

  const toggleMute = (e) => {
    e.stopPropagation();
    if (muted) {
      playerRef.current?.unMute();
      playerRef.current?.setVolume(volume * 100);
      setMuted(false);
    } else {
      playerRef.current?.mute();
      setMuted(true);
    }
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (newVolume === 0) {
      playerRef.current?.mute();
      setMuted(true);
    } else {
      playerRef.current?.unMute();
      playerRef.current?.setVolume(newVolume * 100);
      setMuted(false);
    }
  };

  const handleSeekChange = (e) => {
    const newPlayed = parseFloat(e.target.value);
    setPlayed(newPlayed);
    if (playerRef.current && duration > 0) {
      playerRef.current.seekTo(newPlayed * duration, true);
    }
  };

  const toggleFullscreen = (e) => {
    e.stopPropagation();
    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen().catch(err => {
        console.error(`Error attempting to enable full-screen mode: ${err.message}`);
      });
    } else {
      document.exitFullscreen();
    }
  };

  return (
    <div 
      ref={containerRef}
      className="w-full aspect-video bg-black rounded-xl overflow-hidden relative z-20 group"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={togglePlay}
    >
      {/* 
        The native iframe but with pointerEvents: none.
        CSS Trick: We make the iframe exactly 110px taller than the container and shift it up by 60px.
        This perfectly hides the 60px top title bar and the 50px bottom control bar outside the visible area.
        For 16:9 videos, this hides the UI in the black letterboxes (0% video cropping).
        For vertical videos, it only crops the top 6% and bottom 5% of the video, preventing the "forcefully zoomed" look while guaranteeing the channel name NEVER shows!
      */}
      <div className="absolute top-[-60px] left-0 w-full h-[calc(100%+110px)] pointer-events-none">
        <iframe
          ref={iframeRef}
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${ytId}?enablejsapi=1&autoplay=1&mute=1&controls=0&disablekb=1&fs=0&modestbranding=1&rel=0`}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      {/* Custom Controls Overlay */}
      <div 
        className={`absolute bottom-0 left-0 right-0 p-4 pt-12 bg-gradient-to-t from-black/80 to-transparent transition-opacity duration-300 flex flex-col gap-2 ${showControls ? 'opacity-100' : 'opacity-0'}`}
        onClick={(e) => e.stopPropagation()} 
      >
        {/* Progress Bar */}
        <div className="w-full flex items-center h-4 cursor-pointer group/scrub">
          <input
            type="range"
            min={0}
            max={0.999999}
            step="any"
            value={played}
            onChange={handleSeekChange}
            className="w-full h-1 bg-white/30 rounded-full appearance-none cursor-pointer hover:h-2 hover:bg-white/40 transition-all [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:bg-red-600 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:opacity-0 group-hover/scrub:[&::-webkit-slider-thumb]:opacity-100"
            style={{
              background: `linear-gradient(to right, #ff0000 0%, #ff0000 ${played * 100}%, rgba(255,255,255,0.3) ${played * 100}%, rgba(255,255,255,0.3) 100%)`
            }}
          />
        </div>

        {/* Controls Row */}
        <div className="flex items-center justify-between text-white">
          <div className="flex items-center gap-4">
            <button onClick={togglePlay} className="hover:opacity-80 transition-opacity">
              {playing ? <Pause size={24} fill="currentColor" /> : <Play size={24} fill="currentColor" />}
            </button>
            
            <div className="flex items-center gap-2 group/vol">
              <button onClick={toggleMute} className="hover:opacity-80 transition-opacity">
                {muted || volume === 0 ? <VolumeX size={20} /> : <Volume2 size={20} />}
              </button>
              <input 
                type="range"
                min={0}
                max={1}
                step={0.05}
                value={muted ? 0 : volume}
                onChange={handleVolumeChange}
                className="w-0 overflow-hidden group-hover/vol:w-16 h-1 bg-white/30 rounded-full appearance-none transition-all duration-300 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-2 [&::-webkit-slider-thumb]:h-2 [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:rounded-full"
                style={{
                  background: `linear-gradient(to right, white 0%, white ${(muted ? 0 : volume) * 100}%, rgba(255,255,255,0.3) ${(muted ? 0 : volume) * 100}%, rgba(255,255,255,0.3) 100%)`
                }}
              />
            </div>

            <span className="text-xs font-medium opacity-90 tracking-wide">
              {formatTime(played * duration)} / {formatTime(duration)}
            </span>
          </div>

          <div className="flex items-center gap-4">
            <button onClick={toggleFullscreen} className="hover:opacity-80 transition-opacity">
              <Maximize size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
