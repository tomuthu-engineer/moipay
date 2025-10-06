'use client';

import { motion } from 'framer-motion';
import { Branch } from '@/lib/branches-data';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, MapPin, Phone, Clock, Mail, User, Navigation, Award, CircleCheck as CheckCircle } from 'lucide-react';
import Link from 'next/link';

interface BranchDetailClientProps {
  branch: Branch;
}

export default function BranchDetailClient({ branch }: BranchDetailClientProps) {
  return (
    <div className="min-h-screen">
      <section className="relative py-12 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/branches"
            className="inline-flex items-center text-[#FFD700] hover:text-[#FBC02D] mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to All Branches
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center space-x-4 mb-4">
              <h1 className="text-4xl md:text-5xl font-bold text-white">
                {branch.name}
              </h1>
              {branch.isHQ && (
                <Badge className="bg-[#FFD700] text-black hover:bg-[#FBC02D] text-lg px-4 py-2">
                  <Award className="w-4 h-4 mr-2" />
                  HQ
                </Badge>
              )}
            </div>
            <p className="text-xl text-gray-300">
              Your trusted building materials partner in the region
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <Card>
                  <CardHeader>
                    <h2 className="text-2xl font-bold">Location & Contact</h2>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start space-x-4">
                      <MapPin className="w-6 h-6 text-[#FFD700] flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-gray-900 mb-1">Address</p>
                        <p className="text-gray-700">{branch.address}</p>
                        {branch.landmark && (
                          <p className="text-sm text-gray-500 mt-2">
                            📍 Landmark: {branch.landmark}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <Phone className="w-6 h-6 text-[#FFD700] flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-gray-900 mb-1">Phone</p>
                        <a
                          href={`tel:${branch.phone.replace(/\s/g, '')}`}
                          className="text-[#FFD700] hover:text-[#FBC02D] font-medium"
                        >
                          {branch.phone}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <Mail className="w-6 h-6 text-[#FFD700] flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-gray-900 mb-1">Email</p>
                        <a
                          href={`mailto:${branch.email}`}
                          className="text-[#FFD700] hover:text-[#FBC02D] font-medium"
                        >
                          {branch.email}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <Clock className="w-6 h-6 text-[#FFD700] flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-gray-900 mb-1">Business Hours</p>
                        <p className="text-gray-700">{branch.timing}</p>
                        <p className="text-sm text-gray-500 mt-1">Open 7 days a week</p>
                      </div>
                    </div>

                    {branch.manager && (
                      <div className="flex items-center space-x-4">
                        <User className="w-6 h-6 text-[#FFD700] flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-gray-900 mb-1">Branch Manager</p>
                          <p className="text-gray-700">{branch.manager}</p>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                <Card>
                  <CardHeader>
                    <h2 className="text-2xl font-bold">Our Specialties</h2>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {branch.specialties.map((specialty, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-[#FFD700] flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{specialty}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                <Card>
                  <CardHeader>
                    <h2 className="text-2xl font-bold">Map Location</h2>
                  </CardHeader>
                  <CardContent>
                    <div className="aspect-video rounded-lg overflow-hidden">
                      <iframe
                        src={branch.mapUrl}
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title={`${branch.name} Location`}
                      />
                    </div>
                    <Button
                      asChild
                      className="w-full mt-4 bg-[#FFD700] hover:bg-[#FBC02D] text-black font-semibold"
                    >
                      <a
                        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                          branch.address
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center"
                      >
                        <Navigation className="w-4 h-4 mr-2" />
                        Get Directions
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="sticky top-24 space-y-6"
              >
                <Card className="border-2 border-[#FFD700]">
                  <CardHeader>
                    <h3 className="text-xl font-bold">Services Available</h3>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {branch.services.map((service, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-[#FFD700] flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{service}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gray-50">
                  <CardHeader>
                    <h3 className="text-xl font-bold">Quick Actions</h3>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Button
                      asChild
                      className="w-full bg-[#FFD700] hover:bg-[#FBC02D] text-black font-semibold"
                    >
                      <a href={`tel:${branch.phone.replace(/\s/g, '')}`}>
                        <Phone className="w-4 h-4 mr-2" />
                        Call Now
                      </a>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      className="w-full border-2 border-[#FFD700]"
                    >
                      <a
                        href={`https://wa.me/${branch.phone.replace(/\D/g, '')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        WhatsApp
                      </a>
                    </Button>
                    <Button asChild variant="outline" className="w-full">
                      <Link href="/products">View Products</Link>
                    </Button>
                  </CardContent>
                </Card>

                <Card className="bg-blue-50 border-blue-200">
                  <CardContent className="pt-6">
                    <h4 className="font-bold text-blue-900 mb-2">Visit Us Today!</h4>
                    <p className="text-sm text-blue-700">
                      Our friendly staff is ready to help you with all your building material needs.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
