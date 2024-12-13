import {
  FabricGroup,
  JacketType,
  Product,
  TrouserType,
  WaistcoatType,
} from '../types/customsuit';
export const fabricGroups: FabricGroup[] = [
  {
    id: 1,
    name: 'All Fabrics',
    itemCount: 12,
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
    itemCount: 10,
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
    itemCount: 9,
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
    itemCount: 8,
    images: [
      'https://cdn.suitsupply.com/image/upload/b_rgb:ffffff,c_fit,f_auto,h_450,q_auto:good,w_450/products/cm-sample/default/S504.801-360_23',
      'https://cdn.suitsupply.com/image/upload/b_rgb:ffffff,c_fit,f_auto,h_450,q_auto:good,w_450/products/cm-sample/default/S2301T.20-52R_23',
      'https://cdn.suitsupply.com/image/upload/b_rgb:ffffff,c_fit,f_auto,h_450,q_auto:good,w_450/products/cm-sample/default/S62694-1_23',
      'https://cdn.suitsupply.com/image/upload/b_rgb:ffffff,c_fit,f_auto,h_450,q_auto:good,w_450/products/cm-sample/default/S599.101-855_23',
    ],
  },
];

export const jacket: JacketType[] = [
  {
    id: 1,
    name: 'Товчлолт',
    image:
      'https://cdn.suitsupply.com/image/upload/suitconfig/S854.601-9798/Fabricthumbnail/MBN2',
    variations: [
      {
        name: '1 товчтой',
        description:
          'Хар зангиатай арга хэмжээнд тохиромжтой, бие барьсан бөгөөд сайхан оёдолтой харагдана.',
        url: 'https://cdn.suitsupply.com/image/upload/suitconfig/S854.601-9798/Fabricthumbnail/MBN1',
      },
      {
        name: '2 товчтой',
        description:
          'Стандарт 2 товч нь орчин үеийн, олон талт дүр төрхийг бий болгодог.',
        url: 'https://cdn.suitsupply.com/image/upload/suitconfig/S854.601-9798/Fabricthumbnail/MBN2',
      },
      {
        name: '2.5 товчтой',
        description:
          'Энгэр дээр нэмэлт товчтой загвар нь гоёмсог, загварлаг харагдуулах зориулалттай.',
        url: 'https://cdn.suitsupply.com/image/upload/suitconfig/S854.601-9798/Fabricthumbnail/MBN2.5',
      },
      {
        name: '4 хос товчтой',
        description:
          'Сонгодог загварыг залуу, илүү нарийн хувилбараар санал болгодог.',
        url: 'https://cdn.suitsupply.com/image/upload/suitconfig/S854.601-9798/Fabricthumbnail/MBN4DB',
      },
      {
        name: '6 хос товчтой',
        description:
          'Давхар товчтой сонгодог загварыг орчин үеийн хэлбэрээр илэрхийлнэ.',
        url: 'https://cdn.suitsupply.com/image/upload/suitconfig/S854.601-9798/Fabricthumbnail/MBN6DB',
      },
      {
        name: '6 хос доор товчтой',
        description:
          'Доор байрласан 6 товч нь спортлог, сонгодог хэв маягийг харуулна.',
        url: 'https://cdn.suitsupply.com/image/upload/suitconfig/S854.601-9798/Fabricthumbnail/MBNL6DB',
      },
    ],
  },
  {
    id: 2,
    name: 'Товч',
    image:
      'https://cdn.suitsupply.com/image/upload/custommade/thumbs2/buttons_v2/TFH01',
    variations: {
      button: [
        {
          name: 'Хар хүрэн',
          price: 0,
          url: 'https://cdn.suitsupply.com/image/upload/custommade/thumbs2/buttons_v2/TFH01',
        },
        {
          name: 'Хар хүрэн алаг',
          price: 0,
          url: 'https://cdn.suitsupply.com/image/upload/custommade/thumbs2/buttons_v2/B09',
        },
        {
          name: 'Цайвар ба хар хүрэн',
          price: 5000,
          url: 'https://cdn.suitsupply.com/image/upload/custommade/thumbs2/buttons_v2/TRH02',
        },
        {
          name: 'Цагаан ба бор',
          price: 0,
          url: 'https://cdn.suitsupply.com/image/upload/custommade/thumbs2/buttons_v2/STR',
        },
        {
          name: 'Цайвар саарал ба нүүрсэн саарал',
          price: 0,
          url: 'https://cdn.suitsupply.com/image/upload/custommade/thumbs2/buttons_v2/G4',
        },
      ],
      sleeve: [
        {
          name: '3 дараалсан товч',
          price: 0,
          url: 'https://cdn.suitsupply.com/image/upload/suitconfig/S854.601-9798/Fabricthumbnail/SB3KB1',
          description:
            'Эдгээр 3 дараалсан товч нь гоёмсог, хувцасны өвөрмөц чимэглэл болдог.',
        },
        {
          name: '4 дараалсан товч',
          price: 0,
          url: 'https://cdn.suitsupply.com/image/upload/suitconfig/S854.601-9798/Fabricthumbnail/SB4KB2',
          description:
            'Эдгээр 4 дараалсан товч нь гоёмсог, хувцасны өвөрмөц чимэглэл болдог.',
        },
        {
          name: '5 дараалсан товч',
          price: 0,
          url: 'https://cdn.suitsupply.com/image/upload/suitconfig/S854.601-9798/Fabricthumbnail/SB5KB4',
          description:
            'Эдгээр 5 дараалсан товч нь гоёмсог, хувцасны өвөрмөц чимэглэл болдог.',
        },
      ],
    },
  },
  {
    id: 3,
    name: 'Доторлогоо',
    image:
      'https://cdn.suitsupply.com/image/upload/suitconfig/S854.601-9798/Fabricthumbnail/LFL1',
    variations: {
      lining: [
        {
          name: 'Бүрэн доторлогоо',
          price: 0,
          url: 'https://cdn.suitsupply.com/image/upload/suitconfig/S854.601-9798/Fabricthumbnail/LFL1',
          description: `Хүрэмний их бие болон ханцуйг бүхэлд нь доторлосон загвар.`,
        },
        {
          name: 'Хагас доторлогоо',
          price: 0,
          url: 'https://cdn.suitsupply.com/image/upload/suitconfig/S854.601-9798/Fabricthumbnail/LHL2',
          description: `Доторлогоо нь хүрэмний дээд хэсэг болон ханцуйнд байршдаг.`,
        },
        {
          name: 'Эрвээхий доторлогоо',
          price: 10000,
          url: 'https://cdn.suitsupply.com/image/upload/suitconfig/S854.601-9798/Fabricthumbnail/LBF4',
          description:
            'Гар хийцийн доторлогоо нь хүрэмний дээд ар хэсэгт байрладаг.',
        },
        {
          name: 'Доторгүй',
          price: 10000,
          url: 'https://cdn.suitsupply.com/image/upload/suitconfig/S854.601-9798/Fabricthumbnail/LUN3',
          description:
            'Доторгүй загвар нь зөвхөн ханцуйнд доторлогоотой бөгөөд их биед байхгүй.',
        },
      ],
      color: [
        {
          name: 'Цагаан',
          url: 'https://cdn.suitsupply.com/image/upload/custommade/thumbs2/lining_ui_v3/1098',
        },
        {
          name: 'Бэйж',
          url: 'https://cdn.suitsupply.com/image/upload/custommade/thumbs2/lining_ui_v3/1106',
        },
        {
          name: 'Цайвар саарал',
          url: 'https://cdn.suitsupply.com/image/upload/custommade/thumbs2/lining_ui_v3/3220',
        },
        {
          name: 'Хар',
          url: 'https://cdn.suitsupply.com/image/upload/custommade/thumbs2/lining_ui_v3/100',
        },
        {
          name: 'Бор хээтэй',
          url: 'https://cdn.suitsupply.com/image/upload/custommade/thumbs2/lining_ui_v3/CL0677-100',
        },
      ],
    },
  },
  {
    id: 4,
    name: 'Энгэр',
    image:
      'https://cdn.suitsupply.com/image/upload/suitconfig/S854.601-9798/Fabricthumbnail/LN1',

    variations: {
      lapel: [
        {
          name: 'Өнцөгтэй',
          price: 0,
          url: 'https://cdn.suitsupply.com/image/upload/suitconfig/S854.601-9798/Fabricthumbnail/LP2',
        },
        {
          name: 'Шулуун өнцөгтэй',
          price: 0,
          url: 'https://cdn.suitsupply.com/image/upload/suitconfig/S854.601-9798/Fabricthumbnail/LP4',
        },
      ],
      width: [
        {
          name: 'Нарийн',
          price: 0,
          url: 'https://cdn.suitsupply.com/image/upload/suitconfig/S854.601-9798/Fabricthumbnail/RPLWN1',
        },
        {
          name: 'Стандарт',
          price: 0,
          url: 'https://cdn.suitsupply.com/image/upload/suitconfig/S854.601-9798/Fabricthumbnail/RPLWS2',
        },
      ],
    },
  },
  {
    id: 5,
    name: 'Монограм',
    image:
      'https://cdn.suitsupply.com/image/upload/custommade/thumbs2/monogramStyle/jacket/MOI1N',
    variations: [
      {
        name: 'Хүрэмний дотор талд',
        price: 0,
        url: 'https://cdn.suitsupply.com/image/upload/suitconfig/S854.601-9798/Fabricthumbnail/MOL1',
      },
      {
        name: 'Энгэрийн доод талд',
        price: 0,
        url: 'https://cdn.suitsupply.com/image/upload/suitconfig/S854.601-9798/Fabricthumbnail/MOL2',
      },
    ],
  },
];

