import React, { useState, useEffect } from 'react';
import { 
  Menu, Search, Mic, Bell, Video, User, Home, Compass, 
  PlaySquare, Clock, ThumbsUp, ThumbsDown, Share2, 
  MoreVertical, ChevronDown, MonitorPlay, Gamepad2, 
  Music2, Trophy, Flame, Newspaper, X,
  LogOut, Settings, HelpCircle, History, ShieldAlert, 
  ScanFace, Info, AlertTriangle, ExternalLink, ChevronRight, 
  Activity, Eye, Mic2
} from 'lucide-react';

// --- Mock Data Generators ---

const generateRandomTime = () => {
  const times = ['2 hours ago', '5 hours ago', '1 day ago', '3 days ago', '1 week ago', '2 weeks ago', '1 month ago', '1 year ago'];
  return times[Math.floor(Math.random() * times.length)];
};

const generateViews = () => {
  const views = ['12K', '45K', '110K', '1.2M', '5.4M', '8.9M', '230K', '15K'];
  return views[Math.floor(Math.random() * views.length)];
};

const categories = [
  "All", "Gaming", "Music", "Live", "Mixes", "React Routers", 
  "Computer programming", "Podcasts", "Trailers", "News", 
  "Recently uploaded", "Watched", "New to you"
];

// --- Video Data ---
const VIDEO_IDS = [
  { id: "ghLtBXmhDsU", title: "ZELENSKY ISSUES APOLOGY TO TRUMP", channel: "SyntheticVoices" },
  { id: "cQ54GDm1eL0", title: "You Won’t Believe What Obama Says In This Video! 😉", channel: "BuzzFeedVideo" },
  { id: "_qczkG_AqmU", title: 'Jake Paul "I WON" - Post Fight Press Conference - Jake Paul vs Anthony Joshua', channel: "SyntheticVoices" },
  { id: "wIjc3ceDzr4", title: "Huge News! Social Security September 2025 Raise - See If You Qualify For New Payment", channel: "Benefit Alert Now" },
  { id: "Qn4SP5Z2wOY", title: "Google Veo 3 Fake News | AI Video", channel: "AI Trends" },
  { id: "sVspeqNnoWM", title: "Kamala Harris Ad PARODY", channel: "Political Satire" },
  { id: "FlztGX_y0OI", title: "AI Michael Jackson in 2025", channel: "Music Futurism" },
  { id: "_-1eC2LK6u0", title: "Get 0.07 BTC ($7,000) Free Bitcoin: Complete Claiming Tutorial 2025!", channel: "Crypto King" },
  { id: "-Sv9YjU0fRE", title: "Hacker who donated $4 Billions to Palestine & Africa!", channel: "Tech & Society" },
  { id: "M4CosGoddVA", title: "Elon Musk Launches $1 Million Daily Giveaway for Trump-Supporting Petition Signers #crypto #bitcoin", channel: "Crypto News Daily" },
  { id: "-UBaW1OIgTo", title: "THE FUTURE OF HUMANITY: A.I Predicts 400 Years In 3 Minutes (4K)", channel: "Future Timeline" },
  { id: "DY5vnaCx_KE", title: "A Time Traveler's VLOG | Google VEO 3 AI Short Film + Assets Available", channel: "Filmmaker Pro" }
];

