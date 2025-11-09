import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import blackLogo from "@/assets/velro-pay-logo black.png";
import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

const Footer = () => {

  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <footer className="bg-secondary text-secondary-foreground py-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="mb-4">
                <img src={blackLogo} alt="Velropay Logo" className="h-12 w-auto object-contain" />
              </div>
              <p className="text-sm opacity-80 mb-4">
                The smart way for online payment solution. Trusted by thousands of businesses worldwide.
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="/" className="text-sm opacity-80 hover:opacity-100 transition-opacity">Home</a></li>
                <li><a href="/service" className="text-sm opacity-80 hover:opacity-100 transition-opacity">Service</a></li>
                <li><a href="/about" className="text-sm opacity-80 hover:opacity-100 transition-opacity">About</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Integration</h3>
              <ul className="space-y-2">
                <li><a href="/contact" className="text-sm opacity-80 hover:opacity-100 transition-opacity">API Integration Kits</a></li>
                <li><a href="/contact" className="text-sm opacity-80 hover:opacity-100 transition-opacity">Back Office</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Support</h3>
              <ul className="space-y-2">
                <li><a href="/contact" className="text-sm opacity-80 hover:opacity-100 transition-opacity">Contact Us</a></li>
                <li><a href="/contact" className="text-sm opacity-80 hover:opacity-100 transition-opacity">Help centre </a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center">
            <p className="text-sm opacity-80">© Copyright 2024 Velropay All rights reserved.</p>
          </div>
        </div>
      </footer>
      {/* Floating Back to Top Button */}
      {showButton && (
        <button
          onClick={handleBackToTop}
          className="fixed bottom-8 right-8 z-50 flex items-center justify-center w-14 h-14 rounded-full backdrop-blur-lg bg-white/30 border border-white/20 shadow-lg transition hover:bg-white/50 hover:scale-105"
          style={{
            boxShadow: "0 4px 24px rgba(0,0,0,0.12)",
            backdropFilter: "blur(12px)"
          }}
          aria-label="Back to top"
        >
          <ArrowUp className="w-7 h-7 text-[#2CAE6C]" />
        </button>
      )}
    </>
  );
};

export default Footer;
