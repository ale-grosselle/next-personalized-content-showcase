export interface Product {
  id: string;
  title: string;
  price: number;
  currency: string;
  description: string;
  location: {
    city: string;
    province: string;
    region: string;
  };
  category: string;
  condition: string;
  views: number;
  images: string[];
  publishedAt: Date;
}

const titles = [
  'iPhone 15 Pro Max 256GB',
  'Bright three-room apartment',
  'Fiat 500 electric 2023',
  'Mountain bike Scott Scale 29"',
  'Leather corner sofa',
  'PlayStation 5 with controller',
  'MacBook Pro M3 14"',
  'Nike Air Jordan shoes',
  'Original Gucci bag',
  'Fender Stratocaster guitar',
  'Samsung Galaxy S24 Ultra',
  'Cube electric bike',
  'Solid wood dining table',
  'Bosch 9kg washing machine',
  'Canon EOS R6 Mark II',
];

const cities = [
  { city: 'Milano', province: 'MI', region: 'Lombardia' },
  { city: 'Roma', province: 'RM', region: 'Lazio' },
  { city: 'Napoli', province: 'NA', region: 'Campania' },
  { city: 'Torino', province: 'TO', region: 'Piemonte' },
  { city: 'Bologna', province: 'BO', region: 'Emilia-Romagna' },
  { city: 'Firenze', province: 'FI', region: 'Toscana' },
  { city: 'Bari', province: 'BA', region: 'Puglia' },
  { city: 'Genova', province: 'GE', region: 'Liguria' },
];

const categories = [
  'Electronics',
  'Cars & Motorcycles',
  'Home & Garden',
  'Sports & Hobbies',
  'Fashion & Accessories',
  'Real Estate',
  'Jobs',
  'Services',
];

const conditions = ['New', 'Like new', 'Excellent', 'Good', 'Fair'];

// Seeded random number generator
function seededRandom(seed: number): () => number {
  let value = seed;
  return () => {
    value = (value * 9301 + 49297) % 233280;
    return value / 233280;
  };
}

export function generateMockProduct(id: string): Product {
  const seed = parseInt(id) || 1;
  const random = seededRandom(seed);

  const titleIndex = Math.floor(random() * titles.length);
  const locationIndex = Math.floor(random() * cities.length);
  const categoryIndex = Math.floor(random() * categories.length);
  const conditionIndex = Math.floor(random() * conditions.length);
  const imageCount = 3 + Math.floor(random() * 4); // 3-6 images

  const price = Math.floor(random() * 50000) + 50;
  const views = Math.floor(random() * 10000) + 10;

  const images = Array.from({ length: imageCount }, (_, i) => {
    const imageId = (seed + i) * 100;
    return `https://picsum.photos/seed/${imageId}/800/600`;
  });

  return {
    id,
    title: titles[titleIndex],
    price,
    currency: 'EUR',
    description: `${titles[titleIndex]} for sale. Great opportunity for those looking for quality at the right price. Contact me for more information.`,
    location: cities[locationIndex],
    category: categories[categoryIndex],
    condition: conditions[conditionIndex],
    views,
    images,
    publishedAt: new Date(Date.now() - Math.floor(random() * 30 * 24 * 60 * 60 * 1000)),
  };
}
