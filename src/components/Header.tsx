import { Button } from "@/components/ui/button";
import logo from "@/assets/app-icon.png";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <img src={logo} alt="Khatabook Lenden Ledger - Digital Khata App" className="h-10 w-10 rounded-lg" />
          <span className="text-xl font-bold text-foreground">Khatabook: Lenden Ledger</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">Khata Features</a>
          <a href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors">How Khatabook Works</a>
          <a href="#download" className="text-muted-foreground hover:text-foreground transition-colors">Download Khata App</a>
        </nav>

        <Button 
          variant="hero" 
          size="sm"
          onClick={() => window.open('https://play.google.com/store/apps/details?id=com.lendenledger.app', '_blank')}
        >
          📱 Download Khatabook
        </Button>
      </div>
    </header>
  );
};