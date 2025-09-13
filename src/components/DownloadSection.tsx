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
                  Ready to get started?
                </h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Join thousands of users who trust Lenden Ledger for their financial management needs
                </p>
              </div>

              <div className="flex items-center justify-center space-x-8 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span>4.8/5 Rating</span>
                </div>
                <div className="hidden sm:block w-px h-4 bg-border"></div>
                <div className="flex items-center space-x-2">
                  <Download className="w-4 h-4" />
                  <span>10K+ Downloads</span>
                </div>
                <div className="hidden sm:block w-px h-4 bg-border"></div>
                <div className="flex items-center space-x-2">
                  <Smartphone className="w-4 h-4" />
                  <span>Free Forever</span>
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
                  Download for Android
                </Button>
                
                <Button 
                  variant="premium" 
                  size="lg"
                  className="text-lg px-8 py-4 h-auto opacity-60"
                  disabled
                >
                  <Smartphone className="w-6 h-6 mr-3" />
                  iOS Coming Soon
                </Button>
              </div>

              <p className="text-sm text-muted-foreground">
                Available on Google Play Store • iOS version launching soon
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};