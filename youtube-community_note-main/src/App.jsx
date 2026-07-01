import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useNavigate, useParams, useLocation } from 'react-router-dom';
import { db } from './firebase';
import { doc, getDoc, setDoc, serverTimestamp, increment } from 'firebase/firestore';
import {
  Menu, Search, Mic, Bell, Video, Home, Compass,
  PlaySquare, Clock, ThumbsUp, ThumbsDown, Share2,
  MoreVertical, ChevronDown, ChevronUp, MonitorPlay, Gamepad2,
  Music2, Trophy, Flame, Newspaper, X,
  LogOut, Settings, HelpCircle, History, ShieldAlert,
  ScanFace, ExternalLink, ChevronRight,
  Activity, Eye, Mic2, CheckCircle2, Download, Scissors, ListPlus,
  AlertOctagon, Info, Trash2, Maximize2, Minimize2, Sun, Moon,
  ArrowLeft, ArrowRight, PlayCircle, XCircle, ClipboardList, Bot,
  FileText, Link2, Quote, User, Wand2, List, Award, ShieldCheck,
  Lock, Fingerprint, Layers, BarChart3
} from 'lucide-react';
import AnalysisResultPage from './components/AnalysisResultPage';
import CustomVideoPlayer from './components/CustomVideoPlayer';
import { INITIAL_VIDEOS } from './data/mockData';
import useAnalytics from './hooks/useAnalytics';
import ContentCredentialsCard from './components/ContentCredentialsCard';
import CommunityLensUI from './components/CommunityLensUI';




// --- Sub-components ---

const SidebarItem = ({ icon: Icon, label, isActive, isCollapsed, onClick, isDarkMode }) => (
  <div
    onClick={onClick}
    className={`flex items-center p-3 rounded-lg cursor-pointer mb-1 transition-colors 
      ${isActive
        ? (isDarkMode ? 'bg-zinc-800 font-medium' : 'bg-gray-100 font-medium')
        : (isDarkMode ? 'hover:bg-zinc-800' : 'hover:bg-gray-100')
      } 
      ${isCollapsed ? 'flex-col justify-center gap-1 p-2' : 'gap-5'}`}
  >
    <Icon size={isCollapsed ? 24 : 22} className={isActive ? (isDarkMode ? 'text-white fill-current' : 'text-black fill-current') : (isDarkMode ? 'text-white' : 'text-black')} />
    <span className={`text-sm ${isCollapsed ? 'text-[10px]' : 'truncate flex-1'} ${isDarkMode ? 'text-white' : 'text-black'}`}>{label}</span>
  </div>
);

const CategoryPill = ({ label, isSelected, onClick, isDarkMode }) => (
  <button
    onClick={() => onClick(label)}
    className={`px-3 py-1.5 rounded-lg text-sm font-medium whitespace-nowrap transition-colors
      ${isSelected
        ? (isDarkMode ? 'bg-white text-black' : 'bg-black text-white')
        : (isDarkMode ? 'bg-zinc-800 text-white hover:bg-zinc-700' : 'bg-gray-100 text-black hover:bg-gray-200')
      }`}
  >
    {label}
  </button>
);

