// Centralized configuration and editable content for ROYAL STAY
// All phone numbers, addresses, and tariffs are clearly labelled sample placeholders
// Edit this file to update contact details, room descriptions, and pricing.

export const BUSINESS_INFO = {
  name: "ROYAL STAY",
  tagline: "Experience Refined Hospitality & Timeless Comfort",
  displayPhone: "+91 XXXXXXXXXX",
  phoneTelLink: "tel:+91XXXXXXXXXX",
  displayEmail: "contact@royalstay.sample",
  addressPlaceholder: "[Property Address Placeholder - Update with verified property address]",
  checkIn: "12:00 PM",
  checkOut: "11:00 AM",
  frontDeskHours: "24-Hour Reception & Guest Assistance",
  disclaimerNotice: "All tariffs and facilities displayed are editable sample placeholders for preview. Please call our reception to verify live availability, current rates, and reservation details."
};

export const SLIDESHOW_IMAGES = [
  {
    id: 1,
    src: "/images/real/slide-1.jpg",
    title: "Timeless Elegance & Comfort",
    subtitle: "Welcome to ROYAL STAY — Where luxury hospitality meets peaceful relaxation"
  },
  {
    id: 2,
    src: "/images/real/slide-2.jpg",
    title: "Sophisticated Living Spaces",
    subtitle: "Impeccably designed suites tailored for your ultimate relaxation"
  },
  {
    id: 3,
    src: "/images/real/slide-3.jpg",
    title: "Restful Nights in Pure Luxury",
    subtitle: "Handcrafted bedding, ambient lighting, and serene acoustics"
  },
  {
    id: 4,
    src: "/images/real/slide-4.jpg",
    title: "Gracious Hospitality",
    subtitle: "Dedicated front desk service committed to your memorable stay"
  },
  {
    id: 5,
    src: "/images/real/slide-5.jpg",
    title: "A Prestigious Haven",
    subtitle: "Discover comfort, privacy, and impeccable service"
  }
];

export const HOTEL_ROOMS = [
  {
    id: "deluxe-room",
    slug: "deluxe-room",
    name: "Deluxe Hotel Room",
    category: "Deluxe",
    type: "Hotel",
    typeLabel: "Hotel Room",
    samplePrice: 2800,
    priceLabel: "₹2,800",
    priceNote: "per night (Sample Tariff)",
    capacity: "2 Adults + 1 Child",
    bedType: "1 King-Size Bed",
    roomSize: "320 sq.ft",
    image: "/images/real/hotel-deluxe-real.jpg",
    gallery: [
      "/images/real/hotel-deluxe-real.jpg",
      "/images/real/slide-3.jpg",
      "/images/real/hotel-bathroom-real.jpg"
    ],
    description: "An elegantly appointed bedroom designed with authentic timber accents, plush mattress, soundproof windows, and ambient reading sconces. Ideal for discerning travelers seeking sophisticated relaxation.",
    longDescription: "The Deluxe Hotel Room at ROYAL STAY offers an immaculate sanctuary of calm and style. Crafted with premium hardwood finishes, rich textiles, and warm ambient illumination, every detail is considered. Guests enjoy an en-suite marble bathroom with rain shower, silent climate control, dedicated work desk, and high-definition smart entertainment.",
    highlights: [
      "Silent Split Air Conditioning",
      "High-Speed Wi-Fi",
      "Attached Marble Bathroom & Geyser",
      "Flat Screen Smart TV",
      "Daily Housekeeping",
      "Electric Tea & Coffee Kettle",
      "Ergonomic Work Desk"
    ],
    isPopular: false
  },
  {
    id: "premium-suite",
    slug: "premium-suite",
    name: "Executive Premium Suite",
    category: "Premium Suite",
    type: "Hotel",
    typeLabel: "Hotel Room",
    samplePrice: 3800,
    priceLabel: "₹3,800",
    priceNote: "per night (Sample Tariff)",
    capacity: "2 Adults + 1 Child",
    bedType: "1 Grand King Bed",
    roomSize: "420 sq.ft",
    image: "/images/real/hotel-premium-real.jpg",
    gallery: [
      "/images/real/hotel-premium-real.jpg",
      "/images/real/slide-2.jpg",
      "/images/real/hotel-bathroom-real.jpg"
    ],
    description: "A lavish suite featuring an expansive floor plan, private sitting lounge, panoramic window views, and an upscale marble bath with luxury toiletries.",
    longDescription: "Our Executive Premium Suite represents the pinnacle of hospitality at ROYAL STAY. Designed with an expansive open-plan layout, it seamlessly integrates a peaceful sleeping area with a dedicated sitting lounge. Featuring oversized floor-to-ceiling glass windows, plush lounge seating, a well-stocked beverage bar, and bespoke wooden millwork, this suite provides an unforgettable luxury retreat.",
    highlights: [
      "Expansive Living & Bedroom Area",
      "Private Balcony / Picture Window",
      "Dual Climate Control",
      "Premium Marble En-Suite with Rain Shower",
      "55-inch 4K Smart Television",
      "Complimentary Morning Tea Tray",
      "Mini-Refrigerator & In-Room Safe"
    ],
    isPopular: true
  },
  {
    id: "family-suite",
    slug: "family-suite",
    name: "Royal Family Hotel Suite",
    category: "Family Suite",
    type: "Hotel",
    typeLabel: "Hotel Room",
    samplePrice: 4800,
    priceLabel: "₹4,800",
    priceNote: "per night (Sample Tariff)",
    capacity: "4-5 Adults",
    bedType: "2 Queen-Size Beds",
    roomSize: "520 sq.ft",
    image: "/images/real/hotel-family-real.jpg",
    gallery: [
      "/images/real/hotel-family-real.jpg",
      "/images/real/slide-4.jpg",
      "/images/real/hotel-bathroom-real.jpg"
    ],
    description: "A spacious luxury suite accommodating larger families, featuring two plush queen beds, ample wardrobe storage, and a welcoming seating area.",
    longDescription: "The Royal Family Suite is tailored for families and small groups who prioritize both togetherness and privacy. Featuring two generous queen beds dressed in crisp hotel linen, twin wardrobes, an expansive sitting corner, and a well-ventilated layout, it ensures everyone travels in absolute comfort.",
    highlights: [
      "Two Plush Queen-Size Beds",
      "Spacious Family Seating Area",
      "Twin Wardrobes & Large Luggage Storage",
      "Dual Air Conditioning Units",
      "High-Speed Wi-Fi",
      "Hot Water Geyser (24/7)",
      "Daily Room Service Assistance"
    ],
    isPopular: false
  }
];

