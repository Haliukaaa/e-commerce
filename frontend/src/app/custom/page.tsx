// 'use client';
// import React, { useState } from 'react';

// import { ImageSection, MenuSection } from '../components/custom';
// interface Style {
//   id: number;
//   name: string;
//   stylePrefix: string;
//   image?: string;
// }

// interface Material {
//   id: number;
//   name: string;
//   price: string;
//   fabricNumber: number;
//   image?: string;
// }
// const Home = () => {
//   const [selectedStyle, setSelectedStyle] = useState<Style | null>(null);
//   const [selectedMaterial, setSelectedMaterial] = useState<Material | null>(
//     null,
//   );

//   const handleStyleSelect = (style: Style) => {
//     setSelectedStyle(style);
//   };

//   const handleMaterialSelect = (material: Material) => {
//     setSelectedMaterial(material);
//   };
//   return (
//     <div className="grid grid-cols-1 pt-11 lg:pt-[50px] lg:flex lg:h-full">
//       <ImageSection
//         selectedStyle={selectedStyle}
//         selectedMaterial={selectedMaterial}
//       />

//       <MenuSection
//         selectedStyle={selectedStyle}
//         selectedMaterial={selectedMaterial}
//         onStyleSelect={handleStyleSelect}
//         onMaterialSelect={handleMaterialSelect}
//       />
//     </div>
//   );
// };

// export default Home;
'use client';
import React, { useState } from 'react';

import { ImageSection, MenuSection } from '../components/custom';

interface Style {
  id: number;
  name: string;
  stylePrefix: string;
  image?: string;
}

interface Material {
  id: number;
  name: string;
  price: string;
  fabricNumber: number;
  image?: string;
}

const Home = () => {
  const [selectedStyle, setSelectedStyle] = useState<Style | null>(null);
  const [selectedMaterial, setSelectedMaterial] = useState<Material | null>(
    null,
  );

  const handleStyleSelect = (style: Style) => {
    setSelectedStyle(style);
  };

  const handleMaterialSelect = (material: Material) => {
    setSelectedMaterial(material);
  };

  return (
    <div className="flex flex-col h-full lg:flex-row lg:h-screen pt-11 lg:pt-[50px]">
      {/* Left Section: Image */}
      <div className="w-full flex-grow lg:w-8/12 h-64 lg:h-full bg-gray-100">
        <ImageSection
          selectedStyle={selectedStyle}
          selectedMaterial={selectedMaterial}
        />
      </div>

      {/* Right Section: Menu */}
      <div className="w-full flex-shrink lg:w-4/12 bg-white h-auto lg:h-full overflow-y-auto">
        <MenuSection
          selectedStyle={selectedStyle}
          selectedMaterial={selectedMaterial}
          onStyleSelect={handleStyleSelect}
          onMaterialSelect={handleMaterialSelect}
        />
      </div>
    </div>
  );
};

export default Home;
