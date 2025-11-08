import { Card } from "@/components/ui/card";
import lineBodyBg from "@/assets/line_body_.png";
import mobileApp from "@/assets/mobile-3.png"; // You'll need to add this image to your assets

const MobilePlatform = () => {
  return (
    <section className="py-20 relative bg-[#F7F9FC]"
      style={{
        backgroundImage: `url(${lineBodyBg})`,
        backgroundPosition: 'center center',
        backgroundRepeat: 'repeat-y'
      }}>
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Mobile App Preview */}
          <div className="relative">
            {/* Main mobile app screenshot */}
            <div className="relative w-full max-w-[600px] mx-auto">
              <img
                src={mobileApp}
                alt="Mobile Platform Preview"
                className="w-full h-auto "
              />
            </div>
          </div>

          {/* Right column - Content */}
          <div>
            <p className="text-[#3EB049] font-semibold mb-3">
              MOBILE PLATFORM
            </p>

            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-black">
              Integrate your shopping cart in a matter of minutes<span className="text-[#3EB049]">.</span>
            </h2>

            <p className="text-muted-foreground mb-8">
              Tortor praesent dictumst aenean consectetur commodo nibh scelerisque libero rutrum. Per leo diam ligula elit fermentum amet ante vel pharetra mi senectus. Mollis nostra tempor etiam urna facilisis.
            </p>

           <a href="/contact">
            <button className="bg-[#3EB049] text-white px-6 py-3 rounded-lg hover:bg-[#359441] transition-colors">
              Discover more
            </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobilePlatform;
