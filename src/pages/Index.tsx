import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import AccountTypes from "@/components/AccountTypes";
import Promise from "@/components/Promise";
import Integrations from "@/components/Integrations";
import Solutions from "@/components/Solutions";
import Stats from "@/components/Stats";
import ServiceHighlight from "@/components/ServiceHighlight";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import DashboardHero from "@/components/DashboardSection";
import MobilePlatform from "@/components/MobilePlatform";


const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Features />
        <Promise />
        <Integrations />
        <ServiceHighlight />
        <DashboardHero />
        <MobilePlatform />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
