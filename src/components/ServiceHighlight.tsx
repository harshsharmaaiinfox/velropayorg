import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";
import dashboard from "@/assets/velropay-dashboard.png";
import why1 from "@/assets/why-1.png";
import why2 from "@/assets/why-2.png";
import why3 from "@/assets/why-3.png";
import lineBodyBg from "@/assets/line_body_.png";



const services = [
  {
    img: why1 ,
    title: "Easy to Setup",
    description:
      "Get started instantly — accept UPI, cards, and wallet payments within minutes, no tech setup required.",
  },
  {
    img: why2,
    title: "Secure Transactions",
    description:
      "Every transaction is protected with bank-grade encryption and RBI-approved security standards.",
  },
  {
    img: why3,
    title: "24/7 Support",
    description:
      "Count on our expert team anytime — we’re available round-the-clock to help you succeed.",
  },
];

const ServiceHighlight = () => {
  return (
    <section  className="py-20 relative bg-[#F7F9FC]"
      style={{
        backgroundImage: `url(${lineBodyBg})`,
        backgroundPosition: 'center center',
        backgroundRepeat: 'repeat-y'
      }}>
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left column – text + services */}
          <div>
            <p className="text-accent font-semibold mb-3 text-center md:text-left pb-4">
              WHY CHOOSE US
            </p>

            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-black">
              Smart Solutions for All Your Payment Needs<span className="text-primary">.</span>

            </h2>

            <div className="space-y-8">
              {services.map((service, index) => (
                <div key={index} className="flex gap-4">
                  {/* Image “icon” – same size & style as before */}
                  <div className="w-12 h-12  flex items-center justify-center flex-shrink-0 overflow-hidden">
                    <img
                      src={service.img}
                      alt={service.title}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  <div>
                    <h3 className="text-lg font-bold mb-1">{service.title}</h3>
                    <p className="text-muted-foreground">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right column – image + rating card */}
          <div className="relative">
            <img
              src={dashboard}
              alt="Business women collaborating"
              className="rounded-2xl shadow-xl w-full object-cover"
            />

            {/* Rating card */}
            <Card className="absolute bottom-8 right-8 p-6 bg-white shadow-2xl w-48">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-5xl font-bold text-primary">4.7</div>
                  <p className="text-sm text-muted-foreground mt-1">
                    (871 Reviews)
                  </p>
                </div>

                <div className="flex flex-col items-end">
                  <div className="flex gap-0.5">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">
                    From Google Business
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceHighlight;