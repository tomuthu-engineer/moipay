'use client';

import { motion } from 'framer-motion';
import { BranchCard } from '@/components/branch-card';
import { branches } from '@/lib/branches-data';

export default function BranchesPage() {
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">Our Branches</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Serving communities across Tamil Nadu with 5 strategically located branches
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {branches.map((branch, index) => (
              <motion.div
                key={branch.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <BranchCard
                  name={branch.name}
                  address={branch.address}
                  phone={branch.phone}
                  timing={branch.timing}
                  manager={branch.manager}
                  services={branch.services}
                  specialties={branch.specialties}
                  isHQ={branch.isHQ}
                  slug={branch.slug}
                  landmark={branch.landmark}
                />
              </motion.div>
            ))}
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
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Visit Our Headquarters</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              Our main branch in Ramanathapuram is equipped with a full showroom and expert staff ready to help you
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="aspect-video rounded-2xl overflow-hidden shadow-2xl"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.1234567890123!2d78.8373!3d9.3634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOcKwMjEnNDguMiJOIDc4wrA1MCcxNC4zIkU!5e0!3m2!1sen!2sin!4v1234567890123"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Hajiyar Traders Ramanathapuram Location"
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
}
