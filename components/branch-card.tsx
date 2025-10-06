'use client';

import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, User, ArrowRight, Star, Award } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface BranchCardProps {
  name: string;
  address: string;
  phone: string;
  timing: string;
  manager?: string;
  services: string[];
  specialties?: string[];
  isHQ?: boolean;
  slug?: string;
  landmark?: string;
}

export function BranchCard({
  name,
  address,
  phone,
  timing,
  manager,
  services,
  specialties,
  isHQ = false,
  slug,
  landmark,
}: BranchCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -4 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <Card className="h-full hover:shadow-2xl transition-all duration-300 border-2 hover:border-[#FFD700] overflow-hidden group">
        <div className={`h-2 ${isHQ ? 'bg-gradient-to-r from-[#FFD700] to-[#FBC02D]' : 'bg-gray-200'}`} />

        <CardHeader className="relative">
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <h3 className="text-xl font-bold text-black mb-2 group-hover:text-[#FFD700] transition-colors">
                {name}
              </h3>
              {isHQ && (
                <div className="flex items-center space-x-2">
                  <Badge className="bg-[#FFD700] text-black hover:bg-[#FBC02D]">
                    <Award className="w-3 h-3 mr-1" />
                    Headquarters
                  </Badge>
                  <Badge variant="outline" className="border-[#FFD700]">
                    <Star className="w-3 h-3 mr-1 fill-[#FFD700] text-[#FFD700]" />
                    Premium
                  </Badge>
                </div>
              )}
            </div>
            <div className="w-12 h-12 bg-[#FFD700] rounded-full flex items-center justify-center flex-shrink-0">
              <MapPin className="w-6 h-6 text-black" />
            </div>
          </div>
        </CardHeader>

        <CardContent className="space-y-4">
          <div className="space-y-3">
            <div className="flex items-start space-x-3">
              <MapPin className="w-5 h-5 text-[#FFD700] flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-gray-700 text-sm">{address}</p>
                {landmark && (
                  <p className="text-xs text-gray-500 mt-1">📍 {landmark}</p>
                )}
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <Phone className="w-5 h-5 text-[#FFD700] flex-shrink-0" />
              <a
                href={`tel:${phone.replace(/\s/g, '')}`}
                className="text-gray-700 text-sm hover:text-[#FFD700] font-medium transition-colors"
              >
                {phone}
              </a>
            </div>

            <div className="flex items-center space-x-3">
              <Clock className="w-5 h-5 text-[#FFD700] flex-shrink-0" />
              <p className="text-gray-700 text-sm">{timing}</p>
            </div>

            {manager && (
              <div className="flex items-center space-x-3">
                <User className="w-5 h-5 text-[#FFD700] flex-shrink-0" />
                <p className="text-gray-700 text-sm">{manager}</p>
              </div>
            )}
          </div>

          {specialties && specialties.length > 0 && (
            <div className="pt-4 border-t">
              <p className="text-sm font-semibold text-gray-900 mb-2">Specialties:</p>
              <div className="flex flex-wrap gap-2">
                {specialties.slice(0, 3).map((specialty, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="bg-yellow-50 text-gray-700 hover:bg-yellow-100"
                  >
                    {specialty}
                  </Badge>
                ))}
              </div>
            </div>
          )}

          <div className="pt-4 border-t">
            <p className="text-sm font-semibold text-gray-900 mb-2">Services:</p>
            <div className="flex flex-wrap gap-2">
              {services.slice(0, 3).map((service, index) => (
                <Badge
                  key={index}
                  variant="outline"
                  className="border-[#FFD700] text-gray-700 text-xs"
                >
                  {service}
                </Badge>
              ))}
              {services.length > 3 && (
                <Badge variant="outline" className="text-xs text-gray-500">
                  +{services.length - 3} more
                </Badge>
              )}
            </div>
          </div>

          {slug && (
            <Button
              asChild
              className="w-full bg-[#FFD700] hover:bg-[#FBC02D] text-black font-semibold group-hover:shadow-lg transition-all"
            >
              <Link href={`/branches/${slug}`} className="flex items-center justify-center">
                View Details
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
}
