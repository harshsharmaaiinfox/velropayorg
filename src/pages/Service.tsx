import Header from '../components/Header'
import Footer from '../components/Footer'
import serviceImage from '../assets/service.png'
import ServiceHighlight from '@/components/ServiceHighlight'
import Integrations from '@/components/Integrations'
import DashboardHero from '@/components/DashboardSection'
import Testimonials from '@/components/Testimonials'
export default function Service() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-teal-500 relative overflow-hidden">
        <div className="container mx-auto px-4 py-12 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Left Content */}
            <div className="text-white space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Helping You Accept Payments Smarter
              </h1>
              <p className="text-lg md:text-xl opacity-90">
                Empowering businesses across india to collect UPI, card, and wallet payments instantly. Fast setup, real-time tracking, and complete control — all in one simple dashboard.
              </p>
                <a href="/contact">
                <button className="bg-emerald-500 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-emerald-600 transition-colors">
                Get Started
              </button>
                </a>
            </div>

            {/* Right Content - Payment Dashboard Illustration */}
            <div className="relative">
              <div className="relative z-10">
                <img
                  src={serviceImage}
                  alt="Payment Service Dashboard"
                  className="w-full max-w-2xl mx-auto"
                />
              </div>
            </div>
          </div>
        </div>
        {/* Gentle Curve Cut */}
        <svg
          className="absolute bottom-0 w-full h-24 text-white"
          preserveAspectRatio="none"
          viewBox="0 0 100 100"
          fill="currentColor"
        >
          <path d="M0,70 Q50,100 100,70 L100,100 L0,100 Z" />
        </svg>
      </section>
        <ServiceHighlight />
         <Integrations />
         
        <DashboardHero />
        
        <Testimonials />
      <Footer />
    </div>
  )
}