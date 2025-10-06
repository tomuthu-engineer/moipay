'use client';

import { motion } from 'framer-motion';
import { Truck, CreditCard, Headphones, Package, Clock, Award } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const services = [
  {
    icon: Truck,
    title: 'Free Delivery',
    description: 'Fast and free delivery for bulk orders within the region',
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: CreditCard,
    title: 'Credit Facility',
    description: 'Flexible credit options for registered contractors and builders',
    color: 'from-green-500 to-green-600',
  },
  {
    icon: Headphones,
    title: 'Expert Support',
    description: 'Technical guidance and product recommendations from our team',
    color: 'from-purple-500 to-purple-600',
  },
  {
    icon: Package,
    title: 'Bulk Orders',
    description: 'Special pricing and priority service for large-scale projects',
    color: 'from-orange-500 to-orange-600',
  },
  {
    icon: Clock,
    title: 'Same Day Service',
    description: 'Quick turnaround for urgent requirements and emergencies',
    color: 'from-red-500 to-red-600',
  },
  {
    icon: Award,
    title: 'Quality Assured',
    description: 'ISO certified products with manufacturer warranties',
    color: 'from-yellow-500 to-yellow-600',
  },
];

export function ServicesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive support and services to make your construction projects seamless
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <Card className="h-full hover:shadow-2xl transition-all duration-300 group border-2 hover:border-[#FFD700] overflow-hidden">
                <CardContent className="pt-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-black group-hover:text-[#FFD700] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-8 md:p-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              Need a Custom Service Package?
            </h3>
            <p className="text-gray-300 text-lg mb-6 max-w-2xl mx-auto">
              We can tailor our services to meet your specific project requirements. Contact us to discuss your needs.
            </p>
            <a
              href="tel:09443444177"
              className="inline-block bg-[#FFD700] hover:bg-[#FBC02D] text-black font-bold px-8 py-4 rounded-lg transition-colors"
            >
              Call Us: 094434 44177
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
