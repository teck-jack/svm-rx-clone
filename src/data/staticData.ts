// Static data for SVM Pharmacy

export interface Product {
  id: string;
  name: string;
  brand: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  image: string;
  category: string;
  description: string;
  inStock: boolean;
  prescription: boolean;
  benefits: string[];
  ingredients?: string[];
  dosage?: string;
}

export interface Category {
  id: string;
  name: string;
  image: string;
  description: string;
  productCount: number;
}

export interface HealthConcern {
  id: string;
  name: string;
  image: string;
  description: string;
}

export const categories: Category[] = [
  {
    id: "medicines",
    name: "Medicines",
    image: "/Prescription-Medicines.jpg",
    description: "Prescription and OTC medicines",
    productCount: 1240
  },
  {
    id: "wellness",
    name: "Wellness",
    image: "https://picsum.photos/seed/supplements/200/200", // Image of vitamin bottles/supplements
    description: "Vitamins, supplements & nutrition",
    productCount: 450
  },
  {
    id: "personal-care",
    name: "Personal Care",
    image: "https://picsum.photos/seed/skincare/200/200", // Image of personal care/skincare products
    description: "Skincare, haircare & hygiene products",
    productCount: 680
  },
  {
    id: "baby-care",
    name: "Baby Care",
    image: "./babycare.webp", // Image of baby products
    description: "Baby food, diapers & care products",
    productCount: 320
  },
  {
    id: "ayurvedic",
    name: "Ayurvedic",
    image: "https://picsum.photos/seed/ayurveda/200/200", // Image of herbal/ayurvedic products
    description: "Traditional herbal medicines",
    productCount: 280
  },
  {
    id: "fitness",
    name: "Fitness & Nutrition",
    image: "https://picsum.photos/seed/protein/200/200", // Image of protein powder/shaker
    description: "Protein, supplements & fitness gear",
    productCount: 150
  }
];

export const healthConcerns: HealthConcern[] = [
  {
    id: "diabetes",
    name: "Diabetes Care",
    image: "https://picsum.photos/seed/glucometer/150/150", // Image of a glucometer
    description: "Blood sugar monitoring & management"
  },
  {
    id: "heart-care",
    name: "Heart Care",
    image: "https://picsum.photos/seed/heartpills/150/150", // Image of heart-related pills/blister pack
    description: "Cardiovascular health products"
  },
  {
    id: "digestive",
    name: "Digestive Care",
    image: "https://picsum.photos/seed/antacid/150/150", // Image of antacid or probiotic product
    description: "Stomach & digestive health"
  },
  {
    id: "immunity",
    name: "Immunity Boosters",
    image: "https://picsum.photos/seed/vitamin-c/150/150", // Image of vitamin C or immunity product
    description: "Immunity & vitamin supplements"
  },
  {
    id: "pain-relief",
    name: "Pain Relief",
    image: "https://picsum.photos/seed/ointment/150/150", // Image of a pain relief tube or balm
    description: "Pain management & relief"
  },
  {
    id: "respiratory",
    name: "Respiratory Care",
    image: "https://picsum.photos/seed/coughsyrup/150/150", // Image of a cough syrup bottle
    description: "Cough, cold & breathing support"
  }
];

