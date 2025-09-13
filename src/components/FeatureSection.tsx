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
    <section id="features" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            🚀 Why Lenden Ledger is the Best Khatabook App for Business?
          </h2>
          <p className="text-xl text-muted-foreground mb-6">
            Powerful digital khata features designed specifically for Indian merchants, small business owners & entrepreneurs
          </p>
          
          {/* SEO Keywords Section */}
          <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-semibold text-foreground mb-3">
              🎯 Perfect Khatabook Alternative For:
            </h3>
            <div className="flex flex-wrap justify-center gap-2 text-sm">
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full">Small Business Owners</span>
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full">Retailers & Merchants</span>
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full">Wholesalers</span>
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full">Service Providers</span>
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full">Traders & Distributors</span>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="border-border hover:shadow-card transition-all duration-300 hover:scale-105 group"
            >
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
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