import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Zap, Wallet, CreditCard } from "lucide-react";
import lineBodyBg from "@/assets/line_body_.png";

const features = [
  {
    icon: Zap,
    title: "Fast Integration",
    description: "Quick and seamless integration with your existing systems. Get started in minutes with our developer-friendly SDKs and comprehensive documentation. Supports multiple platforms and frameworks.",
    link: "Learn more",
  },
  {
    icon: Wallet,
    title: "API Based Payout",
    description: "Streamline your payment operations with our robust API infrastructure. Automate bulk payments, manage multiple currencies, and ensure secure transactions with advanced encryption protocols.",
    link: "Learn more",
  },
  {
    icon: CreditCard,
    title: "Auto UPI Pay",
    description: "Enable instant UPI payments with automated processing and real-time verification. Features include QR code generation, webhook notifications, and detailed transaction analytics for better financial insights.",
    link: "Learn more",
  },
];

const Features = () => {
  return (
    <section 
      className="relative -mt-32 pb-20 bg-transparent"
      style={{
        backgroundImage: `url(${lineBodyBg})`,
        backgroundPosition: 'center center',
        backgroundRepeat: 'repeat-y'
      }}
    >
      <div className="container mx-auto px-4">
        <div className="flex md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="p-8 hover:shadow-xl transition-shadow bg-white shadow-lg">
              <div className="mb-6 w-16 h-16 flex items-center justify-center rounded-lg bg-[#2CAE6C]/10">
                {feature.icon && <feature.icon className="w-8 h-8 text-[#2CAE6C]" />}
              </div>
              <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
              <p className="text-muted-foreground text-base mb-4">{feature.description}</p>
              <Button 
                variant="accent" 
                size="sm" 
                className="bg-[#2CAE6C] hover:bg-[#2f9a3f] text-white flex items-center gap-2"
              >
                {feature.link}
                <svg 
                  width="16" 
                  height="16" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path 
                    d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" 
                    fill="currentColor"
                  />
                </svg>
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
