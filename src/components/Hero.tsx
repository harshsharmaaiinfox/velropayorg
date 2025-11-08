import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-banner.png";
import { useEffect, useState } from "react";

const Hero = () => {
  const avatars = [
    "https://randomuser.me/api/portraits/men/32.jpg",
    "https://randomuser.me/api/portraits/women/44.jpg",
    "https://randomuser.me/api/portraits/men/45.jpg",
    "https://randomuser.me/api/portraits/men/50.jpg",
  ];

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // small timeout to ensure initial classes are applied before transition
    const t = setTimeout(() => setMounted(true), 30);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      className="relative pt-32 pb-48 overflow-hidden 
      bg-gradient-to-br from-[#44CEA3] via-[#2E89C6] to-[#1A5A9E]
      bg-[length:400%_400%] animate-gradient-xy"
    >
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div
            className={`text-white transition-transform transition-opacity duration-1000 ease-out will-change-transform delay-150 ${
              mounted ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <h1 className="text-[68px] md:text-[68px] leading-tight font-bold mb-6 font-sans">
              Innovative Payment Infrastructure for Modern Businesses 
            </h1>
            <p className="text-lg md:text-xl mb-8 text-white/90 font-light">
              API-driven UPI and payout solutions designed for speed, reliability, and effortless integration.
            </p>

            {/* Email Contact Section */}
            <div className="mb-10">
              <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span className="text-white font-medium">info@paymentrush.com</span>
              </div>
            </div>

            {/* CTA Button */}
            <a href="/contact">
              <Button
              variant="accent"
              size="lg"
              className="rounded-[20px] bg-white/30 backdrop-blur-sm text-white hover:bg-white/40 transition"
            >
              Get Started
            </Button>
            </a>
          </div>

          {/* Right Side Image */}
          <div className="relative">
            <img
              src={heroImage}
              alt="Professional woman using payment solution"
              className={`w-full max-w-[500px] mx-auto relative z-10 transition-opacity transition-transform duration-1000 ease-out delay-400 ${
                mounted ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
