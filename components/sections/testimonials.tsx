'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const testimonials = [
  {
    name: 'Rajesh Kumar',
    role: 'Contractor',
    content: 'Hajiyar Traders has been my go-to supplier for over 10 years. Their quality and service are unmatched in the region.',
    rating: 5,
  },
  {
    name: 'Priya Shankar',
    role: 'Architect',
    content: 'Reliable delivery and excellent product quality. They have everything needed for residential and commercial projects.',
    rating: 5,
  },
  {
    name: 'Mohammed Ali',
    role: 'Builder',
    content: 'The best prices and genuine products. Their team is knowledgeable and always ready to help with technical queries.',
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Trusted by thousands of contractors, builders, and homeowners
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              <Card className="h-full hover:shadow-xl transition-shadow">
                <CardContent className="pt-6">
                  <Quote className="w-10 h-10 text-[#FFD700] mb-4" />

                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-[#FFD700] text-[#FFD700]"
                      />
                    ))}
                  </div>

                  <p className="text-gray-700 mb-6 italic">
                    "{testimonial.content}"
                  </p>

                  <div className="border-t pt-4">
                    <p className="font-bold text-black">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
