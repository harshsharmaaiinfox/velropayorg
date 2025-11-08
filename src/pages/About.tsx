import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Use provided images for card icons
import about1 from "@/assets/about-1.png";
import about2 from "@/assets/about-2.png";
import about3 from "@/assets/about-3.png";
import familyTablet from "@/assets/About.png";
import aboutBanner from "@/assets/about-banner.jpg";

const About = () => {
  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section
        className="relative text-white pt-40 pb-24"
        style={{ backgroundImage: `url(${aboutBanner})`, backgroundSize: 'cover', backgroundPosition: 'bottom' }}
      >
        <div className="container mx-auto px-4 relative">
          {/* Heading & Tagline (left aligned) */}
          <div className="text-left mb-12 md:mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">About Us</h1>
            <p className="text-xl md:text-2xl text-gray-300">Experience the power of us.</p>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1: Increase Revenue */}
            <div className="bg-white text-gray-800 rounded-2xl p-8 shadow-lg transform hover:scale-105 transition-transform duration-300">
              <div className="flex justify-start mb-6">
                <img src={about1} alt="Increase revenue" className="h-12 w-12 object-contain" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-left">Get Paid Instantly</h3>
              <p className="text-gray-600 text-sm mb-6 text-left">
                
                Accept UPI, card, and wallet payments in seconds — fast, secure, and hassle-free for you and your customers.
              </p>
              <div className="text-left">
                <a href="/contact"> 
             <button className="bg-[#3EB049] text-white px-6 py-3 rounded-lg hover:bg-[#359441] transition-colors">
              Learn more →
            </button>
           </a>
              </div>
            </div>

            {/* Card 2: Integrate Seamlessly */}
            <div className="bg-white text-gray-800 rounded-2xl p-8 shadow-lg transform hover:scale-105 transition-transform duration-300">
              <div className="flex justify-start mb-6">
                <img src={about2} alt="Integrate seamlessly" className="h-12 w-12 object-contain" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-left">Integrate Seamlessly</h3>
              <p className="text-gray-600 text-sm mb-6 text-left">
                Add our payment gateway to your website or app with simple APIs and quick setup — no tech headaches.

              </p>
              <div className="text-left">
               <a href="/contact"> 
             <button className="bg-[#3EB049] text-white px-6 py-3 rounded-lg hover:bg-[#359441] transition-colors">
              Learn more →
            </button>
           </a>
              </div>
            </div>

            {/* Card 3: Implement Easily */}
            <div className="bg-white text-gray-800 rounded-2xl p-8 shadow-lg transform hover:scale-105 transition-transform duration-300">
              <div className="flex justify-start mb-6">
                <img src={about3} alt="Implement easily" className="h-12 w-12 object-contain" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-left">Go Live Effortlessly
</h3>
              <p className="text-gray-600 text-sm mb-6 text-left">
                Set up your dashboard, track transactions, and start collecting payments — all within minutes.

              </p>
              <div className="text-left">
                <a href="/contact"> 
             <button className="bg-[#3EB049] text-white px-6 py-3 rounded-lg hover:bg-[#359441] transition-colors">
              Learn more →
            </button>
           </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Two-column Image + Content Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: image with floating review card */}
            <div className="relative">
              <img src={familyTablet} alt="Family on tablet" className="w-full rounded-xl shadow-lg object-cover" />

              {/* Floating review card */}
              <div className="absolute -bottom-8 left-8 bg-white rounded-lg shadow-xl w-64 p-4 flex items-center gap-4">
                <div className="flex-shrink-0">
                  <div className="text-3xl font-bold text-teal-500">4.7</div>
                  <div className="text-xs text-gray-500">(871 Reviews)</div>
                </div>
                <div>
                  <div className="text-sm font-semibold">From Google Business</div>
                  <div className="text-xs text-yellow-500">★★★★★</div>
                </div>
              </div>
            </div>

            {/* Right: content */}
            <div>
              <p className="text-sm font-semibold text-green-600 uppercase mb-4">ABOUT VELROPAY</p>
              <h2 className="text-4xl lg:text-5xl font-bold text-[#0f172a] mb-6">More than payments. It’s a movement.</h2>
              <p className="text-gray-600 mb-8">We built Velropay to make digital payments simple, fast, and accessible for every Indian business. From small stores to growing startups, our mission is to empower merchants with secure, instant, and reliable UPI-powered transactions.</p>
              <a href="/contact">
              <button className="bg-green-500 text-white font-medium py-3 px-6 rounded-full shadow hover:bg-green-600 transition">Discover more</button>

              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default About;