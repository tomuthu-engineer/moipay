import { HeroSection } from '@/components/sections/hero-section';
import { FeaturedCategories } from '@/components/sections/featured-categories';
import { RoofingShowcase } from '@/components/sections/roofing-showcase';
import { ServicesSection } from '@/components/sections/services-section';
import { Testimonials } from '@/components/sections/testimonials';
import { CTABanner } from '@/components/sections/cta-banner';

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturedCategories />
      <RoofingShowcase />
      <ServicesSection />
      <Testimonials />
      <CTABanner />
    </>
  );
}
