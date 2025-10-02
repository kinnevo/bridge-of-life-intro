import latteware1 from "@/assets/latteware-1.jpg";
import latteware2 from "@/assets/latteware-2.jpg";
import latteware3 from "@/assets/latteware-3.jpg";

const Latteware = () => {
  const products = [
    {
      image: latteware1,
      title: "Reflection Cup",
      description: "Begin each day with intention. Our signature ceramic cup transforms your morning ritual into a moment of mindfulness."
    },
    {
      image: latteware2,
      title: "Journey Set",
      description: "A curated collection for those who value both form and function. Share meaningful moments with fellow travelers."
    },
    {
      image: latteware3,
      title: "Harmony Collection",
      description: "Elegant pieces that bring balance to your daily rituals. Crafted with care for those who seek beauty in simplicity."
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-slide-up">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Our Latteware
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            More than vessels—they're companions on your journey. Each piece in our latteware collection 
            is thoughtfully designed to elevate your daily rituals and remind you of your commitment to transformation.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {products.map((product, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-card shadow-soft hover:shadow-glow transition-all duration-500 hover:-translate-y-2 animate-scale-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="aspect-square overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-2xl font-semibold text-card-foreground mb-3">
                  {product.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {product.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Latteware;
