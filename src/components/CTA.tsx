import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-primary to-accent">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-white mb-4">Need more help?</h2>
        <p className="text-white/90 mb-8 text-lg">
          Our team is ready to assist you with any questions
        </p>
        <Button variant="secondary" size="lg">
          Contact Support
        </Button>
      </div>
    </section>
  );
};

export default CTA;
