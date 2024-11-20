// import Image from 'next/image';

// interface ItemDetail {
//   name: string;
//   material: {
//     name: string;
//     image: string;
//   };
//   style: {
//     name: string;
//     image: string;
//   };
//   price: string;
//   button: {
//     name: string;
//     image: string;
//   };
//   sleeve: {
//     name: string;
//     image: string;
//   };
// }

// interface OrderDetails {
//   item: {
//     name: string;
//     details: {
//       items: ItemDetail[];
//     };
//   };
// }

// export const OrderDetailSection = () => {
//   const orderDetails = {
//     item: {
//       name: 'Suit',
//       details: {
//         items: [
//           {
//             name: 'Jacket',
//             material: {
//               name: 'Cotton',
//               image: '/sample.jpg',
//             },
//             style: {
//               name: 'Casual',
//               image: '/sample.jpg',
//             },
//             price: '$799',
//             button: {
//               name: 'Cream',
//               image: '/sample.jpg',
//             },
//             sleeve: {
//               name: 'Long Sleeve',
//               image: '/sample.jpg',
//             },
//             image: '/style2-fab3.png',
//           },
//           {
//             name: 'Trousers',
//             material: {
//               name: 'Cotton',
//               image: '/sample.jpg',
//             },
//             style: {
//               name: 'Casual',
//               image: '/sample.jpg',
//             },
//             price: '$799',
//             button: {
//               name: 'Cream',
//               image: '/sample.jpg',
//             },
//             sleeve: {
//               name: 'Long Sleeve',
//               image: '/sample.jpg',
//             },
//             image: '/style1-fab1-bottom.png',
//           },
//         ],
//       },
//     },
//   };

//   return (
//     <div className="w-full lg:w-1/2 h-full overflow-y-auto flex flex-col lg:p-0 bg-white">
//       <div className="my-4">
//         <div className="flex flex-col gap-4">
//           {orderDetails.item.details.items.map((item, index) => (
//             <div key={index} className="space-y-4">
//               <p className="font-semibold">{item.name}</p>
//               <div className="flex items-center gap-4">
//                 <div className="rounded-md overflow-hidden">
//                   <Image
//                     src={item.material.image}
//                     alt={item.material.name}
//                     className="w-12 h-12"
//                     layout="intrinsic"
//                     width={48}
//                     height={48}
//                   />
//                 </div>
//                 <div>
//                   <p className="text-sm text-gray-500">Material</p>
//                   <p>{item.material.name}</p>
//                 </div>
//               </div>
//               <div className="flex items-center gap-4">
//                 <Image
//                   src={item.style.image}
//                   alt={item.style.name}
//                   className="w-12 h-12"
//                   layout="intrinsic"
//                   width={48}
//                   height={48}
//                 />
//                 <div>
//                   <p className="text-sm text-gray-500">Style</p>
//                   <p>{item.style.name}</p>
//                 </div>
//               </div>
//               <div className="flex items-center gap-4">
//                 <Image
//                   src={item.button.image}
//                   alt={item.button.name}
//                   className="w-12 h-12"
//                   layout="intrinsic"
//                   width={48}
//                   height={48}
//                 />
//                 <div>
//                   <p className="text-sm text-gray-500">Button</p>
//                   <p>{item.button.name}</p>
//                 </div>
//               </div>
//               <div className="flex items-center gap-4">
//                 <Image
//                   src={item.sleeve.image}
//                   alt={item.sleeve.name}
//                   className="w-12 h-12"
//                   layout="intrinsic"
//                   width={48}
//                   height={48}
//                 />
//                 <div>
//                   <p className="text-sm text-gray-500">Sleeve</p>
//                   <p>{item.sleeve.name}</p>
//                 </div>
//               </div>
//               <div>
//                 <p className="text-sm text-gray-500">Price</p>
//                 <p>{item.price}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//       <button className="w-full py-3 bg-primary text-white font-bold rounded-lg hover:bg-indigo-700">
//         Finish Order
//       </button>
//     </div>
//   );
// };
import React from 'react';

import { ItemDetails } from './';
export const OrderDetailSection = () => {
  const orderDetails = {
    item: {
      name: 'Suit',
      details: {
        items: [
          {
            name: 'Jacket',
            material: {
              name: 'Cotton',
              image: '/sample.jpg',
            },
            style: {
              name: 'Casual',
              image: '/sample.jpg',
            },
            price: '$799',
            button: {
              name: 'Cream',
              image: '/sample.jpg',
            },
            sleeve: {
              name: 'Long Sleeve',
              image: '/sample.jpg',
            },
            image: '/style2-fab3.png',
          },
          {
            name: 'Trousers',
            material: {
              name: 'Cotton',
              image: '/sample.jpg',
            },
            style: {
              name: 'Casual',
              image: '/sample.jpg',
            },
            price: '$799',
            button: {
              name: 'Cream',
              image: '/sample.jpg',
            },
            sleeve: {
              name: 'Long Sleeve',
              image: '/sample.jpg',
            },
            image: '/style1-fab1-bottom.png',
          },
        ],
      },
    },
  };

  return (
    <div className="w-full lg:w-2/5 h-full overflow-y-auto flex flex-col lg:p-0 bg-white">
      <div className="my-4">
        <div className="flex flex-col gap-4">
          {orderDetails.item.details.items.map((item, index) => (
            <ItemDetails key={index} item={item} />
          ))}
        </div>
      </div>
      <button className="w-full py-3 bg-primary text-white font-bold rounded-lg hover:bg-indigo-700">
        Finish Order
      </button>
    </div>
  );
};
