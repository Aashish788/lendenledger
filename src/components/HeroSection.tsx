import { Button } from "@/components/ui/button";import { Button } from "@/components/ui/button";

import { Download, Smartphone, Star } from "lucide-react";import { D            <div className="space-y-3 pt-4 border-t border-border/50">

import heroPhone from "@/assets/hero-phone.png";              <h2 className="text-base sm:text-lg font-semibold text-foreground">

                Why Choose Lenden Ledger as Your Digital Khatabook?

export const HeroSection = () => {              </h2>

  return (              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 text-xs sm:text-sm text-muted-foreground">

    <section className="min-h-screen flex items-center bg-gradient-subtle pt-16">                <div>✅ Best Lenden Ledger App</div>

      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-20">                <div>✅ Free Digital Khatabook</div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">                <div>✅ Business Ledger Management</div>

          {/* Content */}                <div>✅ Udhar Tracking System</div>

          <div className="space-y-6 sm:space-y-8 text-center lg:text-left">                <div>✅ Lending & Borrowing Tracker</div>

            <div className="space-y-4">                <div>✅ Smart Payment Reminders</div>

              <div className="flex items-center justify-center lg:justify-start space-x-2 text-primary">              </div>

                <Star className="w-4 h-4 sm:w-5 sm:h-5 fill-current" />            </div>tphone, Star } from "lucide-react";

                <span className="text-xs sm:text-sm font-medium">⭐ Trusted by 10,000+ Business Owners</span>import heroPhone from "@/assets/hero-phone.png";

              </div>

              export const HeroSection = () => {

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">  return (

                <span className="block">Lenden Ledger</span>    <section className="min-h-screen flex items-center bg-gradient-subtle pt-16">

                <span className="bg-gradient-primary bg-clip-text text-transparent block">      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-20">

                  Digital Khatabook        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">

                </span>          {/* Content */}

              </h1>          <div className="space-y-6 sm:space-y-8 text-center lg:text-left">

                          <div className="space-y-4 sm:space-y-6">

              <p className="text-base sm:text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-lg mx-auto lg:mx-0">              <div className="flex items-center justify-center lg:justify-start space-x-2 text-primary">

                🔥 Best Free Lenden Ledger App! Digital khatabook for business. Track lending, borrowing & payments with smart reminders.                 <Star className="w-4 h-4 sm:w-5 sm:h-5 fill-current" />

                Perfect ledger app for merchants & small business owners.                <span className="text-xs sm:text-sm font-medium">⭐ Trusted by 10,000+ Business Owners</span>

              </p>              </div>

                            

              <div className="flex flex-wrap gap-2 sm:gap-3 text-xs sm:text-sm font-medium text-primary justify-center lg:justify-start">              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">

                <span className="bg-primary/10 px-2 sm:px-3 py-1 rounded-full">✓ Free Lenden Ledger</span>                <span className="block">Lenden Ledger</span>

                <span className="bg-primary/10 px-2 sm:px-3 py-1 rounded-full">✓ Digital Khatabook</span>                <span className="bg-gradient-primary bg-clip-text text-transparent block">

                <span className="bg-primary/10 px-2 sm:px-3 py-1 rounded-full">✓ Business Analytics</span>                  Digital Khatabook

              </div>                </span>

            </div>              </h1>

              

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">              <p className="text-base sm:text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-lg mx-auto lg:mx-0">

              <Button                 🔥 Best Free Lenden Ledger App! Digital khatabook for business. Track lending, borrowing & payments with smart reminders. 

                variant="hero"                 Perfect ledger app for merchants & small business owners.

                size="lg"               </p>

                className="group text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4 h-auto"              

                onClick={() => window.open('https://play.google.com/store/apps/details?id=com.lendenledger.app', '_blank')}                            <div className="flex flex-wrap gap-2 sm:gap-3 text-xs sm:text-sm font-medium text-primary justify-center lg:justify-start">

              >                <span className="bg-primary/10 px-2 sm:px-3 py-1 rounded-full">✓ Free Lenden Ledger</span>

                <Download className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:animate-bounce" />                <span className="bg-primary/10 px-2 sm:px-3 py-1 rounded-full">✓ Digital Khatabook</span>

                📱 Download Lenden Ledger                <span className="bg-primary/10 px-2 sm:px-3 py-1 rounded-full">✓ Business Analytics</span>

              </Button>              </div>

                          </div>

              <Button 

                variant="premium"             <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-md mx-auto lg:mx-0">

                size="lg"              <Button 

                disabled                variant="hero" 

                className="text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4 h-auto opacity-60"                size="lg" 

              >                className="group w-full sm:w-auto text-sm sm:text-base px-6 py-3 h-auto"

                <Smartphone className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />                onClick={() => window.open('https://play.google.com/store/apps/details?id=com.lendenledger.app', '_blank')}

                🍎 iOS App Coming Soon              >

              </Button>                <Download className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:animate-bounce" />

            </div>                📱 Download Lenden Ledger App

              </Button>

            {/* SEO-friendly additional content */}              

            <div className="space-y-3 pt-4 border-t border-border/50">              <Button 

              <h2 className="text-base sm:text-lg font-semibold text-foreground">                variant="premium" 

                Why Choose Lenden Ledger as Your Digital Khatabook?                size="lg"

              </h2>                disabled

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 text-xs sm:text-sm text-muted-foreground">                className="opacity-60 w-full sm:w-auto text-sm sm:text-base px-6 py-3 h-auto"

                <div>✅ Best Lenden Ledger App</div>              >

                <div>✅ Free Digital Khatabook</div>                <Smartphone className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />

                <div>✅ Business Ledger Management</div>                🍎 iOS Khata App Soon

                <div>✅ Udhar Tracking System</div>              </Button>

                <div>✅ Lending & Borrowing Tracker</div>            </div>

                <div>✅ Smart Payment Reminders</div>

              </div>            {/* SEO-friendly additional content - Mobile Optimized */}

            </div>            <div className="space-y-3 pt-6 sm:pt-4 border-t border-border/50 hidden lg:block">

              <h2 className="text-base sm:text-lg font-semibold text-foreground">

            <div className="flex items-center justify-center lg:justify-start space-x-6 text-xs sm:text-sm text-muted-foreground pt-2">                Why Choose Lenden Ledger as Your Digital Khatabook?

              <div className="flex items-center space-x-2">              </h2>

                <div className="w-2 h-2 bg-green-500 rounded-full"></div>              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 text-xs sm:text-sm text-muted-foreground">

                <span>Free to use</span>                <div>✅ Best Khatabook Alternative</div>

              </div>                <div>✅ Free Business Ledger App</div>

              <div className="flex items-center space-x-2">                <div>✅ Udhar Khata Management</div>

                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>                <div>✅ Vyapari Account Book</div>

                <span>Secure & Private</span>                <div>✅ Digital Bahi Khata</div>

              </div>                <div>✅ Business Analytics Dashboard</div>

              <div className="flex items-center space-x-2">              </div>

                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>            </div>

                <span>No ads</span>

              </div>            <div className="flex flex-wrap justify-center lg:justify-start items-center gap-4 sm:gap-6 text-xs sm:text-sm text-muted-foreground">

            </div>              <div className="flex items-center space-x-2">

          </div>                <div className="w-2 h-2 bg-green-500 rounded-full"></div>

                <span>Free to use</span>

          {/* Hero Image */}              </div>

          <div className="relative lg:order-last">              <div className="flex items-center space-x-2">

            <div className="relative z-10">                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>

              <img                 <span>Secure & Private</span>

                src={heroPhone}               </div>

                alt="Lenden Ledger Digital Khatabook App - Best Business Ledger Mobile App Screenshot"               <div className="flex items-center space-x-2">

                className="w-full max-w-md mx-auto drop-shadow-2xl"                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>

                title="Download Lenden Ledger - Free Digital Khatabook App for Business"                <span>No ads</span>

                loading="eager"              </div>

              />            </div>

            </div>          </div>

            

            {/* Background decoration */}          {/* Hero Image - Mobile Optimized */}

            <div className="absolute inset-0 bg-gradient-hero opacity-20 blur-3xl rounded-full transform scale-150"></div>          <div className="relative order-first lg:order-last mt-8 lg:mt-0">

          </div>            <div className="relative z-10">

        </div>              <img 

      </div>                src={heroPhone} 

    </section>                alt="Khatabook Lenden Ledger Digital Khata App - Best Business Ledger Mobile App Screenshot" 

  );                className="w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto drop-shadow-2xl"

};                title="Download Khatabook: Lenden Ledger - Free Digital Khata App for Business"
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