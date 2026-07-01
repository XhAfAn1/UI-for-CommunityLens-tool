import React, { useState, useEffect } from 'react';
import { ChevronDown, ShieldAlert, Activity, ThumbsUp, ThumbsDown, AlertOctagon, ScanFace, ExternalLink, FileText } from 'lucide-react';
import { NOTE_DATABASE, INITIAL_VIDEOS } from '../data/mockData';

const LensSection = ({ title, icon: Icon, children, theme, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className={`rounded-xl overflow-hidden border mb-3 ${theme.cardBorder}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full p-2 pl-3 flex items-center justify-between transition-colors cursor-pointer ${theme.sectionHeaderBg} hover:opacity-90`}
      >
        <div className="flex items-center gap-2">
          <Icon size={16} className={theme.sectionHeaderText} />
          <h4 className={`${theme.sectionHeaderText} font-bold text-xs uppercase tracking-wider text-left`}>{title}</h4>
        </div>
        <div className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
          <ChevronDown size={16} className={theme.sectionHeaderText} />
        </div>
      </button>

      <div className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
        <div className="overflow-hidden">
          {children}
        </div>
      </div>
    </div>
  );
};

// --- COMMUNITY LENS TOOL UI  ---

const CommunityLensUI = ({ videoId, isDarkMode, toggleTheme, initialOpen = false, activeTrainingStep }) => {
  const [isOpen, setIsOpen] = useState(initialOpen);

  useEffect(() => {
    // Step 6 (index 5) is Detailed Breakdown
    if (activeTrainingStep === 5) {
      setIsOpen(true);
    } else if (activeTrainingStep !== undefined && activeTrainingStep < 5) {
      // Keep it closed for earlier steps if in training mode
      setIsOpen(false);
    }
  }, [activeTrainingStep]);

  const data = NOTE_DATABASE[videoId];
  const videoObj = INITIAL_VIDEOS.find(v => v.id === videoId);
  if (!data) return null;

  // --- Dynamic Theme Styles ---
  const theme = {
    mainContainer: isDarkMode ? 'bg-[#212121] border-[#3f3f3f]' : 'bg-white border-gray-200',
    headerBg: isDarkMode ? 'bg-[#212121] border-b border-[#3f3f3f]' : 'bg-[#f0f0f0] border-b border-gray-300',
    bodyBg: isDarkMode ? 'bg-[#212121]' : 'bg-white',
    textMain: isDarkMode ? 'text-[#f1f1f1]' : 'text-[#0f0f0f]',
    textSub: isDarkMode ? 'text-[#aaaaaa]' : 'text-[#606060]',
    textHighlight: isDarkMode ? 'text-red-400 hover:text-red-300' : 'text-[#a10f18] hover:underline',
    cardBorder: isDarkMode ? 'border-[#3f3f3f] bg-[#0f0f0f]' : 'border-gray-300 bg-gray-50',
    sectionHeaderBg: isDarkMode ? 'bg-[#3d1212]' : 'bg-[#ffdddf]',
    sectionHeaderText: isDarkMode ? 'text-red-300' : 'text-[#a10f18]',
    riskItemBg: isDarkMode ? 'bg-[#1e1e1e] border-[#3f3f3f]' : 'bg-white border-gray-200',
    viewerResponseBg: isDarkMode ? 'bg-[#1a1a1a] border-[#3f3f3f]' : 'bg-white border-gray-200',
    viewerResponseAccent: isDarkMode ? 'bg-red-900' : 'bg-[#ffdddf]',
    riskHigh: isDarkMode ? 'bg-red-900/50 text-red-200 border-red-800' : 'bg-red-100 text-red-700 border-red-200',
    riskMid: isDarkMode ? 'bg-orange-900/50 text-orange-200 border-orange-800' : 'bg-orange-100 text-orange-700 border-orange-200',
    riskLow: isDarkMode ? 'bg-zinc-800 text-zinc-300 border-zinc-700' : 'bg-gray-100 text-gray-600 border-gray-200',
    contentClassificationBg: isDarkMode ? 'bg-[#1a1a1a] border-[#3f3f3f]' : 'bg-white border-gray-200',
    ratingUnsafeBg: isDarkMode ? 'bg-red-900/30 text-red-400 border-red-800' : 'bg-red-50 text-red-600 border-red-200',
    ratingSafeBg: isDarkMode ? 'bg-green-900/30 text-green-400 border-green-800' : 'bg-green-50 text-green-700 border-green-200',
    ageRatingContainer: isDarkMode ? 'bg-[#0f0f0f] border-[#3f3f3f]' : 'bg-white border-gray-300',
    ageRatingBox: isDarkMode ? 'bg-white text-black' : 'bg-black text-white',
    footerBorder: isDarkMode ? 'border-[#3f3f3f]' : 'border-gray-200',
    footerText: isDarkMode ? 'text-[#aaaaaa]' : 'text-gray-500',
    footerBrand: isDarkMode ? 'text-white' : 'text-black'
  };

  const getRiskLevelStyle = (level) => {
    if (level === 'High') return theme.riskHigh;
    if (level === 'Mid') return theme.riskMid;
    return theme.riskLow;
  };

  return (
    <div className={`mt-4 w-full font-sans rounded-xl overflow-hidden border ${theme.mainContainer} animate-in fade-in slide-in-from-top-4 duration-500 relative z-0`}>

      {/* 1. HEADER (Clickable to toggle) */}
      <div
        id="training-community-lens-header"
        className={`p-2 relative flex items-center justify-between cursor-pointer ${theme.headerBg}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center gap-2">
          <div className="bg-[#FF0000] p-1.5 rounded-md">
            <ShieldAlert size={18} className="text-white" fill="currentColor" />
          </div>
          <div>
            <h1 className={`text-sm font-bold tracking-tight leading-none ${theme.textMain}`}>CommunityLens</h1>
            <p className={`text-[10px] mt-0.5 font-medium ${theme.textSub}`}>Navigate AI Content via Community Insights</p>
          </div>
        </div>

        <div className="flex items-center gap-1">
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsOpen(!isOpen);
            }}
            className={`p-1.5 rounded-full transition-colors ${isDarkMode ? 'hover:bg-[#3f3f3f] text-[#f1f1f1]' : 'hover:bg-gray-200 text-gray-600'}`}
            title="Toggle details"
          >
            <div className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
              <ChevronDown size={16} />
            </div>
          </button>
        </div>
      </div>

      {/* 2. BODY (Toggleable) */}
      <div id="training-community-lens-details" className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
        <div className={`overflow-hidden ${theme.bodyBg}`}>
          <div className="p-2">

            {/* CONSENSUS */}
            <LensSection
              title="Community Consensus of this video"
              icon={Activity}
              theme={theme}
              defaultOpen={true}
            >
              <div className="p-2">
                <p className={`inline-block text-[12px] px-2 py-1 rounded-sm font-bold mb-2 border ${isDarkMode ? 'bg-[#272727] text-white border-[#3f3f3f]' : 'bg-gray-200 text-black font-bold border-gray-300'}`}>
                  {videoObj?.isaigenarated ? 'AI- GENERATED' : 'NOT AI- GENERATED'}
                </p>


                <p className={`inline-block text-[12px] px-2 py-1 ml-3 rounded-sm font-bold border tracking-wider ${isDarkMode ? 'bg-[#3d1212] text-red-300 border-red-900/50' : 'bg-[#ffdddf] text-[#a10f18] border-[#ffa9ae]'}`}>
                  {data.consensus.label}
                </p>


                <div className="animate-in fade-in slide-in-from-top-1">
                  <p className={`text-xs leading-relaxed mt-1 ${theme.textMain}`}>
                    {data.consensus.text}
                  </p>
                </div>

                <div className={`flex items-center gap-3 pt-2 mt-2 border-t ${isDarkMode ? 'border-[#3f3f3f]' : 'border-gray-200'}`}>
                  <div className={`flex items-center gap-1.5 ${theme.textSub}`}>
                    <ThumbsUp size={14} />
                    <span className="text-[11px] font-medium">{data.consensus.useful || 0} found useful</span>
                  </div>
                  <div className={`flex items-center gap-1.5 ${theme.textSub}`}>
                    <ThumbsDown size={14} />
                    <span className="text-[11px] font-medium">{data.consensus.notUseful || 0} not useful</span>
                  </div>
                </div>
              </div>
            </LensSection>

            {/* RISKS */}

            <LensSection
              title="Risk Patterns"
              icon={AlertOctagon}
              theme={theme}
              defaultOpen={true}
            >
              <div className="p-2 flex flex-col gap-1.5">
                {(() => {
                  if (data.risks.length === 0) {
                    return <p className={`text-xs p-2 italic ${theme.textSub}`}>No significant risks detected by the community.</p>;
                  }
                  const highestRiskLevel = data.risks.some(r => r.riskLevel === 'High') ? 'High' :
                    data.risks.some(r => r.riskLevel === 'Mid') ? 'Mid' : 'Low';
                  return (
                    <div className={`border rounded-lg overflow-hidden p-2.5 ${theme.riskItemBg}`}>
                      <div className="flex items-center flex-wrap gap-2 w-full">
                        <span className={`text-xs font-medium ${theme.textSub}`}>This video contains following risks:</span>

                        {data.risks.map(risk => (
                          <span key={risk.id} className={`px-2 py-1 text-[10px] font-bold rounded-md border ${isDarkMode ? 'bg-zinc-800 border-zinc-700 text-zinc-300' : 'bg-gray-100 border-gray-300 text-gray-700'}`}>
                            {risk.title}
                          </span>
                        ))}

                        <div className="flex items-center gap-1.5 flex-shrink-0 ml-auto">
                          <span className={`text-[10px] font-bold tracking-tight opacity-60 ${theme.textMain}`}>OVERALL RISK:</span>
                          <span className={`text-[10px] py-0.5 px-2 rounded border font-bold uppercase ${getRiskLevelStyle(highestRiskLevel)}`}>
                            {highestRiskLevel}
                          </span>
                        </div>
                      </div>

                      <div className={`text-xs leading-relaxed mt-3 pt-3 border-t ${isDarkMode ? 'border-[#3f3f3f]' : 'border-gray-200'} ${theme.textSub}`}>
                        <p>{data.riskSummary}</p>
                      </div>
                    </div>
                  );
                })()}

                {/* Viewer Response Sub-section */}
                {data.viewerResponse && (
                  <div className={`mt-1.5 pt-1.5 border-t ${isDarkMode ? 'border-[#3f3f3f]' : 'border-gray-200'}`}>
                    <div className={`flex items-center gap-1.5 text-[11px] font-medium w-full p-0.5 mb-1.5 ${theme.sectionHeaderText}`}>
                      how viewers generally address these risks
                    </div>
                    <div className={`p-2 border rounded-lg text-xs leading-relaxed ${theme.viewerResponseBg}`}>
                      <div className="flex gap-2">
                        <div className={`w-1 self-stretch rounded-full flex-shrink-0 ${theme.viewerResponseAccent}`}></div>
                        <div className={theme.textMain}>{data.viewerResponse}</div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </LensSection>

            {/* CONTENT CLASSIFICATION */}
            {/*
        <LensSection
          title="Content Classification"
          icon={ScanFace}
          theme={theme}
          defaultOpen={true}
        >
          <div className="p-2 flex flex-wrap items-center">
            <div className="flex items-baseline gap-2">
              <span className={`text-[10px] font-bold uppercase tracking-wider whitespace-nowrap ${theme.textSub}`}>Category:</span>
              <span className={`text-sm font-medium ${theme.textMain}`}>{data.safety.category}</span>
            </div>

            <div className={`w-px h-3 mx-4 self-center ${isDarkMode ? 'bg-[#3f3f3f]' : 'bg-gray-300'}`}></div>

            <div className="flex items-center gap-2">
              <span className={`text-[10px] font-bold uppercase tracking-wider whitespace-nowrap ${theme.textSub}`}>Safety Rating:</span>
              <span className={`px-2 py-0.5 rounded-md border text-[10px] font-bold uppercase ${data.safety.score < 50 ? theme.ratingUnsafeBg : theme.ratingSafeBg}`}>
                {data.safety.score < 50 ? 'Unsafe' : 'Safe'}
              </span>
            </div>
          </div>
        </LensSection>
        */}

            {/* REFERENCES */}
            <LensSection
              title="Community-provided references and citations"
              icon={ExternalLink}
              theme={theme}
              defaultOpen={true}
            >
              <div className="p-2 flex flex-col gap-1.5">
                {data.references && data.references.length > 0 ? (
                  data.references.map((ref, index) => {
                    const match = ref.match(/(https?:\/\/[^\s)]+)/);
                    const hasUrl = !!match;
                    const href = match ? match[1] : ref;
                    
                    return (
                      <div key={index} className={`flex items-center gap-2 p-1.5 border rounded-lg transition-all duration-200 ${theme.riskItemBg} border-l-2 ${isDarkMode ? 'hover:border-l-red-500 border-l-zinc-700' : 'hover:border-l-[#a10f18] border-l-gray-200'}`}>
                        <div className={`flex-shrink-0 p-1 rounded-md ${isDarkMode ? 'bg-zinc-800' : 'bg-gray-100'}`}>
                          {hasUrl ? (
                            <ExternalLink size={14} className={isDarkMode ? 'text-zinc-400' : 'text-gray-500'} />
                          ) : (
                            <FileText size={14} className={isDarkMode ? 'text-zinc-400' : 'text-gray-500'} />
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          {hasUrl ? (
                            <a href={href} target="_blank" rel="noopener noreferrer" className={`block text-xs leading-relaxed font-medium break-words hover:underline ${theme.textHighlight}`}>
                              {ref}
                            </a>
                          ) : (
                            <p className={`text-xs leading-relaxed ${theme.textMain}`}>{ref}</p>
                          )}
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <p className={`text-xs p-2 italic ${theme.textSub}`}>No community citations available yet.</p>
                )}
              </div>
            </LensSection>

            {/* AGE RATING */}
            {/*
        <div className={`h-px w-full mb-3 ${isDarkMode ? 'bg-[#3f3f3f]' : 'bg-gray-200'}`}></div>
        <div className="mb-3">
          <div className={`border rounded-xl p-2 flex items-center gap-3 ${theme.ageRatingContainer}`}>
            <div className={`p-1 rounded w-9 h-7 flex flex-col items-center justify-center flex-shrink-0 ${theme.ageRatingBox}`}>
              <span className="text-[5px] font-bold leading-none uppercase">TV</span>
              <span className="text-xs font-black leading-none -mt-0.5">{data.safety.ratingCode.split('-')[1]}</span>
            </div>
            <div className="flex flex-col">
              <span className={`text-[9px] font-bold uppercase tracking-wider mb-0.5 ${theme.textSub}`}>This Content is appropriate for:</span>
              <p className={`text-[11px] leading-tight font-medium ${theme.textMain}`}>
                {data.safety.ratingDesc}
              </p>
            </div>
          </div>
        </div>
        */}

            {/* FOOTER */}
            <div className={`text-center pt-2 border-t ${theme.footerBorder}`}>
              <p className={`text-[10px] font-medium uppercase tracking-widest ${theme.footerText}`}>
                Powered by <span className={`font-bold ${theme.footerBrand}`}>ChatGPT</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityLensUI;