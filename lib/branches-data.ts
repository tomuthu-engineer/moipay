export interface Branch {
  id: string;
  slug: string;
  name: string;
  address: string;
  phone: string;
  timing: string;
  manager?: string;
  email: string;
  services: string[];
  isHQ: boolean;
  mapUrl: string;
  landmark?: string;
  specialties: string[];
  image?: string;
}

export const branches: Branch[] = [
  {
    id: '1',
    slug: 'ramanathapuram',
    name: 'Ramanathapuram (Headquarters)',
    address: 'Rameswaram Road, Ramanathapuram, Tamil Nadu 623501',
    phone: '094434 44177',
    timing: '8:00 AM - 8:00 PM',
    manager: 'Mohamed Ismail',
    email: 'hajiyartradersrmd@gmail.com',
    services: ['Delivery Available', 'Credit Facility', 'Bulk Orders', 'Technical Support', 'Full Product Range'],
    isHQ: true,
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.1234567890123!2d78.8373!3d9.3634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOcKwMjEnNDguMiJOIDc4wrA1MCcxNC4zIkU!5e0!3m2!1sen!2sin!4v1234567890123',
    landmark: 'Near Rameswaram Road Junction',
    specialties: ['Complete Building Materials', 'Premium Brands', 'Expert Consultation', 'Same-Day Delivery'],
  },
  {
    id: '2',
    slug: 'kilakarai',
    name: 'Kilakarai Branch',
    address: 'Main Road, Kilakarai, Tamil Nadu',
    phone: '094434 44177',
    timing: '8:00 AM - 8:00 PM',
    email: 'hajiyartradersrmd@gmail.com',
    services: ['Delivery Available', 'Credit Facility', 'Bulk Orders', 'Fast Service'],
    isHQ: false,
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.1234567890123!2d78.8373!3d9.3634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOcKwMjEnNDguMiJOIDc4wrA1MCcxNC4zIkU!5e0!3m2!1sen!2sin!4v1234567890123',
    landmark: 'Near Main Bus Stand',
    specialties: ['Cement & Steel', 'Roofing Materials', 'Quick Delivery'],
  },
  {
    id: '3',
    slug: 'muthukulathur',
    name: 'Muthukulathur Branch',
    address: 'Bazaar Street, Muthukulathur, Tamil Nadu',
    phone: '094434 44177',
    timing: '8:00 AM - 8:00 PM',
    email: 'hajiyartradersrmd@gmail.com',
    services: ['Delivery Available', 'Bulk Orders', 'Quality Products'],
    isHQ: false,
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.1234567890123!2d78.8373!3d9.3634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOcKwMjEnNDguMiJOIDc4wrA1MCcxNC4zIkU!5e0!3m2!1sen!2sin!4v1234567890123',
    landmark: 'Bazaar Street Center',
    specialties: ['Building Materials', 'Hardware Items', 'Competitive Pricing'],
  },
  {
    id: '4',
    slug: 'sayalkudi',
    name: 'Sayalkudi Branch',
    address: 'Main Road, Sayalkudi, Tamil Nadu',
    phone: '094434 44177',
    timing: '8:00 AM - 8:00 PM',
    email: 'hajiyartradersrmd@gmail.com',
    services: ['Delivery Available', 'Credit Facility', 'Local Expertise'],
    isHQ: false,
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.1234567890123!2d78.8373!3d9.3634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOcKwMjEnNDguMiJOIDc4wrA1MCcxNC4zIkU!5e0!3m2!1sen!2sin!4v1234567890123',
    landmark: 'Near Town Center',
    specialties: ['Plumbing Materials', 'Electrical Supplies', 'Paint & Hardware'],
  },
  {
    id: '5',
    slug: 'rameswaram',
    name: 'Rameswaram Branch',
    address: 'Temple Road, Rameswaram, Tamil Nadu',
    phone: '094434 44177',
    timing: '8:00 AM - 8:00 PM',
    email: 'hajiyartradersrmd@gmail.com',
    services: ['Delivery Available', 'Bulk Orders', 'Tourist Area Service'],
    isHQ: false,
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.1234567890123!2d78.8373!3d9.3634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOcKwMjEnNDguMiJOIDc4wrA1MCcxNC4zIkU!5e0!3m2!1sen!2sin!4v1234567890123',
    landmark: 'Near Temple Area',
    specialties: ['Construction Materials', 'Sanitaryware', 'Fast Supply'],
  },
];

export function getBranchBySlug(slug: string): Branch | undefined {
  return branches.find((branch) => branch.slug === slug);
}
