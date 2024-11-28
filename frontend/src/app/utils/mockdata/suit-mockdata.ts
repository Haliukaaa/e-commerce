import { FabricGroup, Product } from '../types/customsuit';
export const fabricGroups: FabricGroup[] = [
  {
    id: 1,
    name: 'All Fabrics',
    itemCount: 320,
    images: [
      'https://cdn.suitsupply.com/image/upload/b_rgb:ffffff,c_fit,f_auto,h_450,q_auto:good,w_450/products/cm-sample/default/S899.601-4315_23',
      'https://cdn.suitsupply.com/image/upload/b_rgb:ffffff,c_fit,f_auto,h_450,q_auto:good,w_450/products/cm-sample/default/S504.801-360_23',
      'https://cdn.suitsupply.com/image/upload/b_rgb:ffffff,c_fit,f_auto,h_450,q_auto:good,w_450/products/cm-sample/default/S505929.N-2495_23',
      'https://cdn.suitsupply.com/image/upload/b_rgb:ffffff,c_fit,f_auto,h_450,q_auto:good,w_450/products/cm-sample/default/S2301T.20-52R_23',
    ],
  },
  {
    id: 2,
    name: 'New Arrivals',
    itemCount: 29,
    images: [
      'https://cdn.suitsupply.com/image/upload/b_rgb:ffffff,c_fit,f_auto,h_450,q_auto:good,w_450/products/cm-sample/default/S595.401-57_23',
      'https://cdn.suitsupply.com/image/upload/b_rgb:ffffff,c_fit,f_auto,h_450,q_auto:good,w_450/products/cm-sample/default/S5057-4_23',
      'https://cdn.suitsupply.com/image/upload/b_rgb:ffffff,c_fit,f_auto,h_450,q_auto:good,w_450/products/cm-sample/default/S595.201-30_23',
      'https://cdn.suitsupply.com/image/upload/b_rgb:ffffff,c_fit,f_auto,h_450,q_auto:good,w_450/products/cm-sample/default/S586.861-780_23',
    ],
  },
  {
    id: 3,
    name: 'Best Sellers',
    itemCount: 19,
    images: [
      'https://cdn.suitsupply.com/image/upload/b_rgb:ffffff,c_fit,f_auto,h_450,q_auto:good,w_450/products/cm-sample/default/S899.601-5730_23',
      'https://cdn.suitsupply.com/image/upload/b_rgb:ffffff,c_fit,f_auto,h_450,q_auto:good,w_450/products/cm-sample/default/Sdugdale-9412_23',
      'https://cdn.suitsupply.com/image/upload/b_rgb:ffffff,c_fit,f_auto,h_450,q_auto:good,w_450/products/cm-sample/default/S10.712-192_23',
      'https://cdn.suitsupply.com/image/upload/b_rgb:ffffff,c_fit,f_auto,h_450,q_auto:good,w_450/products/cm-sample/default/S595.401-2_23',
    ],
  },
  {
    id: 4,
    name: 'Business',
    itemCount: 24,
    images: [
      'https://cdn.suitsupply.com/image/upload/b_rgb:ffffff,c_fit,f_auto,h_450,q_auto:good,w_450/products/cm-sample/default/S504.801-360_23',
      'https://cdn.suitsupply.com/image/upload/b_rgb:ffffff,c_fit,f_auto,h_450,q_auto:good,w_450/products/cm-sample/default/S2301T.20-52R_23',
      'https://cdn.suitsupply.com/image/upload/b_rgb:ffffff,c_fit,f_auto,h_450,q_auto:good,w_450/products/cm-sample/default/S62694-1_23',
      'https://cdn.suitsupply.com/image/upload/b_rgb:ffffff,c_fit,f_auto,h_450,q_auto:good,w_450/products/cm-sample/default/S599.101-855_23',
    ],
  },
];

