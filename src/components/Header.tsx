import React from "react";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Link } from "react-router-dom";
import whiteLogo from "@/assets/velro-pay-logo white.png";
import blackLogo from "@/assets/velro-pay-logo black.png";

const Header = () => {
  // Track scroll state with initial check
  const [scrolled, setScrolled] = React.useState(() => window.scrollY > 50);

  React.useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;
    
    const updateScrolled = () => {
      const shouldBeScrolled = window.scrollY > 50;
      if (shouldBeScrolled !== scrolled) {
        setScrolled(shouldBeScrolled);
      }
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrolled);
        ticking = true;
      }
    };

    // Initial check
    handleScroll();
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-sm transition-all duration-300 ease-in-out will-change-transform ${
        scrolled ? "bg-white shadow translate-y-0" : "bg-transparent -translate-y-1"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center h-16 pt-5 pb-5">
          <div className="flex items-center gap-2">
            <Link to="/" className="block">
              <div className="w-125 h-12 transition-opacity duration-300 ease-in-out">
                <img 
                  key={scrolled ? 'black' : 'white'}
                  src={scrolled ? blackLogo : whiteLogo} 
                  alt="Velropay Logo" 
                  className="w-full h-full object-contain transition-all duration-300 ease-in-out"
                />
              </div>
            </Link>
          </div>

          {/* spacer + right-aligned nav */}
          <div className="flex-1 flex items-center justify-end gap-4">
            <nav className="hidden md:flex items-center gap-8">
              <Link to="/" className={`text-m font-medium transition-colors transform transition-transform duration-200 ease-out hover:scale-105 ${scrolled ? "text-black" : "text-white"}`}>
                Home
              </Link>
              <Link to="/about" className={`text-m font-medium transition-colors transform transition-transform duration-200 ease-out hover:scale-105 ${scrolled ? "text-black" : "text-white"}`}>
                About
              </Link>
              <Link to="/service" className={`text-m font-medium transition-colors transform transition-transform duration-200 ease-out hover:scale-105 ${scrolled ? "text-black" : "text-white"}`}>
                Services
              </Link>
              <Link to="/contact" className={`text-m font-medium transition-colors transform transition-transform duration-200 ease-out hover:scale-105 ${scrolled ? "text-black" : "text-white"}`}>
                Content
              </Link>
            </nav>

            <div className="flex items-center"> 
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className={`h-5 w-5 ${scrolled ? "text-black" : "text-white"}`} />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
