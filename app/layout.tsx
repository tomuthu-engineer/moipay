import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Toaster } from '@/components/ui/sonner';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Hajiyar Traders - Quality Building Materials Since 1999',
  description: 'Your trusted partner for quality building materials across Tamil Nadu. Serving contractors, builders, and individuals for over 26 years.',
  keywords: 'building materials, cement, steel, construction supplies, Tamil Nadu, Ramanathapuram',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="pt-20">{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
