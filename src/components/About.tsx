import { Heart, Users, Sparkles } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: <Heart className="w-12 h-12" />,
      title: "Transformative Journey",
      description: "Experience a profound reinvention of self through our carefully crafted activities designed to unlock your true potential."
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "Vibrant Community",
      description: "Connect with like-minded individuals on their own journey of transformation. Together, we bridge the gap to a better tomorrow."
    },
    {
      icon: <Sparkles className="w-12 h-12" />,
      title: "Meaningful Rituals",
      description: "Integrate mindful practices into your daily life with our curated LatteWare collection of questions, turning every moment into an opportunity for reflection."
    }
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-slide-up">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            The Reinvention
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Bridge of Life is more than a philosophy—it's a movement. We believe that within each of us 
            lies the power to transform, evolve, and create the life we've always envisioned. 
            Through community, mindfulness, and intentional living, we guide you across the bridge to your best self.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-card rounded-2xl p-8 shadow-soft hover:shadow-glow transition-all duration-300 hover:-translate-y-2 animate-scale-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="text-primary mb-4">
                {feature.icon}
              </div>
              <h3 className="font-display text-2xl font-semibold text-card-foreground mb-4">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
