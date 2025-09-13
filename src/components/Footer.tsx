import logo from "@/assets/app-icon.png";

export const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img src={logo} alt="LenDen Ledger" className="h-10 w-10 rounded-lg" />
              <span className="text-xl font-bold">LenDen Ledger</span>
            </div>
            <p className="text-secondary-foreground/80 max-w-md">
              The modern digital khatabook for managing your lending and borrowing transactions with ease and security.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2 text-secondary-foreground/80">
              <li><a href="#features" className="hover:text-secondary-foreground transition-colors">Features</a></li>
              <li><a href="#download" className="hover:text-secondary-foreground transition-colors">Download</a></li>
              <li><a href="#" className="hover:text-secondary-foreground transition-colors">Support</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-secondary-foreground/80">
              <li><a href="#" className="hover:text-secondary-foreground transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-secondary-foreground transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-secondary-foreground transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/20 mt-8 pt-8 text-center text-secondary-foreground/60">
          <p>&copy; 2024 LenDen Ledger. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};