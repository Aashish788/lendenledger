import logo from "@/assets/app-icon.png";
import { Facebook, Instagram, Linkedin, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img src={logo} alt="Khatabook Lenden Ledger - Digital Khata App" className="h-10 w-10 rounded-lg" />
              <span className="text-xl font-bold">Khatabook: Lenden Ledger</span>
            </div>
            <p className="text-secondary-foreground/80 max-w-md mb-4">
              India's #1 digital khatabook app for business owners. Manage lending, borrowing & payments with smart analytics.
            </p>
            
            {/* Contact Information */}
            <div className="space-y-2 text-sm text-secondary-foreground/70 mb-4">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>support@lendenledger.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>+91-9876543210</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>Mumbai, Maharashtra, India</span>
              </div>
            </div>
            
            {/* Social Media Links */}
            <div className="flex space-x-4">
              <a 
                href="https://facebook.com/lendenledger" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-secondary-foreground/60 hover:text-secondary-foreground transition-colors"
                aria-label="Follow Khatabook Lenden Ledger on Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="https://instagram.com/lendenledger" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-secondary-foreground/60 hover:text-secondary-foreground transition-colors"
                aria-label="Follow Khatabook Lenden Ledger on Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://twitter.com/lendenledger" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-secondary-foreground/60 hover:text-secondary-foreground transition-colors"
                aria-label="Follow Khatabook Lenden Ledger on Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="https://linkedin.com/company/lendenledger" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-secondary-foreground/60 hover:text-secondary-foreground transition-colors"
                aria-label="Connect with Khatabook Lenden Ledger on LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://youtube.com/c/lendenledger" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-secondary-foreground/60 hover:text-secondary-foreground transition-colors"
                aria-label="Subscribe to Khatabook Lenden Ledger on YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">🚀 Khatabook Features</h3>
            <ul className="space-y-2 text-secondary-foreground/80">
              <li><a href="#features" className="hover:text-secondary-foreground transition-colors">Digital Khata Book</a></li>
              <li><a href="#download" className="hover:text-secondary-foreground transition-colors">Free Download</a></li>
              <li><a href="#" className="hover:text-secondary-foreground transition-colors">Business Analytics</a></li>
              <li><a href="#" className="hover:text-secondary-foreground transition-colors">Payment Reminders</a></li>
              <li><a href="#" className="hover:text-secondary-foreground transition-colors">Customer Support</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">📋 Legal & Support</h3>
            <ul className="space-y-2 text-secondary-foreground/80">
              <li><a href="/privacy-policy" className="hover:text-secondary-foreground transition-colors">Privacy Policy</a></li>
              <li><a href="/privacy-policy" className="hover:text-secondary-foreground transition-colors">Privacy Policy</a></li>
              <li><a href="/terms-of-service" className="hover:text-secondary-foreground transition-colors">Terms of Service</a></li>
              <li><a href="/contact" className="hover:text-secondary-foreground transition-colors">Contact Us</a></li>
              <li><a href="/sitemap.xml" className="hover:text-secondary-foreground transition-colors">Sitemap</a></li>
              <li><a href="#" className="hover:text-secondary-foreground transition-colors">Help Center</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left text-secondary-foreground/60">
              <p>&copy; 2025 Khatabook: Lenden Ledger. All rights reserved.</p>
              <p className="text-xs mt-1">Best Digital Khatabook App for Indian Business Owners & Merchants</p>
            </div>
            <div className="flex space-x-4 text-xs text-secondary-foreground/60">
              <span>🇮🇳 Made in India</span>
              <span>📱 Android App</span>
              <span>🔒 Secure & Private</span>
              <span>💰 Free Forever</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};