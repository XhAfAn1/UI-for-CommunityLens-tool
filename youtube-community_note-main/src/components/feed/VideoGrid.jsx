import React from 'react';
import { VideoCard } from './VideoCard';
import { videos } from '../../data/mockData';

export const VideoGrid = ({ selectedCategory, searchQuery, onVideoClick }) => {
    const filteredVideos = videos.filter(video => {
        const matchesCategory = selectedCategory === "All" || video.category === selectedCategory;
        const matchesSearch = video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            video.channelName.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 disabled-xl:grid-cols-5 gap-y-8 gap-x-4">
            {filteredVideos.map(video => (
                <div key={video.id} onClick={() => onVideoClick(video.id)}>
                    <VideoCard video={video} />
                </div>
            ))}
        </div>
    );
};
