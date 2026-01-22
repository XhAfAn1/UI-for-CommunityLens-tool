import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useNavigate, useParams, useLocation } from 'react-router-dom';
import {
  Menu, Search, Mic, Bell, Video, Home, Compass,
  PlaySquare, Clock, ThumbsUp, ThumbsDown, Share2,
  MoreVertical, ChevronDown, ChevronUp, MonitorPlay, Gamepad2,
  Music2, Trophy, Flame, Newspaper, X,
  LogOut, Settings, HelpCircle, History, ShieldAlert,
  ScanFace, ExternalLink, ChevronRight,
  Activity, Eye, Mic2, CheckCircle2, Download, Scissors, ListPlus,
  AlertOctagon, Info, Trash2, Maximize2, Minimize2, Sun, Moon,
  ArrowLeft, ArrowRight, PlayCircle, XCircle, ClipboardList
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

const generateDescription = (title, channel) => {
  return `In this video, ${channel} brings you an exclusive look at "${title}". We dive deep into the details, analyzing every aspect to give you the most comprehensive breakdown possible.\n\nTimestamps:\n0:00 - Intro\n2:30 - Key Analysis\n5:45 - The Reveal\n8:20 - Final Thoughts\n\nMake sure to like, comment, and subscribe for more content like this! We upload videos every week covering the latest trends in technology, politics, and entertainment.\n\nFollow us on social media:\nTwitter: @${channel.replace(/\s/g, '')}\nInstagram: @${channel.replace(/\s/g, '')}_official\n\n#${channel.replace(/\s/g, '')} #Trending #VideoAnalysis #2026`;
};

const categories = [
  "All", "Gaming", "Music", "Live", "Mixes", "React Routers",
  "Computer programming", "Podcasts", "Trailers", "News",
  "Recently uploaded", "Watched", "New to you"
];

// --- Video Data Configuration ---
// We map internal IDs (video1) to real YouTube IDs (ytId) for the player/images
const VIDEO_DB = [
  { id: "video1", ytId: "ghLtBXmhDsU", title: "ZELENSKY ISSUES APOLOGY TO TRUMP", channel: "SyntheticVoices" },
  { id: "video2", ytId: "cQ54GDm1eL0", title: "You Won’t Believe What Obama Says In This Video! 😉", channel: "BuzzFeedVideo" },
  { id: "video3", ytId: "_qczkG_AqmU", title: 'Jake Paul "I WON" - Post Fight Press Conference', channel: "Sports Central" },
  { id: "video4", ytId: "wIjc3ceDzr4", title: "Huge News! Social Security 2026 Raise Update", channel: "Benefit Alert Now" },
  { id: "video5", ytId: "Qn4SP5Z2wOY", title: "Google Veo 3 Fake News | AI Video Generation", channel: "AI Trends" },
  { id: "video6", ytId: "sVspeqNnoWM", title: "Kamala Harris Ad PARODY", channel: "Political Satire" },
  { id: "video7", ytId: "FlztGX_y0OI", title: "AI Michael Jackson in 2026 - New Song", channel: "Music Futurism" },
  { id: "video8", ytId: "_-1eC2LK6u0", title: "Get 0.07 BTC ($7,000) Free Bitcoin: Complete Tutorial!", channel: "Crypto King" },
  { id: "video9", ytId: "-Sv9YjU0fRE", title: "Hacker who donated $4 Billions to Palestine!", channel: "Tech & Society" },
  { id: "video10", ytId: "M4CosGoddVA", title: "Elon Musk Launches $1 Million Daily Giveaway", channel: "Crypto News Daily" },
  { id: "video11", ytId: "-UBaW1OIgTo", title: "THE FUTURE OF HUMANITY: A.I Predicts 400 Years", channel: "Future Timeline" },
  { id: "video12", ytId: "DY5vnaCx_KE", title: "A Time Traveler's VLOG | Google VEO 3 Short Film", channel: "Filmmaker Pro" }
];

const INITIAL_VIDEOS = VIDEO_DB.map((vid) => ({
  id: vid.id,
  ytId: vid.ytId,
  title: vid.title,
  thumbnail: `https://img.youtube.com/vi/${vid.ytId}/mqdefault.jpg`,
  channelName: vid.channel,
  channelAvatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${vid.channel}`,
  views: generateViews(),
  uploadedAt: generateRandomTime(),
  duration: "12:45",
  category: "General",
  description: generateDescription(vid.title, vid.channel)
}));

// --- UNIQUE TOOL DATA FOR EVERY VIDEO ---
const NOTE_DATABASE = {
  "video1": {
    title: "ZELENSKY ISSUES APOLOGY TO TRUMP",
    consensus: {
      label: "AI-GENERATED",
      text: "Most commenters clearly recognize the video as AI-generated, calling out telltale visual flaws like changing teeth and repeatedly labeling it as AI. They generally find it funny or refer to it as satire, though some worry about misinformation.",
      previewText: "Most commenters clearly recognize the video as AI-generated, calling out telltale visual flaws..."
    },
    risks: [
      { id: 'r1', icon: 'search', title: "Community signal", content: "Impersonation / deepfake: Multiple users note it is an AI video of Zelensky saying unreal things." },
      { id: 'r2', icon: 'search', title: "Visual anomalies", content: "Facial warping and lighting inconsistencies reported." },
      { id: 'r3', icon: 'trash', title: "Spam / low-effort repetition", content: "High volume of repetitive bot-like comments detected." }
    ],
    viewerResponse: "Viewers typically respond by reporting misleading content, adding clarifying comments, or referencing credible sources to reduce misinformation.",
    safety: { 
      category: "Impersonation", 
      hoverText: "Mimicry without consent", 
      score: 15, 
      ratingCode: "TV-PG", 
      ratingDesc: "Parental guidance suggested." 
    }
  },
  "video2": {
    title: "You Won’t Believe What Obama Says!",
    consensus: {
      label: "CONTEXT-MISSING",
      text: "Users point out this is a known educational deepfake by Jordan Peele. It is not real footage, but a PSA about AI dangers.",
      previewText: "Users point out this is a known educational deepfake by Jordan Peele..."
    },
    risks: [
      { id: 'r1', icon: 'search', title: "Context Required", content: "Staged demonstration, not a real event." }
    ],
    viewerResponse: "Viewers typically add context to explain the educational intent behind the media.",
    safety: { 
      category: "Educational", 
      hoverText: "Mimicry with consent", 
      score: 85, 
      ratingCode: "TV-PG", 
      ratingDesc: "Parental guidance suggested." 
    }
  },
  "video3": {
    title: 'Jake Paul "I WON" - Post Fight',
    consensus: {
      label: "VERIFIED-AUTHENTIC",
      text: "Community consensus confirms this footage matches live broadcast feeds. No signs of manipulation reported.",
      previewText: "Community consensus confirms this footage matches live broadcast feeds..."
    },
    risks: [],
    viewerResponse: "Viewers are discussing the match results rather than the authenticity of the footage.",
    safety: { 
      category: "Sports", 
      hoverText: "Authentic Broadcast", 
      score: 98, 
      ratingCode: "TV-MA", 
      ratingDesc: "For mature audiences." 
    }
  },
  "video4": {
    title: "Huge News! Social Security 2026 Raise",
    consensus: {
      label: "CLICKBAIT",
      text: "Viewers report misleading titles and recycled audio. The visual content does not match the audio track claims.",
      previewText: "Viewers report misleading titles and recycled audio..."
    },
    risks: [
      { id: 'r1', icon: 'search', title: "Misleading Title", content: "Title promises increases not confirmed by government." },
      { id: 'r2', icon: 'search', title: "Audio Splicing", content: "Background noise shifts suggest audio manipulation." }
    ],
    viewerResponse: "Viewers typically respond by linking to official government websites to debunk the claims.",
    safety: { 
      category: "Misinformation", 
      hoverText: "Unverified Financial Claims", 
      score: 45, 
      ratingCode: "TV-G", 
      ratingDesc: "General Audience." 
    }
  },
  "video5": {
    title: "Google Veo 3 Fake News | AI Video",
    consensus: {
      label: "AI-GENERATED",
      text: "This video is explicitly labeled as an AI demo. Viewers are discussing the quality of the generation rather than its truthfulness.",
      previewText: "This video is explicitly labeled as an AI demo..."
    },
    risks: [],
    viewerResponse: "Viewers are engaging in technical discussions about the AI model's capabilities.",
    safety: { 
      category: "Technology", 
      hoverText: "AI Tool Showcase", 
      score: 90, 
      ratingCode: "TV-PG", 
      ratingDesc: "Parental guidance suggested." 
    }
  },
  "video6": {
    title: "Kamala Harris Ad PARODY",
    consensus: {
      label: "SATIRE",
      text: "Content is exaggerated for comedic effect. Viewers recognize this as a parody skit, not a real campaign ad.",
      previewText: "Content is exaggerated for comedic effect. Viewers recognize this as..."
    },
    risks: [
      { id: 'r1', icon: 'search', title: "Parody Signal", content: "Exaggerated features indicate non-literal intent." }
    ],
    viewerResponse: "Viewers typically quote lines from the skit and discuss the humor.",
    safety: { 
      category: "Satire", 
      hoverText: "Political Parody", 
      score: 70, 
      ratingCode: "TV-14", 
      ratingDesc: "Parents strongly cautioned." 
    }
  },
  "video7": {
    title: "AI Michael Jackson in 2026",
    consensus: {
      label: "AI-AUDIO",
      text: "The visuals are static/fan-made, but the vocals are confirmed as an AI model (RVC). Users are debating the ethics.",
      previewText: "The visuals are static/fan-made, but the vocals are confirmed as an AI model..."
    },
    risks: [
      { id: 'r1', icon: 'search', title: "Synthetic Vocals", content: "Audio analysis confirms non-human vocal patterns." }
    ],
    viewerResponse: "Viewers are debating the ethical implications of using a deceased artist's voice.",
    safety: { 
      category: "Synthetic Audio", 
      hoverText: "AI Voice Cloning", 
      score: 60, 
      ratingCode: "TV-PG", 
      ratingDesc: "Parental guidance suggested." 
    }
  },
  "video8": {
    title: "Get 0.07 BTC Free Bitcoin!",
    consensus: {
      label: "SCAM",
      text: "WARNING: High volume of bot comments. Real users are flagging this as a wallet drainer scam.",
      previewText: "WARNING: High volume of bot comments. Real users are flagging this..."
    },
    risks: [
      { id: 'r1', icon: 'trash', title: "Bot Network", content: "95% of comments originate from new accounts." },
      { id: 'r2', icon: 'search', title: "Malicious Link", content: "Description links flag as phishing." }
    ],
    viewerResponse: "Real viewers are posting warnings to ignore the links and report the channel.",
    safety: { 
      category: "Scam", 
      hoverText: "Fraudulent Activity", 
      score: 10, 
      ratingCode: "TV-MA", 
      ratingDesc: "For mature audiences." 
    }
  },
  "video9": {
    title: "Hacker donated $4 Billions!",
    consensus: {
      label: "MISLEADING",
      text: "Footage is real but dates back to 2018. The 'Hacker' story is a fabrication added via text overlay.",
      previewText: "Footage is real but dates back to 2018..."
    },
    risks: [
      { id: 'r1', icon: 'search', title: "False Context", content: "Visuals do not support the textual claims." }
    ],
    viewerResponse: "Viewers are providing links to the original 2018 news story to correct the record.",
    safety: { 
      category: "Misinformation", 
      hoverText: "False Context", 
      score: 40, 
      ratingCode: "TV-PG", 
      ratingDesc: "Parental guidance suggested." 
    }
  },
  "video10": {
    title: "Elon Musk Launches Giveaway",
    consensus: {
      label: "AI-GENERATED",
      text: "Classic deepfake scam. Lip movements do not sync with the audio. Voice is monotone and lacks natural inflection.",
      previewText: "Classic deepfake scam. Lip movements do not sync with the audio..."
    },
    risks: [
      { id: 'r1', icon: 'search', title: "Lip Sync Failure", content: "Visuals desynchronized by >200ms." },
      { id: 'r2', icon: 'trash', title: "Scam Pattern", content: "Matches known 'doubling' scam scripts." }
    ],
    viewerResponse: "Viewers are flagging the video as a scam and warning others not to send crypto.",
    safety: { 
      category: "Scam", 
      hoverText: "Deepfake Scam", 
      score: 12, 
      ratingCode: "TV-14", 
      ratingDesc: "Parents strongly cautioned." 
    }
  },
  "video11": {
    title: "A.I Predicts 400 Years",
    consensus: {
      label: "ARTISTIC-AI",
      text: "Users appreciate the visuals. Explicitly understood as a creative prediction/art piece, not factual footage.",
      previewText: "Users appreciate the visuals. Explicitly understood as a creative prediction..."
    },
    risks: [],
    viewerResponse: "Viewers are complimenting the artistic style and imaginative concepts.",
    safety: { 
      category: "Art", 
      hoverText: "Creative AI Usage", 
      score: 95, 
      ratingCode: "TV-G", 
      ratingDesc: "General Audience." 
    }
  },
  "video12": {
    title: "A Time Traveler's VLOG",
    consensus: {
      label: "AI-GENERATED",
      text: "A creative short film made with Google Veo. Viewers are discussing the plot and visual consistency.",
      previewText: "A creative short film made with Google Veo..."
    },
    risks: [
      { id: 'r1', icon: 'search', title: "Visual Artifacts", content: "Background warping detected." }
    ],
    viewerResponse: "Viewers are treating the content as a fictional story and discussing plot points.",
    safety: { 
      category: "Entertainment", 
      hoverText: "Fictional Narrative", 
      score: 88, 
      ratingCode: "TV-PG", 
      ratingDesc: "Parental guidance suggested." 
    }
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

const VideoCard = ({ video }) => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col gap-3 cursor-pointer group" onClick={() => navigate(`/video/${video.id}`)}>
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
};

const RelatedVideoCard = ({ video }) => {
  const navigate = useNavigate();
  return (
    <div className="flex gap-2 cursor-pointer group" onClick={() => navigate(`/video/${video.id}`)}>
      <div className="relative w-40 flex-shrink-0 aspect-video rounded-lg overflow-hidden bg-zinc-800">
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
};

// --- COMMUNITY LENS TOOL UI (With Theme Toggle) ---
const CommunityLensUI = ({ videoId }) => {
  const [isToolOpen, setIsToolOpen] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(true); // Default to Dark Mode
  const [showFullConsensus, setShowFullConsensus] = useState(false);
  const [expandedRisks, setExpandedRisks] = useState({});
  const [showViewerResponse, setShowViewerResponse] = useState(false);
  const [isHoveringCategory, setIsHoveringCategory] = useState(false);

  // State for expandable main sections
  const [openSections, setOpenSections] = useState({
    risks: false,
    references: false
  });

  const toggleSection = (key) => {
    setOpenSections(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const data = NOTE_DATABASE[videoId];
  if (!data) return null;

  const toggleRisk = (id) => {
    setExpandedRisks(prev => ({ ...prev, [id]: !prev[id] }));
  };

  // --- Dynamic Theme Styles (YouTube Themed) ---
  const theme = {
    // Containers
    // Updated: Tool background is now dark grey (#212121) to contrast with the black (#0f0f0f) page background
    mainContainer: isDarkMode ? 'bg-[#212121] border-[#3f3f3f]' : 'bg-white border-gray-200',
    headerBg: isDarkMode ? 'bg-[#212121] border-b border-[#3f3f3f]' : 'bg-[#f0f0f0] border-b border-gray-300',
    bodyBg: isDarkMode ? 'bg-[#212121]' : 'bg-white',
    
    // Typography
    textMain: isDarkMode ? 'text-[#f1f1f1]' : 'text-[#0f0f0f]',
    textSub: isDarkMode ? 'text-[#aaaaaa]' : 'text-[#606060]',
    textHighlight: isDarkMode ? 'text-[#3ea6ff] hover:text-[#6faeff]' : 'text-[#065fd4] hover:text-[#003e87]', // YouTube Blue for links
    
    // Sections (Consensus / Risks)
    // Updated: Inner cards use black (#0f0f0f) to create depth inside the grey tool
    cardBorder: isDarkMode ? 'border-[#3f3f3f] bg-[#0f0f0f]' : 'border-gray-300 bg-gray-50',
    sectionHeaderBg:'bg-[#a10f18]', // YouTube Red
    
    // Interactive Elements
    riskItemBg: isDarkMode ? 'bg-[#1e1e1e] border-[#3f3f3f] hover:bg-[#2a2a2a]' : 'bg-white border-gray-200 hover:bg-gray-100',
    viewerResponseBg: isDarkMode ? 'bg-[#1e1e1e] border-[#3f3f3f] text-[#f1f1f1]' : 'bg-blue-50/50 border-blue-100 text-gray-700',
    
    // Icons
    iconTrashBg: isDarkMode ? 'bg-[#272727] text-[#aaaaaa]' : 'bg-gray-200 text-gray-600',
    iconSearchBg: isDarkMode ? 'bg-[#263850] text-[#3ea6ff]' : 'bg-blue-100 text-blue-600',
    
    // Age Rating
    ageRatingContainer: isDarkMode ? 'bg-[#0f0f0f] border-[#3f3f3f]' : 'bg-white border-gray-300',
    ageRatingBox: isDarkMode ? 'bg-white text-black' : 'bg-black text-white',
    
    // Footer
    footerBorder: isDarkMode ? 'border-[#3f3f3f]' : 'border-gray-200',
    footerText: isDarkMode ? 'text-[#aaaaaa]' : 'text-gray-500',
    footerBrand: isDarkMode ? 'text-white' : 'text-black'
  };

  return (
    <div className={`mt-6 w-full font-sans shadow-lg rounded-xl overflow-hidden border ${theme.mainContainer} animate-in fade-in slide-in-from-top-4 duration-500 relative z-0`}>
      
      {/* 1. HEADER - Clickable to toggle visibility */}
      <div 
        onClick={() => setIsToolOpen(!isToolOpen)}
        className={`p-3 relative flex items-center justify-between cursor-pointer transition-colors hover:bg-opacity-80 ${theme.headerBg}`}
      >
        
        <div className="flex items-center gap-3">
           <div className="bg-[#FF0000] p-1.5 rounded-lg shadow-sm">
              <ShieldAlert size={18} className="text-white" fill="currentColor" />
           </div>
           <div>
              <h1 className={`text-sm font-bold tracking-tight leading-none ${theme.textMain}`}>CommunityLens</h1>
              <p className={`text-[10px] mt-0.5 font-medium ${theme.textSub}`}>AI Content Analysis</p>
           </div>
        </div>

        {/* BUTTON GROUP (Theme Toggle) */}
        <div className="flex items-center gap-2">
          
          {/* Theme Toggle */}
          <button 
            onClick={(e) => {
              e.stopPropagation(); // Prevent toggling the main tool when switching theme
              setIsDarkMode(!isDarkMode);
            }}
            className={`p-2 rounded-full transition-colors ${isDarkMode ? 'hover:bg-[#3f3f3f] text-[#f1f1f1]' : 'hover:bg-gray-200 text-gray-600'}`}
            title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
      </div>

      {/* 2. BODY */}
      {isToolOpen && (
        <div className={`${theme.bodyBg} p-4`}>
            
            {/* CONSENSUS (Static) */}
            <div className={`rounded-xl overflow-hidden border mb-4 ${theme.cardBorder}`}>
              <div className={`p-2.5 pl-3 flex items-center gap-2 ${theme.sectionHeaderBg}`}>
                <Activity size={16} className="text-white" />
                <h4 className="text-white font-bold text-xs uppercase tracking-wider">Community Consensus</h4>
              </div>
              <div className="p-4">
                <span className={`inline-block text-[12px] px-2 py-1 rounded-sm font-bold mb-3 border ${isDarkMode ? 'bg-[#272727] text-white border-[#3f3f3f]' : 'bg-gray-200 text-black border-gray-300'}`}>
                  {data.consensus.label}
                </span>
                <p className={`text-xs leading-relaxed ${theme.textMain}`}>
                  {showFullConsensus ? data.consensus.text : data.consensus.previewText}
                  {!showFullConsensus && (
                    <button 
                      onClick={() => setShowFullConsensus(true)}
                      className={`font-medium ml-1 text-[10px] uppercase ${theme.textHighlight}`}
                    >
                      Read more
                    </button>
                  )}
                </p>
              </div>
            </div>

            {/* RISKS (Expandable) */}
            <div className={`rounded-xl overflow-hidden border mb-4 ${theme.cardBorder}`}>
              <button 
                onClick={() => toggleSection('risks')}
                className={`w-full p-2.5 pl-3 flex items-center justify-between ${theme.sectionHeaderBg} hover:brightness-110 transition-all`}
              >
                <div className="flex items-center gap-2">
                    <AlertOctagon size={16} className="text-white" />
                    <h4 className="text-white font-bold text-xs uppercase tracking-wider">Risk Patterns</h4>
                </div>
                {openSections.risks ? <ChevronUp size={18} className="text-white" /> : <ChevronDown size={18} className="text-white" />}
              </button>
              
              {openSections.risks && (
                <div className="p-3 flex flex-col gap-2 animate-in slide-in-from-top-2 duration-200">
                    {data.risks.length > 0 ? (
                        data.risks.map((risk) => (
                        <div key={risk.id} className={`border rounded-lg transition-colors ${theme.riskItemBg}`}>
                            <button 
                            onClick={() => toggleRisk(risk.id)}
                            className="w-full flex items-center gap-3 p-2.5 text-left"
                            >
                            <div className={`p-1.5 rounded-full flex-shrink-0 ${risk.icon === 'trash' ? theme.iconTrashBg : theme.iconSearchBg}`}>
                                {risk.icon === 'trash' 
                                    ? <Trash2 size={14} />
                                    : <Search size={14} />
                                }
                            </div>
                            <span className={`flex-1 font-medium text-xs ${theme.textMain}`}>{risk.title}</span>
                            {expandedRisks[risk.id] 
                                ? <ChevronUp size={16} className={theme.textSub} />
                                : <ChevronDown size={16} className={theme.textSub} />
                            }
                            </button>
                            {expandedRisks[risk.id] && (
                            <div className={`px-3 pb-3 pt-0 pl-11 text-xs ${theme.textSub}`}>
                                {risk.content}
                            </div>
                            )}
                        </div>
                        ))
                    ) : (
                        <p className={`text-xs p-2 italic ${theme.textSub}`}>No significant risks detected by the community.</p>
                    )}

                    {/* VIEWER RESPONSE SECTION */}
                    {data.risks.length > 0 && (
                        <div className={`mt-2 pt-2 border-t ${isDarkMode ? 'border-[#3f3f3f]' : 'border-gray-200'}`}>
                        <button 
                            onClick={() => setShowViewerResponse(!showViewerResponse)}
                            className={`flex items-center gap-1.5 text-[11px] font-medium transition-colors w-full p-1 ${theme.textHighlight}`}
                        >
                            <div className="flex items-center gap-1">
                                {showViewerResponse ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                                {showViewerResponse ? 'Hide community response' : 'Show community response'}
                            </div>
                        </button>
                        
                        {showViewerResponse && data.viewerResponse && (
                            <div className={`mt-2 p-3 border rounded-lg text-xs leading-relaxed animate-in fade-in ${theme.viewerResponseBg}`}>
                            <div className="flex gap-3">
                                <div className="w-0.5 self-stretch bg-[#3ea6ff] rounded-full flex-shrink-0"></div>
                                <div>{data.viewerResponse}</div>
                            </div>
                            </div>
                        )}
                        </div>
                    )}
                </div>
              )}
            </div>

            {/* REFERENCES (Expandable) */}
            <div className={`rounded-xl overflow-hidden border mb-6 ${theme.cardBorder}`}>
              <button 
                onClick={() => toggleSection('references')}
                className={`w-full p-2.5 pl-3 flex items-center justify-between ${theme.sectionHeaderBg} hover:brightness-110 transition-all`}
              >
                <div className="flex items-center gap-2">
                    <ExternalLink size={16} className="text-white" />
                    <h4 className="text-white font-bold text-xs uppercase tracking-wider">References</h4>
                </div>
                {openSections.references ? <ChevronUp size={18} className="text-white" /> : <ChevronDown size={18} className="text-white" />}
              </button>
              
              {openSections.references && (
                <div className="p-4 animate-in slide-in-from-top-2 duration-200">
                    <p className={`text-xs ${theme.textSub}`}>No community citations available yet.</p>
                </div>
              )}
            </div>

            <div className={`h-px w-full mb-6 ${isDarkMode ? 'bg-[#3f3f3f]' : 'bg-gray-200'}`}></div>

            {/* CONTENT CATEGORY (With Hover Tooltip) */}
            <div className="flex flex-col gap-4 mb-6">
              <div className="flex items-center gap-3">
                
                <span className={`text-xs font-bold leading-tight whitespace-nowrap uppercase tracking-wide ${theme.textSub}`}>
                  Content<br/>Category
                </span>
                
                <div className="relative flex-shrink-0">
                  <div 
                    onMouseEnter={() => setIsHoveringCategory(true)}
                    onMouseLeave={() => setIsHoveringCategory(false)}
                    className={`border cursor-help text-[10px] pl-3 pr-2 py-1.5 rounded-full font-bold flex items-center gap-2 shadow-sm transition-transform hover:scale-105 ${isDarkMode ? 'bg-[#272727] border-[#3f3f3f] text-[#f1f1f1]' : 'bg-gray-100 border-gray-300 text-black'}`}
                  >
                    {data.safety.category}
                    <div className={`rounded-full w-4 h-4 flex items-center justify-center ${isDarkMode ? 'bg-[#3f3f3f]' : 'bg-gray-300'}`}>
                      <Info size={10} className={theme.textMain} strokeWidth={2.5} />
                    </div>
                  </div>

                  {isHoveringCategory && (
                    <div className={`absolute bottom-full mb-2 left-1/2 -translate-x-1/2 w-max max-w-[200px] text-[11px] px-3 py-2 rounded-lg shadow-xl z-50 text-center animate-in fade-in zoom-in duration-200 border ${isDarkMode ? 'bg-[#212121] border-[#3f3f3f] text-[#f1f1f1]' : 'bg-white border-gray-300 text-black'}`}>
                      {data.safety.hoverText}
                      <div className={`absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent ${isDarkMode ? 'border-t-[#212121]' : 'border-t-white'}`}></div>
                    </div>
                  )}
                </div>

                {/* Safety Meter */}
                <div className="flex-1 flex flex-col items-center relative ml-2">
                    <div 
                      className={`absolute -top-1.5 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] transition-all duration-500 ${isDarkMode ? 'border-t-[#f1f1f1]' : 'border-t-black'}`}
                      style={{ left: `${data.safety.score}%`, transform: 'translateX(-50%)' }}
                    ></div>
                    <div className="h-2 w-full rounded-full bg-gradient-to-r from-[#FF0000] via-[#FFCC00] to-[#2BA640] opacity-90"></div>
                    <div className="flex justify-between w-full text-[9px] font-bold mt-1 tracking-wider uppercase opacity-70">
                      <span className="text-[#FF0000]">Unsafe</span>
                      <span className="text-[#2BA640]">Safe</span>
                    </div>
                </div>
              </div>
            </div>

            {/* AGE RATING */}
            <div className="mb-4">
               <div className={`border rounded-xl p-3 flex items-center gap-4 ${theme.ageRatingContainer}`}>
                  <div className={`p-1 rounded w-10 h-8 flex flex-col items-center justify-center flex-shrink-0 ${theme.ageRatingBox}`}>
                    <span className="text-[6px] font-bold leading-none uppercase">TV</span>
                    <span className="text-sm font-black leading-none -mt-0.5">{data.safety.ratingCode.split('-')[1]}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className={`text-[9px] font-bold uppercase tracking-wider mb-0.5 ${theme.textSub}`}>Rated for</span>
                    <p className={`text-[11px] leading-tight font-medium ${theme.textMain}`}>
                       {data.safety.ratingDesc}
                    </p>
                  </div>
               </div>
            </div>

            {/* FOOTER */}
            <div className={`text-center pt-4 border-t ${theme.footerBorder}`}>
              <p className={`text-[10px] font-medium uppercase tracking-widest ${theme.footerText}`}>
                Powered by <span className={`font-bold ${theme.footerBrand}`}>ChatGPT</span>
              </p>
            </div>

        </div>
      )}
    </div>
  );
};

// --- Page Components ---

const WatchPage = ({ videos }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [showMore, setShowMore] = useState(false);
  
  // Find video by internal ID (video1, video2...)
  const currentVideo = videos.find(v => v.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
    setShowMore(false);
  }, [id]);

  if (!currentVideo) return <div className="p-10 text-white">Video not found. Try /video/video1</div>;

  return (
    <div className="flex flex-col lg:flex-row max-w-[1700px] mx-auto p-4 lg:p-6 gap-6 animate-in fade-in duration-500">
      <div className="flex-1 min-w-0">
        <div className="w-full aspect-video bg-black rounded-xl overflow-hidden shadow-lg relative z-20">
          {/* We use ytId for the embed, even though route is video1 */}
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${currentVideo.ytId}`}
            title={currentVideo.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        </div>

        <div className="mt-4">
          <h1 className="text-xl font-bold line-clamp-2">{currentVideo.title}</h1>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-3 gap-4">
            <div className="flex items-center gap-3">
              <img
                src={currentVideo.channelAvatar}
                className="w-10 h-10 rounded-full bg-zinc-700"
                alt={currentVideo.channelName}
              />
              <div>
                <h3 className="font-bold text-base">{currentVideo.channelName}</h3>
                <p className="text-xs text-zinc-400">1.45M subscribers</p>
              </div>
              <button className="ml-2 bg-white text-black px-4 py-2 rounded-full font-medium text-sm hover:bg-zinc-200 transition-colors">
                Subscribe
              </button>
            </div>

            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
              <div className="flex items-center bg-zinc-800 rounded-full">
                <button className="flex items-center gap-2 px-4 py-2 hover:bg-zinc-700 rounded-l-full border-r border-zinc-700 transition-colors">
                  <ThumbsUp size={18} />
                  <span className="text-sm font-medium">24K</span>
                </button>
                <button className="px-4 py-2 hover:bg-zinc-700 rounded-r-full transition-colors border-r border-zinc-700">
                  <ThumbsDown size={18} />
                </button>
              </div>

              <button className="flex items-center gap-2 px-4 py-2 bg-zinc-800 hover:bg-zinc-700 rounded-full transition-colors whitespace-nowrap">
                <Share2 size={18} />
                <span className="text-sm font-medium">Share</span>
              </button>
              
               <button className="flex items-center gap-2 px-4 py-2 bg-zinc-800 hover:bg-zinc-700 rounded-full transition-colors whitespace-nowrap">
                <Download size={18} />
                <span className="text-sm font-medium">Download</span>
              </button>

               <button className="flex items-center gap-2 px-4 py-2 bg-zinc-800 hover:bg-zinc-700 rounded-full transition-colors whitespace-nowrap hidden xl:flex">
                <Scissors size={18} />
                <span className="text-sm font-medium">Clip</span>
              </button>

              <button className="flex items-center gap-2 px-4 py-2 bg-zinc-800 hover:bg-zinc-700 rounded-full transition-colors hidden sm:flex">
                <MoreVertical size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Expandable Description Box */}
        <div className={`mt-4 bg-zinc-800/50 rounded-xl p-3 text-sm transition-all duration-200 ${showMore ? '' : 'cursor-pointer hover:bg-zinc-800'}`} onClick={() => !showMore && setShowMore(true)}>
          <div className="font-bold mb-2">
            {currentVideo.views} views • {currentVideo.uploadedAt} • <span className="text-zinc-400">#AI #Tech #Future</span>
          </div>
          
          <div className={`relative ${showMore ? '' : 'max-h-20 overflow-hidden'}`}>
             <p className="whitespace-pre-line text-white/90 leading-relaxed">
              {currentVideo.description}
            </p>
          </div>
          
          <button 
            className="mt-2 font-bold text-white/70 hover:text-white block"
            onClick={(e) => {
              e.stopPropagation();
              setShowMore(!showMore);
            }}
          >
            {showMore ? 'Show less' : '...more'}
          </button>
        </div>

        <CommunityLensUI videoId={currentVideo.id} />

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

      <div className="lg:w-[350px] xl:w-[400px] flex-shrink-0">
        <div className="flex gap-2 mb-4 overflow-x-auto no-scrollbar pb-2">
          <CategoryPill label="All" isSelected={true} onClick={() => { }} />
          <CategoryPill label="From this channel" isSelected={false} onClick={() => { }} />
          <CategoryPill label="Related" isSelected={false} onClick={() => { }} />
        </div>
        <div className="flex flex-col gap-2">
          {videos.filter(v => v.id !== currentVideo.id).map((vid) => (
            <div key={`rel-${vid.id}`} onClick={() => navigate(`/video/${vid.id}`)}>
              <RelatedVideoCard
                video={vid}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const HomePage = ({ videos, selectedCategory, setSelectedCategory }) => {
  return (
    <div className="flex flex-col">
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

      <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-8 pb-10">
        {videos.map((video) => (
          <VideoCard
            key={video.id}
            video={video}
          />
        ))}
      </div>
    </div>
  );
};

// --- Main Application Component ---

function AppContent() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [videos, setVideos] = useState(INITIAL_VIDEOS);
  
  // --- Survey Mode State ---
  const [isSurveyActive, setIsSurveyActive] = useState(false);
  const [surveyQueue, setSurveyQueue] = useState([]);
  const [currentSurveyIndex, setCurrentSurveyIndex] = useState(0);

  const navigate = useNavigate();
  const location = useLocation();

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

  // --- Survey Functions ---
  const startSurvey = () => {
    // Hardcoded list of video IDs
    const ids = ['video4', 'video6', 'video8', 'video12', 'video1', 'video6','video9', 'video12'];
    
    if (ids.length > 0) {
      setSurveyQueue(ids);
      setCurrentSurveyIndex(0);
      setIsSurveyActive(true);
      navigate(`/video/${ids[0]}`);
    } else {
        alert("Configuration Error: No videos found.");
    }
  };

  const nextSurveyVideo = () => {
    if (currentSurveyIndex < surveyQueue.length - 1) {
      const nextIndex = currentSurveyIndex + 1;
      setCurrentSurveyIndex(nextIndex);
      navigate(`/video/${surveyQueue[nextIndex]}`);
    }
  };

  const prevSurveyVideo = () => {
    if (currentSurveyIndex > 0) {
      const prevIndex = currentSurveyIndex - 1;
      setCurrentSurveyIndex(prevIndex);
      navigate(`/video/${surveyQueue[prevIndex]}`);
    }
  };

  const exitSurvey = () => {
    setIsSurveyActive(false);
    setSurveyQueue([]);
    setCurrentSurveyIndex(0);
    navigate('/');
  };


  const SidebarContent = ({ collapsed }) => (
    <div className={`h-full overflow-y-auto custom-scrollbar pb-4 ${collapsed ? 'px-1' : 'px-3'}`}>
      <div className="py-2 border-b border-zinc-800">
        <SidebarItem icon={Home} label="Home" isActive={location.pathname === '/'} isCollapsed={collapsed} onClick={() => navigate('/')} />
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
            <SidebarItem icon={ListPlus} label="Playlists" />
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
    <div className="flex flex-col h-screen bg-[#0f0f0f] text-white overflow-hidden font-sans relative">
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
            onClick={() => navigate('/')}
          >
            <div className="w-[93px] h-[20px] flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 93 20" focusable="false" aria-hidden="true" style={{ pointerEvents: 'none', display: 'inherit', width: '100%', height: '100%' }}>
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

        <div className="flex items-center gap-2 md:gap-4">
          <button 
             onClick={startSurvey}
             className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-3 py-1.5 rounded-full text-sm font-bold transition-all"
          >
            <ClipboardList size={16} />
            Start Survey
          </button>
          
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

      {/* --- SURVEY FLOATING BUTTONS --- */}
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
                 <button 
                    onClick={exitSurvey}
                    className="flex items-center gap-2 px-4 py-4 rounded-full bg-zinc-800 hover:bg-zinc-700 text-white shadow-2xl transition-all active:scale-95 border-2 border-white/10"
                    title="Exit Survey"
                >
                    <XCircle size={24} />
                </button>

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
            <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[100] bg-black/80 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 shadow-xl text-xs font-mono">
                SURVEY MODE: {currentSurveyIndex + 1} / {surveyQueue.length}
            </div>
        </>
      )}

      <div className="flex flex-1 pt-14 h-full">
        <aside className={`hidden md:flex flex-col bg-[#0f0f0f] h-full transition-all duration-200 ${isSidebarOpen ? 'w-60' : 'w-[72px]'}`}>
          <SidebarContent collapsed={!isSidebarOpen} />
        </aside>

        <main className="flex-1 overflow-y-auto bg-[#0f0f0f] relative custom-scrollbar">
          <Routes>
            <Route
              path="/"
              element={
                <HomePage
                  videos={videos}
                  selectedCategory={selectedCategory}
                  setSelectedCategory={setSelectedCategory}
                />
              }
            />
            <Route
              path="/video/:id"
              element={<WatchPage videos={INITIAL_VIDEOS} />}
            />
          </Routes>
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

// --- Root Component Wrapper ---

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}