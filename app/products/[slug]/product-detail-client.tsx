'use client';

import { motion } from 'framer-motion';
import { Product, getProductBySlug } from '@/lib/products-data';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { ArrowLeft, CircleCheck as CheckCircle, Phone, Mail } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { toast } from 'sonner';
import { BrandsShowcase } from '@/components/brands-showcase';

interface ProductDetailClientProps {
  product: Omit<Product, 'icon'>;
  slug: string;
}

export default function ProductDetailClient({ product, slug }: ProductDetailClientProps) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const fullProduct = getProductBySlug(slug);
  const ProductIcon = fullProduct?.icon;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.success('Inquiry submitted successfully! We will contact you soon.');
    setIsDialogOpen(false);
  };

  return (
    <div className="min-h-screen">
      <section className="relative py-12 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/products"
            className="inline-flex items-center text-[#FFD700] hover:text-[#FBC02D] mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Products
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-start space-x-6"
          >
            {ProductIcon && (
              <div className="w-20 h-20 bg-[#FFD700] rounded-2xl flex items-center justify-center flex-shrink-0">
                <ProductIcon className="w-10 h-10 text-black" />
              </div>
            )}
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                {product.title}
              </h1>
              <p className="text-xl text-gray-300">{product.description}</p>
            </div>
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
                    <h2 className="text-2xl font-bold">Product Overview</h2>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 leading-relaxed">
                      {product.detailedDescription}
                    </p>
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
                    <h2 className="text-2xl font-bold">Specifications</h2>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {product.specifications.map((spec, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-[#FFD700] flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>

              {product.applications && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                >
                  <Card>
                    <CardHeader>
                      <h2 className="text-2xl font-bold">Applications</h2>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {product.applications.map((app, index) => (
                          <li key={index} className="flex items-start space-x-3">
                            <CheckCircle className="w-5 h-5 text-[#FFD700] flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700">{app}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              )}

              {product.brands && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                >
                  <Card>
                    <CardHeader>
                      <h2 className="text-2xl font-bold">Available Brands</h2>
                      <p className="text-gray-600">We stock premium brands for quality assurance</p>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-3">
                        {product.brands.map((brand, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05, duration: 0.3 }}
                            whileHover={{ scale: 1.1 }}
                            className="px-4 py-2 rounded-full border-2 font-semibold text-sm transition-all cursor-default bg-[#FFD700] border-[#FFD700] text-black shadow-lg"
                          >
                            {brand}
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )}
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
                    <h3 className="text-xl font-bold">Key Features</h3>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {product.features.map((feature, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-[#FFD700] flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-gray-50">
                  <CardHeader>
                    <h3 className="text-xl font-bold">Get a Quote</h3>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-600">
                      Interested in this product? Contact us for pricing and availability.
                    </p>
                    <Button
                      onClick={() => setIsDialogOpen(true)}
                      className="w-full bg-[#FFD700] hover:bg-[#FBC02D] text-black font-semibold"
                    >
                      Request Quote
                    </Button>
                    <div className="space-y-3 pt-4 border-t">
                      <a
                        href="tel:09443444177"
                        className="flex items-center space-x-3 text-gray-700 hover:text-[#FFD700]"
                      >
                        <Phone className="w-5 h-5" />
                        <span>094434 44177</span>
                      </a>
                      <a
                        href="mailto:hajiyartradersrmd@gmail.com"
                        className="flex items-center space-x-3 text-gray-700 hover:text-[#FFD700]"
                      >
                        <Mail className="w-5 h-5" />
                        <span className="text-sm">hajiyartradersrmd@gmail.com</span>
                      </a>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-blue-50 border-blue-200">
                  <CardContent className="pt-6">
                    <h4 className="font-bold text-blue-900 mb-2">Bulk Orders Welcome</h4>
                    <p className="text-sm text-blue-700">
                      Special pricing available for contractors and bulk purchases. Contact us
                      for volume discounts.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Request Quote for {product.title}</DialogTitle>
            <DialogDescription>
              Fill out the form below and we will get back to you with pricing details.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="name">Name *</Label>
              <Input id="name" required placeholder="Your name" />
            </div>
            <div>
              <Label htmlFor="phone">Phone Number *</Label>
              <Input id="phone" type="tel" required placeholder="Your phone number" />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="your@email.com" />
            </div>
            <div>
              <Label htmlFor="quantity">Quantity/Requirements</Label>
              <Input id="quantity" placeholder="e.g., 100 bags, 5 tons, etc." />
            </div>
            <div>
              <Label htmlFor="message">Additional Details *</Label>
              <Textarea
                id="message"
                required
                placeholder="Please provide any additional details about your requirements"
                rows={4}
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-[#FFD700] hover:bg-[#FBC02D] text-black font-semibold"
            >
              Submit Request
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
