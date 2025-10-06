'use client';

import { motion } from 'framer-motion';
import { Award, Users, Target, Heart, CircleCheck as CheckCircle, TrendingUp } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const milestones = [
  { year: '1999', event: 'Hajiyar Traders Founded in Ramanathapuram' },
  { year: '2005', event: 'Expanded to Kilakarai Branch' },
  { year: '2010', event: 'ISO Certification Achieved' },
  { year: '2015', event: 'Opened Muthukulathur & Sayalkudi Branches' },
  { year: '2020', event: 'Launched Rameswaram Branch' },
  { year: '2025', event: 'Serving 5000+ Happy Customers' },
];

const values = [
  {
    icon: Award,
    title: 'Quality Guaranteed',
    description: 'We source only the best materials from trusted manufacturers',
  },
  {
    icon: Users,
    title: 'Customer First',
    description: 'Your satisfaction is our top priority in every transaction',
  },
  {
    icon: Target,
    title: 'Expert Guidance',
    description: 'Our team provides technical support for all your needs',
  },
  {
    icon: Heart,
    title: 'Community Focus',
    description: 'Supporting local projects and building lasting relationships',
  },
];

const achievements = [
  { number: '26+', label: 'Years of Experience' },
  { number: '5000+', label: 'Happy Customers' },
  { number: '5', label: 'Branch Locations' },
  { number: '1000+', label: 'Products Available' },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <section className="relative py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">About Hajiyar Traders</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Building trust and quality relationships since 1999
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-[#FFD700] mb-2">
                  {achievement.number}
                </div>
                <div className="text-gray-600 font-medium">{achievement.label}</div>
              </motion.div>
            ))}
          </div>

          <div className="max-w-4xl mx-auto mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Our Story</h2>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="text-lg mb-4">
                  Established in 1999, Hajiyar Traders has been a cornerstone of the construction
                  industry in Tamil Nadu for over two decades. What started as a small building
                  materials shop in Ramanathapuram has grown into a trusted network of five branches
                  serving thousands of customers across the region.
                </p>
                <p className="text-lg mb-4">
                  Our journey has been built on the foundation of quality, integrity, and customer
                  satisfaction. We understand that construction projects, whether residential or
                  commercial, require reliable materials and dependable service. That's why we've
                  dedicated ourselves to sourcing the finest products and providing expert guidance
                  to every customer who walks through our doors.
                </p>
                <p className="text-lg">
                  Today, Hajiyar Traders stands as a testament to the trust our customers have
                  placed in us. From contractors and builders to individual homeowners, we serve
                  them all with the same commitment to excellence that has defined us since day one.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600">26 years of growth and excellence</p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#FFD700] hidden md:block" />

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className={`flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  } flex-col`}
                >
                  <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <Card className="hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        <Badge className="bg-[#FFD700] text-black mb-2">
                          {milestone.year}
                        </Badge>
                        <p className="text-gray-700 font-medium">{milestone.event}</p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="w-8 h-8 bg-[#FFD700] rounded-full border-4 border-white shadow-lg mx-auto my-4 md:my-0 flex-shrink-0" />
                  <div className="w-full md:w-5/12" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Us</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              What sets us apart in the building materials industry
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <Card className="h-full text-center hover:shadow-xl transition-all hover:border-[#FFD700] border-2">
                  <CardContent className="pt-8">
                    <div className="w-16 h-16 bg-[#FFD700] rounded-full flex items-center justify-center mx-auto mb-4">
                      <value.icon className="w-8 h-8 text-black" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Our Mission</h2>
              <p className="text-lg text-gray-300 mb-6">
                To provide the highest quality building materials at competitive prices while
                delivering exceptional customer service and expert guidance to every client.
              </p>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-[#FFD700] flex-shrink-0 mt-1" />
                  <span className="text-gray-300">
                    Source premium quality materials from trusted manufacturers
                  </span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-[#FFD700] flex-shrink-0 mt-1" />
                  <span className="text-gray-300">
                    Maintain competitive pricing without compromising quality
                  </span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-[#FFD700] flex-shrink-0 mt-1" />
                  <span className="text-gray-300">
                    Build lasting relationships with our customers
                  </span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Our Vision</h2>
              <p className="text-lg text-gray-300 mb-6">
                To become the most trusted and preferred building materials supplier across Tamil
                Nadu, known for our commitment to quality, service, and community development.
              </p>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <TrendingUp className="w-6 h-6 text-[#FFD700] flex-shrink-0 mt-1" />
                  <span className="text-gray-300">
                    Expand our network to serve more communities
                  </span>
                </div>
                <div className="flex items-start space-x-3">
                  <TrendingUp className="w-6 h-6 text-[#FFD700] flex-shrink-0 mt-1" />
                  <span className="text-gray-300">
                    Continuously innovate and improve our services
                  </span>
                </div>
                <div className="flex items-start space-x-3">
                  <TrendingUp className="w-6 h-6 text-[#FFD700] flex-shrink-0 mt-1" />
                  <span className="text-gray-300">
                    Lead the industry in sustainable practices
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