export const products: Product[] = [
  {
    id: "1",
    name: "Paracetamol 500mg",
    brand: "Dolo",
    price: 24.50,
    originalPrice: 28.00,
    rating: 4.5,
    reviews: 1240,
    image: "https://picsum.photos/seed/paracetamol-blister/300/300", // Image of a paracetamol blister pack
    category: "medicines",
    description: "Fast-acting pain relief and fever reducer",
    inStock: true,
    prescription: false,
    benefits: ["Pain Relief", "Fever Reduction", "Fast Acting"],
    ingredients: ["Paracetamol 500mg"],
    dosage: "1-2 tablets every 4-6 hours as needed"
  },
  {
    id: "2",
    name: "Vitamin D3 60000 IU",
    brand: "Calcirol",
    price: 85.00,
    originalPrice: 95.00,
    rating: 4.7,
    reviews: 890,
    image: "https://picsum.photos/seed/vitamin-d-capsule/300/300", // Image of a Vitamin D capsule bottle
    category: "wellness",
    description: "High-potency vitamin D3 supplement for bone health",
    inStock: true,
    prescription: true,
    benefits: ["Bone Health", "Immunity Support", "Muscle Function"],
    ingredients: ["Cholecalciferol 60000 IU"],
    dosage: "One capsule per week or as directed"
  },
  {
    id: "3",
    name: "Cetaphil Gentle Cleanser",
    brand: "Cetaphil",
    price: 320.00,
    originalPrice: 350.00,
    rating: 4.6,
    reviews: 2150,
    image: "https://picsum.photos/seed/cetaphil-cleanser/300/300", // Image of a gentle cleanser bottle
    category: "personal-care",
    description: "Gentle daily facial cleanser for all skin types",
    inStock: true,
    prescription: false,
    benefits: ["Gentle Cleansing", "Moisturizing", "Non-comedogenic"],
    ingredients: ["Water", "Cetyl Alcohol", "Propylene Glycol"]
  },
  {
    id: "4",
    name: "Crocin Advance",
    brand: "GSK",
    price: 16.80,
    originalPrice: 20.00,
    rating: 4.4,
    reviews: 560,
    image: "https://picsum.photos/seed/crocin-box/300/300", // Image of a Crocin box
    category: "medicines",
    description: "Advanced paracetamol formula for faster relief",
    inStock: true,
    prescription: false,
    benefits: ["Fast Pain Relief", "Fever Control", "Gentle on Stomach"],
    ingredients: ["Paracetamol 500mg with Optizorb Technology"],
    dosage: "1-2 tablets every 4-6 hours"
  },
  {
    id: "5",
    name: "Whey Protein Isolate",
    brand: "MuscleBlaze",
    price: 1899.00,
    originalPrice: 2299.00,
    rating: 4.3,
    reviews: 780,
    image: "https://picsum.photos/seed/whey-protein-jar/300/300", // Image of a protein powder jar
    category: "fitness",
    description: "Premium whey protein for muscle building",
    inStock: true,
    prescription: false,
    benefits: ["Muscle Growth", "Fast Absorption", "High Protein"],
    ingredients: ["Whey Protein Isolate", "Natural Flavors", "Digestive Enzymes"]
  },
  {
    id: "6",
    name: "Baby Cerelac",
    brand: "Nestle",
    price: 185.00,
    originalPrice: 195.00,
    rating: 4.5,
    reviews: 1340,
    image: "https://picsum.photos/seed/baby-cereal-box/300/300", // Image of a baby cereal box
    category: "baby-care",
    description: "Nutritious baby cereal for 6+ months",
    inStock: true,
    prescription: false,
    benefits: ["Complete Nutrition", "Easy Digestion", "Iron Fortified"],
    ingredients: ["Wheat Flour", "Milk Solids", "Vitamins & Minerals"]
  }
];

export const offers = [
  {
    id: "1",
    title: "15% off on First Order",
    subtitle: "Use code: WELCOME15",
    image: "https://picsum.photos/seed/offer-discount/400/200", // General offer banner
    validUntil: "31st Dec 2024"
  },
  {
    id: "2",
    title: "Free Delivery above ₹499",
    subtitle: "No delivery charges on orders above ₹499",
    image: "https://picsum.photos/seed/offer-delivery/400/200", // Delivery offer banner
    validUntil: "Ongoing"
  },
  {
    id: "3",
    title: "Buy 2 Get 1 Free",
    subtitle: "On selected wellness products",
    image: "https://picsum.photos/seed/offer-bogo/400/200", // BOGO offer banner
    validUntil: "15th Jan 2025"
  }
];

export const testimonials = [
  {
    id: "1",
    name: "Priya Sharma",
    rating: 5,
    comment: "Great service! Medicines delivered on time with genuine quality.",
    location: "Mumbai"
  },
  {
    id: "2",
    name: "Rajesh Kumar",
    rating: 4,
    comment: "Easy ordering process and competitive prices. Highly recommended!",
    location: "Delhi"
  },
  {
    id: "3",
    name: "Anita Patel",
    rating: 5,
    comment: "Reliable pharmacy with excellent customer support. Very satisfied!",
    location: "Bangalore"
  }
];