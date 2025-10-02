import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-primary via-primary-glow to-accent relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-64 h-64 bg-background rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-scale-in">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground">
            Ready to Cross the Bridge?
          </h2>
          <p className="text-xl md:text-2xl text-primary-foreground/90 leading-relaxed max-w-2xl mx-auto">
            Your transformation awaits. Take the first step into the life you've been dreaming of. 
            The bridge is here—all you need to do is walk across it.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
            <Button 
              variant="secondary" 
              size="lg"
              className="gap-2 min-w-[200px] text-lg font-semibold hover:scale-105 transition-transform shadow-xl"
              onClick={() => window.location.href = '/conversation'}
            >
              Enter the App
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>

          <p className="text-sm text-primary-foreground/70 pt-4">
            Join thousands who have already started their journey
          </p>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
