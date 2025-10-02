import { Button } from "@/components/ui/button";
import { MessageCircle, QrCode } from "lucide-react";

const Community = () => {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6 animate-slide-up">
              <div className="inline-block p-3 bg-primary/10 rounded-2xl">
                <MessageCircle className="w-8 h-8 text-primary" />
              </div>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
                Join Our Community
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Connect with a vibrant community of individuals committed to growth and transformation. 
                Share insights, celebrate milestones, and support each other on the path to reinvention.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                  <p className="text-foreground">Daily inspiration and motivation</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                  <p className="text-foreground">Exclusive events and workshops</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                  <p className="text-foreground">Connect with like-minded souls</p>
                </div>
              </div>
              <Button 
                variant="default" 
                size="lg"
                className="gap-2"
                onClick={() => window.open('https://chat.whatsapp.com/I2TUGgevAXjCzrgCibGAB8', '_blank')}
              >
                <MessageCircle className="w-5 h-5" />
                Join on WhatsApp
              </Button>
            </div>

            {/* Right Content - QR Code */}
            <div className="bg-card rounded-2xl p-8 shadow-glow animate-scale-in">
              <div className="text-center space-y-6">
                <div className="inline-block p-3 bg-accent/10 rounded-2xl">
                  <QrCode className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-display text-2xl font-semibold text-card-foreground">
                  Scan to Connect
                </h3>
                
                {/* QR Code Placeholder - Replace with actual QR code */}
                <div className="bg-background p-8 rounded-xl inline-block">
                  <div className="w-64 h-64 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center">
                    <div className="text-center space-y-2">
                      <QrCode className="w-24 h-24 mx-auto text-primary/40" />
                      <p className="text-sm text-muted-foreground">QR Code</p>
                      <p className="text-xs text-muted-foreground">WhatsApp Community</p>
                    </div>
                  </div>
                </div>
                
                <p className="text-sm text-muted-foreground">
                  Scan with your camera to join instantly
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;
