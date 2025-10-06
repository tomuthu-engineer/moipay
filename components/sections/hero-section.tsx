'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Award, Users, Building2, TrendingUp } from 'lucide-react';
import Link from 'next/link';

export function HeroSection() {
  const [yearsCount, setYearsCount] = useState(0);

  useEffect(() => {
    const target = 26;
    const duration = 2000;
    const increment = target / (duration / 50);
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setYearsCount(target);
        clearInterval(timer);
      } else {
        setYearsCount(Math.floor(current));
      }
    }, 50);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="absolute inset-0 bg-[url('https://res.cloudinary.com/du9qir2dj/image/upload/v1759552416/hajiyar_q8amlt.webp')] bg-cover bg-center opacity-20" />
      <div className="absolute inset-0 gradient-overlay" />

    

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Badge className="mb-6 bg-[#FFD700] text-black hover:bg-[#FBC02D] text-lg px-6 py-2">
            {yearsCount}+ Years of Trust
          </Badge>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Building Dreams with
            <span className="text-[#FFD700]"> Quality Materials</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Your trusted partner for premium construction supplies across Tamil Nadu since 1999
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button
              asChild
              size="lg"
              className="bg-[#FFD700] hover:bg-[#FBC02D] text-black font-bold text-lg px-8 py-6 w-full sm:w-auto"
            >
              <Link href="/products">Shop Now</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-black font-bold text-lg px-8 py-6 w-full sm:w-auto"
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-center"
            >
              <Users className="w-8 h-8 text-[#FFD700] mx-auto mb-2" />
              <div className="text-3xl font-bold text-white">5000+</div>
              <div className="text-sm text-gray-400">Happy Customers</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-center"
            >
              <Award className="w-8 h-8 text-[#FFD700] mx-auto mb-2" />
              <div className="text-3xl font-bold text-white">ISO</div>
              <div className="text-sm text-gray-400">Certified</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-center"
            >
              <Building2 className="w-8 h-8 text-[#FFD700] mx-auto mb-2" />
              <div className="text-3xl font-bold text-white">5</div>
              <div className="text-sm text-gray-400">Branch Locations</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-center"
            >
              <TrendingUp className="w-8 h-8 text-[#FFD700] mx-auto mb-2" />
              <div className="text-3xl font-bold text-white">1000+</div>
              <div className="text-sm text-gray-400">Products</div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
