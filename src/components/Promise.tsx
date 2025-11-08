import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";
import dashboardImage from "@/assets/dashboard-main.png";
import lineBodyBg from "@/assets/line_body_.png";

const Promise = () => {
  return (
    <section 
      className="py-20 relative"
      style={{
        backgroundImage: `url(${lineBodyBg})`,
        backgroundPosition: 'center center',
        backgroundRepeat: 'repeat-y'
      }}
    >
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-white p-2">
              <img
                src={dashboardImage}
                alt="Payment Dashboard Interface"
                className="rounded-xl w-full"
              />
            </div>
            <Card className="absolute -bottom-4 -right-4 p-6 bg-white shadow-2xl">
              <div className="text-5xl font-bold text-primary mb-2">4.7</div>
              <div className="flex items-center gap-1 mb-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground">Based on 2000+ reviews</p>
            </Card>
          </div>

          <div>
            <p className="text-accent font-semibold mb-3">OUR PROMISE</p>
            <h2 className="text-4xl font-bold mb-6">
              Powering the Next Generation of 24×7 Payment Infrastructure
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              VelroPay helps fintech startups and B2B businesses simplify the way they collect and disburse payments.
With fast, secure, and developer-friendly APIs, you can automate UPI collections, manage payouts, and scale your payment operations — all from one reliable platform.

            </p>
           <a href="/contact">
            <Button variant="accent" size="lg">
              Discover More
            </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Promise;
