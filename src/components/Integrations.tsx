import { Card } from "@/components/ui/card";
import lineBodyBg from "@/assets/line_body_.png";
import splitImg from "@/assets/split.png";
import secureImg from "@/assets/secure.png";
import requestImg from "@/assets/request.png";
import paymentImg from "@/assets/payment.png";
import onsiteImg from "@/assets/onsite.png";
import calanderImg from "@/assets/calander.png";
import Rupee from "@/assets/rupee.png";
import Rupees from "@/assets/rupee-2.png";

const solutions = [
  {
    icon: Rupee,
    title: "Payment Methods",
    description: "Empower your customers to pay their way — via UPI, cards, or net banking — all in one smooth checkout."
  },
  {
    icon: calanderImg,
    title: "Subscriptions",
    description: "Automate recurring UPI and card payments so your customers never miss a renewal or due date."
  },
  {
    icon: splitImg,
    title: "Split Payments",
    description: "Simplify business partnerships by automatically splitting UPI or card payments between multiple accounts."
  },
  {
    icon: requestImg,
    title: "Request a Payment",
    description: "Send branded UPI payment links or QR codes and collect money instantly — no chasing required."
  },
  {
    icon: onsiteImg,
    title: "Onsite Payments",
    description: "Turn your counter into a digital hub with fast UPI QR and POS payment options."
  },
  {
    icon: secureImg,
    title: "Secure Transactions",
    description: "Gain customer trust with enterprise-grade UPI encryption, real-time fraud alerts, and total data protection."
  },
  {
    icon: Rupees,
    title: "e-Wallet",
    description: "Offer your own wallet solution for quick UPI transfers and instant checkouts anywhere, anytime."
  },
  {
    icon: paymentImg,
    title: "Payment Integrations",
    description: "Integrate UPI, wallet, and card payments into your platform within minutes — no tech hassle."
  }
];

const Integrations = () => {
  return (
    <section 
      className="py-20 relative bg-[#F7F9FC]"
      style={{
        backgroundImage: `url(${lineBodyBg})`,
        backgroundPosition: 'center center',
        backgroundRepeat: 'repeat-y'
      }}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl lg:text-5xl font-bold text-center mb-4">Smart Solution for Your</h2>
        <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16">Payment.</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((solution, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-lg transition-shadow border-none"
            >
              <div className="w-24 h-24 flex items-center justify-center mb-4">
  <img src={solution.icon} alt={solution.title} className="w-16 h-16 object-contain" />
</div>
              <h3 className="text-lg font-bold mb-3">{solution.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{solution.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Integrations;
