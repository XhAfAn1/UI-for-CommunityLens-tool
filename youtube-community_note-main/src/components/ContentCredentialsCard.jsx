import React, { useState } from 'react';
import { ShieldCheck, X, CheckCircle2, Copy, Download, Info, Play, Linkedin, HelpCircle, ChevronDown } from 'lucide-react';
const C2PALogo = () => (
  <img src="/c2pa_logo.png" alt="C2PA" style={{ height: 32, width: 'auto', objectFit: 'contain', filter: 'none' }} />
);

/* ----------  Icons  ---------- */
const CameraIcon = ({ size = 28 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500">
    <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/>
    <circle cx="12" cy="13" r="3"/>
  </svg>
);

const PremierePro = () => (
  <span className="inline-flex items-center justify-center w-5 h-5 rounded text-[9px] font-black text-[#ea77ff]" style={{ background: '#2b0e42' }}>Pr</span>
);
const Photoshop = () => (
  <span className="inline-flex items-center justify-center w-5 h-5 rounded text-[9px] font-black text-[#31a8ff]" style={{ background: '#001e36' }}>Ps</span>
);
const Firefly = () => (
  <span className="inline-flex items-center justify-center w-5 h-5 rounded text-[9px] font-black text-white" style={{ background: '#ff0000' }}>Ff</span>
);
const AdobeIcon = () => (
  <span className="inline-flex items-center justify-center w-5 h-5 rounded text-[9px] font-black text-white" style={{ background: '#ff0000' }}>A</span>
);
const SonyIcon = () => (
  <span className="inline-flex items-center justify-center w-5 h-5 rounded text-[9px] font-black text-white" style={{ background: '#111111' }}>S</span>
);

/* ----------  Data  ---------- */
const NODES = (imgs) => {
  // imgs = { main, asset1, asset2, asset3 } — null means show camera placeholder
  const { main, asset1, asset2, asset3 } = imgs;
  return [
  {
    id: 0,
    title: 'Generated Video',
    sub: 'AI info · Recorded by Adobe Inc.',
    date: 'Apr 9, 2026 · 14:22 UTC',
    tag: 'AI-Edited',
    img: main,
    // middle column
    verified: true,
    duration: '02:14',
    aiOptOut: true,
    contentDetails: {
      aiBox: { heading: 'AI info', text: 'This content was partially AI-edited.' },
      appIcon: <PremierePro />, appName: 'Adobe Premiere Pro',
      recIcon: <AdobeIcon />, recName: 'Adobe Inc. on Apr 9, 2026, 14:22 UTC',
      actions: [
        { icon: <Copy size={14} strokeWidth={1.5} />, title: 'Created', desc: 'Created a new file or content' },
        { icon: <Download size={14} strokeWidth={1.5} />, title: 'Imported', desc: 'Added pre-existing content to this file' },
      ],
    },
    // right column
    contributors: [
      { net: 'LinkedIn',  name: 'Francis Crossman',    Icon: () => <Linkedin size={15} fill="#0a66c2" className="text-[#0a66c2]" strokeWidth={0}/> },
      { net: 'Behance',   name: 'franciscrossman1',    Icon: () => <span className="inline-flex items-center justify-center w-[15px] h-[15px] rounded-[2px] text-white font-bold text-[8px]" style={{background:'#171717'}}>Bē</span> },
    ],
    rightDetails: {
      aiBox: { heading: 'AI-generated', text: 'This content was completely AI-generated.', note: 'Made with Adobe Firefly.' },
      appIcon: <Photoshop />, appName: 'Adobe Photoshop',
      recIcon: <AdobeIcon />, recName: 'Adobe Inc. on Apr 6, 2026, 10:15 UTC',
      actions: [
        { icon: <Copy size={14} strokeWidth={1.5} />, title: 'Created', desc: 'Created a new file or content' },
      ],
    },
    showIngredients: true,
  },
  {
    id: 1,
    title: 'Untitled asset',
    sub: 'Recorded by Adobe Inc.',
    date: 'Apr 6, 2026 · 10:15 UTC',
    img: asset1,
    mainLabel: asset1 ? null : 'The real thing',
    // middle column
    verified: false, aiOptOut: true,
    contentDetails: {
      aiBox: null,
      appIcon: <Photoshop />, appName: 'Adobe Photoshop',
      recIcon: <AdobeIcon />, recName: 'Adobe Inc. on Apr 6, 2026',
      actions: [
        { icon: <Copy size={14} strokeWidth={1.5} />, title: 'Created', desc: 'Created a new file or content' },
        { icon: <Download size={14} strokeWidth={1.5} />, title: 'Imported', desc: 'Added pre-existing content to this file' },
        { icon: <HelpCircle size={14} strokeWidth={1.5} />, title: 'Unknown edits', desc: 'Unknown edits or activity' },
      ],
    },
    // right column
    contributors: [
      { net: 'LinkedIn',  name: 'Francis Crossman',    Icon: () => <Linkedin size={15} fill="#0a66c2" className="text-[#0a66c2]" strokeWidth={0}/> },
      { net: 'Behance',   name: 'franciscrossman1',    Icon: () => <span className="inline-flex items-center justify-center w-[15px] h-[15px] rounded-[2px] text-white font-bold text-[8px]" style={{background:'#171717'}}>Bē</span> },
    ],
    rightDetails: {
      aiBox: { heading: 'AI-generated', text: 'This content was completely AI-generated.', note: 'Made with Adobe Firefly.' },
      appIcon: <Firefly />, appName: 'Adobe Firefly',
      recIcon: <AdobeIcon />, recName: 'Adobe Inc. on Apr 3, 2026',
      actions: [
        { icon: <Copy size={14} strokeWidth={1.5} />, title: 'Created', desc: 'Created a new file or content' },
      ],
    },
    showIngredients: false,
  },
  {
    id: 2,
    title: 'Untitled asset',
    sub: 'AI info · Recorded by Adobe Inc.',
    date: 'Apr 3, 2026 · 09:11 UTC',
    img: asset2,
    // middle column
    verified: false, aiOptOut: false,
    contentDetails: {
      aiBox: { heading: 'AI-generated', text: 'This content was completely AI-generated.' },
      appIcon: <Firefly />, appName: 'Adobe Firefly',
      recIcon: <AdobeIcon />, recName: 'Adobe Inc. on Apr 3, 2026',
      actions: [
        { icon: <Copy size={14} strokeWidth={1.5} />, title: 'Created', desc: 'Created a new file or content' },
      ],
    },
    contributors: null,
    rightDetails: null,
    showIngredients: false,
  },
  {
    id: 3,
    title: 'Untitled asset',
    sub: 'Recorded by Sony Corporation',
    date: 'Mar 28, 2026 · 16:40 UTC',
    img: asset3,
    // middle column
    verified: false, aiOptOut: false,
    contentDetails: {
      aiBox: null,
      appIcon: <SonyIcon />, appName: 'Sony Alpha Camera',
      recIcon: <SonyIcon />, recName: 'Sony Corporation on Mar 28, 2026',
      actions: [
        { icon: <Copy size={14} strokeWidth={1.5} />, title: 'Created', desc: 'Created a new file or content' },
      ],
    },
    contributors: null,
    rightDetails: null,
    showIngredients: false,
  },
  ];
};

/* ----------  Sub-components  ---------- */
const SectionHeader = ({ title, defaultOpen = true }) => {
  const [open, setOpen] = useState(defaultOpen);
  return { open, toggle: () => setOpen(o => !o), Header: (
    <button onClick={() => setOpen(o => !o)} className="flex items-center justify-between w-full mb-1 group">
      <span className="text-[13.5px] font-semibold">{title}</span>
      <ChevronDown size={15} strokeWidth={2} className={`text-gray-400 transition-transform ${open ? '' : '-rotate-90'}`} />
    </button>
  )};
};

const Divider = ({ cls = '' }) => <div className={`border-b border-gray-200 ${cls}`}/>;

/* ----------  Main component  ---------- */
// Try loading from /c2pa-assets/{videoId}{slot}.png, fall back to null (shows camera icon)
const assetUrl = (videoId, slot) => {
  if (!videoId) return null;
  return `/c2pa-assets/${videoId}${slot}.png`;
};

const ContentCredentialsCard = ({ isDarkMode, onClose, thumbnail, videoId }) => {
  const [activeNode, setActiveNode] = useState(0);

  // Build image paths from videoId — if no videoId fall back to YouTube thumb for main
  const id = videoId || 'S7.1';
  const imgs = {
    main:   assetUrl(id, 'main')   || thumbnail || 'https://img.youtube.com/vi/QoPUaOfcXPY/hqdefault.jpg',
    asset1: assetUrl(id, 'asset1'),
    asset2: assetUrl(id, 'asset2'),
    asset3: assetUrl(id, 'asset3'),
  };

  const nodes = NODES(imgs);
  const node = nodes[activeNode];

  const bg = isDarkMode ? '#1a1a1a' : '#ffffff';
  const fg = isDarkMode ? '#f0f0f0' : '#1a1a1a';
  const muted = isDarkMode ? '#888' : '#666';
  const border = isDarkMode ? '#2e2e2e' : '#e5e5e5';
  const infoBox = isDarkMode ? '#0d1b2a' : '#f5f8fc';
  const leftBg = isDarkMode ? '#111' : '#f9f9f9';

  return (
    <div
      id="training-c2pa-overlay"
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50"
      style={{ fontFamily: "'Inter', 'Segoe UI', sans-serif", animation: 'c2paOverlayIn 0.2s ease forwards' }}
      onClick={onClose}
    >
      <style>{`
        .c2pa-scroll::-webkit-scrollbar { width: 4px; }
        .c2pa-scroll::-webkit-scrollbar-track { background: transparent; }
        .c2pa-scroll::-webkit-scrollbar-thumb { background: #ccc; border-radius: 8px; }
        .c2pa-scroll::-webkit-scrollbar-thumb:hover { background: #aaa; }
        .c2pa-node:hover .c2pa-node-inner { border-color: #2563eb; }
        @keyframes c2paOverlayIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes c2paModalIn {
          from { opacity: 0; transform: scale(0.95) translateY(12px); }
          to   { opacity: 1; transform: scale(1) translateY(0); }
        }
      `}</style>

      <div
        id="training-c2pa-modal"
        style={{ background: bg, color: fg, width: '98vw', maxWidth: 1280, height: '94vh', maxHeight: 920, borderRadius: 12, display: 'flex', flexDirection: 'column', overflow: 'hidden', boxShadow: '0 24px 80px rgba(0,0,0,0.3)', animation: 'c2paModalIn 0.25s cubic-bezier(0.16, 1, 0.3, 1) forwards' }}
        onClick={e => e.stopPropagation()}
      >
        {/* ── Header ── */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px 22px', borderBottom: `1px solid ${border}`, flexShrink: 0 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <C2PALogo />
            <span style={{ fontSize: 16, fontWeight: 600 }}>Content Credentials</span>
          </div>
          <button onClick={onClose} style={{ padding: 4, borderRadius: 6, border: 'none', background: 'transparent', cursor: 'pointer', color: muted }}>
            <X size={20} strokeWidth={1.5} />
          </button>
        </div>

        {/* ── 3-column body ── */}
        <div style={{ flex: 1, display: 'flex', overflow: 'hidden' }}>

          {/* ── LEFT: Content Journey ── */}
          <div style={{ width: 224, flexShrink: 0, background: leftBg, borderRight: `1px solid ${border}`, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
            <div style={{ padding: '14px 14px 8px', display: 'flex', alignItems: 'center', gap: 5, flexShrink: 0 }}>
              <span style={{ fontSize: 12, fontWeight: 600 }}>Content Journey</span>
              <Info size={12} strokeWidth={1.5} style={{ color: muted }} />
            </div>
            <div className="c2pa-scroll" style={{ flex: 1, overflowY: 'auto', padding: '0 10px 14px' }}>
              {nodes.map((n, i) => {
                const active = i === activeNode;
                return (
                  <div key={n.id} className="c2pa-node" style={{ position: 'relative', marginBottom: 8, cursor: 'pointer' }} onClick={() => setActiveNode(i)}>
                    {/* connecting line */}
                    {i < nodes.length - 1 && (
                      <div style={{ position: 'absolute', left: 11, top: '100%', width: 1, height: 8, background: active ? '#2563eb' : border }} />
                    )}
                    <div className="c2pa-node-inner" style={{
                      border: `1.5px solid ${active ? '#2563eb' : border}`,
                      borderRadius: 8,
                      padding: '8px 10px',
                      background: active ? (isDarkMode ? '#0f172a' : '#f0f5ff') : bg,
                      transition: 'border-color 0.15s',
                    }}>
                      {/* thumb */}
                      {n.img ? (
                        <img
                          src={n.img} alt=""
                          style={{ width: '100%', height: 60, objectFit: 'cover', borderRadius: 5, display: 'block', marginBottom: 7, border: `1px solid ${border}` }}
                          onError={e => { e.currentTarget.style.display = 'none'; e.currentTarget.nextSibling.style.display = 'flex'; }}
                        />
                      ) : null}
                      <div style={{ width: '100%', height: 60, background: isDarkMode ? '#222' : '#eee', borderRadius: 5, alignItems: 'center', justifyContent: 'center', marginBottom: 7, border: `1px solid ${border}`, display: n.img ? 'none' : 'flex' }}>
                        <CameraIcon size={22} />
                      </div>
                      <div style={{ fontSize: 12, fontWeight: 600, marginBottom: 2 }}>{n.title}</div>
                      <div style={{ fontSize: 11, color: muted, marginBottom: 1 }}>{n.sub}</div>
                      <div style={{ fontSize: 11, color: muted, marginBottom: n.tag ? 5 : 0 }}>{n.date}</div>
                      {n.tag && (
                        <span style={{ fontSize: 10, fontWeight: 500, padding: '2px 7px', borderRadius: 4, background: '#eff6ff', color: '#1d4ed8', border: '1px solid #bfdbfe' }}>{n.tag}</span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ── MIDDLE: Main detail ── */}
          <div className="c2pa-scroll" style={{ flex: 1, overflowY: 'auto', padding: '18px 24px', borderRight: `1px solid ${border}` }}>
            {/* header */}
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 12 }}>
              <div>
                <div style={{ fontSize: 17, fontWeight: 600, marginBottom: 3 }}>{node.title}</div>
                <div style={{ fontSize: 12, color: muted }}>{node.sub}</div>
              </div>
              {node.verified && (
                <div style={{ display: 'flex', alignItems: 'center', gap: 4, color: '#16a34a', fontSize: 12, fontWeight: 600, marginTop: 2 }}>
                  <ShieldCheck size={15} strokeWidth={2.5} />
                  Verified
                </div>
              )}
            </div>

            {/* video / camera placeholder */}
            <div style={{ width: '100%', aspectRatio: '16/9', background: '#111', borderRadius: 8, overflow: 'hidden', position: 'relative', marginBottom: 14, border: `1px solid ${border}` }}>
              {node.img ? (
                <>
                  <img src={node.img} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.85 }} />
                </>
              ) : node.mainLabel ? (
                <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 12, color: '#ccc' }}>
                  <CameraIcon size={56} />
                  <span style={{ fontSize: 15, fontWeight: 600 }}>{node.mainLabel}</span>
                </div>
              ) : (
                <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <CameraIcon size={56} />
                </div>
              )}
            </div>



            {/* Content details */}
            {node.contentDetails && (() => {
              const cd = node.contentDetails;
              return (
                <>
                  <div style={{ fontSize: 13.5, fontWeight: 600, marginBottom: 2 }}>Content details</div>
                  <div style={{ fontSize: 12, color: muted, marginBottom: 12 }}>Information about this content and how it was made.</div>

                  {cd.aiBox && (
                    <div style={{ background: infoBox, border: `1px solid ${isDarkMode ? '#1e3a5f' : '#dbeafe'}`, borderRadius: 7, padding: '10px 12px', marginBottom: 16 }}>
                      <div style={{ fontSize: 12, fontWeight: 700, marginBottom: 4, color: isDarkMode ? '#93c5fd' : '#1d4ed8' }}>{cd.aiBox.heading}</div>
                      <div style={{ fontSize: 12, color: isDarkMode ? '#93c5fd' : '#1e40af' }}>{cd.aiBox.text}</div>
                      {cd.aiBox.note && <div style={{ fontSize: 12, color: isDarkMode ? '#6b9fd4' : '#3b82f6', marginTop: 2 }}>{cd.aiBox.note}</div>}
                    </div>
                  )}

                  <div style={{ fontSize: 12.5, fontWeight: 600, marginBottom: 8 }}>App or device used</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
                    {cd.appIcon}
                    <span style={{ fontSize: 12.5 }}>{cd.appName}</span>
                  </div>

                  <div style={{ fontSize: 12.5, fontWeight: 600, marginBottom: 8 }}>Recorded by</div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      {cd.recIcon}
                      <span style={{ fontSize: 12.5 }}>{cd.recName}</span>
                    </div>
                    <Info size={13} strokeWidth={1.5} style={{ color: muted, flexShrink: 0 }} />
                  </div>

                  <div style={{ fontSize: 12.5, fontWeight: 600, marginBottom: 10 }}>Actions</div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                    {cd.actions.map((a, i) => (
                      <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                        <span style={{ color: muted, marginTop: 1, flexShrink: 0 }}>{a.icon}</span>
                        <div>
                          <div style={{ fontSize: 12.5, fontWeight: 600 }}>{a.title}</div>
                          <div style={{ fontSize: 12, color: muted, marginTop: 2 }}>{a.desc}</div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Ingredients (only node 0) */}
                  {node.showIngredients && (
                    <>
                      <div style={{ fontSize: 12.5, fontWeight: 600, marginTop: 20, marginBottom: 10 }}>Ingredients</div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                        {nodes.slice(1).map((n, i) => (
                          <div key={i} onClick={() => setActiveNode(n.id)} style={{ display: 'flex', alignItems: 'center', gap: 10, cursor: 'pointer', borderRadius: 6, padding: '4px 6px', transition: 'background 0.15s' }}
                            onMouseEnter={e => e.currentTarget.style.background = isDarkMode ? '#1e1e1e' : '#f5f5f5'}
                            onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                          >
                            {n.img ? (
                              <img src={n.img} alt="" style={{ width: 52, height: 36, objectFit: 'cover', borderRadius: 4, border: `1px solid ${border}`, flexShrink: 0 }} />
                            ) : (
                              <div style={{ width: 52, height: 36, background: isDarkMode ? '#222' : '#eee', borderRadius: 4, border: `1px solid ${border}`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                <CameraIcon size={18} />
                              </div>
                            )}
                            <div>
                              <div style={{ fontSize: 12, fontWeight: 600 }}>{n.title}</div>
                              <div style={{ fontSize: 11, color: muted }}>{n.sub}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </>
                  )}
                </>
              );
            })()}
          </div>

          {/* ── RIGHT: Metadata ── */}
          <div className="c2pa-scroll" style={{ width: 300, flexShrink: 0, overflowY: 'auto', padding: '18px 18px' }}>

            {/* Contributor details */}
            {node.contributors && (
              <section style={{ marginBottom: 20, paddingBottom: 18, borderBottom: `1px solid ${border}` }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 4 }}>
                  <span style={{ fontSize: 13, fontWeight: 600 }}>Contributor details</span>
                  <ChevronDown size={14} strokeWidth={2} style={{ color: muted }} />
                </div>
                <div style={{ fontSize: 11.5, color: muted, marginBottom: 12 }}>Information shared by people involved in making this content.</div>
                {node.contributors.map((c, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
                    <c.Icon />
                    <span style={{ fontSize: 12.5, fontWeight: 600, minWidth: 60 }}>{c.net}</span>
                    <a href="#" style={{ fontSize: 12.5, color: '#2563eb', textDecoration: 'none' }} onMouseEnter={e=>e.target.style.textDecoration='underline'} onMouseLeave={e=>e.target.style.textDecoration='none'}>{c.name}</a>
                  </div>
                ))}
              </section>
            )}

            {/* Right Content details */}
            {node.rightDetails && (() => {
              const rd = node.rightDetails;
              return (
                <section style={{ marginBottom: 20, paddingBottom: 18, borderBottom: `1px solid ${border}` }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 4 }}>
                    <span style={{ fontSize: 13, fontWeight: 600 }}>Content details</span>
                    <ChevronDown size={14} strokeWidth={2} style={{ color: muted }} />
                  </div>
                  <div style={{ fontSize: 11.5, color: muted, marginBottom: 12 }}>Information about this content and how it was made.</div>

                  {rd.aiBox && (
                    <div style={{ background: infoBox, border: `1px solid ${isDarkMode ? '#1e3a5f' : '#dbeafe'}`, borderRadius: 7, padding: '9px 11px', marginBottom: 14 }}>
                      <div style={{ fontSize: 12, fontWeight: 700, marginBottom: 3, color: isDarkMode ? '#93c5fd' : '#1d4ed8' }}>{rd.aiBox.heading}</div>
                      <div style={{ fontSize: 11.5, color: muted }}>{rd.aiBox.text}</div>
                      {rd.aiBox.note && <div style={{ fontSize: 11.5, color: muted, marginTop: 2 }}>{rd.aiBox.note}</div>}
                    </div>
                  )}

                  <div style={{ fontSize: 12, fontWeight: 600, marginBottom: 7 }}>App or device used</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14 }}>
                    {rd.appIcon}
                    <span style={{ fontSize: 12 }}>{rd.appName}</span>
                  </div>

                  <div style={{ fontSize: 12, fontWeight: 600, marginBottom: 7 }}>Recorded by</div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      {rd.recIcon}
                      <span style={{ fontSize: 12 }}>{rd.recName}</span>
                    </div>
                    <Info size={12} strokeWidth={1.5} style={{ color: muted }} />
                  </div>

                  <div style={{ fontSize: 12, fontWeight: 600, marginBottom: 8 }}>Actions</div>
                  {rd.actions.map((a, i) => (
                    <div key={i} style={{ display: 'flex', gap: 9, alignItems: 'flex-start', marginBottom: 8 }}>
                      <span style={{ color: muted, marginTop: 1 }}>{a.icon}</span>
                      <div>
                        <div style={{ fontSize: 12, fontWeight: 600 }}>{a.title}</div>
                        <div style={{ fontSize: 11.5, color: muted, marginTop: 2 }}>{a.desc}</div>
                      </div>
                    </div>
                  ))}
                </section>
              );
            })()}

            {/* Authenticity */}
            <section style={{ marginBottom: 20, paddingBottom: 18, borderBottom: `1px solid ${border}` }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
                <span style={{ fontSize: 13, fontWeight: 600 }}>Authenticity</span>
              </div>
              {[
                { label: 'Signature', desc: 'Signed by Adobe Content Authenticity' },
                { label: 'Certificate', desc: 'Adobe Content Authenticity CA 3' },
                { label: 'Manifest', desc: 'C2PA Manifest v2.1' },
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: 9, alignItems: 'flex-start', marginBottom: 10 }}>
                  <CheckCircle2 size={14} strokeWidth={2.5} style={{ color: '#16a34a', flexShrink: 0, marginTop: 1 }} />
                  <div>
                    <div style={{ fontSize: 12.5, fontWeight: 600 }}>{item.label}</div>
                    <div style={{ fontSize: 11.5, color: muted, marginTop: 2 }}>{item.desc}</div>
                  </div>
                </div>
              ))}
              {/* Hash row */}
              <div style={{ display: 'flex', gap: 9, alignItems: 'flex-start' }}>
                <CheckCircle2 size={14} strokeWidth={2.5} style={{ color: '#16a34a', flexShrink: 0, marginTop: 1 }} />
                <div style={{ width: '100%' }}>
                  <div style={{ fontSize: 12.5, fontWeight: 600, marginBottom: 6 }}>Hash</div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: isDarkMode ? '#222' : '#f5f5f5', border: `1px solid ${border}`, borderRadius: 5, padding: '5px 9px', fontSize: 11.5, color: muted }}>
                    <span>sha256:c4f3…c91e</span>
                    <Copy size={13} strokeWidth={1.5} style={{ cursor: 'pointer' }} />
                  </div>
                </div>
              </div>
            </section>

            {/* Ingredients (right column, only node 0) */}
            {node.showIngredients && (
              <section>
                <div style={{ fontSize: 13, fontWeight: 600, marginBottom: 12 }}>Ingredients</div>
                {nodes.slice(1).map((n, i) => (
                  <div key={i} onClick={() => setActiveNode(n.id)} style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12, cursor: 'pointer' }}
                    onMouseEnter={e => e.currentTarget.style.opacity = '0.75'}
                    onMouseLeave={e => e.currentTarget.style.opacity = '1'}
                  >
                    {n.img ? (
                      <img src={n.img} alt="" style={{ width: 52, height: 36, objectFit: 'cover', borderRadius: 4, border: `1px solid ${border}`, flexShrink: 0 }} />
                    ) : (
                      <div style={{ width: 52, height: 36, background: isDarkMode ? '#222' : '#eee', borderRadius: 4, border: `1px solid ${border}`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <CameraIcon size={18} />
                      </div>
                    )}
                    <div>
                      <div style={{ fontSize: 12, fontWeight: 600 }}>{n.title}</div>
                      <div style={{ fontSize: 11, color: muted }}>{n.sub}</div>
                    </div>
                  </div>
                ))}
              </section>
            )}
          </div>
        </div>

        {/* ── Footer ── */}
        <div style={{ padding: '12px 22px', borderTop: `1px solid ${border}`, display: 'flex', justifyContent: 'flex-end', flexShrink: 0, background: bg }}>
          <button onClick={onClose} style={{ background: '#1d4ed8', color: '#fff', border: 'none', borderRadius: 6, padding: '8px 22px', fontSize: 13.5, fontWeight: 600, cursor: 'pointer', transition: 'background 0.15s' }}
            onMouseEnter={e => e.currentTarget.style.background = '#1e40af'}
            onMouseLeave={e => e.currentTarget.style.background = '#1d4ed8'}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContentCredentialsCard;