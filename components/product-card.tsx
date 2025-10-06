'use client';

import { motion } from 'framer-motion';
import { Video as LucideIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';

interface ProductCardProps {
  icon: typeof LucideIcon;
  title: string;
  description: string;
  features: string[];
  slug: string;
  onInquire?: () => void;
}

export function ProductCard({
  icon: Icon,
  title,
  description,
  features,
  slug,
  onInquire,
}: ProductCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <Card className="h-full hover:shadow-xl transition-shadow duration-300 border-2 hover:border-[#FFD700]">
        <CardHeader>
          <div className="w-16 h-16 bg-[#FFD700] rounded-xl flex items-center justify-center mb-4">
            <Icon className="w-8 h-8 text-black" />
          </div>
          <h3 className="text-xl font-bold text-black">{title}</h3>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-gray-600">{description}</p>
          <ul className="space-y-2">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start space-x-2 text-sm">
                <span className="text-[#FFD700] mt-1">•</span>
                <span className="text-gray-700">{feature}</span>
              </li>
            ))}
          </ul>
        </CardContent>
        <CardFooter className="flex flex-col space-y-3">
          <Button
            asChild
            variant="outline"
            className="w-full border-gray-300"
          >
            <a href={`/products/${slug}`}>
              View Details
            </a>
          </Button>
          <Button
            onClick={onInquire}
            className="w-full bg-[#FFD700] hover:bg-[#FBC02D] text-black font-semibold"
          >
            Get Quote
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}