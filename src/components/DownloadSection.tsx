import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Download, Smartphone, Star } from "lucide-react";

export const DownloadSection = () => {
  return (
    <section id="download" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <Card className="max-w-4xl mx-auto shadow-premium border-border">
          <CardContent className="p-12 text-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl font-bold text-foreground">
                  🚀 Download Best Khatabook App Now!
                </h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Join 10,000+ business owners who use Lenden Ledger as their trusted digital khatabook for business management
                </p>
                
                {/* SEO Rich Content */}
                <div className="bg-primary/5 rounded-lg p-4 mt-6">
                  <h3 className="font-semibold text-foreground mb-2">🏆 India's Top-Rated Digital Khatabook</h3>
                  <p className="text-sm text-muted-foreground">
                    Perfect alternative to traditional khata books. Ideal for retailers, wholesalers, 
                    service providers & small business owners across India.
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-center space-x-8 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span>⭐ 4.8/5 Khatabook Rating</span>
                </div>
                <div className="hidden sm:block w-px h-4 bg-border"></div>
                <div className="flex items-center space-x-2">
                  <Download className="w-4 h-4" />
                  <span>📱 50K+ App Downloads</span>
                </div>
                <div className="hidden sm:block w-px h-4 bg-border"></div>
                <div className="flex items-center space-x-2">
                  <Smartphone className="w-4 h-4" />
                  <span>💯 Free Digital Khata</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  variant="hero" 
                  size="lg"
                  className="text-lg px-8 py-4 h-auto"
                  onClick={() => window.open('https://play.google.com/store/apps/details?id=com.lendenledger.app', '_blank')}
                >
                  <Download className="w-6 h-6 mr-3" />
                  📱 Download Khatabook for Android
                </Button>
                
                <Button 
                  variant="premium" 
                  size="lg"
                  className="text-lg px-8 py-4 h-auto opacity-60"
                  disabled
                >
                  <Smartphone className="w-6 h-6 mr-3" />
                  🍎 iOS Khatabook Coming Soon
                </Button>
              </div>

              <p className="text-sm text-muted-foreground">
                📲 Available on Google Play Store • 🔥 Best Khatabook App for Business • iOS Digital Khata launching soon
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};