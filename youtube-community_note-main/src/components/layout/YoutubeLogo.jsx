import React from 'react';

export const YoutubeLogo = () => (
    <div className="flex items-center gap-1 cursor-pointer" title="YouTube Home">
        <div className="relative flex items-center justify-center">
            <svg height="24" viewBox="0 0 24 24" width="24" focusable="false" className="text-red-600 fill-current">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"></path>
            </svg>
        </div>
        <span className="text-white text-xl font-semibold tracking-tighter relative top-[-1px]">YouTube</span>
        <span className="text-gray-400 text-xs self-start ml-1 mt-0.5">Replica</span>
    </div>
);
