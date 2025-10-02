import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import heroImage from "@/assets/hero-bridge.jpg";

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/90 via-secondary/70 to-background/95" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-primary-foreground leading-tight">
            Bridge of Life
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl text-primary-foreground/90 font-light max-w-3xl mx-auto">
            Your journey to reinvention begins here
          </p>
          <p className="text-base md:text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Discover a transformative experience that connects your past with your future, 
            bridging the gap between who you were and who you're becoming.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
            <Button 
              variant="hero" 
              size="lg"
              onClick={() => window.location.href = '/app'}
              className="min-w-[200px]"
            >
              Start Your Journey
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={scrollToAbout}
              className="min-w-[200px] border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-secondary"
            >
              Learn More
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button 
          onClick={scrollToAbout}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-float"
          aria-label="Scroll down"
        >
          <ArrowDown className="w-8 h-8 text-primary-foreground/60 hover:text-primary-foreground transition-colors" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
