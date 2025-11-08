const stats = [
  { value: "4M+", label: "Customers" },
  { value: "12K+", label: "Downloads" },
  { value: "7K+", label: "Reviews" },
  { value: "57+", label: "Countries" },
];

const Stats = () => {
  return (
    <section className="py-20 bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-6">
            Trusted by 25,000+ world-class brands and organizations of all sizes
          </h2>
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            {["Spotify", "Shopify", "Salesforce", "Instagram", "Mailchimp"].map((brand) => (
              <div key={brand} className="text-lg font-semibold opacity-70">{brand}</div>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.value}</div>
              <p className="text-sm opacity-80">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
