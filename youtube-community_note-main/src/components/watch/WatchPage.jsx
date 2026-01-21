import React from 'react';
import { ThumbsUp, ThumbsDown, Share2, Download, MoreHorizontal } from 'lucide-react';
import { videos, COMMUNITY_NOTES_DATA } from '../../data/mockData';
import { AnalysisTool } from './AnalysisTool';

export const WatchPage = ({ videoId }) => {
    const video = videos.find(v => v.id === videoId);
    const noteData = COMMUNITY_NOTES_DATA[videoId];

    if (!video) return <div>Video not found</div>;

    return (
        <div className="flex flex-col lg:flex-row gap-6 px-4 py-6 max-w-[1600px] mx-auto">
            {/* Main Video Section */}
            <div className="flex-1 min-w-0">
                <div className="w-full aspect-video bg-black rounded-xl overflow-hidden shadow-2xl">
                    <iframe
                        width="100%"
                        height="100%"
                        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                        title={video.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="border-0"
                    ></iframe>
                </div>

                {/* Deepfake Analysis Tool */}
                {noteData && <AnalysisTool data={noteData} />}

                {/* Video Info */}
                <h1 className="text-xl font-bold mt-4 line-clamp-2">{video.title}</h1>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2 gap-4">
                    <div className="flex items-center gap-4">
                        <img src={video.channelAvatar} alt={video.channelName} className="w-10 h-10 rounded-full" />
                        <div>
                            <h3 className="font-semibold text-white">{video.channelName}</h3>
                            <p className="text-xs text-gray-400">1.5M subscribers</p>
                        </div>
                        <button className="bg-white text-black px-4 py-2 rounded-full font-semibold hover:bg-gray-200 transition-colors ml-2">
                            Subscribe
                        </button>
                    </div>

                    <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0">
                        <div className="flex items-center bg-[#272727] rounded-full">
                            <button className="flex items-center gap-2 px-4 py-2 hover:bg-[#3f3f3f] rounded-l-full border-r border-[#3f3f3f] transition-colors">
                                <ThumbsUp className="w-5 h-5" />
                                <span className="text-sm font-semibold">24K</span>
                            </button>
                            <button className="px-4 py-2 hover:bg-[#3f3f3f] rounded-r-full transition-colors">
                                <ThumbsDown className="w-5 h-5" />
                            </button>
                        </div>
                        <button className="flex items-center gap-2 bg-[#272727] px-4 py-2 rounded-full hover:bg-[#3f3f3f] transition-colors">
                            <Share2 className="w-5 h-5" />
                            <span className="text-sm font-semibold">Share</span>
                        </button>
                        <button className="flex items-center gap-2 bg-[#272727] px-4 py-2 rounded-full hover:bg-[#3f3f3f] transition-colors hidden sm:flex">
                            <Download className="w-5 h-5" />
                            <span className="text-sm font-semibold">Download</span>
                        </button>
                        <button className="bg-[#272727] p-2 rounded-full hover:bg-[#3f3f3f] transition-colors">
                            <MoreHorizontal className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                {/* Description */}
                <div className="mt-4 bg-[#272727] p-3 rounded-xl cursor-pointer hover:bg-[#3f3f3f] transition-colors">
                    <div className="flex gap-2 text-sm font-semibold mb-1">
                        <span>{video.views} views</span>
                        <span>{video.postedAt}</span>
                    </div>
                    <p className="text-sm line-clamp-2">
                        {video.description || "In this video, we explore the topic in depth..."}
                    </p>
                </div>
            </div>

            {/* Sidebar Recommendations */}
            <div className="w-full lg:w-[400px] flex-shrink-0">
                {/* Placeholder for Up Next */}
                <h3 className="font-semibold mb-4 text-lg">Up Next</h3>
                <div className="flex flex-col gap-3">
                    {videos.filter(v => v.id !== videoId).map(video => (
                        <div key={video.id} className="flex gap-2 cursor-pointer group">
                            <div className="relative w-40 min-w-[160px] aspect-video rounded-lg overflow-hidden">
                                <img src={video.thumbnail} className="w-full h-full object-cover" />
                                <span className="absolute bottom-1 right-1 bg-black/80 text-xs px-1 rounded">{video.duration}</span>
                            </div>
                            <div className="flex flex-col gap-1">
                                <h4 className="text-sm font-semibold line-clamp-2 leading-tight group-hover:text-blue-400">{video.title}</h4>
                                <div className="text-xs text-gray-400">{video.channelName}</div>
                                <div className="text-xs text-gray-400">{video.views} • {video.postedAt}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