export const GUEST_HOUSE_ROOMS = [
  {
    id: "gh-standard",
    slug: "standard-guest-room",
    name: "Cozy Standard Guest Room",
    category: "Standard Room",
    type: "Guest House",
    typeLabel: "Guest House",
    samplePrice: 1200,
    priceLabel: "₹1,200",
    priceNote: "per night (Sample Tariff)",
    capacity: "2 Adults",
    bedType: "1 Double Bed",
    roomSize: "220 sq.ft",
    image: "/images/real/guesthouse-standard-real.jpg",
    gallery: [
      "/images/real/guesthouse-standard-real.jpg",
      "/images/real/slide-3.jpg",
      "/images/real/hotel-bathroom-real.jpg"
    ],
    description: "A charming, budget-friendly homestay room with authentic wooden furnishings, clean white linens, attached bath, and peaceful privacy.",
    longDescription: "Our Cozy Standard Guest Room offers tranquil homestay accommodation for cost-conscious travelers who value cleanliness, security, and peaceful residential calm. Featuring a solid wooden double bed, clean sheets, ceiling fan, natural ventilation, and an attached private bathroom.",
    highlights: [
      "Comfortable Double Bed",
      "Attached Private Bathroom",
      "Clean Linens & Sanitized Rooms",
      "24-Hour Running Water",
      "Peaceful Residential Ambience",
      "High-Speed Wi-Fi Access"
    ],
    isPopular: false
  },
  {
    id: "gh-ac-room",
    slug: "comfort-ac-guest-room",
    name: "Comfort AC Guest Room",
    category: "AC Room",
    type: "Guest House",
    typeLabel: "Guest House",
    samplePrice: 1900,
    priceLabel: "₹1,900",
    priceNote: "per night (Sample Tariff)",
    capacity: "2-3 Adults",
    bedType: "1 Queen-Size Bed",
    roomSize: "280 sq.ft",
    image: "/images/real/guesthouse-ac-real.jpg",
    gallery: [
      "/images/real/guesthouse-ac-real.jpg",
      "/images/real/hotel-lounge-real.jpg",
      "/images/real/hotel-bathroom-real.jpg"
    ],
    description: "Air-conditioned guest house room combining homestay warmth with contemporary comforts, workstation desk, and hot water geyser.",
    longDescription: "The Comfort AC Guest Room bridges the gap between homelike warmth and hotel convenience. Equipped with energy-efficient split air conditioning, a queen-size bed, workstation, television, and hot water bathroom, it provides the ideal base for prolonged leisure or work stays.",
    highlights: [
      "1.5-Ton Split Air Conditioner",
      "Hot Water Geyser in Attached Bath",
      "Television with Cable Channels",
      "Workstation Desk & Chair",
      "Free High-Speed Wi-Fi",
      "Daily Housekeeping Care"
    ],
    isPopular: true
  },
  {
    id: "gh-family-room",
    slug: "spacious-family-guest-haven",
    name: "Spacious Family Guest Haven",
    category: "Family Room",
    type: "Guest House",
    typeLabel: "Guest House",
    samplePrice: 2800,
    priceLabel: "₹2,800",
    priceNote: "per night (Sample Tariff)",
    capacity: "4-5 Adults",
    bedType: "2 Double Beds",
    roomSize: "400 sq.ft",
    image: "/images/real/guesthouse-family-real.jpg",
    gallery: [
      "/images/real/guesthouse-family-real.jpg",
      "/images/real/slide-4.jpg",
      "/images/real/hotel-dining-real.jpg"
    ],
    description: "Generous multi-bed guest house suite created for joint families or friend groups seeking affordable comfort and ample living space.",
    longDescription: "Designed for families traveling together, our Family Guest Haven provides two full-sized double beds, a cozy seating corner with a tea table, split cooling, and a spacious private bathroom. Experience authentic hospitality with the freedom of home.",
    highlights: [
      "Two Full-Sized Double Beds",
      "Split Air Conditioning & Ceiling Fans",
      "Tea Table with Comfortable Seating",
      "Spacious Attached Bathroom",
      "Home-Cooked Meal Options on Request",
      "Secure Vehicle Parking"
    ],
    isPopular: false
  }
];

