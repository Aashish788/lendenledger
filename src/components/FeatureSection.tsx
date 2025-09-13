import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Bell, Shield, BarChart3, Users, Smartphone } from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "📊 Digital Khatabook Ledger",
    description: "Complete digital khata solution for business owners. Track all lending, borrowing & business transactions in one secure app."
  },
  {
    icon: Bell,
    title: "🔔 Smart Payment Reminders",
    description: "Automated SMS & notification reminders for pending payments, due dates & overdue amounts. Never miss a payment again!"
  },
  {
    icon: Shield,
    title: "🔐 Secure Business Data",
    description: "Bank-grade security for your khatabook data. Encrypted storage with backup & sync across devices."
  },
  {
    icon: BarChart3,
    title: "📈 Business Analytics & Reports",
    description: "Detailed business insights, profit/loss reports, customer analytics & financial dashboards for smart business decisions."
  },
  {
    icon: Users,
    title: "👥 Customer & Contact Manager",
    description: "Manage all your business contacts, customer profiles, credit limits & transaction history in one place."
  },
  {
    icon: Smartphone,
    title: "📱 Offline Khata Access",
    description: "Access your digital khatabook even without internet. Sync automatically when connected. Perfect for mobile business."
  }
];

export const FeatureSection = () => {
  return (
    <section id="features" className="py-12 sm:py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            🚀 Why Lenden Ledger is the Best Khatabook App for Business?
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground mb-6">
            Powerful digital khata features designed specifically for Indian merchants, small business owners & entrepreneurs
          </p>
          
          {/* SEO Keywords Section - Mobile Optimized */}
          <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg p-4 sm:p-6 mb-6 sm:mb-8">
            <h3 className="text-base sm:text-lg font-semibold text-foreground mb-3">
              🎯 Perfect Khatabook Alternative For:
            </h3>
            <div className="flex flex-wrap justify-center gap-2 text-xs sm:text-sm">
              <span className="bg-primary/10 text-primary px-2 sm:px-3 py-1 rounded-full">Small Business Owners</span>
              <span className="bg-primary/10 text-primary px-2 sm:px-3 py-1 rounded-full">Retailers & Merchants</span>
              <span className="bg-primary/10 text-primary px-2 sm:px-3 py-1 rounded-full">Wholesalers</span>
              <span className="bg-primary/10 text-primary px-2 sm:px-3 py-1 rounded-full">Service Providers</span>
              <span className="bg-primary/10 text-primary px-2 sm:px-3 py-1 rounded-full">Traders & Distributors</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="border-border hover:shadow-card transition-all duration-300 hover:scale-105 group h-full"
            >
              <CardContent className="p-4 sm:p-6 h-full flex flex-col">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                  <feature.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary-foreground" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2 flex-shrink-0">
                  {feature.title}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed flex-grow">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};