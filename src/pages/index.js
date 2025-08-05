import Header from '@/components/Header';
import BlogSection from '@/components/sections/BlogSection';
import HeroSection from '@/components/sections/HeroSection';
import { IndustryVerticals } from '@/components/sections/IndustryVerticals';
import NewsletterCTA from '@/components/NewsletterCTA';
import ReportsSection from '@/components/sections/ReportsSection';
import ServicesOverview from '@/components/sections/ServicesOverview';
import WhyChoose from '@/components/sections/WhyChoose';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <HeroSection />
      <WhyChoose />
      <ServicesOverview />
      <ReportsSection />
      <IndustryVerticals />
      <BlogSection />
    </>
  );
}