// Helper to look up any room across both categories
export function getRoomByIdOrSlug(identifier) {
  const allRooms = [...HOTEL_ROOMS, ...GUEST_HOUSE_ROOMS];
  return allRooms.find(r => r.id === identifier || r.slug === identifier) || null;
}

export const FACILITIES = [
  {
    id: "ac",
    title: "Split Air Conditioning",
    description: "Efficient cooling across deluxe rooms and AC guest accommodations to ensure relaxing climate control in every season.",
    icon: "Wind",
    tag: "Climate Comfort"
  },
  {
    id: "wifi",
    title: "High-Speed Wi-Fi",
    description: "Complimentary wireless internet coverage across all hotel rooms, guest house suites, lounge areas, and reception.",
    icon: "Wifi",
    tag: "Connectivity"
  },
  {
    id: "parking",
    title: "Secure On-Site Parking",
    description: "Spacious, guarded parking bays available on premises for guest cars, family SUVs, and tour vehicles.",
    icon: "Car",
    tag: "Convenience"
  },
  {
    id: "dining",
    title: "Dining & Food Services",
    description: "Freshly prepared multi-cuisine meals and authentic local specialties served in our warm dining lounge or via room delivery.",
    icon: "UtensilsCrossed",
    tag: "Cuisine"
  },
  {
    id: "power",
    title: "24/7 Power Backup",
    description: "Heavy-duty generator backup ensuring uninterrupted lighting, climate control, and electronic charging around the clock.",
    icon: "Zap",
    tag: "Reliability"
  },
  {
    id: "frontdesk",
    title: "24-Hour Front Desk",
    description: "Courteous reception team available 24/7 for seamless check-in, housekeeping requests, and travel guidance.",
    icon: "Clock",
    tag: "Hospitality"
  },
  {
    id: "hotwater",
    title: "Hot Water Geysers",
    description: "Instant hot water geysers installed in private bathrooms for relaxing, revitalizing showers at any time.",
    icon: "ShowerHead",
    tag: "Wellness"
  },
  {
    id: "security",
    title: "CCTV & Security",
    description: "Round-the-clock security monitoring across common hallways, entrances, and parking premises for your safety.",
    icon: "ShieldCheck",
    tag: "Safety"
  }
];

