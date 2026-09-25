import { GALLERY_IMAGES } from './images';

export const GALLERY_CATEGORIES = [
  { id: "all", label: "All Sanctuary Views" },
  { id: "interior", label: "Spa Interior & Lounge" },
  { id: "treatment-rooms", label: "Private Therapy Suites" },
  { id: "treatments", label: "Rituals & Therapies" },
  { id: "ambience", label: "Sensory Details" }
];

export const GALLERY_ITEMS = [
  {
    id: 1,
    title: "Lotus Spa Reception & Tranquil Welcome Lounge",
    category: "interior",
    image: GALLERY_IMAGES.reception,
    alt: "Warm minimalist luxury spa welcome lounge with natural wood, soft linen seating, and serene ambient light"
  },
  {
    id: 2,
    title: "Private Organic Silk & Linen Therapy Suite",
    category: "treatment-rooms",
    image: GALLERY_IMAGES.treatmentRoom,
    alt: "Serene private spa treatment room with plush massage couch, warm lighting, and botanical touches"
  },
  {
    id: 3,
    title: "Couples Harmony Sanctuary Suite",
    category: "treatment-rooms",
    image: GALLERY_IMAGES.couplesSuite,
    alt: "Spacious luxury couples treatment suite with dual therapy couches and soft floral accents"
  },
  {
    id: 4,
    title: "Therapeutic Volcanic Hot Stone Therapy",
    category: "treatments",
    image: GALLERY_IMAGES.hotStone,
    alt: "Smooth heated basalt stones placed along the spine during a relaxing hot stone session"
  },
  {
    id: 5,
    title: "Cold-Pressed Essential Botanical Oil Atelier",
    category: "ambience",
    image: GALLERY_IMAGES.essentialOils,
    alt: "Glass droppers of pure lavender and eucalyptus essential oils with dried herbs on natural stone"
  },
  {
    id: 6,
    title: "Deep Restorative Massage Therapy",
    category: "treatments",
    image: GALLERY_IMAGES.massage,
    alt: "Therapist performing gentle Balinese massage technique with warm aromatic oil"
  },
  {
    id: 7,
    title: "Post-Treatment Botanical Hydration Nook",
    category: "interior",
    image: GALLERY_IMAGES.postTreatment,
    alt: "Quiet post-treatment lounge with warm ceramic tea set, fresh orchid blossoms, and soft daylight"
  },
  {
    id: 8,
    title: "Floating Lotus & Water Reflection Basin",
    category: "ambience",
    image: GALLERY_IMAGES.waterBasin,
    alt: "Delicate pink lotus petals and warm candles floating in a stone water vessel"
  },
  {
    id: 9,
    title: "Hydrotherapy & Soaking Tub Suite",
    category: "treatment-rooms",
    image: GALLERY_IMAGES.soakingTub,
    alt: "Deep wooden soaking bath filled with rose petals and calming herbal bath salts"
  },
  {
    id: 10,
    title: "Organic Facial Radiance Treatment",
    category: "treatments",
    image: GALLERY_IMAGES.facial,
    alt: "Gentle facial care and botanical serum application for glowing youthful skin"
  }
];


