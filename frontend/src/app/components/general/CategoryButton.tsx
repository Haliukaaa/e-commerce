import React from 'react';

const categories = ['Fabric', 'Jacket', 'Trousers', 'Waistcoat'];

export const CategoryButton = ({activeSection, setActiveSection}) => {
  return (
    <div className="flex justify-center pt-2 lg:py-2 bg-white lg:border-b sticky top-0 z-10">
      {categories.map((category) => (
        <button
          key={category}
          className={`px-[12px] md:px-[14px] pt-[5px] md:pt-[7px] pb-[9px] text-sm md:text-base md:pb-[11px] xl:px-4 py-2 rounded-full ${
            activeSection === category
              ? 'bg-gray-100 text-gray-600 font-medium'
              : 'text-gray-700'
          }`}
          onClick={() => setActiveSection(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};
