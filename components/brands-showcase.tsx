'use client';

import { motion } from 'framer-motion';
import { Award, Star } from 'lucide-react';
import { Card } from '@/components/ui/card';

interface BrandCardProps {
  name: string;
  category: string;
  featured?: boolean;
}

function BrandCard({ name, category, featured = false }: BrandCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -5 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <Card className={`p-6 text-center hover:shadow-2xl transition-all duration-300 ${
        featured ? 'border-2 border-[#FFD700] bg-gradient-to-br from-yellow-50 to-white' : 'border hover:border-[#FFD700]'
      }`}>
        {featured && (
          <div className="flex justify-center mb-2">
            <Star className="w-4 h-4 fill-[#FFD700] text-[#FFD700]" />
          </div>
        )}
        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-3 shadow-md">
          <Award className="w-8 h-8 text-[#FFD700]" />
        </div>
        <h4 className="font-bold text-lg text-black mb-1">{name}</h4>
        <p className="text-xs text-gray-500 uppercase tracking-wide">{category}</p>
      </Card>
    </motion.div>
  );
}

const brands = [
  { name: 'UltraTech', category: 'Cement', featured: true },
  { name: 'ACC', category: 'Cement' },
  { name: 'Ambuja', category: 'Cement' },
  { name: 'TATA Steel', category: 'Steel', featured: true },
  { name: 'JSW', category: 'Steel' },
  { name: 'Jindal', category: 'Steel' },
  { name: 'Havells', category: 'Electrical', featured: true },
  { name: 'Polycab', category: 'Electrical' },
  { name: 'Finolex', category: 'Wires' },
  { name: 'Asian Paints', category: 'Paint', featured: true },
  { name: 'Berger', category: 'Paint' },
  { name: 'Nerolac', category: 'Paint' },
  { name: 'Jaquar', category: 'Fittings', featured: true },
  { name: 'Hindware', category: 'Sanitaryware' },
  { name: 'Cera', category: 'Sanitaryware' },
  { name: 'Astral', category: 'Pipes', featured: true },
  { name: 'Supreme', category: 'Pipes' },
  { name: 'Prince', category: 'Pipes' },
];

interface BrandsShowcaseProps {
  compact?: boolean;
  maxBrands?: number;
}

export function BrandsShowcase({ compact = false, maxBrands }: BrandsShowcaseProps) {
  const displayBrands = maxBrands ? brands.slice(0, maxBrands) : brands;

  if (compact) {
    return (
      <div className="flex flex-wrap gap-3">
        {displayBrands.map((brand, index) => (
          <motion.div
            key={`${brand.name}-${index}`}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05, duration: 0.3 }}
            whileHover={{ scale: 1.1 }}
            className={`px-4 py-2 rounded-full border-2 font-semibold text-sm transition-all cursor-default ${
              brand.featured
                ? 'bg-[#FFD700] border-[#FFD700] text-black shadow-lg'
                : 'bg-white border-gray-200 text-gray-700 hover:border-[#FFD700]'
            }`}
          >
            {brand.name}
          </motion.div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
      {displayBrands.map((brand, index) => (
        <motion.div
          key={`${brand.name}-${index}`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.05, duration: 0.4 }}
        >
          <BrandCard {...brand} />
        </motion.div>
      ))}
    </div>
  );
}
