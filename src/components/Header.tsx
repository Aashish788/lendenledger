import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/app-icon.png";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navigationItems = [
    { href: "#features", label: "Khata Features" },
    { href: "#how-it-works", label: "How It Works" },
    { href: "#download", label: "Download App" }
  ];

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-lg border-b border-border shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Logo - Mobile Optimized */}
        <div className="flex items-center space-x-2 sm:space-x-3">
          <img 
            src={logo} 
            alt="Khatabook Lenden Ledger" 
            className="h-8 w-8 sm:h-10 sm:w-10 rounded-lg" 
          />
          <span className="text-base sm:text-xl font-bold text-foreground">
                        <span className="hidden sm:inline">Lenden Ledger Khatabook</span>
            <span className="sm:hidden text-sm">Lenden Ledger</span>
          </span>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navigationItems.map((item) => (
            <a 
              key={item.href}
              href={item.href} 
              className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA Button */}
        <div className="hidden sm:block">
          <Button 
            variant="hero" 
            size="sm"
            className="text-sm px-4 py-2"
            onClick={() => window.open('https://play.google.com/store/apps/details?id=com.lendenledger.app', '_blank')}
          >
            <span className="hidden md:inline">📱 Download Khatabook</span>
            <span className="md:hidden">Download</span>
          </Button>
        </div>

        {/* Mobile Menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="icon" className="h-10 w-10">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Open menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-64 sm:w-80">
            <div className="flex flex-col space-y-6 mt-6">
              {/* Mobile Logo */}
              <div className="flex items-center space-x-3 pb-6 border-b border-border">
                <img 
                  src={logo} 
                  alt="Khatabook Lenden Ledger" 
                  className="h-10 w-10 rounded-lg" 
                />
                <span className="text-lg font-bold text-foreground">
                  Khatabook
                </span>
              </div>

              {/* Mobile Navigation */}
              <nav className="flex flex-col space-y-4">
                {navigationItems.map((item) => (
                  <button
                    key={item.href}
                    onClick={() => handleNavClick(item.href)}
                    className="text-left text-lg font-medium text-foreground hover:text-primary transition-colors py-2"
                  >
                    {item.label}
                  </button>
                ))}
              </nav>

              {/* Mobile CTA Button */}
              <div className="pt-6">
                <Button 
                  variant="hero" 
                  size="lg"
                  className="w-full text-base"
                  onClick={() => {
                    window.open('https://play.google.com/store/apps/details?id=com.lendenledger.app', '_blank');
                    setIsOpen(false);
                  }}
                >
                  📱 Download Khatabook App
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};