const VideoCard = ({ video, isDarkMode }) => {
  // Navigation removed
  return (
    <div className="flex flex-col gap-3 cursor-default group">
      <div className={`relative aspect-video rounded-xl overflow-hidden ${isDarkMode ? 'bg-zinc-800' : 'bg-gray-200'}`}>
        <img
          src={video.thumbnail}
          alt={video.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
        />
        <div className="absolute bottom-2 right-2 bg-black/80 px-1.5 py-0.5 rounded text-xs text-white font-medium">
          {video.duration}
        </div>
      </div>
      <div className="flex gap-3">
        <img
          src={video.channelAvatar}
          alt={video.channelName}
          className={`w-9 h-9 rounded-full mt-1 object-cover ${isDarkMode ? 'bg-zinc-700' : 'bg-gray-300'}`}
        />
        <div className="flex flex-col">
          <h3 className={`font-semibold leading-tight line-clamp-2 text-sm md:text-base ${isDarkMode ? 'text-white' : 'text-black'}`}>
            {video.title}
          </h3>
          <div className={`text-xs md:text-sm mt-1 ${isDarkMode ? 'text-zinc-400' : 'text-gray-600'}`}>
            <p className={`transition-colors ${isDarkMode ? 'hover:text-white' : 'hover:text-black'}`}>{video.channelName}</p>
            <div className="flex items-center">
              <span>{video.views} views</span>
              <span className="mx-1">•</span>
              <span>{video.uploadedAt}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const RelatedVideoCard = ({ video, isDarkMode }) => {
  // Navigation removed
  return (
    <div className="flex gap-2 cursor-default group">
      <div className={`relative w-40 flex-shrink-0 aspect-video rounded-lg overflow-hidden ${isDarkMode ? 'bg-zinc-800' : 'bg-gray-200'}`}>
        <img
          src={video.thumbnail}
          alt={video.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-1 right-1 bg-black/80 px-1 py-0.5 rounded text-[10px] text-white font-medium">
          {video.duration}
        </div>
      </div>
      <div className="flex flex-col gap-1 pr-2">
        <h4 className={`text-sm font-medium line-clamp-2 leading-tight group-hover:underline ${isDarkMode ? 'text-white' : 'text-black'}`}>
          {video.title}
        </h4>
        <div className={`text-xs ${isDarkMode ? 'text-zinc-400' : 'text-gray-600'}`}>
          <p>{video.channelName}</p>
          <p>{video.views} views • {video.uploadedAt}</p>
        </div>
      </div>
    </div>
  );
};





// --- Page Components ---

const WatchPage = ({ videos, isDarkMode, toggleTheme, currentVideoId, activeTrainingStep }) => {
  // ROUTING REMOVED: const { id } = useParams();
  const navigate = useNavigate();
  const [showMore, setShowMore] = useState(true);
  const [showC2PAModal, setShowC2PAModal] = useState(false);

  // Find video by internal ID passed via Props
  const targetId = currentVideoId || "S1.1";
  const currentVideo = videos.find(v => v.id === targetId);

  // Initialize analytics tracking (auto-disables if uid is absent)
  // Pass showC2PAModal to pause tracking when modal is open
  useAnalytics(targetId, showC2PAModal);

  useEffect(() => {
    window.scrollTo(0, 0);
    setShowMore(true);
  }, [targetId]);

  useEffect(() => {
    // Force description open for steps 1-3 to ensure platform indicators are visible
    if (activeTrainingStep <= 2) {
      setShowMore(true);
    }

    // Force modal open on Step 7 (index 6) with a delay to show the button first
    if (activeTrainingStep === 6) {
      const timer = setTimeout(() => {
        setShowC2PAModal(true);
      }, 2100);
      return () => clearTimeout(timer);
    } else {
      setShowC2PAModal(false);
    }
  }, [activeTrainingStep]);

  if (!currentVideo) return <div className="p-10 text-white">Video not found.</div>;

  // UPDATED: Dynamic comment count
  const commentCount = currentVideo.comments.length;

  const platformDataContent = currentVideo.isaigenarated ? (
    <>
      <div className="flex items-center justify-between mb-2">
        <h1 className={`text-lg font-bold ${isDarkMode ? 'text-white' : 'text-black'}`}>
          How this was made
        </h1>

        {(currentVideo.id === "S7.1" || currentVideo.id === "video13") && (activeTrainingStep === undefined || activeTrainingStep >= 5) && (
          <div className="relative">
            <button
              id="training-c2pa-button"
              onClick={(e) => {
                e.stopPropagation();
                setShowC2PAModal(!showC2PAModal);
              }}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-full border transition-all hover:scale-[1.02] active:scale-95 shadow-sm ${isDarkMode ? 'bg-zinc-800 border-zinc-600 text-white hover:bg-zinc-700' : 'bg-white border-gray-300 text-black hover:bg-gray-50'}`}
            >
              <div className={`flex items-center justify-center w-4 h-4 rounded-full border font-bold text-[8px] ${isDarkMode ? 'border-white text-white' : 'border-black text-black'}`}>
                cr
              </div>
              <span className="text-xs font-bold">Content Credentials</span>
            </button>

            {showC2PAModal && (
              <ContentCredentialsCard isDarkMode={isDarkMode} onClose={() => setShowC2PAModal(false)} thumbnail={currentVideo.thumbnail} videoId={currentVideo.id} />
            )}
          </div>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <h4 className={`text-xs font-bold ${isDarkMode ? 'text-white' : 'text-black'}`}>
          Altered or synthetic content
        </h4>
        <p className={`text-xs leading-relaxed ${isDarkMode ? 'text-zinc-400' : 'text-gray-600'}`}>
          Sound or visuals were significantly edited or digitally generated. <a href="https://support.google.com/youtube/answer/15447836?hl=en" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-400 cursor-pointer">Learn more</a>
        </p>
      </div>
    </>
  ) : null;

  return (
    <div className="flex flex-col lg:flex-row max-w-[1700px] mx-auto p-4 lg:p-6 gap-6 animate-in fade-in duration-500">
      <div className="flex-1 min-w-0">
        <div id="training-video" className="w-full aspect-video bg-black rounded-xl overflow-hidden shadow-lg relative z-20">

          {/* Custom Video Player replaces native iframe */}
          <CustomVideoPlayer 
            key={currentVideo.ytId} 
            ytId={currentVideo.ytId} 
            title={currentVideo.title} 
          />

        </div>

        <div id="training-user-data">
          <div className="mt-4">
            <h1 className={`text-xl font-bold line-clamp-2 ${isDarkMode ? 'text-white' : 'text-black'}`}>{currentVideo.title}</h1>

            <div className="flex flex-wrap items-center justify-between mt-3 gap-4">
              <div className="flex flex-wrap items-center gap-3">
                <img
                  src={currentVideo.channelAvatar}
                  className={`w-10 h-10 rounded-full flex-shrink-0 ${isDarkMode ? 'bg-zinc-700' : 'bg-gray-300'}`}
                  alt={currentVideo.channelName}
                />
                <div className="min-w-[100px]">
                  <h3 className={`font-bold text-base line-clamp-1 ${isDarkMode ? 'text-white' : 'text-black'}`}>{currentVideo.channelName}</h3>
                  {/* DYNAMIC SUBSCRIBER COUNT */}
                  <p className={`text-xs ${isDarkMode ? 'text-zinc-400' : 'text-gray-600'}`}>{currentVideo.subscribers}</p>
                </div>
                <button className={`ml-1 sm:ml-2 px-3 sm:px-4 py-2 rounded-full font-medium text-sm transition-colors flex-shrink-0 ${isDarkMode ? 'bg-white text-black hover:bg-zinc-200' : 'bg-black text-white hover:bg-zinc-800'}`}>
                  Subscribe
                </button>
              </div>

              <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
                <div className={`flex items-center rounded-full ${isDarkMode ? 'bg-zinc-800' : 'bg-gray-100'}`}>
                  <button className={`flex items-center gap-2 px-4 py-2 rounded-l-full border-r transition-colors ${isDarkMode ? 'hover:bg-zinc-700 border-zinc-700' : 'hover:bg-gray-200 border-gray-300'}`}>
                    <ThumbsUp size={18} className={isDarkMode ? 'text-white' : 'text-black'} />
                    {/* DYNAMIC LIKE COUNT */}
                    <span className={`text-sm font-medium ${isDarkMode ? 'text-white' : 'text-black'}`}>{currentVideo.likes}</span>
                  </button>
                  <button className={`px-4 py-2 rounded-r-full transition-colors border-r ${isDarkMode ? 'hover:bg-zinc-700 border-zinc-700' : 'hover:bg-gray-200 border-gray-300'}`}>
                    <ThumbsDown size={18} className={isDarkMode ? 'text-white' : 'text-black'} />
                  </button>
                </div>

                <button className={`flex items-center gap-2 px-4 py-2 rounded-full transition-colors whitespace-nowrap ${isDarkMode ? 'bg-zinc-800 hover:bg-zinc-700 text-white' : 'bg-gray-100 hover:bg-gray-200 text-black'}`}>
                  <Share2 size={18} />
                  <span className="text-sm font-medium">Share</span>
                </button>

                <button className={`flex items-center gap-2 px-4 py-2 rounded-full transition-colors whitespace-nowrap ${isDarkMode ? 'bg-zinc-800 hover:bg-zinc-700 text-white' : 'bg-gray-100 hover:bg-gray-200 text-black'}`}>
                  <Download size={18} />
                  <span className="text-sm font-medium">Download</span>
                </button>

                <button className={`flex items-center gap-2 px-4 py-2 rounded-full transition-colors whitespace-nowrap hidden xl:flex ${isDarkMode ? 'bg-zinc-800 hover:bg-zinc-700 text-white' : 'bg-gray-100 hover:bg-gray-200 text-black'}`}>
                  <Scissors size={18} />
                  <span className="text-sm font-medium">Clip</span>
                </button>

                <button className={`flex items-center gap-2 px-4 py-2 rounded-full transition-colors hidden sm:flex ${isDarkMode ? 'bg-zinc-800 hover:bg-zinc-700 text-white' : 'bg-gray-100 hover:bg-gray-200 text-black'}`}>
                  <MoreVertical size={18} />
                </button>
              </div>
            </div>
          </div>

          {/* Expandable Description Box */}
          <div className={`mt-4 rounded-xl p-3 text-sm transition-all duration-200 ${isDarkMode ? 'bg-zinc-800/50' : 'bg-gray-100'} ${showMore ? '' : (isDarkMode ? 'cursor-pointer hover:bg-zinc-800' : 'cursor-pointer hover:bg-gray-200')}`} onClick={() => !showMore && setShowMore(true)}>
            <div className={`font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-black'}`}>
              {currentVideo.views} views • {currentVideo.uploadedAt}  <span className={isDarkMode ? 'text-zinc-400' : 'text-gray-600'}></span>
            </div>

            <div className={`relative ${showMore ? '' : 'max-h-20 overflow-hidden'}`}>
              <p className={`whitespace-pre-line leading-relaxed ${isDarkMode ? 'text-white/90' : 'text-black/90'}`}>
                {currentVideo.description}
              </p>
            </div>

            {currentVideo.isaigenarated && activeTrainingStep === undefined && (
              <div id="training-platform-data" className={`mt-4 pt-4 border-t ${isDarkMode ? 'border-zinc-700' : 'border-gray-300'}`}>
                {platformDataContent}
              </div>
            )}
          </div>
        </div>

        {currentVideo.isaigenarated && activeTrainingStep !== undefined && (
          <div id="training-platform-data" className={`mt-4 rounded-xl p-3 text-sm transition-all duration-200 ${isDarkMode ? 'bg-zinc-800/50' : 'bg-gray-100'}`}>
            {platformDataContent}
          </div>
        )}

        {/* Show More Button for main description */}
        <div className="px-3">
          <button
            className={`mt-2 font-bold block text-xs ${isDarkMode ? 'text-white/70 hover:text-white' : 'text-black/70 hover:text-black'}`}
            onClick={(e) => {
              e.stopPropagation();
              setShowMore(!showMore);
            }}
          >
            {showMore ? 'Show less' : '...more'}
          </button>
        </div>

        {/* Hide tool for video7 */}
        {currentVideo.id !== "S6.1" && (
          <div id="training-community-tool">
            <CommunityLensUI
              videoId={currentVideo.id}
              isDarkMode={isDarkMode}
              toggleTheme={toggleTheme}
              initialOpen={false} // Start collapsed for training
              activeTrainingStep={activeTrainingStep}
            />
          </div>
        )}

        <div className="mt-6 hidden md:block"> </div>

        <div id="training-comments" className="mt-6">
          <div className="flex items-center gap-8 mb-6">
            {/* UPDATED: Dynamic comment count */}
            <h3 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-black'}`}>{commentCount} Comments</h3>
            <div className={`flex items-center gap-2 text-sm font-medium cursor-pointer ${isDarkMode ? 'text-white' : 'text-black'}`}>
              <div className="flex flex-col gap-[3px]">
                <div className={`w-5 h-[2px] ${isDarkMode ? 'bg-white' : 'bg-black'}`}></div>
                <div className={`w-3 h-[2px] ${isDarkMode ? 'bg-white' : 'bg-black'}`}></div>
                <div className={`w-4 h-[2px] ${isDarkMode ? 'bg-white' : 'bg-black'}`}></div>
              </div>
              Sort by
            </div>
          </div>

          <div className="flex gap-4 mb-8">
            <div className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center text-sm font-bold flex-shrink-0 text-white">R</div>
            <div className="flex-1">
              <input type="text" placeholder="Add a comment..." className={`w-full bg-transparent border-b outline-none pb-1 text-sm ${isDarkMode ? 'border-zinc-700 focus:border-white text-white' : 'border-gray-400 focus:border-black text-black'}`} />
              <div className="flex justify-end gap-2 mt-2">
                <button className={`px-3 py-1.5 rounded-full text-sm font-medium ${isDarkMode ? 'hover:bg-zinc-800 text-white' : 'hover:bg-gray-100 text-black'}`}>Cancel</button>
                <button className="px-3 py-1.5 rounded-full bg-blue-600/50 text-zinc-400 text-sm font-medium cursor-not-allowed">Comment</button>
              </div>
            </div>
          </div>

          {currentVideo.comments.map((comment, i) => {
            // UPDATED: Calculate decreasing likes based on index to simulate "Top Comments" sort
            // First comment gets the most likes, last gets the least.
            // Formula: (Total Comments - Index) * Multiplier (e.g., 23)
            const simulatedLikes = (currentVideo.comments.length - i) * 23 + Math.floor(Math.random() * 10);

            return (
              <div key={i} className="flex gap-4 mb-6">
                <div className={`w-10 h-10 rounded-full flex-shrink-0 overflow-hidden ${isDarkMode ? 'bg-zinc-700' : 'bg-gray-200'}`}>
                  <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=User${i}`} alt="user" />
                </div>
                <div>
                  <div className="flex gap-2 items-center text-xs mb-1">
                    <span className={`font-bold ${isDarkMode ? 'text-white' : 'text-black'}`}>@user-random{i}</span>
                    <span className={isDarkMode ? 'text-zinc-400' : 'text-gray-600'}>2 days ago</span>
                  </div>
                  <p className={`text-sm ${isDarkMode ? 'text-white' : 'text-black'}`}>{comment}</p>
                  <div className="flex items-center gap-4 mt-2">
                    <div className="flex items-center gap-1.5 cursor-pointer">
                      <ThumbsUp size={14} className={isDarkMode ? 'text-white' : 'text-black'} />
                      {/* UPDATED: Display simulated likes */}
                      <span className={`text-xs ${isDarkMode ? 'text-zinc-400' : 'text-gray-600'}`}>{simulatedLikes}</span>
                    </div>
                    <div className="cursor-pointer">
                      <ThumbsDown size={14} className={isDarkMode ? 'text-white' : 'text-black'} />
                    </div>
                    <button className={`text-xs font-medium px-3 py-1 rounded-full ${isDarkMode ? 'hover:bg-zinc-800 text-white' : 'hover:bg-gray-100 text-black'}`}>Reply</button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {activeTrainingStep === undefined && (
        <div className="hidden lg:block lg:w-[350px] xl:w-[400px] flex-shrink-0">
          <div className="flex gap-2 mb-4 overflow-x-auto no-scrollbar pb-2">
            <CategoryPill label="All" isSelected={true} onClick={() => { }} isDarkMode={isDarkMode} />
            <CategoryPill label="From this channel" isSelected={false} onClick={() => { }} isDarkMode={isDarkMode} />
            <CategoryPill label="Related" isSelected={false} onClick={() => { }} isDarkMode={isDarkMode} />
          </div>
          <div className="flex flex-col gap-2">
            {videos.filter(v => v.id !== currentVideo.id).map((vid) => (
              <div key={`rel-${vid.id}`}>
                <RelatedVideoCard
                  video={vid}
                  isDarkMode={isDarkMode}
                />
              </div>
            ))}
          </div>
        </div>
      )}



    </div >
  );
};

// --- Training/Onboarding Overlay ---

const TRAINING_STEPS = [
  {
    targetId: 'training-video',
    title: 'YouTube Video Layout',
    subtitle: 'The main video playback area where you watch the content. You can play or pause the content by clicking on it, and you can scroll through the video using the progress bar below the player.',
  },
  {
    targetId: 'training-user-data',
    title: 'Creator-provided Indicators',
    subtitle: 'These are signals added by the creator of the video, such as the video title, description, or added hashtags. These indicators help viewers gain a better understanding of the content.',
  },
  {
    targetId: 'training-platform-data',
    title: 'Platform-provided Indicators',
    subtitle: 'YouTube adds an "Altered or Synthetic Content" label when it flags a video as synthetic or AI-generated, so that viewers are aware of its nature before watching.',
  },
  {
    targetId: 'training-comments',
    title: 'Community Signals (User Comments)',
    subtitle: 'These are insights shared by the content viewers in the comment section, reflecting how the community perceives the content. User comments often reveal what the wider community thinks about the video, including doubts or observations about whether the content is AI-generated.',
  },
  {
    targetId: 'training-community-lens-header',
    title: 'CommunityLens',
    subtitle: 'CommunityLens is an integrated feature on YouTube that gives you an in-depth look at what the community thinks about an AI-generated video. It uses signals like user comments to summarize how viewers perceive and trust the content, point out potential risks, and highlight references or resources shared by the community to clarify the intent of the video.',
  },
  {
    targetId: 'training-community-lens-details',
    title: 'Detailed Breakdown of CommunityLens',
    subtitle: 'CommunityLens analyzes community signals in-depth to help viewers better understand an AI-generated video through its three features:\n1. Community Consensus: A short summary of how the community perceives and trusts the content, based on what the viewers are saying in the comments. This gives viewers a quick sense of whether they find the video reliable, misleading, or somewhere in between.\n2. Potential Risk Patterns: A list of potential risks that viewers have raised about the content, along with their risk levels and how the community typically addresses them. This helps viewers understand what concerns other viewers have noticed and how they suggest dealing with them.\n3. Community References: CommunityLens extracts the relevant and useful links, citations, and resources shared by viewers in the comments to better clarify the intent of the content. These references can help viewers verify claims in the video or learn more about the topic from sources the community trusts.',
  },
  {
    targetId: 'training-c2pa-modal',
    title: 'Content Credentials with a Platform-provided C2PA Design',
    subtitle: <>C2PA (Coalition for Content Provenance and Authenticity) is an open standard created by Adobe, Microsoft, and other industry partners to attach verifiable details to digital content, such as its digital signature, creation timeline, edits made, and the AI model used. Regarding AI-generated content, a well-designed platform-provided C2PA layout can explain these details directly on the video, helping viewers see at a glance who created the content, when and how it was generated, what AI tools were involved, and whether it has been altered since. <a href="https://c2pa.org/" target="_blank" rel="noopener noreferrer" className="font-bold underline hover:text-blue-700">Learn more about C2PA</a>.</>,
  },
];

const TrainingOverlay = ({ currentStep, setCurrentStep, onFinish, variant = 'full' }) => {
  const [highlightRect, setHighlightRect] = useState(null);
  const step = TRAINING_STEPS[currentStep];

  const updateHighlight = () => {
    let el = document.getElementById(step.targetId);
    if (!el) {
      if (step.targetId === 'training-c2pa-modal') {
        el = document.getElementById('training-c2pa-button');
        setTimeout(updateHighlight, 200);
        if (!el) return;
      } else return;
    }

    const mainEl = document.getElementById('main-content');
    if (mainEl) {
      const delay = step.targetId === 'training-community-lens-details' ? 400 : 100;
      setTimeout(() => {
        const mainRect = mainEl.getBoundingClientRect();
        const elRect = el.getBoundingClientRect();
        const relativeTop = elRect.top - mainRect.top + mainEl.scrollTop;
        const offsetPosition = relativeTop - (mainEl.offsetHeight / 2) + (elRect.height / 2);
        mainEl.scrollTo({ top: offsetPosition, behavior: 'smooth' });

        setTimeout(() => {
          const finalRect = el.getBoundingClientRect();
          const pad = 12;
          setHighlightRect({
            top: finalRect.top - pad,
            left: finalRect.left - pad,
            width: finalRect.width + pad * 2,
            height: finalRect.height + pad * 2,
          });
        }, 1200);
      }, delay);
    }
  };

  useEffect(() => {
    updateHighlight();
    window.addEventListener('resize', updateHighlight);
    return () => window.removeEventListener('resize', updateHighlight);
  }, [currentStep, step.targetId]);

  const nextStep = () => {
    if (currentStep < TRAINING_STEPS.length - 1) setCurrentStep(currentStep + 1);
    else onFinish();
  };

  const prevStep = () => {
    if (currentStep > 0) setCurrentStep(currentStep - 1);
  };

  if (variant === 'mask') {
    if (!highlightRect) return null;
    return (
      <div className="absolute inset-0 z-[200] pointer-events-none overflow-hidden rounded-[32px]">
        <svg className="absolute inset-0 w-full h-full" style={{ pointerEvents: 'auto' }}>
          <defs>
            <mask id="training-mask">
              <rect x="0" y="0" width="100%" height="100%" fill="white" />
              <rect
                x={highlightRect.left - document.getElementById('main-content').getBoundingClientRect().left}
                y={highlightRect.top - document.getElementById('main-content').getBoundingClientRect().top}
                width={highlightRect.width}
                height={highlightRect.height}
                rx="12"
                fill="black"
                style={{ transition: 'all 250ms ease-in-out' }}
              />
            </mask>
          </defs>
          <rect x="0" y="0" width="100%" height="100%" fill="rgba(0,0,0,0.7)" mask="url(#training-mask)" />
        </svg>
        <div
          className="absolute rounded-xl transition-all duration-500 ease-in-out"
          style={{
            top: highlightRect.top - document.getElementById('main-content').getBoundingClientRect().top,
            left: highlightRect.left - document.getElementById('main-content').getBoundingClientRect().left,
            width: highlightRect.width,
            height: highlightRect.height,
            boxShadow: '0 0 0 3px rgba(59,130,246,0.8), 0 0 30px 5px rgba(59,130,246,0.25)',
          }}
        />
      </div>
    );
  }

  return (
    <div className="h-[50vh] max-h-[550px] bg-white rounded-[24px] shadow-2xl shadow-blue-500/20 p-5 md:p-6 flex flex-col justify-between border border-blue-400 relative overflow-hidden transition-all duration-500">
      <div className="absolute top-0 left-0 w-full h-1.5 bg-blue-600"></div>
      <div className="flex flex-col flex-1 min-h-0">
        <div className="flex items-center justify-between mb-4 gap-2 flex-shrink-0">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-lg bg-blue-600 flex items-center justify-center text-white">
              <ShieldAlert size={14} fill="currentColor" />
            </div>
            <span className="text-[10px] font-black uppercase tracking-widest text-blue-600">Tutorial</span>
          </div>
          <div className="text-xs font-bold text-slate-400">Step {currentStep + 1} / {TRAINING_STEPS.length}</div>
        </div>

        <div className="flex gap-1 mb-5 flex-shrink-0">
          {TRAINING_STEPS.map((_, i) => (
            <div key={i} className={`h-1 flex-1 rounded-full transition-all duration-500 ${i === currentStep ? 'bg-blue-600' : i < currentStep ? 'bg-blue-200' : 'bg-slate-100'}`} />
          ))}
        </div>

        <div className="flex-1 overflow-y-auto no-scrollbar pb-2 min-h-0">
          <h3 className="text-lg md:text-xl font-black text-slate-900 mb-2 leading-tight">{step.title}</h3>
          <p className="text-sm text-slate-500 leading-relaxed font-medium whitespace-pre-line">{step.subtitle}</p>
        </div>
      </div>

      <div className="flex items-center gap-3 mt-3 flex-shrink-0">
        <button
          onClick={prevStep}
          disabled={currentStep === 0}
          className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-xl font-bold transition-all text-sm ${currentStep === 0 ? 'text-slate-300 cursor-not-allowed' : 'bg-slate-100 text-slate-600 hover:bg-slate-200 active:scale-95'}`}
        >
          <ArrowLeft size={16} strokeWidth={3} />
          <span>Back</span>
        </button>
        <button
          onClick={nextStep}
          className="flex-[2] flex items-center justify-center gap-2 py-2 rounded-xl bg-blue-600 text-white font-black text-sm hover:bg-blue-700 transition-all active:scale-95 shadow-lg shadow-blue-500/20"
        >
          <span>{currentStep === TRAINING_STEPS.length - 1 ? 'Finish Tour' : 'Next'}</span>
          <ArrowRight size={16} strokeWidth={3} />
        </button>
      </div>
    </div>
  );
};

// --- Main Application Component ---

function AppContent() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  if (location.pathname === '/analysisresult') {
    return <AnalysisResultPage />;
  }

  // Parse PROLIFIC_PID from URL and create a Firebase instance if needed
  useEffect(() => {
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

    if (pid) {
      const checkAndCreateUser = async () => {
        try {
          // 1. Create the main user document
          const userRef = doc(db, 'users analytical data', pid);
          const userSnap = await getDoc(userRef);

          if (!userSnap.exists()) {
            await setDoc(userRef, {
              PROLIFIC_PID: pid,
              createdAt: serverTimestamp(),
            });
            console.log("Firebase instance created for user:", pid);
          }

          // 2. Create the video-specific document directly (no 'session' sub-document)
          const videoId = location.pathname.replace(/^\/+/, '');
          if (videoId) {
            const videoRef = doc(db, 'users analytical data', pid, 'videos', videoId);
            const videoSnap = await getDoc(videoRef);

            if (!videoSnap.exists()) {
              await setDoc(videoRef, {
                videoId: videoId,
                accessedAt: serverTimestamp(),
              });
              console.log(`Firebase instance created for video ${videoId} under user:`, pid);
            }
          }
        } catch (error) {
          console.error("Error creating user/video instance:", error);
        }
      };

      checkAndCreateUser();
    }
  }, [location.search]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [videos, setVideos] = useState(INITIAL_VIDEOS);
  // Global Theme State
  const [isDarkMode, setIsDarkMode] = useState(false);

  // --- Survey Mode State (Default OFF)
  const [isSurveyActive, setIsSurveyActive] = useState(false);
  // You can modify this array to show whichever mock videos you want
  // Must match the 'id' fields in VIDEO_DB
  const fixedSurveyQueue = ['S1.1', 'S4.1', 'S5.1', 'S5.2', 'S6.1', 'S7.1', 'S7.2', 'S7.3', 'S7.4'];
  const [surveyQueue, setSurveyQueue] = useState(fixedSurveyQueue);

  // Initialize index directly from the URL to prevent flickering
  const [currentSurveyIndex, setCurrentSurveyIndex] = useState(() => {
    const pathId = window.location.pathname.replace(/^\/+/, '');
    const idx = fixedSurveyQueue.indexOf(pathId);
    return idx !== -1 ? idx : 0;
  });


  const isTrainingMode = location.pathname === '/training';
  const [activeTrainingStep, setActiveTrainingStep] = useState(0);
  const [isTrainingFinished, setIsTrainingFinished] = useState(false);

  // Sync index from URL (skip in training mode)
  useEffect(() => {
    if (isTrainingMode) return;
    const pathId = location.pathname.replace(/^\/+/, '');
    const idx = surveyQueue.indexOf(pathId);
    if (idx !== -1 && idx !== currentSurveyIndex) {
      setCurrentSurveyIndex(idx);
    } else if (!pathId) {
      navigate(`/${surveyQueue[0]}`, { replace: true });
    }
  }, [location.pathname, surveyQueue, isTrainingMode]);

  // Sync URL from index (skip in training mode)
  useEffect(() => {
    if (isTrainingMode) return;
    const currentId = surveyQueue[currentSurveyIndex];
    if (currentId && location.pathname !== `/${currentId}`) {
      navigate(`/${currentId}`);
    }
  }, [currentSurveyIndex, surveyQueue, navigate, isTrainingMode]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setIsSidebarOpen(false);
      } else {
        setIsSidebarOpen(true);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    let filtered = INITIAL_VIDEOS;
    if (selectedCategory !== "All") {
      filtered = INITIAL_VIDEOS;
    }
    if (searchQuery) {
      filtered = filtered.filter(v =>
        v.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        v.channelName.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    setVideos(filtered);
  }, [selectedCategory, searchQuery]);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  // --- Survey Functions (Simplified) ---
  // Note: startSurvey is removed as requested, it defaults to ON.

  const nextSurveyVideo = () => {
    if (currentSurveyIndex < surveyQueue.length - 1) {
      setCurrentSurveyIndex(prev => prev + 1);
    }
  };

  const prevSurveyVideo = () => {
    if (currentSurveyIndex > 0) {
      setCurrentSurveyIndex(prev => prev - 1);
    }
  };

  const exitSurvey = () => {
    // Optional: Reset if you want to allow exiting, though user implied "this is the flow"
    setIsSurveyActive(false);
    setSurveyQueue([]);
    setCurrentSurveyIndex(0);
  };


  const SidebarContent = ({ collapsed, isDarkMode }) => (
    <div className={`h-full overflow-y-auto custom-scrollbar pb-4 ${collapsed ? 'px-1' : 'px-3'}`}>
      <div className={`py-2 border-b ${isDarkMode ? 'border-zinc-800' : 'border-gray-200'}`}>
        <SidebarItem icon={Home} label="Home" isActive={location.pathname === '/'} isCollapsed={collapsed} onClick={() => navigate('/')} isDarkMode={isDarkMode} />
        <SidebarItem icon={MonitorPlay} label="Shorts" isCollapsed={collapsed} isDarkMode={isDarkMode} />
        <SidebarItem icon={Compass} label="Subscriptions" isCollapsed={collapsed} isDarkMode={isDarkMode} />
      </div>
      {!collapsed && (
        <>
          <div className={`py-2 border-b ${isDarkMode ? 'border-zinc-800' : 'border-gray-200'}`}>
            <h3 className={`px-3 py-2 text-base font-medium ${isDarkMode ? 'text-white' : 'text-black'}`}>You</h3>
            <SidebarItem icon={History} label="History" isDarkMode={isDarkMode} />
            <SidebarItem icon={PlaySquare} label="Your videos" isDarkMode={isDarkMode} />
            <SidebarItem icon={Clock} label="Watch later" isDarkMode={isDarkMode} />
            <SidebarItem icon={ThumbsUp} label="Liked videos" isDarkMode={isDarkMode} />
            <SidebarItem icon={ListPlus} label="Playlists" isDarkMode={isDarkMode} />
          </div>
          <div className={`py-2 border-b ${isDarkMode ? 'border-zinc-800' : 'border-gray-200'}`}>
            <h3 className={`px-3 py-2 text-base font-medium ${isDarkMode ? 'text-white' : 'text-black'}`}>Explore</h3>
            <SidebarItem icon={Flame} label="Trending" isDarkMode={isDarkMode} />
            <SidebarItem icon={Music2} label="Music" isDarkMode={isDarkMode} />
            <SidebarItem icon={Gamepad2} label="Gaming" isDarkMode={isDarkMode} />
            <SidebarItem icon={Newspaper} label="News" isDarkMode={isDarkMode} />
            <SidebarItem icon={Trophy} label="Sports" isDarkMode={isDarkMode} />
          </div>
          <div className="py-2">
            <SidebarItem icon={Settings} label="Settings" isDarkMode={isDarkMode} />
            <SidebarItem icon={HelpCircle} label="Help" isDarkMode={isDarkMode} />
            <SidebarItem icon={LogOut} label="Send feedback" isDarkMode={isDarkMode} />
          </div>
        </>
      )}
      {collapsed && (
        <div className="py-2">
          <SidebarItem icon={PlaySquare} label="Library" isCollapsed={true} isDarkMode={isDarkMode} />
        </div>
      )}
    </div>
  );

  if (isTrainingMode) {
    const trainingVideos = INITIAL_VIDEOS.map(v =>
      v.id === 'video13' ? { ...v, _trainingMode: true } : v
    );
    return (
      <div className="flex h-screen bg-white p-2 md:p-4 gap-2 md:gap-4 overflow-hidden font-sans relative">
        {/* Left: Embedded YouTube UI */}
        <div className="flex-[60] relative rounded-[24px] shadow-[0_0_60px_rgba(0,0,0,0.6)] overflow-hidden border border-white/5 bg-white group transform-gpu transition-all duration-250 ease-in-out">
          <div className="absolute inset-0 overflow-y-auto custom-scrollbar" id="main-content">
            <WatchPage
              videos={trainingVideos}
              isDarkMode={false}
              toggleTheme={() => { }}
              currentVideoId="video13"
              activeTrainingStep={activeTrainingStep}
            />
          </div>
          {/* Internal Mask */}
          {!isTrainingFinished && (
            <TrainingOverlay
              variant="mask"
              currentStep={activeTrainingStep}
              setCurrentStep={setActiveTrainingStep}
              onFinish={() => setIsTrainingFinished(true)}
            />
          )}
        </div>

        {/* Right: Training Sidebar */}
        <div className="flex-[40] px-4 md:px-8 xl:px-12 flex flex-col justify-center items-center animate-in slide-in-from-right duration-700 transition-all duration-500 ease-in-out">
          <div className="relative w-full max-w-[480px]">
            {!isTrainingFinished && (
              <TrainingOverlay
                variant="instructions"
                currentStep={activeTrainingStep}
                setCurrentStep={setActiveTrainingStep}
                onFinish={() => setIsTrainingFinished(true)}
              />
            )}
            {/* Design accents */}
            <div className="absolute -z-10 -top-20 -right-20 w-64 h-64 bg-blue-600/10 blur-[100px] rounded-full hidden md:block"></div>
            <div className="absolute -z-10 -bottom-20 -left-20 w-64 h-64 bg-purple-600/10 blur-[100px] rounded-full hidden md:block"></div>
          </div>
        </div>

        {/* Finished Popup Overlay */}
        {isTrainingFinished && (
          <div className="fixed inset-0 z-[300] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
            <div className="bg-white rounded-[24px] p-6 md:p-10 max-w-md w-full shadow-2xl flex flex-col items-center text-center animate-in zoom-in-95 duration-300">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <CheckCircle2 size={32} className="text-green-600" />
              </div>
              <h2 className="text-xl md:text-2xl font-black text-slate-900 mb-4">Tutorial Complete!</h2>
              <p className="text-sm md:text-base text-slate-600 mb-8 font-medium">
                Now that you've completed the tutorial, please click on the "start the survey" button.
              </p>
              <button
                onClick={() => {
                  setIsTrainingFinished(false);
                  setActiveTrainingStep(0);
                }}
                className="w-full py-3 md:py-4 rounded-xl font-bold bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
              >
                Restart the Tutorial
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className={`flex flex-col h-screen overflow-hidden font-sans relative transition-colors duration-200 ${isDarkMode ? 'bg-[#0f0f0f] text-white' : 'bg-white text-black'}`}>
      <header className={`flex items-center justify-between px-4 h-14 fixed w-full top-0 z-50 transition-colors duration-200 ${isDarkMode ? 'bg-[#0f0f0f]' : 'bg-white border-b border-gray-200'}`}>
        <div className="flex items-center gap-4">
          <button
            onClick={toggleSidebar}
            className={`p-2 rounded-full transition-colors active:bg-zinc-700 ${isDarkMode ? 'hover:bg-zinc-800' : 'hover:bg-gray-100'}`}
          >
            <Menu className={isDarkMode ? 'text-white' : 'text-black'} />
          </button>
          <div
            className="flex items-center gap-1 cursor-pointer select-none"
            onClick={() => navigate('/')}
          >
            <div className="w-[93px] h-[20px] flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 93 20" focusable="false" aria-hidden="true" style={{ pointerEvents: 'none', display: 'inherit', width: '100%', height: '100%' }}>
                <g>
                  <path d="M14.4848 20C14.4848 20 23.5695 20 25.8229 19.4C27.0917 19.06 28.0459 18.08 28.3808 16.87C29 14.65 29 9.98 29 9.98C29 9.98 29 5.34 28.3808 3.14C28.0459 1.9 27.0917 0.94 25.8229 0.61C23.5695 0 14.4848 0 14.4848 0C14.4848 0 5.42037 0 3.17711 0.61C1.9286 0.94 0.954148 1.9 0.59888 3.14C0 5.34 0 9.98 0 9.98C0 9.98 0 14.65 0.59888 16.87C0.954148 18.08 1.9286 19.06 3.17711 19.4C5.42037 20 14.4848 20 14.4848 20Z" fill="#FF0033"></path>
                  <path d="M19 10L11.5 5.75V14.25L19 10Z" fill="white"></path>
                </g>
                <g id="youtube-paths_yt9" fill={isDarkMode ? "currentColor" : "black"}>
                  <path d="M37.1384 18.8999V13.4399L40.6084 2.09994H38.0184L36.6984 7.24994C36.3984 8.42994 36.1284 9.65994 35.9284 10.7999H35.7684C35.6584 9.79994 35.3384 8.48994 35.0184 7.22994L33.7384 2.09994H31.1484L34.5684 13.4399V18.8999H37.1384Z"></path>
                  <path d="M44.1003 6.29994C41.0703 6.29994 40.0303 8.04994 40.0303 11.8199V13.6099C40.0303 16.9899 40.6803 19.1099 44.0403 19.1099C47.3503 19.1099 48.0603 17.0899 48.0603 13.6099V11.8199C48.0603 8.44994 47.3803 6.29994 44.1003 6.29994ZM45.3903 14.7199C45.3903 16.3599 45.1003 17.3899 44.0503 17.3899C43.0203 17.3899 42.7303 16.3499 42.7303 14.7199V10.6799C42.7303 9.27994 42.9303 8.02994 44.0503 8.02994C45.2303 8.02994 45.3903 9.34994 45.3903 10.6799V14.7199Z"></path>
                  <path d="M52.2713 19.0899C53.7313 19.0899 54.6413 18.4799 55.3913 17.3799H55.5013L55.6113 18.8999H57.6012V6.53994H54.9613V16.4699C54.6812 16.9599 54.0312 17.3199 53.4212 17.3199C52.6512 17.3199 52.4113 16.7099 52.4113 15.6899V6.53994H49.7812V15.8099C49.7812 17.8199 50.3613 19.0899 52.2713 19.0899Z"></path>
                  <path d="M62.8261 18.8999V4.14994H65.8661V2.09994H57.1761V4.14994H60.2161V18.8999H62.8261Z"></path>
                  <path d="M67.8728 19.0899C69.3328 19.0899 70.2428 18.4799 70.9928 17.3799H71.1028L71.2128 18.8999H73.2028V6.53994H70.5628V16.4699C70.2828 16.9599 69.6328 17.3199 69.0228 17.3199C68.2528 17.3199 68.0128 16.7099 68.0128 15.6899V6.53994H65.3828V15.8099C65.3828 17.8199 65.9628 19.0899 67.8728 19.0899Z"></path>
                  <path d="M80.6744 6.26994C79.3944 6.26994 78.4744 6.82994 77.8644 7.73994H77.7344C77.8144 6.53994 77.8744 5.51994 77.8744 4.70994V1.43994H75.3244L75.3144 12.1799L75.3244 18.8999H77.5444L77.7344 17.6999H77.8044C78.3944 18.5099 79.3044 19.0199 80.5144 19.0199C82.5244 19.0199 83.3844 17.2899 83.3844 13.6099V11.6999C83.3844 8.25994 82.9944 6.26994 80.6744 6.26994ZM80.7644 13.6099C80.7644 15.9099 80.4244 17.2799 79.3544 17.2799C78.8544 17.2799 78.1644 17.0399 77.8544 16.5899V9.23994C78.1244 8.53994 78.7244 8.02994 79.3944 8.02994C80.4744 8.02994 80.7644 9.33994 80.7644 11.7299V13.6099Z"></path>
                  <path d="M92.6517 11.4999C92.6517 8.51994 92.3517 6.30994 88.9217 6.30994C85.6917 6.30994 84.9717 8.45994 84.9717 11.6199V13.7899C84.9717 16.8699 85.6317 19.1099 88.8417 19.1099C91.3817 19.1099 92.6917 17.8399 92.5417 15.3799L90.2917 15.2599C90.2617 16.7799 89.9117 17.3999 88.9017 17.3999C87.6317 17.3999 87.5717 16.1899 87.5717 14.3899V13.5499H92.6517V11.4999ZM88.8617 7.96994C90.0817 7.96994 90.1717 9.11994 90.1717 11.0699V12.0799H87.5717V11.0699C87.5717 9.13994 87.6517 7.96994 88.8617 7.96994Z"></path>
                </g>
              </svg>
            </div>
          </div>
        </div>

        <div className="hidden sm:flex items-center flex-1 max-w-[720px] ml-10">
          <div className="flex w-full items-center">
            <div className={`flex items-center flex-1 border rounded-l-full ml-8 focus-within:border-blue-500 overflow-hidden shadow-inner ${isDarkMode ? 'bg-[#121212] border-zinc-700' : 'bg-gray-100 border-gray-300'}`}>
              <div className={`pl-4 pr-1 hidden md:block ${isDarkMode ? 'text-zinc-400' : 'text-gray-500'}`}>
                <Search size={18} />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search"
                className={`w-full bg-transparent border-none outline-none px-4 py-2 ${isDarkMode ? 'text-white placeholder-zinc-400' : 'text-black placeholder-gray-500'}`}
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className={`p-1 rounded-full mr-2 ${isDarkMode ? 'hover:bg-zinc-800' : 'hover:bg-gray-200'}`}
                >
                  <X size={18} />
                </button>
              )}
            </div>
            <button className={`px-5 py-2 border border-l-0 rounded-r-full transition-colors ${isDarkMode ? 'bg-zinc-800 border-zinc-700 hover:bg-zinc-700' : 'bg-gray-100 border-gray-300 hover:bg-gray-200'}`}>
              <Search size={20} className={isDarkMode ? 'text-white' : 'text-black'} />
            </button>
          </div>
          <button className={`ml-4 p-2.5 rounded-full transition-colors ${isDarkMode ? 'bg-zinc-900 hover:bg-zinc-800' : 'bg-gray-100 hover:bg-gray-200'}`}>
            <Mic size={20} className={isDarkMode ? 'text-white' : 'text-black'} />
          </button>
        </div>

        <div className="flex items-center gap-2 md:gap-4">

          {/* THEME TOGGLE BUTTON (Replaced Video Icon) */}
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-full hidden sm:block transition-colors ${isDarkMode ? 'hover:bg-zinc-800 text-white' : 'hover:bg-gray-100 text-black'}`}
            title="Toggle Theme"
          >
            {isDarkMode ? <Sun size={22} /> : <Moon size={22} />}
          </button>

          <button className={`p-2 rounded-full relative ${isDarkMode ? 'hover:bg-zinc-800' : 'hover:bg-gray-100'}`}>
            <Bell size={22} className={isDarkMode ? 'text-white' : 'text-black'} />
            <span className={`absolute top-1 right-1 bg-red-600 text-white text-[10px] font-bold px-1 rounded-full border-2 ${isDarkMode ? 'border-[#0f0f0f]' : 'border-white'}`}>9+</span>
          </button>
          <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center text-sm font-bold cursor-pointer hover:opacity-90 text-white">
            AA
          </div>
        </div>
      </header>

      {/* --- SURVEY FLOATING BUTTONS (Exit Button Removed) --- */}
      {isSurveyActive && (
        <>
          <div className="fixed bottom-6 left-6 z-[100] animate-in slide-in-from-left duration-300">
            <button
              onClick={prevSurveyVideo}
              disabled={currentSurveyIndex === 0}
              className={`flex items-center gap-2 px-6 py-4 rounded-full shadow-2xl transition-all active:scale-95 border-2 border-white/10 ${currentSurveyIndex === 0 ? 'bg-zinc-800/50 text-zinc-500 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-500 text-white'}`}
            >
              <ArrowLeft size={24} strokeWidth={3} />
              <span className="font-bold text-lg hidden sm:inline">PREVIOUS</span>
            </button>
          </div>

          <div className="fixed bottom-6 right-6 z-[100] flex gap-4 animate-in slide-in-from-right duration-300">
            {/* Exit button removed here */}

            <button
              onClick={nextSurveyVideo}
              disabled={currentSurveyIndex === surveyQueue.length - 1}
              className={`flex items-center gap-2 px-6 py-4 rounded-full shadow-2xl transition-all active:scale-95 border-2 border-white/10 ${currentSurveyIndex === surveyQueue.length - 1 ? 'bg-zinc-800/50 text-zinc-500 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-500 text-white'}`}
            >
              <span className="font-bold text-lg hidden sm:inline">NEXT VIDEO</span>
              <ArrowRight size={24} strokeWidth={3} />
            </button>
          </div>

          {/* Survey Progress Indicator */}
          <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[100] bg-black/80 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 shadow-xl text-xs font-mono text-white">
            SURVEY MODE: {currentSurveyIndex + 1} / {surveyQueue.length}
          </div>
        </>
      )}

      <div className="flex flex-1 pt-14 h-full">
        <aside className={`hidden md:flex flex-col h-full transition-all duration-200 ${isDarkMode ? 'bg-[#0f0f0f]' : 'bg-white'} ${isSidebarOpen ? 'w-60' : 'w-[72px]'}`}>
          <SidebarContent collapsed={!isSidebarOpen} isDarkMode={isDarkMode} />
        </aside>

        <main id="main-content" className={`flex-1 overflow-y-auto relative custom-scrollbar ${isDarkMode ? 'bg-[#0f0f0f]' : 'bg-white'}`}>
          {/* OPTIMIZED: Routes commented out to enforce single-view fixed flow */}
          {/* <Routes>
            <Route
              path="/"
              element={
                <HomePage
                  videos={videos}
                  selectedCategory={selectedCategory}
                  setSelectedCategory={setSelectedCategory}
                  isDarkMode={isDarkMode}
                />
              }
            />
            <Route
              path="/video/:id"
              element={<WatchPage videos={INITIAL_VIDEOS} isDarkMode={isDarkMode} toggleTheme={toggleTheme} />}
            />
          </Routes> 
          */}

          {/* Direct Render — Training Mode or Survey Mode */}
          {(() => {
            return (
              <WatchPage
                videos={INITIAL_VIDEOS}
                isDarkMode={isDarkMode}
                toggleTheme={toggleTheme}
                currentVideoId={surveyQueue[currentSurveyIndex]}
              />
            );
          })()}
        </main>
      </div>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: transparent;
          border-radius: 20px;
        }
        .custom-scrollbar:hover::-webkit-scrollbar-thumb {
          background-color: ${isDarkMode ? '#71717a' : '#d1d5db'};
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}

// --- Root Component Wrapper ---

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}