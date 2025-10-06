'use client';

import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, MessageCircle, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { toast } from 'sonner';

export default function ContactPage() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.success('Message sent successfully! We will respond within 2 hours.');
    (e.target as HTMLFormElement).reset();
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">Contact Us</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Get in touch with us for quotes, inquiries, or any assistance you need
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <a href="tel:09443444177">
                <Card className="h-full hover:shadow-xl transition-all hover:border-[#FFD700] border-2 cursor-pointer">
                  <CardContent className="pt-6 text-center">
                    <div className="w-16 h-16 bg-[#FFD700] rounded-full flex items-center justify-center mx-auto mb-4">
                      <Phone className="w-8 h-8 text-black" />
                    </div>
                    <h3 className="font-bold text-lg mb-2">Call Now</h3>
                    <p className="text-gray-600 text-sm mb-2">094434 44177</p>
                    <p className="text-xs text-gray-500">Mon - Sun: 8AM - 8PM</p>
                  </CardContent>
                </Card>
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
            >
              <a href="https://wa.me/919443444177" target="_blank" rel="noopener noreferrer">
                <Card className="h-full hover:shadow-xl transition-all hover:border-[#FFD700] border-2 cursor-pointer">
                  <CardContent className="pt-6 text-center">
                    <div className="w-16 h-16 bg-[#FFD700] rounded-full flex items-center justify-center mx-auto mb-4">
                      <MessageCircle className="w-8 h-8 text-black" />
                    </div>
                    <h3 className="font-bold text-lg mb-2">WhatsApp</h3>
                    <p className="text-gray-600 text-sm mb-2">Chat with us</p>
                    <p className="text-xs text-gray-500">Quick responses</p>
                  </CardContent>
                </Card>
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <a href="mailto:hajiyartradersrmd@gmail.com">
                <Card className="h-full hover:shadow-xl transition-all hover:border-[#FFD700] border-2 cursor-pointer">
                  <CardContent className="pt-6 text-center">
                    <div className="w-16 h-16 bg-[#FFD700] rounded-full flex items-center justify-center mx-auto mb-4">
                      <Mail className="w-8 h-8 text-black" />
                    </div>
                    <h3 className="font-bold text-lg mb-2">Email Us</h3>
                    <p className="text-gray-600 text-sm mb-2">hajiyartradersrmd@gmail.com</p>
                    <p className="text-xs text-gray-500">2-hour response time</p>
                  </CardContent>
                </Card>
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <Card className="h-full hover:shadow-xl transition-all hover:border-[#FFD700] border-2">
                <CardContent className="pt-6 text-center">
                  <div className="w-16 h-16 bg-[#FFD700] rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin className="w-8 h-8 text-black" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">Visit Us</h3>
                  <p className="text-gray-600 text-sm mb-2">Rameswaram Road, Ramanathapuram</p>
                  <p className="text-xs text-gray-500">Get directions</p>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card>
                <CardContent className="pt-6">
                  <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
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
                      <Label htmlFor="subject">Subject</Label>
                      <Input id="subject" placeholder="What is this regarding?" />
                    </div>
                    <div>
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        required
                        placeholder="Tell us how we can help you"
                        rows={6}
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-[#FFD700] hover:bg-[#FBC02D] text-black font-semibold"
                    >
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </Button>
                  </form>

                  <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                    <div className="flex items-start space-x-3">
                      <Clock className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-blue-900">Response Time Promise</p>
                        <p className="text-sm text-blue-700">
                          We respond to all inquiries within 2 hours during business hours
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold mb-4">Business Hours</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center py-2 border-b">
                      <span className="text-gray-700">Monday - Friday</span>
                      <span className="font-semibold">8:00 AM - 8:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b">
                      <span className="text-gray-700">Saturday</span>
                      <span className="font-semibold">8:00 AM - 8:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="text-gray-700">Sunday</span>
                      <span className="font-semibold">8:00 AM - 8:00 PM</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold mb-4">Our Location</h3>
                  <div className="aspect-video rounded-lg overflow-hidden">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.1234567890123!2d78.8373!3d9.3634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOcKwMjEnNDguMiJOIDc4wrA1MCcxNC4zIkU!5e0!3m2!1sen!2sin!4v1234567890123"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Hajiyar Traders Location"
                    />
                  </div>
                  <div className="mt-4 space-y-2">
                    <div className="flex items-start space-x-3">
                      <MapPin className="w-5 h-5 text-[#FFD700] flex-shrink-0 mt-1" />
                      <p className="text-gray-700">
                        Rameswaram Road, Ramanathapuram, Tamil Nadu 623501
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
