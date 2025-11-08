import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";
import lineBodyBg from "@/assets/line_body_.png";

const testimonials = [
  {
    name: "Rohit Sharma",
    role: "Founder, UrbanKart",
    rating: 4.5,
    text: `“I started using this platform last year, and it’s been amazing. UPI payments are super quick, and I get settlements on time without any hassle.”`,
  },
  {
    name: "Neha Patel",
    role: "Owner, The Bake Story",
    rating: 4,
    text: `“Earlier I faced delays in UPI collections, but now everything is instant. The support team is really helpful whenever I need assistance.”`,
  },
  {
    name: "Amit Verma",
    role: "Business Manager, TechBridge",
    rating: 4.5,
    text: `“The dashboard is very simple and gives me complete control. I can see every UPI and card payment in real time — very reliable service.”`,
  },
];

function renderStars(rating: number) {
  const stars: JSX.Element[] = [];
  const full = Math.floor(rating);
  const hasHalf = rating - full >= 0.5;

  for (let i = 1; i <= 5; i++) {
    if (i <= full) {
      stars.push(<Star key={i} className="w-4 h-4 text-yellow-400" />);
    } else if (i === full + 1 && hasHalf) {
      // half star: empty star underneath, filled star clipped to 50%
      stars.push(
        <span key={i} className="relative inline-block w-4 h-4">
          <Star className="w-4 h-4 text-muted-foreground/40" />
          <span className="absolute top-0 left-0 w-1/2 overflow-hidden">
            <Star className="w-4 h-4 text-yellow-400" />
          </span>
        </span>
      );
    } else {
      stars.push(<Star key={i} className="w-4 h-4 text-muted-foreground/40" />);
    }
  }

  return stars;
}

const Testimonials = () => {
  return (
    <section
      className="py-20 relative bg-[#F7F9FC]"
      style={{
        backgroundImage: `url(${lineBodyBg})`,
        backgroundPosition: "center center",
        backgroundRepeat: "repeat-y",
      }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <p className="text-sm font-semibold text-emerald-600">TESTIMONIAL</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mt-2">What Our Customers Say</h2>
          <p className="max-w-2xl mx-auto mt-3 text-muted-foreground">
            Real feedback from Indian business owners who trust our platform for smooth UPI and
            digital payments.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6">
              <div className="flex items-center gap-2 mb-3">
                {renderStars(testimonial.rating)}
              </div>

              <p className="text-muted-foreground mb-6 italic">{testimonial.text}</p>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-sm font-medium text-muted-foreground">
                  {testimonial.name.split(" ")
                    .map((n) => n.charAt(0))
                    .slice(0, 2)
                    .join("")}
                </div>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
