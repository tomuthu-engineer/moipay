'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { PhoneCall } from 'lucide-react';
import { ProductCard } from '@/components/product-card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import { products } from '@/lib/products-data';

export default function ProductsPage() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState('');

  const handleInquire = (productTitle: string) => {
    setSelectedProduct(productTitle);
    setIsDialogOpen(true);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.success('Inquiry submitted successfully! We will contact you soon.');
    setIsDialogOpen(false);
  };

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
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
              Products & Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive range of quality building materials for all your construction needs
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.6 }}
              >
                <ProductCard
                  icon={product.icon}
                  title={product.title}
                  description={product.description}
                  features={product.features}
                  slug={product.slug}
                  onInquire={() => handleInquire(product.title)}
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
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Need Bulk Orders?</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              We offer special pricing for contractors and bulk purchases. Contact us for a customized quote.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                size="lg"
                className="bg-[#FFD700] hover:bg-[#FBC02D] text-black font-bold w-full sm:w-auto"
                onClick={() => setIsDialogOpen(true)}
              >
                Request Bulk Quote
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-gray-900 w-full sm:w-auto"
              >
                <a href="tel:09443444177" className="flex items-center">
                  <PhoneCall className="w-5 h-5 mr-2" />
                  Call: 094434 44177
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Product Inquiry</DialogTitle>
            <DialogDescription>
              {selectedProduct
                ? `Get a quote for ${selectedProduct}`
                : 'Fill out the form below and we will get back to you soon.'}
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
              <Label htmlFor="product">Product</Label>
              <Input
                id="product"
                defaultValue={selectedProduct}
                placeholder="Product name"
              />
            </div>
            <div>
              <Label htmlFor="message">Message *</Label>
              <Textarea
                id="message"
                required
                placeholder="Please provide details about your requirements"
                rows={4}
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-[#FFD700] hover:bg-[#FBC02D] text-black font-semibold"
            >
              Submit Inquiry
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}