const INITIAL_VIDEOS = VIDEO_IDS.map((vid) => ({
  id: vid.id,
  title: vid.title,
  thumbnail: `https://img.youtube.com/vi/${vid.id}/mqdefault.jpg`,
  channelName: vid.channel,
  channelAvatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${vid.channel}`,
  views: generateViews(),
  uploadedAt: generateRandomTime(),
  duration: "Video",
  category: "General"
}));

// --- Community Notes Data ---
const COMMUNITY_NOTES_DATA = {
  "ghLtBXmhDsU": {
    type: "manipulated",
    confidence: 99.8,
    title: "Manipulated Media",
    summary: "Deepfake Detected: The audio and visual content in this video has been synthetically generated. Analysis confirms the voice does not match the subject's natural biometric voice print.",
    breakdown: {
      audioScore: 99.9,
      videoScore: 98.5,
      timeline: [
        { start: 0, end: 12, status: 'safe' },
        { start: 12, end: 88, status: 'fake' },
        { start: 88, end: 100, status: 'safe' },
      ]
    },
    details: [
      { label: "Audio Integrity", value: "Synthetic (AI Generated Voice)", status: "critical" },
      { label: "Lip Synchronization", value: "Desynchronized > 120ms", status: "critical" },
      { label: "Facial Landmarks", value: "Inconsistent micro-expressions", status: "warning" },
      { label: "Background Noise", value: "Artificial silence floor detected", status: "warning" }
    ],
    sources: ["Deepware Scanner", "Intel FakeCatcher", "Reuters Fact Check"]
  },
  "cQ54GDm1eL0": {
    type: "context",
    confidence: 95.0,
    title: "Context Required",
    summary: "This video is a demonstrated deepfake created by BuzzFeed and Jordan Peele to educate the public about AI dangers. It is not real footage of Barack Obama.",
    breakdown: {
        audioScore: 92.0,
        videoScore: 96.0,
        timeline: [{ start: 0, end: 100, status: 'fake' }]
    },
    details: [
       { label: "Creator Statement", value: "Explicitly labeled as a PSA/Deepfake by creators.", status: "info" }
    ]
  },
  "_qczkG_AqmU": {
    type: "manipulated",
    confidence: 88.5,
    title: "Likely Manipulated",
    summary: "Audio analysis suggests the voice has been cloned or altered. The visuals may be repurposed from a different event.",
    breakdown: {
        audioScore: 88.5,
        videoScore: 12.0,
        timeline: [{ start: 0, end: 100, status: 'fake' }]
    },
    details: [
       { label: "Audio Spectrum", value: "Inconsistencies in background noise floor.", status: "warning" }
    ]
  }
};

// --- Sub-components ---

const SidebarItem = ({ icon: Icon, label, isActive, isCollapsed, onClick }) => (
  <div 
    onClick={onClick}
    className={`flex items-center p-3 rounded-lg cursor-pointer mb-1 hover:bg-zinc-800 transition-colors ${isActive ? 'bg-zinc-800 font-medium' : ''} ${isCollapsed ? 'flex-col justify-center gap-1 p-2' : 'gap-5'}`}
  >
    <Icon size={isCollapsed ? 24 : 22} className={isActive ? 'text-white fill-current' : 'text-white'} />
    <span className={`text-sm ${isCollapsed ? 'text-[10px]' : 'truncate flex-1'}`}>{label}</span>
  </div>
);

const CategoryPill = ({ label, isSelected, onClick }) => (
  <button
    onClick={() => onClick(label)}
    className={`px-3 py-1.5 rounded-lg text-sm font-medium whitespace-nowrap transition-colors
      ${isSelected 
        ? 'bg-white text-black' 
        : 'bg-zinc-800 text-white hover:bg-zinc-700'
      }`}
  >
    {label}
  </button>
);

const VideoCard = ({ video, onClick }) => (
  <div className="flex flex-col gap-3 cursor-pointer group" onClick={() => onClick(video)}>
    <div className="relative aspect-video rounded-xl overflow-hidden bg-zinc-800">
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
        className="w-9 h-9 rounded-full mt-1 bg-zinc-700 object-cover"
      />
      <div className="flex flex-col">
        <h3 className="text-white font-semibold leading-tight line-clamp-2 text-sm md:text-base">
          {video.title}
        </h3>
        <div className="text-zinc-400 text-xs md:text-sm mt-1">
          <p className="hover:text-white transition-colors">{video.channelName}</p>
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

const RelatedVideoCard = ({ video, onClick }) => (
  <div className="flex gap-2 cursor-pointer group" onClick={() => onClick(video)}>
    <div className="relative w-40 flex-shrink-0 aspect-video rounded-lg overflow-hidden bg-zinc-800">
      <img 
        src={video.thumbnail} 
        alt={video.title}
        className="w-full h-full object-cover"
      />
    </div>
    <div className="flex flex-col gap-1 pr-2">
      <h4 className="text-sm text-white font-medium line-clamp-2 leading-tight group-hover:underline">
        {video.title}
      </h4>
      <div className="text-xs text-zinc-400">
        <p>{video.channelName}</p>
        <p>{video.views} views • {video.uploadedAt}</p>
      </div>
    </div>
  </div>
);

// --- New Community Note Component ---
const CommunityNote = ({ videoId }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const noteData = COMMUNITY_NOTES_DATA[videoId];

  if (!noteData) return null;

  const isCritical = noteData.type === 'manipulated';
  const badgeColor = isCritical ? 'text-red-400 bg-red-500/10 border-red-500/20' : 'text-blue-400 bg-blue-500/10 border-blue-500/20';
  const iconBg = isCritical ? 'bg-red-500/20' : 'bg-blue-500/20';

  return (
    <div className="mt-4 bg-[#1f2937] border border-zinc-700 rounded-xl overflow-hidden animate-in fade-in slide-in-from-top-2 duration-500">
      {/* Header */}
      <div 
        className="bg-[#111827] px-4 py-3 border-b border-zinc-700 flex items-center justify-between cursor-pointer hover:bg-[#1f2937] transition-colors"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center gap-2">
          <div className={`w-6 h-6 rounded-full ${iconBg} flex items-center justify-center`}>
            {isCritical ? <ScanFace className={isCritical ? "text-red-400" : "text-blue-400"} size={14} /> : <ShieldAlert className="text-blue-400" size={14} />}
          </div>
          <span className="font-semibold text-sm text-zinc-200">Community Note</span>
        </div>
        <div className="flex items-center gap-3">
           <span className={`text-[11px] font-medium uppercase tracking-wide px-2 py-0.5 rounded-full border ${badgeColor}`}>
              {noteData.title}
           </span>
           <div className="text-zinc-400">
             {isExpanded ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
           </div>
        </div>
      </div>

      {/* Body */}
      <div className="p-4">
        <div className="flex flex-col sm:flex-row gap-4">
          {/* Probability Meter (Rating Map) */}
          <div className={`${isExpanded ? 'flex-1 sm:max-w-[200px]' : 'w-full'} shrink-0 transition-all duration-300`}>
            <div className="flex justify-between text-[11px] text-zinc-400 mb-1.5 font-medium">
               <span>Probability</span>
               <span className={isCritical ? "text-red-400" : "text-blue-400"}>{noteData.confidence}%</span>
            </div>
            <div className="h-2 w-full bg-zinc-700 rounded-full overflow-hidden">
              <div 
                className={`h-full w-full rounded-full shadow-[0_0_10px_rgba(0,0,0,0.3)] transition-all duration-1000 ${isCritical ? 'bg-gradient-to-r from-orange-500 to-red-600' : 'bg-gradient-to-r from-blue-400 to-blue-600'}`}
                style={{ width: `${noteData.confidence}%` }}
              ></div>
            </div>
            
            {isExpanded && noteData.breakdown && (
              <div className="mt-4 animate-in fade-in slide-in-from-left-2 duration-500">
                <div className="text-[10px] uppercase font-bold text-zinc-500 mb-2 tracking-wider">Modality Breakdown</div>
                
                {/* Audio Score */}
                <div className="mb-3">
                  <div className="flex justify-between text-[10px] text-zinc-400 mb-1">
                    <span className="flex items-center gap-1"><Mic2 size={10} /> Audio</span>
                    <span className="text-red-300">{noteData.breakdown.audioScore}%</span>
                  </div>
                  <div className="h-1.5 w-full bg-zinc-700 rounded-full overflow-hidden">
                    <div className="h-full bg-red-500 rounded-full" style={{ width: `${noteData.breakdown.audioScore}%` }}></div>
                  </div>
                </div>

                {/* Video Score */}
                <div>
                  <div className="flex justify-between text-[10px] text-zinc-400 mb-1">
                    <span className="flex items-center gap-1"><Eye size={10} /> Visual</span>
                    <span className="text-orange-300">{noteData.breakdown.videoScore}%</span>
                  </div>
                  <div className="h-1.5 w-full bg-zinc-700 rounded-full overflow-hidden">
                    <div className="h-full bg-orange-500 rounded-full" style={{ width: `${noteData.breakdown.videoScore}%` }}></div>
                  </div>
                </div>
              </div>
            )}

            {!isExpanded && (
               <div className="mt-2 text-[10px] text-zinc-500 text-center">
                  AI / Synthetic Confidence
               </div>
            )}
          </div>

          {/* Full Report - Collapsible */}
          {isExpanded && (
            <div className="flex-1 text-sm text-zinc-300 leading-relaxed sm:border-l sm:border-zinc-700 sm:pl-4 animate-in fade-in slide-in-from-top-1 duration-300">
               <p className="mb-3">
                 <strong className="text-zinc-100 block mb-1">Analysis Summary:</strong> 
                 {noteData.summary}
               </p>

               {/* Timeline Visualization */}
               {noteData.breakdown && noteData.breakdown.timeline && (
                 <div className="mb-4 bg-black/30 p-2 rounded-lg border border-white/5">
                    <div className="flex justify-between text-[10px] text-zinc-500 mb-1 uppercase tracking-wider font-bold">
                      <span>Detection Timeline</span>
                      <span className="flex items-center gap-1"><Activity size={10} /> Segments</span>
                    </div>
                    <div className="h-3 w-full bg-zinc-800 rounded flex overflow-hidden">
                      {noteData.breakdown.timeline.map((seg, i) => (
                        <div 
                          key={i} 
                          className={`${seg.status === 'fake' ? 'bg-red-500/80' : 'bg-green-500/20'} h-full border-r border-black/20`}
                          style={{ width: `${seg.end - seg.start}%` }}
                          title={`${seg.status === 'fake' ? 'Manipulated' : 'Safe'}: ${seg.start}% - ${seg.end}%`}
                        ></div>
                      ))}
                    </div>
                    <div className="flex justify-between text-[9px] text-zinc-600 mt-1">
                      <span>0:00</span>
                      <span>End</span>
                    </div>
                 </div>
               )}
               
               {/* Technical Details Grid */}
               <div className="grid gap-2 text-xs text-zinc-400 bg-black/20 p-3 rounded-lg border border-white/5">
                  <span className="block font-medium text-zinc-300 border-b border-white/5 pb-1 mb-1">Technical Findings</span>
                  {noteData.details?.map((detail, idx) => (
                    <div key={idx} className="flex flex-col sm:flex-row sm:justify-between sm:gap-4">
                      <span className="text-zinc-500 shrink-0">• {detail.label}:</span>
                      <span className={`${detail.status === 'critical' ? 'text-red-300' : 'text-zinc-300'} text-right`}>{detail.value}</span>
                    </div>
                  ))}
               </div>

               {/* Footer */}
               <div className="flex items-center justify-between pt-4 mt-2 border-t border-zinc-700/50">
                  <div className="flex items-center gap-4 text-xs font-medium text-zinc-400">
                     <span className="hidden sm:inline">Is this note helpful?</span>
                     <span className="sm:hidden">Helpful?</span>
                     <div className="flex gap-2">
                       <button className="flex items-center gap-1.5 hover:text-white hover:bg-zinc-700 px-2 py-1 rounded-md transition-colors">
                         <ThumbsUp size={14} /> <span className="hidden sm:inline">Yes</span>
                       </button>
                       <button className="flex items-center gap-1.5 hover:text-white hover:bg-zinc-700 px-2 py-1 rounded-md transition-colors">
                         <ThumbsDown size={14} /> <span className="hidden sm:inline">No</span>
                       </button>
                     </div>
                  </div>
                  <div className="flex items-center gap-3">
                    {noteData.sources && (
                       <span className="text-[10px] text-zinc-500 hidden sm:inline">
                         Sources: {noteData.sources.join(", ")}
                       </span>
                    )}
                    <button className="flex items-center gap-1 text-xs text-blue-400 hover:text-blue-300 font-medium transition-colors">
                       Full Report <ExternalLink size={10} />
                    </button>
                  </div>
               </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// --- Main Application Component ---

export default function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [videos, setVideos] = useState(INITIAL_VIDEOS);
  const [currentView, setCurrentView] = useState("home"); 
  const [currentVideo, setCurrentVideo] = useState(null);
  
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

  const handleVideoClick = (video) => {
    setCurrentVideo(video);
    setCurrentView("watch");
    window.scrollTo(0, 0);
  };

  const handleLogoClick = () => {
    setCurrentView("home");
    setCurrentVideo(null);
    setSearchQuery("");
  };

  const SidebarContent = ({ collapsed }) => (
    <div className={`h-full overflow-y-auto custom-scrollbar pb-4 ${collapsed ? 'px-1' : 'px-3'}`}>
      <div className="py-2 border-b border-zinc-800">
        <SidebarItem icon={Home} label="Home" isActive={currentView === 'home'} isCollapsed={collapsed} onClick={handleLogoClick} />
        <SidebarItem icon={MonitorPlay} label="Shorts" isCollapsed={collapsed} />
        <SidebarItem icon={Compass} label="Subscriptions" isCollapsed={collapsed} />
      </div>
      {!collapsed && (
        <>
          <div className="py-2 border-b border-zinc-800">
            <h3 className="px-3 py-2 text-base font-medium">You</h3>
            <SidebarItem icon={History} label="History" />
            <SidebarItem icon={PlaySquare} label="Your videos" />
            <SidebarItem icon={Clock} label="Watch later" />
            <SidebarItem icon={ThumbsUp} label="Liked videos" />
          </div>
          <div className="py-2 border-b border-zinc-800">
            <h3 className="px-3 py-2 text-base font-medium">Explore</h3>
            <SidebarItem icon={Flame} label="Trending" />
            <SidebarItem icon={Music2} label="Music" />
            <SidebarItem icon={Gamepad2} label="Gaming" />
            <SidebarItem icon={Newspaper} label="News" />
            <SidebarItem icon={Trophy} label="Sports" />
          </div>
          <div className="py-2">
            <SidebarItem icon={Settings} label="Settings" />
            <SidebarItem icon={HelpCircle} label="Help" />
            <SidebarItem icon={LogOut} label="Send feedback" />
          </div>
        </>
      )}
      {collapsed && (
        <div className="py-2">
           <SidebarItem icon={PlaySquare} label="Library" isCollapsed={true} />
        </div>
      )}
    </div>
  );

  return (
    <div className="flex flex-col h-screen bg-[#0f0f0f] text-white overflow-hidden font-sans">
      <header className="flex items-center justify-between px-4 h-14 bg-[#0f0f0f] fixed w-full top-0 z-50">
        <div className="flex items-center gap-4">
          <button 
            onClick={toggleSidebar}
            className="p-2 hover:bg-zinc-800 rounded-full transition-colors active:bg-zinc-700"
          >
            <Menu className="text-white" />
          </button>
          <div 
            className="flex items-center gap-1 cursor-pointer select-none"
            onClick={handleLogoClick}
          >
            <div className="w-[93px] h-[20px] flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 93 20" focusable="false" aria-hidden="true" style={{pointerEvents: 'none', display: 'inherit', width: '100%', height: '100%'}}>
                <g>
                  <path d="M14.4848 20C14.4848 20 23.5695 20 25.8229 19.4C27.0917 19.06 28.0459 18.08 28.3808 16.87C29 14.65 29 9.98 29 9.98C29 9.98 29 5.34 28.3808 3.14C28.0459 1.9 27.0917 0.94 25.8229 0.61C23.5695 0 14.4848 0 14.4848 0C14.4848 0 5.42037 0 3.17711 0.61C1.9286 0.94 0.954148 1.9 0.59888 3.14C0 5.34 0 9.98 0 9.98C0 9.98 0 14.65 0.59888 16.87C0.954148 18.08 1.9286 19.06 3.17711 19.4C5.42037 20 14.4848 20 14.4848 20Z" fill="#FF0033"></path>
                  <path d="M19 10L11.5 5.75V14.25L19 10Z" fill="white"></path>
                </g>
                <g id="youtube-paths_yt9" fill="currentColor">
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

        {/* Search Bar */}
        <div className="hidden sm:flex items-center flex-1 max-w-[720px] ml-10">
          <div className="flex w-full items-center">
            <div className="flex items-center flex-1 bg-[#121212] border border-zinc-700 rounded-l-full ml-8 focus-within:border-blue-500 overflow-hidden shadow-inner">
               <div className="pl-4 pr-1 text-zinc-400 hidden md:block">
                  <Search size={18} />
               </div>
              <input 
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search"
                className="w-full bg-transparent border-none outline-none px-4 py-2 text-white placeholder-zinc-400"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery("")}
                  className="p-1 hover:bg-zinc-800 rounded-full mr-2"
                >
                  <X size={18} />
                </button>
              )}
            </div>
            <button className="px-5 py-2 bg-zinc-800 border border-l-0 border-zinc-700 rounded-r-full hover:bg-zinc-700 transition-colors">
              <Search size={20} className="text-white" />
            </button>
          </div>
          <button className="ml-4 p-2.5 bg-zinc-900 hover:bg-zinc-800 rounded-full transition-colors">
            <Mic size={20} />
          </button>
        </div>

        {/* Right Icons */}
        <div className="flex items-center gap-2 md:gap-4">
          <button className="p-2 hover:bg-zinc-800 rounded-full hidden sm:block">
            <Video size={22} />
          </button>
          <button className="p-2 hover:bg-zinc-800 rounded-full relative">
            <Bell size={22} />
            <span className="absolute top-1 right-1 bg-red-600 text-white text-[10px] font-bold px-1 rounded-full border-2 border-[#0f0f0f]">9+</span>
          </button>
          <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center text-sm font-bold cursor-pointer hover:opacity-90">
            R
          </div>
        </div>
      </header>

      {/* --- MAIN LAYOUT --- */}
      <div className="flex flex-1 pt-14 h-full">
        
        {/* Sidebar */}
        <aside className={`hidden md:flex flex-col bg-[#0f0f0f] h-full transition-all duration-200 ${isSidebarOpen ? 'w-60' : 'w-[72px]'}`}>
          <SidebarContent collapsed={!isSidebarOpen} />
        </aside>

        {/* Content Area */}
        <main className="flex-1 overflow-y-auto bg-[#0f0f0f] relative custom-scrollbar">
          
          {currentView === 'home' ? (
            <div className="flex flex-col">
              {/* Categories */}
              <div className="sticky top-0 bg-[#0f0f0f]/95 backdrop-blur-sm z-10 px-4 py-3 flex gap-3 overflow-x-auto no-scrollbar border-b border-zinc-800/50">
                {categories.map((cat) => (
                  <CategoryPill 
                    key={cat} 
                    label={cat} 
                    isSelected={selectedCategory === cat}
                    onClick={setSelectedCategory}
                  />
                ))}
              </div>

              {/* Video Grid */}
              <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-8 pb-10">
                {videos.map((video) => (
                  <VideoCard 
                    key={video.id} 
                    video={video} 
                    onClick={handleVideoClick} 
                  />
                ))}
              </div>
            </div>
          ) : (
            // --- WATCH PAGE ---
            <div className="flex flex-col lg:flex-row max-w-[1700px] mx-auto p-4 lg:p-6 gap-6">
              
              {/* Left Column (Video Player + Comments) */}
              <div className="flex-1 min-w-0">
                {/* VIDEO PLAYER - IFRAME */}
                <div className="w-full aspect-video bg-black rounded-xl overflow-hidden shadow-lg relative z-20">
                  <iframe 
                    width="100%" 
                    height="100%" 
                    src={`https://www.youtube.com/embed/${currentVideo?.id}`} 
                    title={currentVideo?.title} 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                </div>

                {/* Title & Actions */}
                <div className="mt-4">
                  <h1 className="text-xl font-bold line-clamp-2">{currentVideo?.title}</h1>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-3 gap-4">
                    {/* Channel Info */}
                    <div className="flex items-center gap-3">
                      <img 
                        src={currentVideo?.channelAvatar} 
                        className="w-10 h-10 rounded-full bg-zinc-700"
                        alt={currentVideo?.channelName}
                      />
                      <div>
                        <h3 className="font-bold text-base">{currentVideo?.channelName}</h3>
                        <p className="text-xs text-zinc-400">1.45M subscribers</p>
                      </div>
                      <button className="ml-2 bg-white text-black px-4 py-2 rounded-full font-medium text-sm hover:bg-zinc-200 transition-colors">
                        Subscribe
                      </button>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
                      <div className="flex items-center bg-zinc-800 rounded-full">
                        <button className="flex items-center gap-2 px-4 py-2 hover:bg-zinc-700 rounded-l-full border-r border-zinc-700 transition-colors">
                          <ThumbsUp size={18} />
                          <span className="text-sm font-medium">24K</span>
                        </button>
                        <button className="px-4 py-2 hover:bg-zinc-700 rounded-r-full transition-colors">
                          <ThumbsDown size={18} />
                        </button>
                      </div>
                      
                      <button className="flex items-center gap-2 px-4 py-2 bg-zinc-800 hover:bg-zinc-700 rounded-full transition-colors">
                        <Share2 size={18} />
                        <span className="text-sm font-medium">Share</span>
                      </button>

                      <button className="flex items-center gap-2 px-4 py-2 bg-zinc-800 hover:bg-zinc-700 rounded-full transition-colors hidden sm:flex">
                        <MoreVertical size={18} />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Description Box */}
                <div className="mt-4 bg-zinc-800/50 rounded-xl p-3 text-sm cursor-pointer hover:bg-zinc-800 transition-colors">
                  <div className="font-bold mb-1">
                    {currentVideo?.views} views • {currentVideo?.uploadedAt}
                  </div>
                  <p className="line-clamp-2 text-white/90">
                    Welcome to the video! In this tutorial we will explore the depths of {currentVideo?.category} and learn how to master the art of digital creation. Don't forget to like and subscribe for more content like this!
                  </p>
                  <button className="mt-1 font-medium text-white/70 hover:text-white">more</button>
                </div>

                {/* --- COMMUNITY NOTE INTEGRATION (Moved Here) --- */}
                <CommunityNote videoId={currentVideo?.id} />

                {/* Comments Section (Mock) */}
                <div className="mt-6 hidden md:block">
                   <div className="flex items-center gap-8 mb-6">
                      <h3 className="text-xl font-bold">482 Comments</h3>
                      <div className="flex items-center gap-2 text-sm font-medium cursor-pointer">
                        <div className="flex flex-col gap-[3px]">
                          <div className="w-5 h-[2px] bg-white"></div>
                          <div className="w-3 h-[2px] bg-white"></div>
                          <div className="w-4 h-[2px] bg-white"></div>
                        </div>
                        Sort by
                      </div>
                   </div>
                   
                   {/* Add Comment */}
                   <div className="flex gap-4 mb-8">
                      <div className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center text-sm font-bold flex-shrink-0">R</div>
                      <div className="flex-1">
                        <input type="text" placeholder="Add a comment..." className="w-full bg-transparent border-b border-zinc-700 focus:border-white outline-none pb-1 text-sm" />
                        <div className="flex justify-end gap-2 mt-2">
                          <button className="px-3 py-1.5 rounded-full hover:bg-zinc-800 text-sm font-medium">Cancel</button>
                          <button className="px-3 py-1.5 rounded-full bg-blue-600/50 text-zinc-400 text-sm font-medium cursor-not-allowed">Comment</button>
                        </div>
                      </div>
                   </div>

                   {/* Fake Comments List */}
                   {[1, 2, 3].map(i => (
                     <div key={i} className="flex gap-4 mb-6">
                        <div className={`w-10 h-10 rounded-full flex-shrink-0 bg-zinc-700 overflow-hidden`}>
                           <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=User${i}`} alt="user" />
                        </div>
                        <div>
                           <div className="flex gap-2 items-center text-xs mb-1">
                              <span className="font-bold">@user-random{i}</span>
                              <span className="text-zinc-400">2 days ago</span>
                           </div>
                           <p className="text-sm">This is exactly what I was looking for! Thanks for the great explanation.</p>
                           <div className="flex items-center gap-4 mt-2">
                              <div className="flex items-center gap-1.5 cursor-pointer">
                                 <ThumbsUp size={14} />
                                 <span className="text-xs text-zinc-400">{12 * i}</span>
                              </div>
                              <div className="cursor-pointer">
                                 <ThumbsDown size={14} />
                              </div>
                              <button className="text-xs font-medium hover:bg-zinc-800 px-3 py-1 rounded-full">Reply</button>
                           </div>
                        </div>
                     </div>
                   ))}
                </div>
              </div>

              {/* Right Column (Recommendations) */}
              <div className="lg:w-[350px] xl:w-[400px] flex-shrink-0">
                <div className="flex gap-2 mb-4 overflow-x-auto no-scrollbar pb-2">
                  <CategoryPill label="All" isSelected={true} onClick={() => {}} />
                  <CategoryPill label="From this channel" isSelected={false} onClick={() => {}} />
                  <CategoryPill label="Related" isSelected={false} onClick={() => {}} />
                </div>
                <div className="flex flex-col gap-2">
                  {/* Show other videos in the list as related */}
                  {videos.filter(v => v.id !== currentVideo?.id).map((vid) => (
                    <RelatedVideoCard 
                      key={`rel-${vid.id}`} 
                      video={vid} 
                      onClick={() => {
                        setCurrentVideo(vid);
                        window.scrollTo(0, 0);
                      }} 
                    />
                  ))}
                </div>
              </div>

            </div>
          )}
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
          background-color: #71717a;
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
