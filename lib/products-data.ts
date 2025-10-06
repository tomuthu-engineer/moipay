import { Box, Wrench, Zap, Droplet, PaintBucket, ShowerHead, Building2, Hammer } from 'lucide-react';
import { Video as LucideIcon } from 'lucide-react';

export interface Product {
  id: string;
  slug: string;
  icon: typeof LucideIcon;
  title: string;
  description: string;
  features: string[];
  detailedDescription: string;
  specifications: string[];
  brands?: string[];
  applications?: string[];
}

export const products: Product[] = [
  {
    id: '1',
    slug: 'cement',
    icon: Box,
    title: 'Cement',
    description: 'Premium quality cement from leading brands for all construction needs.',
    features: [
      'OPC 43 & 53 Grade',
      'PPC for durability',
      'Bulk orders available',
      'Competitive pricing',
    ],
    detailedDescription:
      'We offer a comprehensive range of cement products from top manufacturers in India. Our cement selection includes Ordinary Portland Cement (OPC) in both 43 and 53 grades, as well as Portland Pozzolana Cement (PPC) for enhanced durability and sustainability. All cement products are stored in optimal conditions to maintain quality and are available for immediate delivery.',
    specifications: [
      'OPC 43 Grade - Standard strength for general construction',
      'OPC 53 Grade - High strength for specialized structures',
      'PPC - Enhanced durability and reduced heat of hydration',
      'Available in 50kg bags',
      'Bulk supply available',
    ],
    brands: ['UltraTech', 'ACC', 'Ambuja', 'Ramco', 'Dalmia'],
    applications: [
      'Residential construction',
      'Commercial buildings',
      'Infrastructure projects',
      'Plastering and masonry work',
    ],
  },
  {
    id: '2',
    slug: 'steel-structural',
    icon: Building2,
    title: 'Steel & Structural',
    description: 'High-grade steel and structural materials for robust construction.',
    features: [
      'TMT bars all sizes',
      'MS angles & channels',
      'Reinforcement steel',
      'Quality certified',
    ],
    detailedDescription:
      'Our steel and structural materials division provides high-quality TMT (Thermo-Mechanically Treated) bars, MS angles, channels, and other structural steel products. All our steel products are sourced from certified manufacturers and meet IS standards for strength and durability.',
    specifications: [
      'TMT bars: 8mm to 32mm diameter',
      'MS angles: Various sizes available',
      'MS channels: Standard and custom sizes',
      'Conforms to IS 1786:2008 standards',
      'Fe 500D and Fe 550D grades available',
    ],
    brands: ['TATA Steel', 'JSW', 'SAIL', 'Jindal', 'Kamdhenu'],
    applications: [
      'Building foundations',
      'Column and beam reinforcement',
      'Structural frameworks',
      'Industrial constructions',
    ],
  },
  {
    id: '3',
    slug: 'roofing-sheets',
    icon: Hammer,
    title: 'Roofing Sheets',
    description: 'Durable roofing solutions for residential and commercial projects.',
    features: [
      'Galvanized sheets',
      'Color-coated roofing',
      'Weather resistant',
      'Custom sizes available',
    ],
    detailedDescription:
      'We supply a wide range of roofing sheets including galvanized iron (GI) sheets, color-coated sheets, and polycarbonate sheets. Our roofing solutions are designed to withstand harsh weather conditions while providing excellent thermal insulation and aesthetic appeal.',
    specifications: [
      'GI sheets: 24-28 gauge thickness',
      'Color-coated sheets with anti-corrosion coating',
      'Polycarbonate sheets for natural lighting',
      'Standard lengths: 6ft to 12ft',
      'Custom cutting available',
    ],
    brands: ['Tata BlueScope', 'JSW', 'Essar', 'Hindalco'],
    applications: [
      'Residential roofing',
      'Industrial sheds',
      'Warehouses',
      'Commercial buildings',
    ],
  },
  {
    id: '4',
    slug: 'electrical-supplies',
    icon: Zap,
    title: 'Electrical Supplies',
    description: 'Complete range of electrical materials and accessories.',
    features: [
      'Wires & cables',
      'Switches & sockets',
      'MCBs & distribution boards',
      'LED lighting solutions',
    ],
    detailedDescription:
      'Our electrical supplies department stocks a comprehensive range of wiring, switches, circuit protection devices, and lighting solutions. We provide products from trusted brands that meet all safety standards and regulations.',
    specifications: [
      'Wires: 0.75 sq mm to 10 sq mm',
      'Modular switches: 6A, 16A, 20A ratings',
      'MCBs: Single pole to 4-pole configurations',
      'Distribution boards: 4-way to 24-way',
      'LED lights: Various wattages and designs',
    ],
    brands: ['Havells', 'Polycab', 'Finolex', 'Anchor', 'Legrand'],
    applications: [
      'House wiring',
      'Industrial electrical installations',
      'Commercial buildings',
      'Outdoor lighting',
    ],
  },
  {
    id: '5',
    slug: 'plumbing-materials',
    icon: Droplet,
    title: 'Plumbing Materials',
    description: 'Quality pipes, fittings, and fixtures for plumbing systems.',
    features: [
      'PVC & CPVC pipes',
      'Brass fittings',
      'Water storage tanks',
      'Drainage solutions',
    ],
    detailedDescription:
      'We offer a complete range of plumbing materials including PVC and CPVC pipes, brass fittings, water tanks, and drainage systems. Our products are designed for long-lasting performance in both residential and commercial applications.',
    specifications: [
      'PVC pipes: 1/2" to 6" diameter',
      'CPVC pipes for hot water applications',
      'Brass fittings: Chrome-plated',
      'Water tanks: 500L to 5000L capacity',
      'Drainage pipes: 75mm to 160mm',
    ],
    brands: ['Astral', 'Supreme', 'Ashirvad', 'Prince', 'Sintex'],
    applications: [
      'Water supply systems',
      'Drainage and sewage',
      'Hot water installations',
      'Irrigation systems',
    ],
  },
  {
    id: '6',
    slug: 'paint-hardware',
    icon: PaintBucket,
    title: 'Paint & Hardware',
    description: 'Wide selection of paints and hardware items for all applications.',
    features: [
      'Interior & exterior paints',
      'Primers & putty',
      'Tools & hardware',
      'Premium finishes',
    ],
    detailedDescription:
      'Our paint and hardware section features premium quality paints for interior and exterior applications, along with a comprehensive range of hardware items, tools, and accessories for construction and finishing work.',
    specifications: [
      'Emulsion paints for interior walls',
      'Weather-proof exterior paints',
      'Acrylic and enamel paints',
      'Wall putty and primers',
      'Complete range of painting tools',
    ],
    brands: ['Asian Paints', 'Berger', 'Dulux', 'Nerolac', 'Nippon'],
    applications: [
      'Interior wall painting',
      'Exterior façade finishing',
      'Wood and metal coating',
      'Decorative finishes',
    ],
  },
  {
    id: '7',
    slug: 'sanitaryware',
    icon: ShowerHead,
    title: 'Sanitaryware',
    description: 'Modern sanitaryware solutions for bathrooms and kitchens.',
    features: [
      'Toilets & basins',
      'Kitchen sinks',
      'Bathroom accessories',
      'Designer collections',
    ],
    detailedDescription:
      'We provide a wide selection of modern sanitaryware including toilets, wash basins, kitchen sinks, and bathroom accessories. Our collection features both premium designer pieces and budget-friendly options to suit all requirements.',
    specifications: [
      'Wall-hung and floor-mounted toilets',
      'Ceramic and vitreous china basins',
      'Stainless steel kitchen sinks',
      'Complete bathroom accessory sets',
      'Water-efficient flush systems',
    ],
    brands: ['Hindware', 'Cera', 'Parryware', 'Jaquar', 'Kohler'],
    applications: [
      'Residential bathrooms',
      'Commercial restrooms',
      'Kitchen installations',
      'Designer bathroom projects',
    ],
  },
  {
    id: '8',
    slug: 'cp-fittings',
    icon: Wrench,
    title: 'CP Fittings',
    description: 'Premium chrome-plated fittings for bathrooms and kitchens.',
    features: [
      'Faucets & mixers',
      'Shower systems',
      'Health faucets',
      'Luxury finishes',
    ],
    detailedDescription:
      'Our CP (Chrome Plated) fittings range includes high-quality taps, mixers, shower systems, and health faucets from leading manufacturers. All products feature durable chrome plating and come with manufacturer warranties.',
    specifications: [
      'Single lever and double handle mixers',
      'Wall-mounted and deck-mounted faucets',
      'Rain showers and hand showers',
      'Brass body with chrome finish',
      '1-5 year warranty depending on brand',
    ],
    brands: ['Jaquar', 'Grohe', 'Hindware', 'Cera', 'Marc'],
    applications: [
      'Bathroom wash basins',
      'Kitchen sinks',
      'Shower enclosures',
      'Luxury bathroom fittings',
    ],
  },
  {
    id: '9',
    slug: 'building-materials',
    icon: Box,
    title: 'Building Materials',
    description: 'Essential building materials for all construction phases.',
    features: [
      'Bricks & blocks',
      'Sand & aggregates',
      'Cement boards',
      'Waterproofing materials',
    ],
    detailedDescription:
      'We supply all essential building materials required for construction projects including bricks, blocks, sand, aggregates, cement boards, and waterproofing solutions. Bulk orders are our specialty with reliable delivery services.',
    specifications: [
      'Red clay bricks and fly ash bricks',
      'Hollow and solid concrete blocks',
      'River sand and M-sand',
      '20mm and 40mm aggregates',
      'Fiber cement and gypsum boards',
    ],
    brands: ['ACC', 'Birla', 'Ultratech', 'Local manufacturers'],
    applications: [
      'Foundation and masonry work',
      'Plastering and concrete mixing',
      'False ceiling installations',
      'Waterproofing applications',
    ],
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}