export const trousers: TrouserType[] = [
  {
    id: 1,
    name: 'Бүсэлхий',
    image:
      'https://cdn.suitsupply.com/image/upload/suitconfig/S854.601-9798/Fabricthumbnail/WBBR3',
    variations: {
      waistband: [
        {
          name: 'Стандарт товчтой',
          description: 'Ил товчтой сонгодог, шулуун бүсэлхийн бүс.',
          url: 'https://cdn.suitsupply.com/image/upload/suitconfig/S854.601-9798/Fabricthumbnail/WBBR7',
        },
        {
          name: 'Стандарт далд товчтой',
          description: 'Дөрвөлжин далд, ганц далд товчтой сонгодог загвар.',
          url: 'https://cdn.suitsupply.com/image/upload/suitconfig/S854.601-9798/Fabricthumbnail/WBWA6',
        },
        {
          name: 'Хажуугийн резинтэй',
          description: 'Тал сунадаг резин болон уяатай загвар',
          url: 'https://cdn.suitsupply.com/image/upload/suitconfig/S854.601-9798/Fabricthumbnail/WBAPES10',
        },
      ],
      details: [
        {
          name: 'Бүсний гогцоотой',
          description: 'Сонгодог, бүстэй болон бүсгүйгээр өмсөхөд тохиромжтой.',
          url: 'https://cdn.suitsupply.com/image/upload/suitconfig/S854.601-9798/Fabricthumbnail/WBBL1',
        },
        {
          name: 'Хажуугийн тохируулагч',
          description:
            'Энэ загвар нь бүсэлхийн хажуу талд барлалтай, арын хэсэгтээ уртассан давуун чимэглэлтэй.',
          url: 'https://cdn.suitsupply.com/image/upload/suitconfig/S854.601-9798/Fabricthumbnail/WBLSA5',
        },
        {
          name: 'Далавчтай тохируулагч',
          description: `Энэхүү загвар нь бүсэлхийн хажуу талд байрлан, арын хэсэгтээ уртассан чимэглэлтэй.`,
          url: 'https://cdn.suitsupply.com/image/upload/suitconfig/S854.601-9798/Fabricthumbnail/WBWSA6',
        },
        {
          name: 'Хоосон',
          description:
            'Цэвэр, минималист өнгөлгөө өгөхийн тулд хажуугийн тохируулагч эсвэл бүсний гогцоо байхгүй',
          url: 'https://cdn.suitsupply.com/image/upload/suitconfig/S854.601-9798/Fabricthumbnail/WBNO3',
        },
      ],
    },
  },
  {
    id: 2,
    name: 'Халаас',
    image:
      'https://cdn.suitsupply.com/image/upload/suitconfig/S854.601-9798/Fabricthumbnail/FPSL1',
    variations: [
      {
        name: 'Налуу',
        price: 0,
        description:
          'Хамгийн түгээмэл хэв маяг, налуу халаас нь энгийн болон албан ёсны үйл явдлуудад хангалттай уян хатан байдаг.',
        url: 'https://cdn.suitsupply.com/image/upload/suitconfig/S854.601-9798/Fabricthumbnail/FPSL1',
      },
      {
        name: 'Дотор оруулгатай',
        price: 0,
        description:
          'Албан ёсны, зөвхөн гоо зүйн шинж чанартай халааснууд нь даавуунд зүсэгдсэн нарийн зүссэн зүсэлтээр тодорхойлогддог.',
        url: 'https://cdn.suitsupply.com/image/upload/suitconfig/S854.601-9798/Fabricthumbnail/FPJ2',
      },
      {
        name: 'Нугаламын дагуу',
        price: 0,
        description:
          'Хажуугийн оёдолд халаас суурилуулсан. Тэд цэвэрхэн, оновчтой дүрсийг өгдөг.',
        url: 'https://cdn.suitsupply.com/image/upload/suitconfig/S854.601-9798/Fabricthumbnail/FPSE3',
      },
    ],
  },
  {
    id: 3,
    name: 'Нугалам',
    image:
      'https://cdn.suitsupply.com/image/upload/suitconfig/S854.601-9798/Fabricthumbnail/PLS2',
    variations: [
      {
        name: 'Байхгүй',
        price: 0,
        url: 'https://cdn.suitsupply.com/image/upload/suitconfig/S854.601-9798/Fabricthumbnail/PLNO1',
        description: `Хавтгай нүүртэй гэгддэг хуниасгүй өмд нь хөлний хажууд хэвтэх нь нямбай, уян хатан байдлыг бий болгодог.`,
      },
      {
        name: 'Стандарт 1 нугаламтай',
        price: 0,
        url: 'https://cdn.suitsupply.com/image/upload/suitconfig/S854.601-9798/Fabricthumbnail/PLS2',
        description: 'Стандарт дан атираа нь хажуугийн давхарга руу нээгдэнэ.',
      },
      {
        name: 'Стандарт 2 нугаламтай',
        price: 0,
        url: 'https://cdn.suitsupply.com/image/upload/suitconfig/S854.601-9798/Fabricthumbnail/PLD3',
        description:
          'Давхар стандарт атираа нь хажуугийн давхарга руу нээгдэнэ.',
      },
      {
        name: 'Урагш 1 нугаламтай',
        price: 0,
        url: 'https://cdn.suitsupply.com/image/upload/suitconfig/S854.601-9798/Fabricthumbnail/PLRS4',
        description: 'Урд талын дан атираа хонгил руу нээнэ.',
      },
      {
        name: 'Урагш 2 нугаламтай',
        price: 0,
        url: 'https://cdn.suitsupply.com/image/upload/suitconfig/S854.601-9798/Fabricthumbnail/PLRD5',
        description: 'Давхар урагш атираа нь хонгил руу нээнэ.',
      },
    ],
  },
  {
    id: 4,
    name: 'Шуумаг',
    image:
      'https://cdn.suitsupply.com/image/upload/suitconfig/S854.601-9798/Fabricthumbnail/THFT5cm3',

    variations: [
      {
        name: 'Оёогүй',
        price: 0,
        url: 'https://cdn.suitsupply.com/image/upload/suitconfig/S854.601-9798/Fabricthumbnail/THFUF4',
        description:
          'Дуусаагүй зах нь 11 сантиметр нэмэлт даавууг санал болгодог бөгөөд энэ нь өмднийхөө хэв маягийг дуусгах боломжийг танд олгоно.',
      },
      {
        name: 'Цэвэрхэн оёдолтой',
        price: 0,
        url: 'https://cdn.suitsupply.com/image/upload/suitconfig/S854.601-9798/Fabricthumbnail/THFP1',
        description:
          'Эгжээтэй өмд нь өмдний хөлийг дотор нь нугалж, доод даавууг цэвэрхэн болгодог.',
      },
      {
        name: '4 см нугалсан',
        price: 0,
        url: 'https://cdn.suitsupply.com/image/upload/suitconfig/S854.601-9798/Fabricthumbnail/THFT4cm2',
        description:
          '4 см-ийн ханцуйвч нь оймсыг илүү харуулж, өндрийг хуурмаг болгож, илүү сайхан хөшигний жин нэмдэг.',
      },
      {
        name: '5 см нугалсан',
        price: 0,
        url: 'https://cdn.suitsupply.com/image/upload/suitconfig/S854.601-9798/Fabricthumbnail/THFT5cm3',
        description:
          'Тод 5 см-ийн ханцуйвч нь илүү оймс эсвэл шагайг харуулж, өндрийн хуурмаг байдлыг өгч, илүү сайхан хөшигний жин нэмдэг.',
      },
    ],
  },
  {
    id: 5,
    name: 'Товч',
    image:
      'https://cdn.suitsupply.com/image/upload/custommade/thumbs2/buttons_v2/TFH01',
    variations: [
      {
        name: 'Хар хүрэн',
        price: 0,
        url: 'https://cdn.suitsupply.com/image/upload/custommade/thumbs2/buttons_v2/TFH01',
      },
      {
        name: 'Хар хүрэн алаг',
        price: 0,
        url: 'https://cdn.suitsupply.com/image/upload/custommade/thumbs2/buttons_v2/B09',
      },
      {
        name: 'Цайвар ба хар хүрэн',
        price: 5000,
        url: 'https://cdn.suitsupply.com/image/upload/custommade/thumbs2/buttons_v2/TRH02',
      },
      {
        name: 'Цагаан ба бор',
        price: 0,
        url: 'https://cdn.suitsupply.com/image/upload/custommade/thumbs2/buttons_v2/STR',
      },
      {
        name: 'Цайвар саарал ба нүүрсэн саарал',
        price: 0,
        url: 'https://cdn.suitsupply.com/image/upload/custommade/thumbs2/buttons_v2/G4',
      },
    ],
  },
];

