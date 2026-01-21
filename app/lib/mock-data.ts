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
  'Appartamento trilocale luminoso',
  'Fiat 500 elettrica 2023',
  'Mountain bike Scott Scale 29"',
  'Divano angolare in pelle',
  'PlayStation 5 con controller',
  'MacBook Pro M3 14"',
  'Scarpe Nike Air Jordan',
  'Borsa Gucci originale',
  'Chitarra Fender Stratocaster',
  'Samsung Galaxy S24 Ultra',
  'Bicicletta elettrica Cube',
  'Tavolo da pranzo legno massello',
  'Lavatrice Bosch 9kg',
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
  'Elettronica',
  'Auto e Moto',
  'Casa e Giardino',
  'Sport e Hobby',
  'Moda e Accessori',
  'Immobili',
  'Lavoro',
  'Servizi',
];

const conditions = ['Nuovo', 'Come nuovo', 'Ottimo', 'Buono', 'Discreto'];

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
    description: `${titles[titleIndex]} in vendita. Ottima opportunità per chi cerca qualità al giusto prezzo. Contattami per maggiori informazioni.`,
    location: cities[locationIndex],
    category: categories[categoryIndex],
    condition: conditions[conditionIndex],
    views,
    images,
    publishedAt: new Date(Date.now() - Math.floor(random() * 30 * 24 * 60 * 60 * 1000)),
  };
}
