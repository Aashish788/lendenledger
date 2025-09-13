import { Button } from "@/components/ui/button";
import { Download, Smartphone, Star } from "lucide-react";
import heroPhone from "@/assets/hero-phone.png";

export const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center bg-gradient-subtle pt-16">
      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center justify-center lg:justify-start space-x-2 text-primary">
                <Star className="w-4 h-4 sm:w-5 sm:h-5 fill-current" />
                <span className="text-xs sm:text-sm font-medium">⭐ Trusted by 10,000+ Business Owners</span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                <span className="block">Khatabook</span>
                <span className="bg-gradient-primary bg-clip-text text-transparent block">
                  Lenden Ledger
                </span>
              </h1>
              
              <p className="text-base sm:text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-lg mx-auto lg:mx-0">
                🔥 India's #1 Free Khatabook App! Track lending, borrowing & payments with smart reminders. 
                Perfect digital khatabook for merchants & small business owners.
              </p>
              
              <div className="flex flex-wrap justify-center lg:justify-start gap-2 sm:gap-3 text-xs sm:text-sm font-medium text-primary">
                <span className="bg-primary/10 px-2 sm:px-3 py-1 rounded-full">✓ Free Digital Khata</span>
                <span className="bg-primary/10 px-2 sm:px-3 py-1 rounded-full">✓ Business Analytics</span>
                <span className="bg-primary/10 px-2 sm:px-3 py-1 rounded-full">✓ Payment Reminders</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-md mx-auto lg:mx-0">
              <Button 
                variant="hero" 
                size="lg" 
                className="group w-full sm:w-auto text-sm sm:text-base px-6 py-3 h-auto"
                onClick={() => window.open('https://play.google.com/store/apps/details?id=com.lendenledger.app', '_blank')}
              >
                <Download className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:animate-bounce" />
                📱 Download Khatabook App
              </Button>
              
              <Button 
                variant="premium" 
                size="lg"
                disabled
                className="opacity-60 w-full sm:w-auto text-sm sm:text-base px-6 py-3 h-auto"
              >
                <Smartphone className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                🍎 iOS Khata App Soon
              </Button>
            </div>

            {/* SEO-friendly additional content - Mobile Optimized */}
            <div className="space-y-3 pt-6 sm:pt-4 border-t border-border/50 hidden lg:block">
              <h2 className="text-base sm:text-lg font-semibold text-foreground">
                Why Choose Lenden Ledger as Your Digital Khatabook?
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 text-xs sm:text-sm text-muted-foreground">
                <div>✅ Best Khatabook Alternative</div>
                <div>✅ Free Business Ledger App</div>
                <div>✅ Udhar Khata Management</div>
                <div>✅ Vyapari Account Book</div>
                <div>✅ Digital Bahi Khata</div>
                <div>✅ Business Analytics Dashboard</div>
              </div>
            </div>

            <div className="flex flex-wrap justify-center lg:justify-start items-center gap-4 sm:gap-6 text-xs sm:text-sm text-muted-foreground">
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

          {/* Hero Image - Mobile Optimized */}
          <div className="relative order-first lg:order-last mt-8 lg:mt-0">
            <div className="relative z-10">
              <img 
                src={heroPhone} 
                alt="Khatabook Lenden Ledger Digital Khata App - Best Business Ledger Mobile App Screenshot" 
                className="w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto drop-shadow-2xl"
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