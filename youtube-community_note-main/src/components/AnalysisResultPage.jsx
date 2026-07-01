import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import { collectionGroup, getDocs } from 'firebase/firestore';
import { ChevronDown, ChevronUp, Clock, Activity, User, Youtube, Download } from 'lucide-react';
import * as XLSX from 'xlsx';

const COMPONENT_NAME_MAPPING = {
  'user-data': 'Creator-driven indicators',
  'platform-data': 'platform-provided indicators',
  'community-tool': 'communitylens',
  'comments': 'user comments',
  'c2pa-button': 'c2pa design',
  'video': 'video'
};

const AnalysisResultPage = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [expandedUsers, setExpandedUsers] = useState({});
  const [expandedVideos, setExpandedVideos] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const videosQuery = collectionGroup(db, 'videos');
        const querySnapshot = await getDocs(videosQuery);
        
        const groupedData = {};
        
        querySnapshot.forEach((doc) => {
          const pid = doc.ref.parent.parent.id;
          const videoId = doc.id;
          const videoData = doc.data();
          
          if (!groupedData[pid]) {
            groupedData[pid] = {};
          }
          groupedData[pid][videoId] = videoData;
        });
        
        setData(groupedData);
      } catch (err) {
        console.error("Error fetching analysis data:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    
    fetchData();
  }, []);

  const toggleUser = (pid) => {
    setExpandedUsers(prev => ({ ...prev, [pid]: !prev[pid] }));
  };

  const toggleVideo = (pid, videoId) => {
    const key = `${pid}-${videoId}`;
    setExpandedVideos(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const exportToExcel = () => {
    if (!data) return;

    const videoDataMap = {};

    Object.keys(data).forEach(pid => {
      Object.keys(data[pid]).forEach(videoId => {
        const videoStats = data[pid][videoId];
        
        if (!videoDataMap[videoId]) {
          videoDataMap[videoId] = [];
        }

        const row = {
          "User ID": pid,
          "Total Active Session Time (s)": videoStats.totalActiveSessionTimeSec || 0,
          "Average Scroll Speed (px/s)": videoStats.averageScrollSpeedPxPerSec || 0,
        };

        if (videoStats.analytics) {
          Object.entries(videoStats.analytics).forEach(([compName, metrics]) => {
            const displayName = COMPONENT_NAME_MAPPING[compName] || compName;
            row[`${displayName} - View Time (s)`] = metrics.viewTimeSec;
            row[`${displayName} - Hover Time (s)`] = metrics.hoverTimeSec;
            row[`${displayName} - Clicks`] = metrics.clicks;
            row[`${displayName} - Revisits`] = metrics.revisitCount;
            row[`${displayName} - First Seen (s)`] = metrics.firstSeenTimeSec !== null ? metrics.firstSeenTimeSec : 'N/A';
            row[`${displayName} - First Click (s)`] = metrics.firstClickTimeSec !== null ? metrics.firstClickTimeSec : 'N/A';
          });
        }

        videoDataMap[videoId].push(row);
      });
    });

    const wb = XLSX.utils.book_new();

    Object.keys(videoDataMap).forEach(videoId => {
      const sheetName = videoId.substring(0, 31); 
      const ws = XLSX.utils.json_to_sheet(videoDataMap[videoId]);
      XLSX.utils.book_append_sheet(wb, ws, sheetName);
    });

    XLSX.writeFile(wb, "Analytics_Export.xlsx");
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#f9f9f9] flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#FF0000]"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-[#f9f9f9] flex items-center justify-center p-4">
        <div className="bg-white text-[#0f0f0f] p-6 rounded-xl border border-gray-200">
          <h2 className="text-xl font-bold mb-2">Error Loading Data</h2>
          <p className="text-[#606060]">{error}</p>
        </div>
      </div>
    );
  }

  const userIds = Object.keys(data || {});

  return (
    <div className="min-h-screen bg-[#f9f9f9] text-[#0f0f0f] p-6 md:p-12 font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-gray-200 pb-6">
          <div className="flex items-center gap-4">
            <Youtube size={40} className="text-[#FF0000]" />
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-[#0f0f0f] tracking-tight">
                Analytics Studio
              </h1>
              <p className="text-[#606060] text-sm mt-1">Viewing comprehensive user engagement metrics across all videos.</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-3 md:gap-4 items-stretch">
            <button
              onClick={exportToExcel}
              disabled={userIds.length === 0}
              className="bg-[#0f0f0f] disabled:bg-gray-300 disabled:cursor-not-allowed text-white px-4 py-2 rounded-xl flex items-center justify-center gap-2 hover:bg-[#272727] transition-colors shadow-sm"
              title="Export data to Excel"
            >
              <Download size={20} />
              <span className="font-medium hidden sm:inline">Export Excel</span>
            </button>
            <div className="bg-white px-4 py-2 rounded-xl border border-gray-200 text-center min-w-[90px] md:min-w-[100px] shadow-sm flex flex-col justify-center">
              <div className="text-xl font-bold text-[#0f0f0f]">{userIds.length}</div>
              <div className="text-xs text-[#606060] uppercase tracking-wider font-medium">Total Users</div>
            </div>
            <div className="bg-white px-4 py-2 rounded-xl border border-gray-200 text-center min-w-[90px] md:min-w-[100px] shadow-sm flex flex-col justify-center">
              <div className="text-xl font-bold text-[#0f0f0f]">
                {userIds.reduce((sum, pid) => sum + Object.keys(data[pid]).length, 0)}
              </div>
              <div className="text-xs text-[#606060] uppercase tracking-wider font-medium">Total Sessions</div>
            </div>
          </div>
        </div>

        {userIds.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-2xl border border-gray-200 shadow-sm">
            <p className="text-[#606060]">No analytical data found in the database.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {userIds.map(pid => (
              <div key={pid} className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm transition-all duration-300">
                <button 
                  onClick={() => toggleUser(pid)}
                  className="w-full flex items-center justify-between p-5 hover:bg-gray-50 transition-colors text-left"
                >
                  <div className="flex items-center gap-4">
                    <div className="bg-gray-100 p-3 rounded-full text-[#606060]">
                      <User size={20} />
                    </div>
                    <div>
                      <h2 className="text-lg font-bold text-[#0f0f0f]">{pid}</h2>
                      <p className="text-sm text-[#606060] mt-0.5">
                        {Object.keys(data[pid]).length} videos watched
                        <span className="mx-2">•</span>
                        {Object.values(data[pid]).reduce((sum, video) => sum + (video.writeCount || 0), 0)} server writes
                      </p>
                    </div>
                  </div>
                  {expandedUsers[pid] ? <ChevronUp className="text-[#606060]" /> : <ChevronDown className="text-[#606060]" />}
                </button>

                {expandedUsers[pid] && (
                  <div className="p-5 border-t border-gray-200 bg-gray-50/50">
                    <div className="space-y-4">
                      {Object.keys(data[pid]).map(videoId => {
                        const videoData = data[pid][videoId];
                        const isVideoExpanded = expandedVideos[`${pid}-${videoId}`];
                        
                        return (
                          <div key={videoId} className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
                            <button 
                              onClick={() => toggleVideo(pid, videoId)}
                              className="w-full flex flex-col md:flex-row md:items-center justify-between p-4 hover:bg-gray-50 transition-colors text-left gap-4"
                            >
                              <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-[#FF0000] text-white flex items-center justify-center font-bold shadow-sm">
                                  {videoId.replace('video', 'V')}
                                </div>
                                <div>
                                  <h3 className="font-medium text-[#0f0f0f]">{videoId}</h3>
                                </div>
                              </div>
                              
                              <div className="flex flex-wrap gap-3 items-center">
                                <div className="flex items-center gap-1.5 bg-[#f9f9f9] px-3 py-1.5 rounded-lg border border-gray-200">
                                  <Clock size={14} className="text-[#606060]" />
                                  <span className="text-sm font-medium text-[#0f0f0f]">{videoData.totalActiveSessionTimeSec || 0}s Active</span>
                                </div>
                                <div className="flex items-center gap-1.5 bg-[#f9f9f9] px-3 py-1.5 rounded-lg border border-gray-200">
                                  <Activity size={14} className="text-[#606060]" />
                                  <span className="text-sm font-medium text-[#0f0f0f]">{videoData.averageScrollSpeedPxPerSec || 0} px/s</span>
                                </div>
                                {isVideoExpanded ? <ChevronUp size={20} className="text-[#606060] ml-2" /> : <ChevronDown size={20} className="text-[#606060] ml-2" />}
                              </div>
                            </button>

                            {isVideoExpanded && videoData.analytics && (
                              <div className="p-4 border-t border-gray-200 overflow-x-auto bg-white">
                                <table className="w-full text-sm text-left">
                                  <thead className="text-xs text-[#606060] border-b border-gray-200">
                                    <tr>
                                      <th className="px-4 py-3 font-medium">Component</th>
                                      <th className="px-4 py-3 font-medium">View Time</th>
                                      <th className="px-4 py-3 font-medium">Hover Time</th>
                                      <th className="px-4 py-3 font-medium">Clicks</th>
                                      <th className="px-4 py-3 font-medium">Revisits</th>
                                      <th className="px-4 py-3 font-medium">First Seen</th>
                                      <th className="px-4 py-3 font-medium">First Click</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    {Object.entries(videoData.analytics).map(([compName, metrics], idx) => {
                                      const displayName = COMPONENT_NAME_MAPPING[compName] || compName;
                                      return (
                                        <tr key={compName} className={`border-b border-gray-100 ${idx % 2 === 0 ? 'bg-gray-50/50' : 'bg-transparent'}`}>
                                          <td className="px-4 py-3 font-medium text-[#0f0f0f]">{displayName}</td>
                                          <td className="px-4 py-3 text-[#606060]">{metrics.viewTimeSec}s</td>
                                          <td className="px-4 py-3 text-[#606060]">{metrics.hoverTimeSec}s</td>
                                          <td className="px-4 py-3">
                                            <span className={`inline-flex items-center justify-center px-2 py-0.5 rounded text-xs font-medium ${metrics.clicks > 0 ? 'bg-[#065fd4]/10 text-[#065fd4]' : 'text-[#606060]'}`}>
                                              {metrics.clicks}
                                            </span>
                                          </td>
                                          <td className="px-4 py-3 text-[#606060]">{metrics.revisitCount}</td>
                                          <td className="px-4 py-3 text-[#606060]">{metrics.firstSeenTimeSec !== null ? `${metrics.firstSeenTimeSec}s` : '-'}</td>
                                          <td className="px-4 py-3 text-[#606060]">{metrics.firstClickTimeSec !== null ? `${metrics.firstClickTimeSec}s` : '-'}</td>
                                        </tr>
                                      );
                                    })}
                                  </tbody>
                                </table>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AnalysisResultPage;
