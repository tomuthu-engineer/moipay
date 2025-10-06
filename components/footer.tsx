import Link from 'next/link';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-[#FFD700] p-2 rounded-lg">
                <span className="text-black font-bold text-lg">HT</span>
              </div>
              <div>
                <h3 className="text-white font-bold text-lg">Hajiyar Traders</h3>
                <p className="text-xs text-gray-400">Since 1999</p>
              </div>
            </div>
            <p className="text-sm mb-4">
              Your trusted partner for quality building materials across Tamil Nadu for over 26 years.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-[#FFD700] transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-[#FFD700] transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-[#FFD700] transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-[#FFD700] transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#FFD700] transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-[#FFD700] transition-colors text-sm">
                  Products & Services
                </Link>
              </li>
              <li>
                <Link href="/branches" className="hover:text-[#FFD700] transition-colors text-sm">
                  Our Branches
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#FFD700] transition-colors text-sm">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Our Products</h4>
            <ul className="space-y-2 text-sm">
              <li>Cement & Steel</li>
              <li>Roofing Sheets</li>
              <li>Electrical Supplies</li>
              <li>Plumbing Materials</li>
              <li>Paint & Hardware</li>
              <li>Sanitaryware & CP Fittings</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <MapPin className="w-5 h-5 text-[#FFD700] flex-shrink-0 mt-0.5" />
                <span className="text-sm">
                  Rameswaram Road, Ramanathapuram, Tamil Nadu
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-5 h-5 text-[#FFD700] flex-shrink-0" />
                <a href="tel:09443444177" className="text-sm hover:text-[#FFD700]">
                  094434 44177
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-5 h-5 text-[#FFD700] flex-shrink-0" />
                <a href="mailto:hajiyartradersrmd@gmail.com" className="text-sm hover:text-[#FFD700]">
                  hajiyartradersrmd@gmail.com
                </a>
              </li>
            </ul>
            <div className="mt-4 text-sm">
              <p className="text-white font-medium">Business Hours</p>
              <p className="text-xs">Mon - Sun: 8:00 AM - 8:00 PM</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>© {new Date().getFullYear()} Hajiyar Traders. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
