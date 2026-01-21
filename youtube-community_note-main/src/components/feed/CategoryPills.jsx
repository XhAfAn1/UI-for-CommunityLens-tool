import React from 'react';
import { categories } from '../../utils/constants';

export const CategoryPills = ({ selected, onSelect }) => {
    const allCategories = [{ name: "All" }, ...categories];

    return (
        <div className="flex overflow-x-auto gap-3 pb-2 scrollbar-hide w-full">
            {allCategories.map((cat, idx) => (
                <button
                    key={idx}
                    onClick={() => onSelect(cat.name)}
                    className={`px-3 py-1.5 rounded-lg text-sm font-semibold whitespace-nowrap transition-colors
            ${selected === cat.name
                            ? 'bg-white text-black'
                            : 'bg-[#272727] text-white hover:bg-[#3f3f3f]'
                        }`}
                >
                    {cat.name}
                </button>
            ))}
        </div>
    );
};
