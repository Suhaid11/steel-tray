import { MenuItem, PickupSlot } from '../types';

export const MENU_ITEMS: MenuItem[] = [
  // TIFFIN
  {
    id: 'goli-baje',
    name: 'Mangalore Goli Baje',
    kannadaName: 'ಗೋಳಿ ಬಜೆ',
    category: 'tiffin',
    price: 75,
    description: 'Golden, crisp exterior yielding to an airy, spongy crumb with chopped ginger, green chillies, and fresh coconut nuggets.',
    isFreshHot: true,
    traySection: 'main',
    visualType: 'goli-baje'
  },
  {
    id: 'neer-dosa',
    name: 'Neer Dosa (3 pcs)',
    kannadaName: 'ನೀರ್ ದೋಸೆ',
    category: 'tiffin',
    price: 85,
    description: 'Lace-thin, melt-in-mouth rice crepes folded in classic coastal triangles. Steamed fresh to order on cast-iron tawa.',
    isFreshHot: true,
    traySection: 'main',
    visualType: 'neer-dosa'
  },
  {
    id: 'mangalore-buns',
    name: 'Mangalore Buns (2 pcs)',
    kannadaName: 'ಮಂಗಳೂರು ಬನ್ಸ್',
    category: 'tiffin',
    price: 70,
    description: 'Mildly sweet, pillow-soft banana pooris fermented overnight with roasted cumin and yoghurt, fried golden brown.',
    traySection: 'main',
    visualType: 'buns'
  },
  {
    id: 'sanna-gassi',
    name: 'Kundapura Sanna with Gassi',
    kannadaName: 'ಕುಂದಾಪುರ ಸಣ್ಣ',
    category: 'tiffin',
    price: 95,
    description: 'Two cloud-soft, spongy fermented steamed rice cakes served with aromatic coastal coconut & tomato vegetable gassi.',
    traySection: 'main',
    visualType: 'sanna'
  },
  {
    id: 'kori-rotti',
    name: 'Kori Rotti Thali Platter',
    kannadaName: 'ಕೋರಿ ರೊಟ್ಟಿ',
    category: 'tiffin',
    price: 110,
    description: 'Sun-dried wafer-crisp rice rottis crushed gently and drenched in piping hot coastal coconut-byadagi chilli gravy.',
    isFreshHot: true,
    traySection: 'main',
    visualType: 'kori-rotti'
  },

  // COMBOS
  {
    id: 'udupi-raja-combo',
    name: 'Udupi Raja Thali Combo',
    kannadaName: 'ಉಡುಪಿ ರಾಜ ಕಾಂಬೋ',
    category: 'combo',
    price: 175,
    bundleDiscount: 55,
    description: 'Build-your-own coastal feast: Choose 1 hot tiffin base + 1 freshly ground chutney + 1 authentic side + 1 beverage.',
    isFreshHot: true,
    isComboBase: true,
    traySection: 'main',
    visualType: 'combo-raja',
    comboOptions: {
      bases: [
        { id: 'base-neer', name: 'Neer Dosa (3 pcs)', kannadaName: 'ನೀರ್ ದೋಸೆ', price: 85, description: 'Lace rice crepes' },
        { id: 'base-goli', name: 'Goli Baje (4 pcs)', kannadaName: 'ಗೋಳಿ ಬಜೆ', price: 75, description: 'Crisp coconut fritters' },
        { id: 'base-sanna', name: 'Steamed Sanna (2 pcs)', kannadaName: 'ಸಣ್ಣ', price: 80, description: 'Spongy steamed rice cakes' },
        { id: 'base-buns', name: 'Mangalore Buns (2 pcs)', kannadaName: 'ಬನ್ಸ್', price: 70, description: 'Sweet banana pooris' }
      ],
      chutneys: [
        { id: 'chutney-kempu', name: 'Kempu Chutney (Red)', kannadaName: 'ಕೆಂಪು ಚಟ್ನಿ', price: 25, description: 'Byadagi chilli & coconut' },
        { id: 'chutney-hasi', name: 'Hasi Chutney (Green)', kannadaName: 'ಹಸಿ ಚಟ್ನಿ', price: 25, description: 'Fresh coconut & coriander' },
        { id: 'chutney-bella', name: 'Bella Tenga (Sweet)', kannadaName: 'ಬೆಲ್ಲ ತೆಂಗ', price: 30, description: 'Jaggery & fresh coconut cream' }
      ],
      sides: [
        { id: 'side-sambar', name: 'Udupi Drumstick Sambar', kannadaName: 'ಸಾಂಬಾರು', price: 35, description: 'Slow-simmered lentil stew' },
        { id: 'side-gassi', name: 'Coastal Veg Gassi', kannadaName: 'ಗಸ್ಸಿ', price: 40, description: 'Tomato-coconut roasted curry' },
        { id: 'side-benne', name: 'Gir Cow Benne (Butter)', kannadaName: 'ಬೆಣ್ಣೆ', price: 25, description: 'Fresh churned white butter' }
      ],
      drinks: [
        { id: 'drink-kaapi', name: 'Degree Filter Kaapi', kannadaName: 'ಫಿಲ್ಟರ್ ಕಾಫಿ', price: 35, description: 'Brass tumbler & dabarah' },
        { id: 'drink-majjige', name: 'Spiced Majjige', kannadaName: 'ಮಜ್ಜಿಗೆ', price: 30, description: 'Tempered coastal buttermilk' },
        { id: 'drink-kashaya', name: 'Coastal Kashaya', kannadaName: 'ಕಷಾಯ', price: 35, description: 'Digestive herbal brew' }
      ]
    }
  },
  {
    id: 'buns-kaapi-express',
    name: 'Buns & Kaapi Express Combo',
    kannadaName: 'ಬನ್ಸ್ ಮತ್ತು ಕಾಫಿ',
    category: 'combo',
    price: 110,
    bundleDiscount: 25,
    description: 'Two fluffy Mangalore Buns + fresh butter dollop + hot frothy filter coffee pulled high in stainless steel dabarah.',
    traySection: 'main',
    visualType: 'combo-raja',
    comboOptions: {
      bases: [
        { id: 'base-buns', name: 'Mangalore Buns (2 pcs)', kannadaName: 'ಬನ್ಸ್', price: 70, description: 'Sweet banana pooris' },
        { id: 'base-goli', name: 'Goli Baje (4 pcs)', kannadaName: 'ಗೋಳಿ ಬಜೆ', price: 75, description: 'Crisp fritters' }
      ],
      chutneys: [
        { id: 'chutney-hasi', name: 'Hasi Chutney (Green)', kannadaName: 'ಹಸಿ ಚಟ್ನಿ', price: 25, description: 'Fresh coconut & coriander' },
        { id: 'chutney-kempu', name: 'Kempu Chutney (Red)', kannadaName: 'ಕೆಂಪು ಚಟ್ನಿ', price: 25, description: 'Byadagi chilli' }
      ],
      sides: [
        { id: 'side-benne', name: 'Gir Cow Benne (Butter)', kannadaName: 'ಬೆಣ್ಣೆ', price: 25, description: 'Cultured white butter' }
      ],
      drinks: [
        { id: 'drink-kaapi', name: 'Degree Filter Kaapi', kannadaName: 'ಫಿಲ್ಟರ್ ಕಾಫಿ', price: 35, description: 'Dark decoction' },
        { id: 'drink-badam', name: 'Warm Badam Milk', kannadaName: 'ಬಾದಾಮಿ ಹಾಲು', price: 50, description: 'Saffron & almond milk' }
      ]
    }
  },

  // SIDES & KATORIS
  {
    id: 'kempu-chutney',
    name: 'Kempu Chutney (Coastal Red)',
    kannadaName: 'ಕೆಂಪು ಚಟ್ನಿ',
    category: 'side',
    price: 25,
    description: 'Ground with slow-roasted Byadagi chillies, shallots, tamarind, and fresh grated coconut. Fiery and savoury.',
    traySection: 'katori-1',
    visualType: 'kempu-chutney'
  },
  {
    id: 'hasi-chutney',
    name: 'Hasi Kobbari Chutney (Green)',
    kannadaName: 'ಹಸಿ ಕೊಬ್ಬರಿ ಚಟ್ನಿ',
    category: 'side',
    price: 25,
    description: 'Classic creamy white-green coconut chutney tempered with black mustard seeds, hing, and fresh curry leaves.',
    traySection: 'katori-1',
    visualType: 'hasi-chutney'
  },
  {
    id: 'udupi-sambar',
    name: 'Udupi Drumstick Sambar',
    kannadaName: 'ನುಗ್ಗೆಕಾಯಿ ಸಾಂಬಾರು',
    category: 'side',
    price: 35,
    description: 'Simmered with toor dal, tender drumsticks, and freshly stone-ground Udupi sambar masala with a hint of jaggery.',
    isFreshHot: true,
    traySection: 'katori-2',
    visualType: 'sambar'
  },
  {
    id: 'bella-tenga',
    name: 'Bella Tenga (Sweet Jaggery Dip)',
    kannadaName: 'ಬೆಲ್ಲ ತೆಂಗ',
    category: 'side',
    price: 30,
    description: 'The soul of coastal Karnataka: thick coconut cream folded into melted organic sugarcane jaggery and crushed green cardamom.',
    traySection: 'katori-2',
    visualType: 'hasi-chutney'
  },
  {
    id: 'gir-benne',
    name: 'Fresh Cultured Butter (Benne)',
    kannadaName: 'ಹಸಿ ಬೆಣ್ಣೆ',
    category: 'side',
    price: 20,
    description: 'A rich, creamy dollop of traditional white butter freshly churned from coastal farm curd.',
    traySection: 'katori-2',
    visualType: 'hasi-chutney'
  },

  // DRINKS
  {
    id: 'filter-kaapi',
    name: 'Degree Filter Kaapi',
    kannadaName: 'ಡಿಗ್ರಿ ಫಿಲ್ಟರ್ ಕಾಫಿ',
    category: 'drink',
    price: 35,
    description: 'Dark chicory-infused decoction pulled high with boiling frothy milk. Served piping hot in stainless steel dabarah & tumbler.',
    isFreshHot: true,
    traySection: 'tumbler',
    visualType: 'filter-coffee'
  },
  {
    id: 'spiced-majjige',
    name: 'Spiced Coastal Majjige',
    kannadaName: 'ಮಸಾಲೆ ಮಜ್ಜಿಗೆ',
    category: 'drink',
    price: 30,
    description: 'Light, cooling churned buttermilk seasoned with crushed ginger, green chilli, curry leaves, and a pinch of rock salt.',
    traySection: 'tumbler',
    visualType: 'beverage'
  },
  {
    id: 'coastal-kashaya',
    name: 'Coastal Kashaya',
    kannadaName: 'ಕರಾವಳಿ ಕಷಾಯ',
    category: 'drink',
    price: 35,
    description: 'Soothing Ayurvedic hot herbal tea brewed with roasted coriander seeds, black peppercorns, cumin, and palm jaggery.',
    isFreshHot: true,
    traySection: 'tumbler',
    visualType: 'beverage'
  },
  {
    id: 'badam-milk',
    name: 'Kashmiri Kesar Badam Milk',
    kannadaName: 'ಬಾದಾಮಿ ಹಾಲು',
    category: 'drink',
    price: 50,
    description: 'Full-fat dairy milk slow-simmered with hand-crushed almonds, saffron strands, and green cardamom powder.',
    isFreshHot: true,
    traySection: 'tumbler',
    visualType: 'beverage'
  }
];

