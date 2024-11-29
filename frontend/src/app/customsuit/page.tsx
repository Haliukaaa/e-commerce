// 'use client';
// import React, { useState } from 'react';

// import { ImageSection, MenuSection } from '../components/customsuit';
// import { FabricProvider } from '../utils/context/fabricContext';

// const Home = () => {
//   const [currentView, setCurrentView] = useState<'jacket' | 'trousers'>(
//     'jacket',
//   );

//   return (
//     <FabricProvider>
//       <div className="grid grid-rows-[1fr_auto] grid-cols-1 lg:flex lg:flex-row h-dvh">
//         {/* Left Section: Image */}
//         <div className="flex-1 lg:flex-1 lg:w-[70%] pt-11 lg:pt-[50px]">
//           <div className="h-full bg-[#efefef] transition-all duration-300">
//             <ImageSection
//               currentView={currentView}
//               setCurrentView={setCurrentView}
//             />
//           </div>
//         </div>

//         {/* Right Section: Menu */}
//         <div className="lg:w-[30%] h-[180px] md:h-[244px] bg-white lg:pt-[50px] lg:min-h-0 lg:h-full">
//           <div className="h-full overflow-hidden">
//             <MenuSection />
//           </div>
//         </div>
//       </div>
//     </FabricProvider>
//   );
// };

// export default Home;
'use client';
import React, { useState } from 'react';

import { ImageSection, MenuSection } from '../components/customsuit';
import { FabricProvider } from '../utils/context/fabricContext';

const Home = () => {
  const [currentView, setCurrentView] = useState<'jacket' | 'trousers'>(
    'jacket',
  );

  return (
    <FabricProvider>
      <div className="grid grid-rows-[auto_auto] pt-11 lg:pt-[50px] grid-cols-1 lg:flex lg:flex-row h-dvh">
        {/* Left Section: Image */}
        <div className="flex-1 lg:flex-1 lg:w-[70%] ">
          <div className="h-[calc(100dvh-224px)] md:h-[calc(100dvh-294px)] lg:h-full bg-[#efefef] transition-all duration-300 overflow-hidden">
            <ImageSection
              currentView={currentView}
              setCurrentView={setCurrentView}
            />
          </div>
        </div>

        {/* Right Section: Menu */}
        <div className="lg:w-[30%] h-[180px] md:h-[244px] bg-white lg:min-h-0 lg:h-full">
          <div className="h-full overflow-hidden">
            <MenuSection />
          </div>
        </div>
      </div>
    </FabricProvider>
  );
};

export default Home;