export const products: Product[] = [
  {
    id: '1327',
    name: 'Dark Green Wool Cashmere',
    price: '1033',
    images: {
      fabric: {
        layer: 'base',
        url: 'https://cdn.suitsupply.com/image/upload/b_rgb:ffffff,c_fit,f_auto,h_450,q_auto:good,w_450/products/cm-sample/default/S854.601-9798_23',
      },
      jacket: [
        {
          layer: 'full',
          url: 'https://cdn.suitsupply.com/image/upload/b_rgb:efefef,c_fit,f_auto,h_1125,q_auto:best,w_900/b_rgb:efefef,c_fit,f_auto,h_1125,l_suitconfig:S854.601-9798:Jacket:shoulder:MBN2_SS3,q_auto:good,w_900/suitconfig/S854.601-9798/Jacket/model/MBN2',
        },
        {
          layer: 'lining',
          url: 'https://cdn.suitsupply.com/image/upload/c_fit,f_auto,h_1125,q_auto:good,w_900/suitconfig/shared/lining/MBN2_LFL1_1098',
        },
        {
          layer: 'chest button',
          url: 'https://cdn.suitsupply.com/image/upload/c_fit,f_auto,h_1125,q_auto:good,w_900/suitconfig/S854.601-9798/Jacket/chest-pocket/MBN2_CPBS1',
        },
        {
          layer: 'lapel',
          url: 'https://cdn.suitsupply.com/image/upload/c_fit,f_auto,h_1125,q_auto:good,w_900/suitconfig/S854.601-9798/Jacket/lapel/MBN2_LN1_NLWS2',
        },
        {
          layer: 'pocket',
          url: 'https://cdn.suitsupply.com/image/upload/c_fit,f_auto,h_1125,q_auto:good,w_900/suitconfig/S854.601-9798/Jacket/pocket/MBN2_SPF5.5_TPN2',
        },
        {
          layer: 'button',
          url: 'https://cdn.suitsupply.com/image/upload/c_fit,f_auto,h_1125,q_auto:good,w_900/suitconfig/shared/buttons/MBN2_TFH01',
        },
        {
          layer: 'stitch',
          url: 'https://cdn.suitsupply.com/image/upload/c_fit,f_auto,h_1125,q_auto:good,w_900/suitconfig/S854.601-9798/Jacket/stitching/MBN2_LN1_NLWS2_HAMF2mm2',
        },
        {
          layer: 'base',
          url: 'https://cdn.suitsupply.com/image/upload/c_fit,f_auto,h_1125,q_auto:good,w_900/suitconfig/S854.601-9798/Jacket/stitching/MBN2_LN1_NLWS2_BHFUNC1',
        },
      ],
      trousers: [
        {
          layer: 'full',
          url: 'https://cdn.suitsupply.com/image/upload/b_rgb:efefef,c_fit,f_auto,h_1125,q_auto:best,w_900/b_rgb:efefef,c_fit,f_auto,h_1125,l_suitconfig:S854.601-9798:Trousers:waistband:WBBR7_WBH1,q_auto:good,w_900/suitconfig/S854.601-9798/Trousers/construction/PLNO1',
        },
        {
          layer: 'seams',
          url: 'https://cdn.suitsupply.com/image/upload/c_fit,f_auto,h_1125,q_auto:good,w_900/suitconfig/S854.601-9798/Trousers/pocket/FPSL1',
        },
        {
          layer: 'belt loop',
          url: 'https://cdn.suitsupply.com/image/upload/c_fit,f_auto,h_1125,q_auto:good,w_900/suitconfig/S854.601-9798/Trousers/details/WBBL1_WBH1',
        },
        {
          layer: 'button 1',
          url: 'https://cdn.suitsupply.com/image/upload/c_fit,f_auto,h_1125,q_auto:good,w_900/suitconfig/shared/buttons/WBBR7_WBH1_TFH01',
        },
        {
          layer: 'button 2',
          url: 'https://cdn.suitsupply.com/image/upload/c_fit,f_auto,h_1125,q_auto:good,w_900/suitconfig/shared/buttons/WBBR7_WBH1_TFH01',
        },
      ],
    },
    description:
      'A lightweight, breathable tropical wool perfect for warm climates.',
    composition: '100% Pure Wool',
    category: ['business', 'best sellers'],
    care: 'Dry clean only, avoid direct sunlight',
  },
  {
    id: '1357',
    name: 'Black Herringbone Pure Wool',
    price: '1073',
    images: {
      fabric: {
        layer: 'base',
        url: 'https://cdn.suitsupply.com/image/upload/b_rgb:ffffff,c_fit,f_auto,h_450,q_auto:good,w_450/products/cm-sample/default/Sdugdale-9412_23',
      },
      jacket: [
        { layer: 'full', url: 'https://example.com/trousers-full-1327.jpg' },
        {
          layer: 'pocket',
          url: 'https://example.com/trousers-pocket-1327.jpg',
        },
        {
          layer: 'button',
          url: 'https://example.com/trousers-button-1327.jpg',
        },
      ],
      trousers: [
        { layer: 'full', url: 'https://example.com/trousers-full-1327.jpg' },
        {
          layer: 'pocket',
          url: 'https://example.com/trousers-pocket-1327.jpg',
        },
        {
          layer: 'button',
          url: 'https://example.com/trousers-button-1327.jpg',
        },
      ],
    },
    description: `Luxurious S110's wool with exceptional softness and durability.`,
    composition: '100% S110 Wool',
    category: ['business'],
    care: 'Professional dry cleaning recommended',
  },
  {
    id: '1630',
    name: `Light Grey Pure S110's Wool`,
    price: '873',
    images: {
      fabric: {
        layer: 'base',
        url: 'https://cdn.suitsupply.com/image/upload/b_rgb:ffffff,c_fit,f_auto,h_450,q_auto:good,w_450/products/cm-sample/default/S10.712-192_23',
      },
      jacket: [
        { layer: 'full', url: 'https://example.com/trousers-full-1327.jpg' },
        {
          layer: 'pocket',
          url: 'https://example.com/trousers-pocket-1327.jpg',
        },
        {
          layer: 'button',
          url: 'https://example.com/trousers-button-1327.jpg',
        },
      ],
      trousers: [
        { layer: 'full', url: 'https://example.com/trousers-full-1327.jpg' },
        {
          layer: 'pocket',
          url: 'https://example.com/trousers-pocket-1327.jpg',
        },
        {
          layer: 'button',
          url: 'https://example.com/trousers-button-1327.jpg',
        },
      ],
    },
    description: 'Elegant light blue tropical wool, ideal for summer suits.',
    composition: '100% Pure Wool',
    category: ['business', 'best sellers'],
    care: 'Gentle dry clean, store on wide hangers',
  },
  {
    id: '1669',
    name: 'Light Grey Pure Tropical Wool',
    price: '673',
    images: {
      fabric: {
        layer: 'base',
        url: 'https://cdn.suitsupply.com/image/upload/b_rgb:ffffff,c_fit,f_auto,h_450,q_auto:good,w_450/products/cm-sample/default/S595.401-2_23',
      },
      jacket: [
        { layer: 'full', url: 'https://example.com/trousers-full-1327.jpg' },
        {
          layer: 'pocket',
          url: 'https://example.com/trousers-pocket-1327.jpg',
        },
        {
          layer: 'button',
          url: 'https://example.com/trousers-button-1327.jpg',
        },
      ],
      trousers: [
        { layer: 'full', url: 'https://example.com/trousers-full-1327.jpg' },
        {
          layer: 'pocket',
          url: 'https://example.com/trousers-pocket-1327.jpg',
        },
        {
          layer: 'button',
          url: 'https://example.com/trousers-button-1327.jpg',
        },
      ],
    },
    description: `Classic mid-blue S110's wool for versatile, refined styling.`,
    composition: '100% S110 Wool',
    category: ['best sellers'],
    care: 'Professional dry cleaning, avoid moisture',
  },
  {
    id: '1420',
    name: 'Light Brown Circular Wool Flannel',
    price: '873',
    images: {
      fabric: {
        layer: 'base',
        url: 'https://cdn.suitsupply.com/image/upload/b_rgb:ffffff,c_fit,f_auto,h_450,q_auto:good,w_450/products/cm-sample/default/S504.801-360_23',
      },
      jacket: [
        { layer: 'full', url: 'https://example.com/trousers-full-1327.jpg' },
        {
          layer: 'pocket',
          url: 'https://example.com/trousers-pocket-1327.jpg',
        },
        {
          layer: 'button',
          url: 'https://example.com/trousers-button-1327.jpg',
        },
      ],
      trousers: [
        { layer: 'full', url: 'https://example.com/trousers-full-1327.jpg' },
        {
          layer: 'pocket',
          url: 'https://example.com/trousers-pocket-1327.jpg',
        },
        {
          layer: 'button',
          url: 'https://example.com/trousers-button-1327.jpg',
        },
      ],
    },
    description:
      'A lightweight, breathable tropical wool perfect for warm climates.',
    composition: '100% Pure Wool',
    category: ['business', 'best sellers'],
    care: 'Dry clean only, avoid direct sunlight',
  },
  {
    id: '1457',
    name: 'Off-White Herringbone Pure Wool',
    price: '873',
    images: {
      fabric: {
        layer: 'base',
        url: 'https://cdn.suitsupply.com/image/upload/b_rgb:ffffff,c_fit,f_auto,h_450,q_auto:good,w_450/products/cm-sample/default/S2301T.20-52R_23',
      },
      jacket: [
        { layer: 'full', url: 'https://example.com/trousers-full-1327.jpg' },
        {
          layer: 'pocket',
          url: 'https://example.com/trousers-pocket-1327.jpg',
        },
        {
          layer: 'button',
          url: 'https://example.com/trousers-button-1327.jpg',
        },
      ],
      trousers: [
        { layer: 'full', url: 'https://example.com/trousers-full-1327.jpg' },
        {
          layer: 'pocket',
          url: 'https://example.com/trousers-pocket-1327.jpg',
        },
        {
          layer: 'button',
          url: 'https://example.com/trousers-button-1327.jpg',
        },
      ],
    },
    description:
      'A lightweight, breathable tropical wool perfect for warm climates.',
    composition: '100% Pure Wool',
    category: ['best sellers'],
    care: 'Dry clean only, avoid direct sunlight',
  },
  {
    id: '1410',
    name: 'Mid Grey Check Wool Cashmere',
    price: '1033',
    images: {
      fabric: {
        layer: 'base',
        url: 'https://cdn.suitsupply.com/image/upload/b_rgb:ffffff,c_fit,f_auto,h_450,q_auto:good,w_450/products/cm-sample/default/S62694-1_23',
      },
      jacket: [
        { layer: 'full', url: 'https://example.com/trousers-full-1327.jpg' },
        {
          layer: 'pocket',
          url: 'https://example.com/trousers-pocket-1327.jpg',
        },
        {
          layer: 'button',
          url: 'https://example.com/trousers-button-1327.jpg',
        },
      ],
      trousers: [
        { layer: 'full', url: 'https://example.com/trousers-full-1327.jpg' },
        {
          layer: 'pocket',
          url: 'https://example.com/trousers-pocket-1327.jpg',
        },
        {
          layer: 'button',
          url: 'https://example.com/trousers-button-1327.jpg',
        },
      ],
    },
    description:
      'A lightweight, breathable tropical wool perfect for warm climates.',
    composition: '100% Pure Wool',
    category: ['business'],
    care: 'Dry clean only, avoid direct sunlight',
  },
  {
    id: '1320',
    name: 'Mid Green Pure Tropical Wool',
    price: '673',
    images: {
      fabric: {
        layer: 'base',
        url: 'https://cdn.suitsupply.com/image/upload/b_rgb:ffffff,c_fit,f_auto,h_450,q_auto:good,w_450/products/cm-sample/default/S595.401-57_23',
      },
      jacket: [
        { layer: 'full', url: 'https://example.com/trousers-full-1327.jpg' },
        {
          layer: 'pocket',
          url: 'https://example.com/trousers-pocket-1327.jpg',
        },
        {
          layer: 'button',
          url: 'https://example.com/trousers-button-1327.jpg',
        },
      ],
      trousers: [
        { layer: 'full', url: 'https://example.com/trousers-full-1327.jpg' },
        {
          layer: 'pocket',
          url: 'https://example.com/trousers-pocket-1327.jpg',
        },
        {
          layer: 'button',
          url: 'https://example.com/trousers-button-1327.jpg',
        },
      ],
    },
    description:
      'A lightweight, breathable tropical wool perfect for warm climates.',
    composition: '100% Pure Wool',
    category: ['business', 'best sellers'],
    care: 'Dry clean only, avoid direct sunlight',
  },
  {
    id: '1397',
    name: `Dark Grey Pure S110's Wool`,
    price: '673',
    images: {
      fabric: {
        layer: 'base',
        url: 'https://cdn.suitsupply.com/image/upload/b_rgb:ffffff,c_fit,f_auto,h_450,q_auto:good,w_450/products/cm-sample/default/S5057-4_23',
      },
      jacket: [
        { layer: 'full', url: 'https://example.com/trousers-full-1327.jpg' },
        {
          layer: 'pocket',
          url: 'https://example.com/trousers-pocket-1327.jpg',
        },
        {
          layer: 'button',
          url: 'https://example.com/trousers-button-1327.jpg',
        },
      ],
      trousers: [
        { layer: 'full', url: 'https://example.com/trousers-full-1327.jpg' },
        {
          layer: 'pocket',
          url: 'https://example.com/trousers-pocket-1327.jpg',
        },
        {
          layer: 'button',
          url: 'https://example.com/trousers-button-1327.jpg',
        },
      ],
    },
    description: `Luxurious S110's wool with exceptional softness and durability.`,
    composition: '100% S110 Wool',
    category: ['business'],
    care: 'Professional dry cleaning recommended',
  },
  {
    id: '1632',
    name: 'Light Blue Pure Tropical Wool',
    price: '673',
    images: {
      fabric: {
        layer: 'base',
        url: 'https://cdn.suitsupply.com/image/upload/b_rgb:ffffff,c_fit,f_auto,h_450,q_auto:good,w_450/products/cm-sample/default/S595.201-30_23',
      },
      jacket: [
        { layer: 'full', url: 'https://example.com/trousers-full-1327.jpg' },
        {
          layer: 'pocket',
          url: 'https://example.com/trousers-pocket-1327.jpg',
        },
        {
          layer: 'button',
          url: 'https://example.com/trousers-button-1327.jpg',
        },
      ],
      trousers: [
        { layer: 'full', url: 'https://example.com/trousers-full-1327.jpg' },
        {
          layer: 'pocket',
          url: 'https://example.com/trousers-pocket-1327.jpg',
        },
        {
          layer: 'button',
          url: 'https://example.com/trousers-button-1327.jpg',
        },
      ],
    },
    description: 'Elegant light blue tropical wool, ideal for summer suits.',
    composition: '100% Pure Wool',
    category: ['best sellers'],
    care: 'Gentle dry clean, store on wide hangers',
  },
  {
    id: '1661',
    name: `Mid Blue Pure S110's Wool`,
    price: '873',
    images: {
      fabric: {
        layer: 'base',
        url: 'https://cdn.suitsupply.com/image/upload/b_rgb:ffffff,c_fit,f_auto,h_450,q_auto:good,w_450/products/cm-sample/default/S586.861-780_23',
      },
      jacket: [
        { layer: 'full', url: 'https://example.com/trousers-full-1327.jpg' },
        {
          layer: 'pocket',
          url: 'https://example.com/trousers-pocket-1327.jpg',
        },
        {
          layer: 'button',
          url: 'https://example.com/trousers-button-1327.jpg',
        },
      ],
      trousers: [
        { layer: 'full', url: 'https://example.com/trousers-full-1327.jpg' },
        {
          layer: 'pocket',
          url: 'https://example.com/trousers-pocket-1327.jpg',
        },
        {
          layer: 'button',
          url: 'https://example.com/trousers-button-1327.jpg',
        },
      ],
    },
    description: `Classic mid-blue S110's wool for versatile, refined styling.`,
    composition: '100% S110 Wool',
    category: ['business', 'best sellers'],
    care: 'Professional dry cleaning, avoid moisture',
  },
  {
    id: '1411',
    name: `Dark Blue Pure S120's Wool Flannel`,
    price: '873',
    images: {
      fabric: {
        layer: 'base',
        url: 'https://cdn.suitsupply.com/image/upload/b_rgb:ffffff,c_fit,f_auto,h_450,q_auto:good,w_450/products/cm-sample/default/S599.101-855_23',
      },
      jacket: [
        { layer: 'full', url: 'https://example.com/trousers-full-1327.jpg' },
        {
          layer: 'pocket',
          url: 'https://example.com/trousers-pocket-1327.jpg',
        },
        {
          layer: 'button',
          url: 'https://example.com/trousers-button-1327.jpg',
        },
      ],
      trousers: [
        { layer: 'full', url: 'https://example.com/trousers-full-1327.jpg' },
        {
          layer: 'pocket',
          url: 'https://example.com/trousers-pocket-1327.jpg',
        },
        {
          layer: 'button',
          url: 'https://example.com/trousers-button-1327.jpg',
        },
      ],
    },
    description:
      'A lightweight, breathable tropical wool perfect for warm climates.',
    composition: '100% Pure Wool',
    category: ['best sellers'],
    care: 'Dry clean only, avoid direct sunlight',
  },
];
