import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Bell, Shield, BarChart3, Users, Smartphone } from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "Digital Ledger",
    description: "Keep track of all your lending and borrowing transactions in one place"
  },
  {
    icon: Bell,
    title: "Smart Reminders",
    description: "Automated reminders for pending payments and due dates"
  },
  {
    icon: Shield,
    title: "Secure & Private",
    description: "Your financial data is encrypted and stored securely"
  },
  {
    icon: BarChart3,
    title: "Insights & Reports",
    description: "Detailed analytics and reports of your financial activities"
  },
  {
    icon: Users,
    title: "Contact Management",
    description: "Easily manage all your lending contacts and their details"
  },
  {
    icon: Smartphone,
    title: "Offline Access",
    description: "Access your data even when you're offline"
  }
];

export const FeatureSection = () => {
  return (
    <section id="features" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Everything you need to manage your finances
          </h2>
          <p className="text-xl text-muted-foreground">
            Powerful features designed to make lending and borrowing simple and secure
          </p>
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