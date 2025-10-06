'use client';

import { motion } from 'framer-motion';
import { Shield, Zap, Droplet, Sun, CircleCheck as CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';

const roofingFeatures = [
  {
    icon: Shield,
    title: 'Weather Resistant',
    description: 'Built to withstand harsh weather conditions',
  },
  {
    icon: Sun,
    title: 'Heat Resistant',
    description: 'Superior thermal insulation properties',
  },
  {
    icon: Droplet,
    title: 'Waterproof',
    description: 'Complete protection against water leakage',
  },
  {
    icon: Zap,
    title: 'Durable',
    description: 'Long-lasting performance for decades',
  },
];

const roofingTypes = [
  'Galvanized Iron Sheets',
  'Color Coated Sheets',
  'Polycarbonate Sheets',
  'Aluminum Roofing',
  'Metal Tiles',
  'Custom Sizes Available',
];

export function RoofingShowcase() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#FFD700] opacity-5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#FFD700] opacity-5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Premium Roofing Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Protect your investment with our high-quality roofing sheets designed for durability and performance
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#FFD700] to-[#FBC02D] rounded-3xl transform rotate-3" />
              <div className="relative bg-white rounded-3xl p-8 shadow-2xl">
                <h3 className="text-2xl font-bold mb-6">Why Choose Our Roofing Sheets?</h3>
                <div className="grid grid-cols-2 gap-4">
                  {roofingFeatures.map((feature, index) => (
                    <motion.div
                      key={feature.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.6 }}
                      className="flex flex-col items-center text-center p-4 bg-gray-50 rounded-xl hover:bg-[#FFF9C4] transition-colors"
                    >
                      <div className="w-12 h-12 bg-[#FFD700] rounded-full flex items-center justify-center mb-3">
                        <feature.icon className="w-6 h-6 text-black" />
                      </div>
                      <h4 className="font-bold text-sm mb-1">{feature.title}</h4>
                      <p className="text-xs text-gray-600">{feature.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="border-2 border-[#FFD700] shadow-xl">
              <CardContent className="pt-6">
                <h3 className="text-2xl font-bold mb-6">Available Types</h3>
                <div className="space-y-3 mb-6">
                  {roofingTypes.map((type, index) => (
                    <motion.div
                      key={type}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.6 }}
                      className="flex items-center space-x-3"
                    >
                      <CheckCircle className="w-5 h-5 text-[#FFD700] flex-shrink-0" />
                      <span className="text-gray-700 font-medium">{type}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                  <p className="text-sm text-blue-900 font-semibold mb-2">
                    Top Brands Available
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['Tata BlueScope', 'JSW', 'Hindalco', 'Essar'].map((brand) => (
                      <span
                        key={brand}
                        className="bg-white px-3 py-1 rounded-full text-xs font-medium text-gray-700 border border-blue-100"
                      >
                        {brand}
                      </span>
                    ))}
                  </div>
                </div>

                <Button
                  asChild
                  className="w-full bg-[#FFD700] hover:bg-[#FBC02D] text-black font-bold text-lg py-6"
                >
                  <Link href="/products/roofing-sheets" className="flex items-center justify-center">
                    View Roofing Products
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center"
        >
          <div className="inline-flex items-center space-x-2 bg-[#FFD700] text-black px-6 py-3 rounded-full font-semibold">
            <span>Need Custom Sizes?</span>
            <a href="tel:09443444177" className="underline hover:no-underline">
              Call 094434 44177
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
