import HeroSection from "./components/HeroSection";
import TrustBar from "./components/TrustBar";
import ServicesSection from "./components/ServicesSection";
import FeaturedProjects from "./components/FeaturedProjects";
import WhyChooseUs from "./components/WhyChooseUs";
import Testimonials from "./components/Testimonials";
import CTABanner from "./components/CTABanner";
import Footer from "./components/Footer";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <TrustBar />
      <ServicesSection />
      <FeaturedProjects />
      <WhyChooseUs />
      <Testimonials />
      <CTABanner />
      <Footer />
    </main>
  );
}