export const waistcoat: WaistcoatType[] = [
  {
    id: 1,
    name: 'Товчлолт',
    image:
      'https://cdn.suitsupply.com/image/upload/suitconfig/S854.601-9798/Fabricthumbnail/CSB5BN2',
    variations: [
      {
        name: '4 товчтой',
        description:
          'This classic single-breasted waistcoat is crafted with 4 buttons.',
        url: 'https://cdn.suitsupply.com/image/upload/suitconfig/S854.601-9798/Fabricthumbnail/CSB4BN1',
      },
      {
        name: '5 товчтой',
        description:
          'This classic single-breasted waistcoat is crafted with 5 buttons.',
        url: 'https://cdn.suitsupply.com/image/upload/suitconfig/S854.601-9798/Fabricthumbnail/CSB5BN2',
      },
      {
        name: '6 товчтой',
        description:
          'This classic single-breasted waistcoat is crafted with 6 buttons.',
        url: 'https://cdn.suitsupply.com/image/upload/suitconfig/S854.601-9798/Fabricthumbnail/CSB6BN3',
      },
    ],
  },
  {
    id: 2,
    name: 'Энгэр',
    image:
      'https://cdn.suitsupply.com/image/upload/suitconfig/S854.601-9798/Fabricthumbnail/STVS1',
    variations: [
      {
        name: 'V хэлбэрийн',
        price: 0,
        description:
          'A common style for casual layering, without lapels for a clean finish.',
        url: 'https://cdn.suitsupply.com/image/upload/suitconfig/S854.601-9798/Fabricthumbnail/STVS1',
      },
      {
        name: 'Ердийн энгэртэй',
        price: 0,
        description:
          'For a versatile styling accent that add a fuller look to single-breasted waistcoats.',
        url: 'https://cdn.suitsupply.com/image/upload/suitconfig/S854.601-9798/Fabricthumbnail/STNL2',
      },
      {
        name: 'Өнцөгтэй энгэртэй',
        price: 0,
        description:
          'Classic and refined, peak lapels bring a touch of timeless elegance.',
        url: 'https://cdn.suitsupply.com/image/upload/suitconfig/S854.601-9798/Fabricthumbnail/STPL3',
      },
      {
        name: 'U хэлбэрийн',
        price: 0,
        description:
          'A formal pick, featuring a deep, rounded neckline and a collar with no lapel.',
        url: 'https://cdn.suitsupply.com/image/upload/suitconfig/S854.601-9798/Fabricthumbnail/STUU1',
      },
    ],
  },
  {
    id: 3,
    name: 'Халаас',
    image:
      'https://cdn.suitsupply.com/image/upload/suitconfig/S854.601-9798/Fabricthumbnail/SPJP3',
    variations: [
      {
        name: 'Ил байрлалтай',
        price: 0,
        url: 'https://cdn.suitsupply.com/image/upload/suitconfig/S854.601-9798/Fabricthumbnail/SPSP2',
        description:
          'Straight pockets are a common style featuring a pocket affixed to the inside of a lined garment.',
      },
      {
        name: 'Дотор оруулгатай',
        price: 0,
        url: 'https://cdn.suitsupply.com/image/upload/suitconfig/S854.601-9798/Fabricthumbnail/SPJP3',
        description:
          'Formal & exclusively aesthetic, jetted pockets are defined by a fine trimmed slit cut into the fabric.',
      },
    ],
  },
  {
    id: 4,
    name: 'Нуруу',
    image:
      'https://cdn.suitsupply.com/image/upload/suitconfig/S854.601-9798/Fabricthumbnail/BSL1',

    variations: [
      {
        name: 'Торгон дотортой',
        price: 0,
        url: 'https://cdn.suitsupply.com/image/upload/suitconfig/S854.601-9798/Fabricthumbnail/BSL1',
        description:
          'This more formal style of waistcoat features a silk-lined back and is usually part of a 3-piece suit.',
      },
      {
        name: 'Даавуун дотортой',
        price: 0,
        url: 'https://cdn.suitsupply.com/image/upload/suitconfig/S854.601-9798/Fabricthumbnail/BSF2',
        description:
          'This more casual style of waistcoat features a fabric-lined back and is perfect to wear as a separate.',
      },
    ],
  },
  {
    id: 5,
    name: 'Доторлогоо',
    image:
      'https://cdn.suitsupply.com/image/upload/custommade/thumbs2/lining_ui_v3/1098',
    variations: [
      {
        name: 'Цагаан',
        price: 0,
        url: 'https://cdn.suitsupply.com/image/upload/custommade/thumbs2/lining_ui_v3/1098',
      },
      {
        name: 'Бэйж',
        price: 0,
        url: 'https://cdn.suitsupply.com/image/upload/custommade/thumbs2/lining_ui_v3/1106',
      },
      {
        name: 'Цайвар бор',
        price: 0,
        url: 'https://cdn.suitsupply.com/image/upload/custommade/thumbs2/lining_ui_v3/1107',
      },
      {
        name: 'Цайвар саарал',
        price: 0,
        url: 'https://cdn.suitsupply.com/image/upload/custommade/thumbs2/lining_ui_v3/3220',
      },
      {
        name: 'Гүн хөх',
        price: 0,
        url: 'https://cdn.suitsupply.com/image/upload/custommade/thumbs2/lining_ui_v3/9680',
      },
      {
        name: 'Хар',
        price: 0,
        url: 'https://cdn.suitsupply.com/image/upload/custommade/thumbs2/lining_ui_v3/100',
      },
    ],
  },
  {
    id: 5,
    name: 'Товч',
    image:
      'https://cdn.suitsupply.com/image/upload/custommade/thumbs2/buttons_v2/TFH01',
    variations: [
      {
        name: 'Хар хүрэн',
        price: 0,
        url: 'https://cdn.suitsupply.com/image/upload/custommade/thumbs2/buttons_v2/TFH01',
      },
      {
        name: 'Хар хүрэн алаг',
        price: 0,
        url: 'https://cdn.suitsupply.com/image/upload/custommade/thumbs2/buttons_v2/B09',
      },
      {
        name: 'Цайвар ба хар хүрэн',
        price: 5000,
        url: 'https://cdn.suitsupply.com/image/upload/custommade/thumbs2/buttons_v2/TRH02',
      },
      {
        name: 'Цагаан ба бор',
        price: 0,
        url: 'https://cdn.suitsupply.com/image/upload/custommade/thumbs2/buttons_v2/STR',
      },
      {
        name: 'Цайвар саарал ба нүүрсэн саарал',
        price: 0,
        url: 'https://cdn.suitsupply.com/image/upload/custommade/thumbs2/buttons_v2/G4',
      },
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
        {
          layer: 'full',
          url: 'https://cdn.suitsupply.com/image/upload/b_rgb:efefef,c_fit,f_auto,h_1125,q_auto:best,w_900/b_rgb:efefef,c_fit,f_auto,h_1125,l_suitconfig:Sdugdale-9412:Jacket:shoulder:MBN2_SS3,q_auto:good,w_900/suitconfig/Sdugdale-9412/Jacket/model/MBN2',
        },
        {
          layer: 'lining',
          url: 'https://cdn.suitsupply.com/image/upload/c_fit,f_auto,h_1125,q_auto:good,w_900/suitconfig/shared/lining/MBN2_LFL1_1098',
        },
        {
          layer: 'chest button',
          url: 'https://cdn.suitsupply.com/image/upload/c_fit,f_auto,h_1125,q_auto:good,w_900/suitconfig/Sdugdale-9412/Jacket/chest-pocket/MBN2_CPBS1',
        },
        {
          layer: 'lapel',
          url: 'https://cdn.suitsupply.com/image/upload/c_fit,f_auto,h_1125,q_auto:good,w_900/suitconfig/Sdugdale-9412/Jacket/lapel/MBN2_LN1_NLWS2',
        },
        {
          layer: 'pocket',
          url: 'https://cdn.suitsupply.com/image/upload/c_fit,f_auto,h_1125,q_auto:good,w_900/suitconfig/Sdugdale-9412/Jacket/pocket/MBN2_SPF5.5_TPN2',
        },
        {
          layer: 'button',
          url: 'https://cdn.suitsupply.com/image/upload/c_fit,f_auto,h_1125,q_auto:good,w_900/suitconfig/shared/buttons/MBN2_G8',
        },
        {
          layer: 'stitch',
          url: 'https://cdn.suitsupply.com/image/upload/c_fit,f_auto,h_1125,q_auto:good,w_900/suitconfig/S854.601-9798/Jacket/stitching/MBN2_LN1_NLWS2_HAMF2mm2',
        },
        {
          layer: 'base',
          url: 'https://cdn.suitsupply.com/image/upload/c_fit,f_auto,h_1125,q_auto:good,w_900/suitconfig/Sdugdale-9412/Jacket/stitching/MBN2_LN1_NLWS2_HAMF2mm2',
        },
      ],
      trousers: [
        {
          layer: 'full',
          url: 'https://cdn.suitsupply.com/image/upload/b_rgb:efefef,c_fit,f_auto,h_1125,q_auto:best,w_900/b_rgb:efefef,c_fit,f_auto,h_1125,l_suitconfig:Sdugdale-9412:Trousers:waistband:WBBR7_WBH1,q_auto:good,w_900/suitconfig/Sdugdale-9412/Trousers/construction/PLNO1',
        },
        {
          layer: 'seams',
          url: 'https://cdn.suitsupply.com/image/upload/c_fit,f_auto,h_1125,q_auto:good,w_900/suitconfig/Sdugdale-9412/Trousers/pocket/FPSL1',
        },
        {
          layer: 'belt loop',
          url: 'https://cdn.suitsupply.com/image/upload/c_fit,f_auto,h_1125,q_auto:good,w_900/suitconfig/Sdugdale-9412/Trousers/details/WBBL1_WBH1',
        },
        {
          layer: 'button 1',
          url: 'https://cdn.suitsupply.com/image/upload/c_fit,f_auto,h_1125,q_auto:good,w_900/suitconfig/shared/buttons/WBBR7_WBH1_G8',
        },
        {
          layer: 'button 2',
          url: 'https://cdn.suitsupply.com/image/upload/c_fit,f_auto,h_1125,q_auto:good,w_900/suitconfig/shared/buttons/WBBR7_WBH1_G8',
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
        {
          layer: 'full',
          url: 'https://cdn.suitsupply.com/image/upload/b_rgb:efefef,c_fit,f_auto,h_1125,q_auto:best,w_900/b_rgb:efefef,c_fit,f_auto,h_1125,l_suitconfig:S10.712-192:Jacket:shoulder:MBN2_SS3,q_auto:good,w_900/suitconfig/S10.712-192/Jacket/model/MBN2',
        },
        {
          layer: 'lining',
          url: 'https://cdn.suitsupply.com/image/upload/c_fit,f_auto,h_1125,q_auto:good,w_900/suitconfig/shared/lining/MBN2_LFL1_3220',
        },
        {
          layer: 'chest button',
          url: 'https://cdn.suitsupply.com/image/upload/c_fit,f_auto,h_1125,q_auto:good,w_900/suitconfig/S10.712-192/Jacket/chest-pocket/MBN2_CPBS1',
        },
        {
          layer: 'lapel',
          url: 'https://cdn.suitsupply.com/image/upload/c_fit,f_auto,h_1125,q_auto:good,w_900/suitconfig/S10.712-192/Jacket/lapel/MBN2_LN1_NLWS2',
        },
        {
          layer: 'pocket',
          url: 'https://cdn.suitsupply.com/image/upload/c_fit,f_auto,h_1125,q_auto:good,w_900/suitconfig/S10.712-192/Jacket/pocket/MBN2_SPF5.5_TPN2',
        },
        {
          layer: 'button',
          url: 'https://cdn.suitsupply.com/image/upload/c_fit,f_auto,h_1125,q_auto:good,w_900/suitconfig/shared/buttons/MBN2_NB04',
        },
        {
          layer: 'stitch',
          url: 'https://cdn.suitsupply.com/image/upload/c_fit,f_auto,h_1125,q_auto:good,w_900/suitconfig/S10.712-192/Jacket/stitching/MBN2_LN1_NLWS2_HAMF2mm2',
        },
        {
          layer: 'base',
          url: 'https://cdn.suitsupply.com/image/upload/c_fit,f_auto,h_1125,q_auto:good,w_900/suitconfig/S10.712-192/Jacket/stitching/MBN2_LN1_NLWS2_BHFUNC1',
        },
      ],
      trousers: [
        {
          layer: 'full',
          url: 'https://cdn.suitsupply.com/image/upload/b_rgb:efefef,c_fit,f_auto,h_1125,q_auto:best,w_900/b_rgb:efefef,c_fit,f_auto,h_1125,l_suitconfig:S10.712-192:Trousers:waistband:WBBR7_WBH1,q_auto:good,w_900/suitconfig/S10.712-192/Trousers/construction/PLNO1',
        },
        {
          layer: 'seams',
          url: 'https://cdn.suitsupply.com/image/upload/c_fit,f_auto,h_1125,q_auto:good,w_900/suitconfig/S10.712-192/Trousers/pocket/FPSL1',
        },
        {
          layer: 'belt loop',
          url: 'https://cdn.suitsupply.com/image/upload/c_fit,f_auto,h_1125,q_auto:good,w_900/suitconfig/S10.712-192/Trousers/details/WBBL1_WBH1',
        },
        {
          layer: 'button 1',
          url: 'https://cdn.suitsupply.com/image/upload/c_fit,f_auto,h_1125,q_auto:good,w_900/suitconfig/shared/buttons/WBBR7_WBH1_NB04',
        },
        {
          layer: 'button 2',
          url: 'https://cdn.suitsupply.com/image/upload/c_fit,f_auto,h_1125,q_auto:good,w_900/suitconfig/shared/buttons/WBBR7_WBH1_NB04',
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
        {
          layer: 'full',
          url: 'https://cdn.suitsupply.com/image/upload/b_rgb:efefef,c_fit,f_auto,h_1125,q_auto:best,w_900/b_rgb:efefef,c_fit,f_auto,h_1125,l_suitconfig:S595.401-2:Jacket:shoulder:MBN2_SS3,q_auto:good,w_900/suitconfig/S595.401-2/Jacket/model/MBN2',
        },
        {
          layer: 'lining',
          url: 'https://cdn.suitsupply.com/image/upload/c_fit,f_auto,h_1125,q_auto:good,w_900/suitconfig/shared/lining/MBN2_LFL1_1098',
        },
        {
          layer: 'chest button',
          url: 'https://cdn.suitsupply.com/image/upload/c_fit,f_auto,h_1125,q_auto:good,w_900/suitconfig/S595.401-2/Jacket/chest-pocket/MBN2_CPBS1',
        },
        {
          layer: 'lapel',
          url: 'https://cdn.suitsupply.com/image/upload/c_fit,f_auto,h_1125,q_auto:good,w_900/suitconfig/S595.401-2/Jacket/lapel/MBN2_LN1_NLWS2',
        },
        {
          layer: 'pocket',
          url: 'https://cdn.suitsupply.com/image/upload/c_fit,f_auto,h_1125,q_auto:good,w_900/suitconfig/S595.401-2/Jacket/pocket/MBN2_SPF5.5_TPN2',
        },
        {
          layer: 'button',
          url: 'https://cdn.suitsupply.com/image/upload/c_fit,f_auto,h_1125,q_auto:good,w_900/suitconfig/shared/buttons/MBN2_NB04',
        },
        {
          layer: 'stitch',
          url: 'https://cdn.suitsupply.com/image/upload/c_fit,f_auto,h_1125,q_auto:good,w_900/suitconfig/S595.401-2/Jacket/stitching/MBN2_LN1_NLWS2_HAMF2mm2',
        },
        {
          layer: 'base',
          url: 'https://cdn.suitsupply.com/image/upload/c_fit,f_auto,h_1125,q_auto:good,w_900/suitconfig/S595.401-2/Jacket/stitching/MBN2_LN1_NLWS2_BHFUNC1',
        },
      ],
      trousers: [
        {
          layer: 'full',
          url: 'https://cdn.suitsupply.com/image/upload/b_rgb:efefef,c_fit,f_auto,h_1125,q_auto:best,w_900/b_rgb:efefef,c_fit,f_auto,h_1125,l_suitconfig:S595.401-2:Trousers:waistband:WBBR7_WBH1,q_auto:good,w_900/suitconfig/S595.401-2/Trousers/construction/PLNO1',
        },
        {
          layer: 'seams',
          url: 'https://cdn.suitsupply.com/image/upload/c_fit,f_auto,h_1125,q_auto:good,w_900/suitconfig/S595.401-2/Trousers/pocket/FPSL1',
        },
        {
          layer: 'belt loop',
          url: 'https://cdn.suitsupply.com/image/upload/c_fit,f_auto,h_1125,q_auto:good,w_900/suitconfig/S595.401-2/Trousers/details/WBBL1_WBH1',
        },
        {
          layer: 'button 1',
          url: 'https://cdn.suitsupply.com/image/upload/c_fit,f_auto,h_1125,q_auto:good,w_900/suitconfig/shared/buttons/WBBR7_WBH1_NB04',
        },
        {
          layer: 'button 2',
          url: 'https://cdn.suitsupply.com/image/upload/c_fit,f_auto,h_1125,q_auto:good,w_900/suitconfig/shared/buttons/WBBR7_WBH1_NB04',
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
    name: 'Purple Wool Silk Linen',
    price: '1033',
    images: {
      fabric: {
        layer: 'base',
        url: 'https://cdn.suitsupply.com/image/upload/b_rgb:ffffff,c_fit,f_auto,h_450,q_auto:good,w_450/products/cm-sample/default/S711302-3_23',
      },
      jacket: [
        {
          layer: 'full',
          url: 'https://cdn.suitsupply.com/image/upload/b_rgb:efefef,c_fit,f_auto,h_1125,q_auto:best,w_900/b_rgb:efefef,c_fit,f_auto,h_1125,l_suitconfig:S711302-3:Jacket:shoulder:MBN2_SS3,q_auto:good,w_900/suitconfig/S711302-3/Jacket/model/MBN2',
        },
        {
          layer: 'lining',
          url: 'https://cdn.suitsupply.com/image/upload/c_fit,f_auto,h_1125,q_auto:good,w_900/suitconfig/shared/lining/MBN2_LFL1_1098',
        },
        {
          layer: 'chest button',
          url: 'https://cdn.suitsupply.com/image/upload/c_fit,f_auto,h_1125,q_auto:good,w_900/suitconfig/S711302-3/Jacket/chest-pocket/MBN2_CPBS1',
        },
        {
          layer: 'lapel',
          url: 'https://cdn.suitsupply.com/image/upload/c_fit,f_auto,h_1125,q_auto:good,w_900/suitconfig/S711302-3/Jacket/lapel/MBN2_LN1_NLWS2',
        },
        {
          layer: 'pocket',
          url: 'https://cdn.suitsupply.com/image/upload/c_fit,f_auto,h_1125,q_auto:good,w_900/suitconfig/S711302-3/Jacket/pocket/MBN2_SPF5.5_TPN2',
        },
        {
          layer: 'button',
          url: 'https://cdn.suitsupply.com/image/upload/c_fit,f_auto,h_1125,q_auto:good,w_900/suitconfig/shared/buttons/MBN2_TFH01',
        },
        {
          layer: 'stitch',
          url: 'https://cdn.suitsupply.com/image/upload/c_fit,f_auto,h_1125,q_auto:good,w_900/suitconfig/S711302-3/Jacket/stitching/MBN2_LN1_NLWS2_HAMF2mm2',
        },
        {
          layer: 'base',
          url: 'https://cdn.suitsupply.com/image/upload/c_fit,f_auto,h_1125,q_auto:good,w_900/suitconfig/S711302-3/Jacket/stitching/MBN2_LN1_NLWS2_BHFUNC1',
        },
      ],
      trousers: [
        {
          layer: 'full',
          url: 'https://cdn.suitsupply.com/image/upload/b_rgb:efefef,c_fit,f_auto,h_1125,q_auto:best,w_900/b_rgb:efefef,c_fit,f_auto,h_1125,l_suitconfig:S711302-3:Trousers:waistband:WBBR7_WBH1,q_auto:good,w_900/suitconfig/S711302-3/Trousers/construction/PLNO1',
        },
        {
          layer: 'seams',
          url: 'https://cdn.suitsupply.com/image/upload/c_fit,f_auto,h_1125,q_auto:good,w_900/suitconfig/S711302-3/Trousers/pocket/FPSL1',
        },
        {
          layer: 'belt loop',
          url: 'https://cdn.suitsupply.com/image/upload/c_fit,f_auto,h_1125,q_auto:good,w_900/suitconfig/S711302-3/Trousers/details/WBBL1_WBH1',
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
    id: '1457',
    name: 'Off-White Herringbone Pure Wool',
    price: '873',
    images: {
      fabric: {
        layer: 'base',
        url: 'https://cdn.suitsupply.com/image/upload/b_rgb:ffffff,c_fit,f_auto,h_450,q_auto:good,w_450/products/cm-sample/default/S2301T.20-52R_23',
      },
      jacket: [
        {
          layer: 'full',
          url: 'https://cdn.suitsupply.com/image/upload/b_rgb:efefef,c_fit,f_auto,h_1125,q_auto:best,w_900/b_rgb:efefef,c_fit,f_auto,h_1125,l_suitconfig:S10.712-550:Jacket:shoulder:MBN2_SS3,q_auto:good,w_900/suitconfig/S10.712-550/Jacket/model/MBN2',
        },
        {
          layer: 'lining',
          url: 'https://cdn.suitsupply.com/image/upload/c_fit,f_auto,h_1125,q_auto:good,w_900/suitconfig/shared/lining/MBN2_LFL1_1098',
        },
        {
          layer: 'chest button',
          url: 'https://cdn.suitsupply.com/image/upload/c_fit,f_auto,h_1125,q_auto:good,w_900/suitconfig/S10.712-550/Jacket/chest-pocket/MBN2_CPBS1',
        },
        {
          layer: 'lapel',
          url: 'https://cdn.suitsupply.com/image/upload/c_fit,f_auto,h_1125,q_auto:good,w_900/suitconfig/S10.712-550/Jacket/lapel/MBN2_LN1_NLWS2',
        },
        {
          layer: 'pocket',
          url: 'https://cdn.suitsupply.com/image/upload/c_fit,f_auto,h_1125,q_auto:good,w_900/suitconfig/S10.712-550/Jacket/pocket/MBN2_SPF5.5_TPN2',
        },
        {
          layer: 'button',
          url: 'https://cdn.suitsupply.com/image/upload/c_fit,f_auto,h_1125,q_auto:good,w_900/suitconfig/shared/buttons/MBN2_G8',
        },
        {
          layer: 'stitch',
          url: 'https://cdn.suitsupply.com/image/upload/c_fit,f_auto,h_1125,q_auto:good,w_900/suitconfig/S10.712-550/Jacket/stitching/MBN2_LN1_NLWS2_HAMF2mm2',
        },
        {
          layer: 'base',
          url: 'https://cdn.suitsupply.com/image/upload/c_fit,f_auto,h_1125,q_auto:good,w_900/suitconfig/S10.712-550/Jacket/stitching/MBN2_LN1_NLWS2_BHFUNC1',
        },
      ],
      trousers: [
        {
          layer: 'full',
          url: 'https://cdn.suitsupply.com/image/upload/b_rgb:efefef,c_fit,f_auto,h_1125,q_auto:best,w_900/b_rgb:efefef,c_fit,f_auto,h_1125,l_suitconfig:S10.712-550:Trousers:waistband:WBBR7_WBH1,q_auto:good,w_900/suitconfig/S10.712-550/Trousers/construction/PLNO1',
        },
        {
          layer: 'seams',
          url: 'https://cdn.suitsupply.com/image/upload/c_fit,f_auto,h_1125,q_auto:good,w_900/suitconfig/S10.712-550/Trousers/pocket/FPSL1',
        },
        {
          layer: 'belt loop',
          url: 'https://cdn.suitsupply.com/image/upload/c_fit,f_auto,h_1125,q_auto:good,w_900/suitconfig/S10.712-550/Trousers/details/WBBL1_WBH1',
        },
        {
          layer: 'button 1',
          url: 'https://cdn.suitsupply.com/image/upload/c_fit,f_auto,h_1125,q_auto:good,w_900/suitconfig/shared/buttons/WBBR7_WBH1_G8',
        },
        {
          layer: 'button 2',
          url: 'https://cdn.suitsupply.com/image/upload/c_fit,f_auto,h_1125,q_auto:good,w_900/suitconfig/shared/buttons/WBBR7_WBH1_G8',
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
        {
          layer: 'full',
          url: 'https://cdn.suitsupply.com/image/upload/b_rgb:efefef,c_fit,f_auto,h_1125,q_auto:best,w_900/b_rgb:efefef,c_fit,f_auto,h_1125,l_suitconfig:S62694-1:Jacket:shoulder:MBN2_SS3,q_auto:good,w_900/suitconfig/S62694-1/Jacket/model/MBN2',
        },
        {
          layer: 'lining',
          url: 'https://cdn.suitsupply.com/image/upload/c_fit,f_auto,h_1125,q_auto:good,w_900/suitconfig/shared/lining/MBN2_LFL1_1098',
        },
        {
          layer: 'chest button',
          url: 'https://cdn.suitsupply.com/image/upload/c_fit,f_auto,h_1125,q_auto:good,w_900/suitconfig/S62694-1/Jacket/chest-pocket/MBN2_CPBS1',
        },
        {
          layer: 'lapel',
          url: 'https://cdn.suitsupply.com/image/upload/c_fit,f_auto,h_1125,q_auto:good,w_900/suitconfig/S62694-1/Jacket/lapel/MBN2_LN1_NLWS2',
        },
        {
          layer: 'pocket',
          url: 'https://cdn.suitsupply.com/image/upload/c_fit,f_auto,h_1125,q_auto:good,w_900/suitconfig/S62694-1/Jacket/pocket/MBN2_SPF5.5_TPN2',
        },
        {
          layer: 'button',
          url: 'https://cdn.suitsupply.com/image/upload/c_fit,f_auto,h_1125,q_auto:good,w_900/suitconfig/shared/buttons/MBN2_G8',
        },
        {
          layer: 'stitch',
          url: 'https://cdn.suitsupply.com/image/upload/c_fit,f_auto,h_1125,q_auto:good,w_900/suitconfig/S62694-1/Jacket/stitching/MBN2_LN1_NLWS2_HAMF2mm2',
        },
        {
          layer: 'base',
          url: 'https://cdn.suitsupply.com/image/upload/c_fit,f_auto,h_1125,q_auto:good,w_900/suitconfig/S62694-1/Jacket/stitching/MBN2_LN1_NLWS2_BHFUNC1',
        },
      ],
      trousers: [
        {
          layer: 'full',
          url: 'https://cdn.suitsupply.com/image/upload/b_rgb:efefef,c_fit,f_auto,h_1125,q_auto:best,w_900/b_rgb:efefef,c_fit,f_auto,h_1125,l_suitconfig:S62694-1:Trousers:waistband:WBBR7_WBH1,q_auto:good,w_900/suitconfig/S62694-1/Trousers/construction/PLNO1',
        },
        {
          layer: 'seams',
          url: 'https://cdn.suitsupply.com/image/upload/c_fit,f_auto,h_1125,q_auto:good,w_900/suitconfig/S62694-1/Trousers/pocket/FPSL1',
        },
        {
          layer: 'belt loop',
          url: 'https://cdn.suitsupply.com/image/upload/c_fit,f_auto,h_1125,q_auto:good,w_900/suitconfig/S62694-1/Trousers/details/WBBL1_WBH1',
        },
        {
          layer: 'button 1',
          url: 'https://cdn.suitsupply.com/image/upload/c_fit,f_auto,h_1125,q_auto:good,w_900/suitconfig/shared/buttons/WBBR7_WBH1_G8',
        },
        {
          layer: 'button 2',
          url: 'https://cdn.suitsupply.com/image/upload/c_fit,f_auto,h_1125,q_auto:good,w_900/suitconfig/shared/buttons/WBBR7_WBH1_G8',
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
    name: `Burgundy Pure S110's Wool`,
    price: '873',
    images: {
      fabric: {
        layer: 'base',
        url: 'https://cdn.suitsupply.com/image/upload/b_rgb:ffffff,c_fit,f_auto,h_450,q_auto:good,w_450/products/cm-sample/default/S886.601-9036_23',
      },
      jacket: [
        {
          layer: 'full',
          url: 'https://cdn.suitsupply.com/image/upload/b_rgb:efefef,c_fit,f_auto,h_1125,q_auto:best,w_900/b_rgb:efefef,c_fit,f_auto,h_1125,l_suitconfig:S886.601-9036:Jacket:shoulder:MBN2_SS3,q_auto:good,w_900/suitconfig/S886.601-9036/Jacket/model/MBN2',
        },
        {
          layer: 'lining',
          url: 'https://cdn.suitsupply.com/image/upload/c_fit,f_auto,h_1125,q_auto:good,w_900/suitconfig/shared/lining/MBN2_LFL1_249',
        },
        {
          layer: 'chest button',
          url: 'https://cdn.suitsupply.com/image/upload/c_fit,f_auto,h_1125,q_auto:good,w_900/suitconfig/S886.601-9036/Jacket/chest-pocket/MBN2_CPBS1',
        },
        {
          layer: 'lapel',
          url: 'https://cdn.suitsupply.com/image/upload/c_fit,f_auto,h_1125,q_auto:good,w_900/suitconfig/S886.601-9036/Jacket/lapel/MBN2_LN1_NLWS2',
        },
        {
          layer: 'pocket',
          url: 'https://cdn.suitsupply.com/image/upload/c_fit,f_auto,h_1125,q_auto:good,w_900/suitconfig/S886.601-9036/Jacket/pocket/MBN2_SPF5.5_TPN2',
        },
        {
          layer: 'button',
          url: 'https://cdn.suitsupply.com/image/upload/c_fit,f_auto,h_1125,q_auto:good,w_900/suitconfig/shared/buttons/MBN2_G8',
        },
        {
          layer: 'stitch',
          url: 'https://cdn.suitsupply.com/image/upload/c_fit,f_auto,h_1125,q_auto:good,w_900/suitconfig/S886.601-9036/Jacket/stitching/MBN2_LN1_NLWS2_HAMF2mm2',
        },
        {
          layer: 'base',
          url: 'https://cdn.suitsupply.com/image/upload/c_fit,f_auto,h_1125,q_auto:good,w_900/suitconfig/S886.601-9036/Jacket/stitching/MBN2_LN1_NLWS2_BHFUNC1',
        },
      ],
      trousers: [
        {
          layer: 'full',
          url: 'https://cdn.suitsupply.com/image/upload/b_rgb:efefef,c_fit,f_auto,h_1125,q_auto:best,w_900/b_rgb:efefef,c_fit,f_auto,h_1125,l_suitconfig:S886.601-9036:Trousers:waistband:WBBR7_WBH1,q_auto:good,w_900/suitconfig/S886.601-9036/Trousers/construction/PLNO1',
        },
        {
          layer: 'seams',
          url: 'https://cdn.suitsupply.com/image/upload/c_fit,f_auto,h_1125,q_auto:good,w_900/suitconfig/S886.601-9036/Trousers/pocket/FPSL1',
        },
        {
          layer: 'belt loop',
          url: 'https://cdn.suitsupply.com/image/upload/c_fit,f_auto,h_1125,q_auto:good,w_900/suitconfig/S886.601-9036/Trousers/details/WBBL1_WBH1',
        },
        {
          layer: 'button 1',
          url: 'https://cdn.suitsupply.com/image/upload/c_fit,f_auto,h_1125,q_auto:good,w_900/suitconfig/shared/buttons/WBBR7_WBH1_G8',
        },
        {
          layer: 'button 2',
          url: 'https://cdn.suitsupply.com/image/upload/c_fit,f_auto,h_1125,q_auto:good,w_900/suitconfig/shared/buttons/WBBR7_WBH1_G8',
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
    name: 'Light Brown Circular Wool Flannel',
    price: '873',
    images: {
      fabric: {
        layer: 'base',
        url: 'https://cdn.suitsupply.com/image/upload/b_rgb:ffffff,c_fit,f_auto,h_450,q_auto:good,w_450/products/cm-sample/default/S804.601-4170_23',
      },
      jacket: [
        {
          layer: 'full',
          url: 'https://cdn.suitsupply.com/image/upload/b_rgb:efefef,c_fit,f_auto,h_1125,q_auto:best,w_900/b_rgb:efefef,c_fit,f_auto,h_1125,l_suitconfig:S804.601-4170:Jacket:shoulder:MBN2_SS3,q_auto:good,w_900/suitconfig/S804.601-4170/Jacket/model/MBN2',
        },
        {
          layer: 'lining',
          url: 'https://cdn.suitsupply.com/image/upload/c_fit,f_auto,h_1125,q_auto:good,w_900/suitconfig/shared/lining/MBN2_LFL1_1098',
        },
        {
          layer: 'chest button',
          url: 'https://cdn.suitsupply.com/image/upload/c_fit,f_auto,h_1125,q_auto:good,w_900/suitconfig/S804.601-4170/Jacket/chest-pocket/MBN2_CPBS1',
        },
        {
          layer: 'lapel',
          url: 'https://cdn.suitsupply.com/image/upload/c_fit,f_auto,h_1125,q_auto:good,w_900/suitconfig/S804.601-4170/Jacket/lapel/MBN2_LN1_NLWS2',
        },
        {
          layer: 'pocket',
          url: 'https://cdn.suitsupply.com/image/upload/c_fit,f_auto,h_1125,q_auto:good,w_900/suitconfig/S804.601-4170/Jacket/pocket/MBN2_SPF5.5_TPN2',
        },
        {
          layer: 'button',
          url: 'https://cdn.suitsupply.com/image/upload/c_fit,f_auto,h_1125,q_auto:good,w_900/suitconfig/shared/buttons/MBN2_KK53642',
        },
        {
          layer: 'stitch',
          url: 'https://cdn.suitsupply.com/image/upload/c_fit,f_auto,h_1125,q_auto:good,w_900/suitconfig/S804.601-4170/Jacket/stitching/MBN2_LN1_NLWS2_HAMF2mm2',
        },
        {
          layer: 'base',
          url: 'https://cdn.suitsupply.com/image/upload/c_fit,f_auto,h_1125,q_auto:good,w_900/suitconfig/S804.601-4170/Jacket/stitching/MBN2_LN1_NLWS2_BHFUNC1',
        },
      ],
      trousers: [
        {
          layer: 'full',
          url: 'https://cdn.suitsupply.com/image/upload/b_rgb:efefef,c_fit,f_auto,h_1125,q_auto:best,w_900/b_rgb:efefef,c_fit,f_auto,h_1125,l_suitconfig:S804.601-4170:Trousers:waistband:WBBR7_WBH1,q_auto:good,w_900/suitconfig/S804.601-4170/Trousers/construction/PLNO1',
        },
        {
          layer: 'seams',
          url: 'https://cdn.suitsupply.com/image/upload/c_fit,f_auto,h_1125,q_auto:good,w_900/suitconfig/S804.601-4170/Trousers/pocket/FPSL1',
        },
        {
          layer: 'belt loop',
          url: 'https://cdn.suitsupply.com/image/upload/c_fit,f_auto,h_1125,q_auto:good,w_900/suitconfig/S804.601-4170/Trousers/details/WBBL1_WBH1',
        },
        {
          layer: 'button 1',
          url: 'https://cdn.suitsupply.com/image/upload/c_fit,f_auto,h_1125,q_auto:good,w_900/suitconfig/shared/buttons/WBBR7_WBH1_KK53642',
        },
        {
          layer: 'button 2',
          url: 'https://cdn.suitsupply.com/image/upload/c_fit,f_auto,h_1125,q_auto:good,w_900/suitconfig/shared/buttons/WBBR7_WBH1_KK53642',
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
    name: `Light Blue Pure S110's Wool`,
    price: '873',
    images: {
      fabric: {
        layer: 'base',
        url: 'https://cdn.suitsupply.com/image/upload/b_rgb:ffffff,c_fit,f_auto,h_450,q_auto:good,w_450/products/cm-sample/default/S10.712-311_23',
      },
      jacket: [
        {
          layer: 'full',
          url: 'https://cdn.suitsupply.com/image/upload/b_rgb:efefef,c_fit,f_auto,h_1125,q_auto:best,w_900/b_rgb:efefef,c_fit,f_auto,h_1125,l_suitconfig:S10.712-311:Jacket:shoulder:MBN2_SS3,q_auto:good,w_900/suitconfig/S10.712-311/Jacket/model/MBN2',
        },
        {
          layer: 'lining',
          url: 'https://cdn.suitsupply.com/image/upload/c_fit,f_auto,h_1125,q_auto:good,w_900/suitconfig/shared/lining/MBN2_LFL1_819',
        },
        {
          layer: 'chest button',
          url: 'https://cdn.suitsupply.com/image/upload/c_fit,f_auto,h_1125,q_auto:good,w_900/suitconfig/S10.712-311/Jacket/chest-pocket/MBN2_CPBS1',
        },
        {
          layer: 'lapel',
          url: 'https://cdn.suitsupply.com/image/upload/c_fit,f_auto,h_1125,q_auto:good,w_900/suitconfig/S10.712-311/Jacket/lapel/MBN2_LN1_NLWS2',
        },
        {
          layer: 'pocket',
          url: 'https://cdn.suitsupply.com/image/upload/c_fit,f_auto,h_1125,q_auto:good,w_900/suitconfig/S10.712-311/Jacket/pocket/MBN2_SPF5.5_TPN2',
        },
        {
          layer: 'button',
          url: 'https://cdn.suitsupply.com/image/upload/c_fit,f_auto,h_1125,q_auto:good,w_900/suitconfig/shared/buttons/MBN2_NB04',
        },
        {
          layer: 'stitch',
          url: 'https://cdn.suitsupply.com/image/upload/c_fit,f_auto,h_1125,q_auto:good,w_900/suitconfig/S10.712-311/Jacket/stitching/MBN2_LN1_NLWS2_HAMF2mm2',
        },
        {
          layer: 'base',
          url: 'https://cdn.suitsupply.com/image/upload/c_fit,f_auto,h_1125,q_auto:good,w_900/suitconfig/S10.712-311/Jacket/stitching/MBN2_LN1_NLWS2_BHFUNC1',
        },
      ],
      trousers: [
        {
          layer: 'full',
          url: 'https://cdn.suitsupply.com/image/upload/b_rgb:efefef,c_fit,f_auto,h_1125,q_auto:best,w_900/b_rgb:efefef,c_fit,f_auto,h_1125,l_suitconfig:S10.712-311:Trousers:waistband:WBBR7_WBH1,q_auto:good,w_900/suitconfig/S10.712-311/Trousers/construction/PLNO1',
        },
        {
          layer: 'seams',
          url: 'https://cdn.suitsupply.com/image/upload/c_fit,f_auto,h_1125,q_auto:good,w_900/suitconfig/S10.712-311/Trousers/pocket/FPSL1',
        },
        {
          layer: 'belt loop',
          url: 'https://cdn.suitsupply.com/image/upload/c_fit,f_auto,h_1125,q_auto:good,w_900/suitconfig/S10.712-311/Trousers/details/WBBL1_WBH1',
        },
        {
          layer: 'button 1',
          url: 'https://cdn.suitsupply.com/image/upload/c_fit,f_auto,h_1125,q_auto:good,w_900/suitconfig/shared/buttons/WBBR7_WBH1_NB04',
        },
        {
          layer: 'button 2',
          url: 'https://cdn.suitsupply.com/image/upload/c_fit,f_auto,h_1125,q_auto:good,w_900/suitconfig/shared/buttons/WBBR7_WBH1_NB04',
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
        {
          layer: 'full',
          url: 'https://cdn.suitsupply.com/image/upload/b_rgb:efefef,c_fit,f_auto,h_1125,q_auto:best,w_900/b_rgb:efefef,c_fit,f_auto,h_1125,l_suitconfig:S586.861-780:Jacket:shoulder:MBN2_SS3,q_auto:good,w_900/suitconfig/S586.861-780/Jacket/model/MBN2',
        },
        {
          layer: 'lining',
          url: 'https://cdn.suitsupply.com/image/upload/c_fit,f_auto,h_1125,q_auto:good,w_900/suitconfig/shared/lining/MBN2_LFL1_9680',
        },
        {
          layer: 'chest button',
          url: 'https://cdn.suitsupply.com/image/upload/c_fit,f_auto,h_1125,q_auto:good,w_900/suitconfig/S586.861-780/Jacket/chest-pocket/MBN2_CPBS1',
        },
        {
          layer: 'lapel',
          url: 'https://cdn.suitsupply.com/image/upload/c_fit,f_auto,h_1125,q_auto:good,w_900/suitconfig/S586.861-780/Jacket/lapel/MBN2_LN1_NLWS2',
        },
        {
          layer: 'pocket',
          url: 'https://cdn.suitsupply.com/image/upload/c_fit,f_auto,h_1125,q_auto:good,w_900/suitconfig/S586.861-780/Jacket/pocket/MBN2_SPF5.5_TPN2',
        },
        {
          layer: 'button',
          url: 'https://cdn.suitsupply.com/image/upload/c_fit,f_auto,h_1125,q_auto:good,w_900/suitconfig/shared/buttons/MBN2_G8',
        },
        {
          layer: 'stitch',
          url: 'https://cdn.suitsupply.com/image/upload/c_fit,f_auto,h_1125,q_auto:good,w_900/suitconfig/S586.861-780/Jacket/stitching/MBN2_LN1_NLWS2_HAMF2mm2',
        },
        {
          layer: 'base',
          url: 'https://cdn.suitsupply.com/image/upload/c_fit,f_auto,h_1125,q_auto:good,w_900/suitconfig/S586.861-780/Jacket/stitching/MBN2_LN1_NLWS2_BHFUNC1',
        },
      ],
      trousers: [
        {
          layer: 'full',
          url: 'https://cdn.suitsupply.com/image/upload/b_rgb:efefef,c_fit,f_auto,h_1125,q_auto:best,w_900/b_rgb:efefef,c_fit,f_auto,h_1125,l_suitconfig:S586.861-780:Trousers:waistband:WBBR7_WBH1,q_auto:good,w_900/suitconfig/S586.861-780/Trousers/construction/PLNO1',
        },
        {
          layer: 'seams',
          url: 'https://cdn.suitsupply.com/image/upload/c_fit,f_auto,h_1125,q_auto:good,w_900/suitconfig/S586.861-780/Trousers/pocket/FPSL1',
        },
        {
          layer: 'belt loop',
          url: 'https://cdn.suitsupply.com/image/upload/c_fit,f_auto,h_1125,q_auto:good,w_900/suitconfig/S586.861-780/Trousers/details/WBBL1_WBH1',
        },
        {
          layer: 'button 1',
          url: 'https://cdn.suitsupply.com/image/upload/c_fit,f_auto,h_1125,q_auto:good,w_900/suitconfig/shared/buttons/WBBR7_WBH1_G8',
        },
        {
          layer: 'button 2',
          url: 'https://cdn.suitsupply.com/image/upload/c_fit,f_auto,h_1125,q_auto:good,w_900/suitconfig/shared/buttons/WBBR7_WBH1_G8',
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
    name: `Dark Blue Stripe Pure S110's Wool`,
    price: '873',
    images: {
      fabric: {
        layer: 'base',
        url: 'https://cdn.suitsupply.com/image/upload/b_rgb:ffffff,c_fit,f_auto,h_450,q_auto:good,w_450/products/cm-sample/default/S486.895-19_23',
      },
      jacket: [
        {
          layer: 'full',
          url: 'https://cdn.suitsupply.com/image/upload/b_rgb:efefef,c_fit,f_auto,h_1125,q_auto:best,w_900/b_rgb:efefef,c_fit,f_auto,h_1125,l_suitconfig:S486.895-19:Jacket:shoulder:MBN2_SS3,q_auto:good,w_900/suitconfig/S486.895-19/Jacket/model/MBN2',
        },
        {
          layer: 'lining',
          url: 'https://cdn.suitsupply.com/image/upload/c_fit,f_auto,h_1125,q_auto:good,w_900/suitconfig/shared/lining/MBN2_LFL1_197',
        },
        {
          layer: 'chest button',
          url: 'https://cdn.suitsupply.com/image/upload/c_fit,f_auto,h_1125,q_auto:good,w_900/suitconfig/S486.895-19/Jacket/chest-pocket/MBN2_CPBS1',
        },
        {
          layer: 'lapel',
          url: 'https://cdn.suitsupply.com/image/upload/c_fit,f_auto,h_1125,q_auto:good,w_900/suitconfig/S486.895-19/Jacket/lapel/MBN2_LN1_NLWS2',
        },
        {
          layer: 'pocket',
          url: 'https://cdn.suitsupply.com/image/upload/c_fit,f_auto,h_1125,q_auto:good,w_900/suitconfig/S486.895-19/Jacket/pocket/MBN2_SPF5.5_TPN2',
        },
        {
          layer: 'button',
          url: 'https://cdn.suitsupply.com/image/upload/c_fit,f_auto,h_1125,q_auto:good,w_900/suitconfig/shared/buttons/MBN2_TFH01',
        },
        {
          layer: 'stitch',
          url: 'https://cdn.suitsupply.com/image/upload/c_fit,f_auto,h_1125,q_auto:good,w_900/suitconfig/S486.895-19/Jacket/stitching/MBN2_LN1_NLWS2_HAMF2mm2',
        },
        {
          layer: 'base',
          url: 'https://cdn.suitsupply.com/image/upload/c_fit,f_auto,h_1125,q_auto:good,w_900/suitconfig/S486.895-19/Jacket/stitching/MBN2_LN1_NLWS2_BHFUNC1',
        },
      ],
      trousers: [
        {
          layer: 'full',
          url: 'https://cdn.suitsupply.com/image/upload/b_rgb:efefef,c_fit,f_auto,h_1125,q_auto:best,w_900/b_rgb:efefef,c_fit,f_auto,h_1125,l_suitconfig:S486.895-19:Trousers:waistband:WBBR7_WBH1,q_auto:good,w_900/suitconfig/S486.895-19/Trousers/construction/PLNO1',
        },
        {
          layer: 'seams',
          url: 'https://cdn.suitsupply.com/image/upload/c_fit,f_auto,h_1125,q_auto:good,w_900/suitconfig/S486.895-19/Trousers/pocket/FPSL1',
        },
        {
          layer: 'belt loop',
          url: 'https://cdn.suitsupply.com/image/upload/c_fit,f_auto,h_1125,q_auto:good,w_900/suitconfig/S486.895-19/Trousers/details/WBBL1_WBH1',
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
    category: ['best sellers'],
    care: 'Dry clean only, avoid direct sunlight',
  },
];