export const GALLERY_ITEMS = [
  {
    id: "g1",
    title: "Deluxe King Bedroom",
    category: "hotel",
    categoryLabel: "Hotel Suite",
    image: "/images/real/hotel-deluxe-real.jpg",
    caption: "Warm timber accents, plush bedding, and serene atmospheric lighting"
  },
  {
    id: "g2",
    title: "Executive Suite Living Area",
    category: "hotel",
    categoryLabel: "Hotel Suite",
    image: "/images/real/slide-2.jpg",
    caption: "Spacious suite layout with private lounge seating and modern furnishings"
  },
  {
    id: "g3",
    title: "Guest House Standard Stay",
    category: "guesthouse",
    categoryLabel: "Guest House",
    image: "/images/real/guesthouse-standard-real.jpg",
    caption: "Authentic, clean homestay atmosphere with comfortable double bedding"
  },
  {
    id: "g4",
    title: "Air-Conditioned Guest Room",
    category: "guesthouse",
    categoryLabel: "Guest House",
    image: "/images/real/guesthouse-ac-real.jpg",
    caption: "Clean contemporary bedroom equipped with quiet split cooling and desk"
  },
  {
    id: "g5",
    title: "Spacious Family Accommodation",
    category: "hotel",
    categoryLabel: "Family Suite",
    image: "/images/real/hotel-family-real.jpg",
    caption: "Generously proportioned family room with multiple beds and seating"
  },
  {
    id: "g6",
    title: "Marble En-Suite Bathroom",
    category: "hotel",
    categoryLabel: "Bathrooms",
    image: "/images/real/hotel-bathroom-real.jpg",
    caption: "Sparkling modern bathroom with premium fixtures and instant hot water"
  },
  {
    id: "g7",
    title: "Property Dining Lounge",
    category: "dining",
    categoryLabel: "Dining & Cuisine",
    image: "/images/real/hotel-dining-real.jpg",
    caption: "Atmospheric dining space serving delicious meals prepared fresh daily"
  },
  {
    id: "g8",
    title: "Cozy Guest House Living",
    category: "guesthouse",
    categoryLabel: "Guest House",
    image: "/images/real/guesthouse-family-real.jpg",
    caption: "Homely comfort and generous space for families traveling together"
  },
  {
    id: "g9",
    title: "Relaxation Lounge",
    category: "dining",
    categoryLabel: "Lounge",
    image: "/images/real/hotel-lounge-real.jpg",
    caption: "Peaceful common lounge area designed for reading and quiet conversation"
  },
  {
    id: "g10",
    title: "Hotel Entrance & Exterior",
    category: "hotel",
    categoryLabel: "Property Exterior",
    image: "/images/real/hotel-exterior-real.jpg",
    caption: "Welcoming hotel exterior with secure perimeter and illuminated entryway"
  }
];

export const ALL_ROOMS = [...HOTEL_ROOMS, ...GUEST_HOUSE_ROOMS];

export const TARIFF_MATRIX = [
  {
    category: "Deluxe Hotel Room",
    type: "Hotel",
    occupancy: "2 Guests",
    weekdaySample: "₹2,800",
    weekendSample: "₹3,400",
    extraPerson: "₹600",
    inclusions: "King Bed, AC, Wi-Fi, Smart TV, Hot Water Geyser"
  },
  {
    category: "Executive Premium Suite",
    type: "Hotel",
    occupancy: "2 Guests",
    weekdaySample: "₹3,800",
    weekendSample: "₹4,500",
    extraPerson: "₹700",
    inclusions: "Grand King, Lounge Area, 4K TV, Refrigerator, Rain Shower"
  },
  {
    category: "Royal Family Suite",
    type: "Hotel",
    occupancy: "4-5 Guests",
    weekdaySample: "₹4,800",
    weekendSample: "₹5,600",
    extraPerson: "₹600",
    inclusions: "2 Queen Beds, Twin Wardrobes, AC, Wi-Fi, Balcony View"
  },
  {
    category: "Standard Guest Room",
    type: "Guest House",
    occupancy: "2 Guests",
    weekdaySample: "₹1,200",
    weekendSample: "₹1,500",
    extraPerson: "₹400",
    inclusions: "Double Bed, Attached Bath, Fan, Sanitized Linens, Wi-Fi"
  },
  {
    category: "Comfort AC Guest Room",
    type: "Guest House",
    occupancy: "2-3 Guests",
    weekdaySample: "₹1,900",
    weekendSample: "₹2,300",
    extraPerson: "₹500",
    inclusions: "Queen Bed, AC Cooling, Work Desk, Attached Bath, Wi-Fi"
  },
  {
    category: "Spacious Family Guest Flat",
    type: "Guest House",
    occupancy: "4-6 Guests",
    weekdaySample: "₹3,200",
    weekendSample: "₹3,800",
    extraPerson: "₹500",
    inclusions: "2 Bedrooms, Living Hall, AC in Master, Refrigerator, Balcony"
  }
];

export const NEARBY_POINTS = [];


