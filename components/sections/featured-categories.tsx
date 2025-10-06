'use client';

import { motion } from 'framer-motion';
import { Box, Wrench, Zap, Droplet, PaintBucket, ShowerHead } from 'lucide-react';
import Link from 'next/link';

const categories = [
  {
    icon: Box,
    title: 'Cement & Steel',
    description: 'Premium quality cement and structural steel',
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: Box,
    title: 'Roofing Sheets',
    description: 'Durable roofing solutions for all needs',
    color: 'from-red-500 to-red-600',
  },
  {
    icon: Zap,
    title: 'Electrical',
    description: 'Complete electrical supplies and accessories',
    color: 'from-yellow-500 to-yellow-600',
  },
  {
    icon: Droplet,
    title: 'Plumbing',
    description: 'Quality pipes, fittings, and fixtures',
    color: 'from-cyan-500 to-cyan-600',
  },
  {
    icon: PaintBucket,
    title: 'Paint & Hardware',
    description: 'Wide range of paints and hardware items',
    color: 'from-purple-500 to-purple-600',
  },
  {
    icon: ShowerHead,
    title: 'Sanitaryware',
    description: 'Modern sanitaryware and CP fittings',
    color: 'from-green-500 to-green-600',
  },
];

export function FeaturedCategories() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
              Our Product Range
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive building materials for all your construction needs
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -8 }}
            >
              <Link href="/products">
                <div className="group relative h-64 bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer transition-all hover:shadow-2xl">
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-90 group-hover:opacity-100 transition-opacity`} />

                  <div className="relative h-full p-8 flex flex-col justify-between text-white">
                    <category.icon className="w-16 h-16 mb-4" />

                    <div>
                      <h3 className="text-2xl font-bold mb-2">{category.title}</h3>
                      <p className="text-white/90">{category.description}</p>
                    </div>

                    <div className="flex items-center text-sm font-semibold">
                      <span>Explore Products</span>
                      <svg
                        className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-center mt-12"
        >
          <Link
            href="/products"
            className="inline-flex items-center text-[#FFD700] hover:text-[#FBC02D] font-semibold text-lg"
          >
            View All Products
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
