import { Button } from "@/components/ui/button";
import { Download, Smartphone, Star } from "lucide-react";
import heroPhone from "@/assets/hero-phone.png";

export const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center bg-gradient-subtle pt-16">
      <div className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-primary">
                <Star className="w-5 h-5 fill-current" />
                <span className="text-sm font-medium">⭐ Trusted by 10,000+ Business Owners</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Best Digital
                <br />
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Khatabook App
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                🔥 #1 Khatabook for Business! Track lending, borrowing & payments with smart reminders. 
                Perfect digital khata alternative for merchants & small business owners.
              </p>
              
              <div className="flex flex-wrap gap-3 text-sm font-medium text-primary">
                <span className="bg-primary/10 px-3 py-1 rounded-full">✓ Free Digital Khata</span>
                <span className="bg-primary/10 px-3 py-1 rounded-full">✓ Business Analytics</span>
                <span className="bg-primary/10 px-3 py-1 rounded-full">✓ Payment Reminders</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="hero" 
                size="lg" 
                className="group"
                onClick={() => window.open('https://play.google.com/store/apps/details?id=com.lendenledger.app', '_blank')}
              >
                <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                📱 Download Khatabook App
              </Button>
              
              <Button 
                variant="premium" 
                size="lg"
                disabled
                className="opacity-60"
              >
                <Smartphone className="w-5 h-5 mr-2" />
                🍎 iOS Khata App Soon
              </Button>
            </div>

            {/* SEO-friendly additional content */}
            <div className="space-y-3 pt-4 border-t border-border/50">
              <h2 className="text-lg font-semibold text-foreground">
                Why Choose Lenden Ledger as Your Digital Khatabook?
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-muted-foreground">
                <div>✅ Best Khatabook Alternative</div>
                <div>✅ Free Business Ledger App</div>
                <div>✅ Udhar Khata Management</div>
                <div>✅ Vyapari Account Book</div>
                <div>✅ Digital Bahi Khata</div>
                <div>✅ Business Analytics Dashboard</div>
              </div>
            </div>

            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Free to use</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>Secure & Private</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span>No ads</span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative lg:order-last">
            <div className="relative z-10">
              <img 
                src={heroPhone} 
                alt="Khatabook Lenden Ledger Digital Khata App - Best Business Ledger Mobile App Screenshot" 
                className="w-full max-w-md mx-auto drop-shadow-2xl"
                title="Download Khatabook: Lenden Ledger - Free Digital Khata App for Business"
                loading="eager"
              />
            </div>
            
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-hero opacity-20 blur-3xl rounded-full transform scale-150"></div>
          </div>
        </div>
      </div>
    </section>
  );
};