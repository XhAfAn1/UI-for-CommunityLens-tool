import React from 'react';
import { MoreVertical, CheckCircle } from 'lucide-react';

export const VideoCard = ({ video }) => {
    return (
        <div className="flex flex-col gap-2 cursor-pointer group">
            {/* Thumbnail Container */}
            <div className="relative w-full aspect-video rounded-xl overflow-hidden">
                <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                />
                <div className="absolute bottom-1 right-1 bg-black/80 px-1.5 py-0.5 rounded text-xs font-medium">
                    {video.duration}
                </div>
            </div>

            {/* Meta Data */}
            <div className="flex gap-3 mt-1">
                <div className="flex-shrink-0">
                    <img
                        src={video.channelAvatar}
                        alt={video.channelName}
                        className="w-9 h-9 rounded-full object-cover"
                    />
                </div>

                <div className="flex flex-col flex-1">
                    <h3 className="text-white text-sm font-semibold line-clamp-2 leading-tight group-hover:text-blue-400 transition-colors">
                        {video.title}
                    </h3>
                    <div className="text-gray-400 text-xs mt-1 flex items-center">
                        <span>{video.channelName}</span>
                        <CheckCircle className="w-3 h-3 ml-1" />
                    </div>
                    <div className="text-gray-400 text-xs">
                        {video.views} • {video.postedAt}
                    </div>
                </div>

                <button className="opacity-0 group-hover:opacity-100 p-1 hover:bg-[#272727] rounded-full transition-opacity h-fit">
                    <MoreVertical className="w-4 h-4 text-white" />
                </button>
            </div>
        </div>
    );
};
