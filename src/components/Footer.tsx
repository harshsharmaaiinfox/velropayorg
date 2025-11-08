import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import blackLogo from "@/assets/velro-pay-logo black.png";

const Footer = () => {
  return (
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
  );
};

export default Footer;
