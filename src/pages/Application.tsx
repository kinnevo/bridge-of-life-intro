import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Application = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background">
      <div className="container mx-auto px-4 py-12">
        {/* Back Button */}
        <Link to="/">
          <Button variant="ghost" className="gap-2 mb-8">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Button>
        </Link>

        {/* Main Content */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-card rounded-2xl shadow-glow p-8 md:p-12 space-y-8 animate-scale-in">
            <div className="text-center space-y-4">
              <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground">
                Begin Your Journey
              </h1>
              <p className="text-lg text-muted-foreground">
                Welcome to your transformation portal. Complete the steps below to fully embrace your reinvention.
              </p>
            </div>

            {/* Steps */}
            <div className="space-y-6 pt-6">
              <div className="flex gap-4 items-start group">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <span className="text-primary font-bold text-lg">1</span>
                  </div>
                </div>
                <div className="flex-1 pt-2">
                  <h3 className="font-semibold text-lg text-foreground mb-2">Set Your Intention</h3>
                  <p className="text-muted-foreground">
                    Take a moment to reflect on what brought you here. What aspect of your life are you ready to transform?
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start group">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <span className="text-primary font-bold text-lg">2</span>
                  </div>
                </div>
                <div className="flex-1 pt-2">
                  <h3 className="font-semibold text-lg text-foreground mb-2">Join the Community</h3>
                  <p className="text-muted-foreground">
                    Connect with fellow travelers on WhatsApp. Share your journey and draw strength from others' experiences.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start group">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <span className="text-primary font-bold text-lg">3</span>
                  </div>
                </div>
                <div className="flex-1 pt-2">
                  <h3 className="font-semibold text-lg text-foreground mb-2">Embrace the Ritual</h3>
                  <p className="text-muted-foreground">
                    Incorporate daily mindfulness practices. Our latteware collection helps you create meaningful moments.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start group">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <span className="text-primary font-bold text-lg">4</span>
                  </div>
                </div>
                <div className="flex-1 pt-2">
                  <h3 className="font-semibold text-lg text-foreground mb-2">Cross the Bridge</h3>
                  <p className="text-muted-foreground">
                    Take action every day. Small steps across the bridge lead to profound transformation.
                  </p>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="pt-8 space-y-4">
              <Button 
                variant="hero" 
                size="lg"
                className="w-full gap-2"
                onClick={() => window.open('https://wa.me/+1234567890', '_blank')}
              >
                <CheckCircle className="w-5 h-5" />
                Get Started Now
              </Button>
              
              <p className="text-center text-sm text-muted-foreground">
                By continuing, you're taking the first step towards your reinvention
              </p>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-8 text-center text-sm text-muted-foreground">
            <p>Questions? Reach out to our community support team.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Application;
