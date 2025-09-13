import { Button } from "@/components/ui/button";
import logo from "@/assets/app-icon.png";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <img src={logo} alt="LenDen Ledger" className="h-10 w-10 rounded-lg" />
          <span className="text-xl font-bold text-foreground">LenDen Ledger</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">Features</a>
          <a href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors">How it Works</a>
          <a href="#download" className="text-muted-foreground hover:text-foreground transition-colors">Download</a>
        </nav>

        <Button variant="hero" size="sm">
          Download Now
        </Button>
      </div>
    </header>
  );
};