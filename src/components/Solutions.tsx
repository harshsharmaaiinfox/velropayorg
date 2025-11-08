import { Card } from "@/components/ui/card";
import { Smartphone, Building, CreditCard, Globe, Repeat, Lock, Zap, Shield } from "lucide-react";

const solutions = [
  { icon: Smartphone, title: "Payment Network", description: "Fast and secure payment network" },
  { icon: Building, title: "Micro-Sellers", description: "Solutions for small businesses" },
  { icon: CreditCard, title: "Split Payment", description: "Flexible payment splitting" },
  { icon: Globe, title: "Request Payment", description: "Easy payment requests" },
  { icon: Repeat, title: "Refund Payment", description: "Quick refund processing" },
  { icon: Lock, title: "Secure Transactions", description: "Bank-level security" },
  { icon: Zap, title: "Instant", description: "Real-time transactions" },
  { icon: Shield, title: "Payment Integration", description: "Seamless integration" },
];

const Solutions = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Smart Solution for Your Payment</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Everything you need to manage payments efficiently
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((solution, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <solution.icon className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-lg font-bold mb-2">{solution.title}</h3>
              <p className="text-sm text-muted-foreground">{solution.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