export function generatePickupSlots(): PickupSlot[] {
  // Generate 8 15-minute slots starting from next rounded quarter-hour
  const slots: PickupSlot[] = [];
  const now = new Date();
  
  // Set starting time: next 15-minute increment + 15 min buffer
  const minutes = now.getMinutes();
  const nextQuarter = Math.ceil((minutes + 5) / 15) * 15;
  const start = new Date(now);
  start.setMinutes(nextQuarter);
  start.setSeconds(0);
  start.setMilliseconds(0);

  const slotCapacities = [
    { cap: 8, taken: 8 }, // Full slot to showcase disabled state
    { cap: 8, taken: 7, fast: true }, // Filling fast
    { cap: 8, taken: 4 },
    { cap: 8, taken: 2 },
    { cap: 8, taken: 1 },
    { cap: 8, taken: 0 },
    { cap: 8, taken: 0 },
    { cap: 8, taken: 0 }
  ];

  for (let i = 0; i < 8; i++) {
    const slotDate = new Date(start.getTime() + i * 15 * 60 * 1000);
    const hours = slotDate.getHours();
    const mins = slotDate.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const displayHours = hours % 12 || 12;
    const displayMinutes = mins < 10 ? `0${mins}` : mins;
    const timeStr = `${displayHours}:${displayMinutes} ${ampm}`;

    const config = slotCapacities[i] || { cap: 8, taken: 0 };

    slots.push({
      id: `slot-${slotDate.getTime()}`,
      time: timeStr,
      targetTimeMs: slotDate.getTime(),
      capacity: config.cap,
      taken: config.taken,
      isFillingFast: config.fast
    });
  }

  return slots;
}
