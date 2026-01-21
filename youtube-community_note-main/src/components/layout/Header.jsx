import React from 'react';
import { Menu, Search, Mic, Video, Bell, User } from 'lucide-react';
import { YoutubeLogo } from './YoutubeLogo';

export const Header = ({ toggleSidebar, searchQuery, setSearchQuery, onLogoClick }) => {
    return (
        <div className="fixed top-0 left-0 right-0 h-14 bg-[#0f0f0f] flex items-center justify-between px-4 z-50 border-b border-[#272727]">
            {/* Left: Menu & Logo */}
            <div className="flex items-center gap-4">
                <button
                    onClick={toggleSidebar}
                    className="p-2 hover:bg-[#272727] rounded-full transition-colors"
                >
                    <Menu className="text-white" />
                </button>
                <div onClick={onLogoClick} className="cursor-pointer">
                    <YoutubeLogo />
                </div>
            </div>

            {/* Center: Search */}
            <div className="hidden md:flex items-center gap-4 flex-1 max-w-[720px] ml-16">
                <div className="flex flex-1 items-center">
                    <input
                        type="text"
                        placeholder="Search"
                        className="w-full bg-[#121212] border border-[#303030] rounded-l-full py-2 px-4 text-white focus:outline-none focus:border-blue-500 h-10 shadow-inner placeholder-gray-500"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <button className="h-10 px-6 bg-[#222222] border border-l-0 border-[#303030] rounded-r-full hover:bg-[#303030] transition-colors flex items-center justify-center">
                        <Search className="w-5 h-5 text-gray-400" />
                    </button>
                </div>
                <button className="p-2 bg-[#181818] hover:bg-[#303030] rounded-full transition-colors">
                    <Mic className="text-white" />
                </button>
            </div>

            {/* Right: Actions */}
            <div className="flex items-center gap-3">
                <button className="p-2 hover:bg-[#272727] rounded-full transition-colors hidden sm:block">
                    <Video className="text-white" />
                </button>
                <button className="p-2 hover:bg-[#272727] rounded-full transition-colors hidden sm:block">
                    <Bell className="text-white" />
                </button>
                <button className="ml-2 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-semibold hover:bg-purple-700 transition-colors">
                    A
                </button>
            </div>
        </div>
    );
};
