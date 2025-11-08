import { Card } from "@/components/ui/card";
import { BarChart, Shield, Clock } from "lucide-react";
import dashboardthree from "@/assets/dashboard-3.png";
import lineBodyBg from "@/assets/line_body_.png";

const dashboardFeatures = [
  {
    icon: BarChart,
    title: "Real-time Analytics",
    description:
      "Track your business performance with detailed insights and analytics in real-time.",
  },
  {
    icon: Shield,
    title: "Advanced Security",
    description:
      "Your data is protected with enterprise-grade security and continuous monitoring.",
  },
  {
    icon: Clock,
    title: "Instant Updates",
    description:
      "Get immediate notifications and updates about your transactions and account activity.",
  },
];

const DashboardSection = () => {
  return (
    <section className="py-20 relative bg-[#F7F9FC]"
      style={{
        backgroundImage: `url(${lineBodyBg})`,
        backgroundPosition: 'center center',
        backgroundRepeat: 'repeat-y'
      }}>
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left column – text + features */}
          <div>
            <p className="text-accent font-semibold mb-3 text-center md:text-left pb-4">
              DASHBOARD
            </p>

            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-black">
              Interactive Dashboard Control Page<span className="text-[#3EB049]">.</span>
            </h2>

            <p className="text-muted-foreground mb-8">
              Tortor praesent dictumst aenean consectetur commodo nibh scelerisque libero rutrum. Per leo diam ligula elit fermentum amet ante vel pharetra mi scelerus. Mollis nostra tempor etiam urna facilisis.
            </p>

           <a href="/contact"> 
             <button className="bg-[#3EB049] text-white px-6 py-3 rounded-lg hover:bg-[#359441] transition-colors">
              Learn more →
            </button>
           </a>
          </div>

          {/* Right column – dashboard preview */}
          <div className="relative">
            <img
              src={dashboardthree}
              alt="Dashboard Preview"
              className="rounded-2xl shadow-xl w-full object-cover"
            />

          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardSection;
