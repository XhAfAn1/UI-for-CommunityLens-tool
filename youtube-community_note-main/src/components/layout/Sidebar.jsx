import React from 'react';
import { sidebarItems } from '../../utils/constants';

export const Sidebar = ({ isOpen }) => {
    return (
        <div className={`fixed top-14 left-0 h-[calc(100vh-56px)] bg-[#0f0f0f] overflow-y-auto z-40 transition-width duration-200 ${isOpen ? 'w-60' : 'w-20 hidden md:block'}`}>
            <div className="flex flex-col p-2">
                {sidebarItems.map((item, index) => (
                    <div
                        key={index}
                        className={`flex items-center gap-4 px-3 py-2 rounded-lg cursor-pointer hover:bg-[#272727] transition-colors ${item.active ? 'bg-[#272727]' : ''} ${isOpen ? '' : 'flex-col justify-center gap-1 py-4'}`}
                    >
                        <item.icon className={`${item.active ? 'text-white' : 'text-white'} ${isOpen ? 'w-6 h-6' : 'w-6 h-6'}`} />
                        <span className={`text-sm ${isOpen ? 'truncate' : 'text-[10px] truncate'}`}>{item.text}</span>
                    </div>
                ))}
            </div>

            {isOpen && (
                <div className="mt-4 border-t border-[#272727] pt-4 px-4">
                    <p className="text-gray-400 text-sm font-semibold mb-2">Subscriptions</p>
                    {/* Mock subscriptions could go here */}
                </div>
            )}
        </div>
    );
};
