import logo from "@/assets/app-icon.png";
import { Facebook, Instagram, Linkedin, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-8 sm:py-12">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          <div className="sm:col-span-2 lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img src={logo} alt="Khatabook Lenden Ledger - Digital Khata App" className="h-8 w-8 sm:h-10 sm:w-10 rounded-lg" />
              <span className="text-lg sm:text-xl font-bold">
                <span className="hidden sm:inline">Khatabook: Lenden Ledger</span>
                <span className="sm:hidden">Khatabook</span>
              </span>
            </div>
            <p className="text-secondary-foreground/80 max-w-md mb-4 text-sm sm:text-base">
              India's #1 digital khatabook app for business owners. Manage lending, borrowing & payments with smart analytics.
            </p>
            
            {/* Contact Information - Mobile Optimized */}
            <div className="space-y-2 text-xs sm:text-sm text-secondary-foreground/70 mb-4">
              <div className="flex items-center space-x-2">
                <Mail className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                <span className="break-all">ashxbuddy@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                <span>+91-XXXXXXXXXX</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                <span>Mumbai, Maharashtra, India</span>
              </div>
            </div>
            
            {/* Social Media Links - Mobile Optimized */}
            <div className="flex space-x-3 sm:space-x-4">
              <a 
                href="https://facebook.com/lendenledger" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-secondary-foreground/60 hover:text-secondary-foreground transition-colors p-2 hover:bg-secondary-foreground/10 rounded-lg"
                aria-label="Follow Khatabook Lenden Ledger on Facebook"
              >
                <Facebook className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a 
                href="https://instagram.com/lendenledger" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-secondary-foreground/60 hover:text-secondary-foreground transition-colors p-2 hover:bg-secondary-foreground/10 rounded-lg"
                aria-label="Follow Khatabook Lenden Ledger on Instagram"
              >
                <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a 
                href="https://twitter.com/lendenledger" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-secondary-foreground/60 hover:text-secondary-foreground transition-colors p-2 hover:bg-secondary-foreground/10 rounded-lg"
                aria-label="Follow Khatabook Lenden Ledger on Twitter"
              >
                <Twitter className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a 
                href="https://linkedin.com/company/lendenledger" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-secondary-foreground/60 hover:text-secondary-foreground transition-colors p-2 hover:bg-secondary-foreground/10 rounded-lg"
                aria-label="Connect with Khatabook Lenden Ledger on LinkedIn"
              >
                <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a 
                href="https://youtube.com/c/lendenledger" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-secondary-foreground/60 hover:text-secondary-foreground transition-colors p-2 hover:bg-secondary-foreground/10 rounded-lg"
                aria-label="Subscribe to Khatabook Lenden Ledger on YouTube"
              >
                <Youtube className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </div>
          </div>

          <div className="mt-6 sm:mt-0">
            <h3 className="text-sm sm:text-base font-semibold mb-3 sm:mb-4">🚀 Khatabook Features</h3>
            <ul className="space-y-2 text-xs sm:text-sm text-secondary-foreground/80">
              <li><a href="#features" className="hover:text-secondary-foreground transition-colors">Digital Khata Book</a></li>
              <li><a href="#download" className="hover:text-secondary-foreground transition-colors">Free Download</a></li>
              <li><a href="#" className="hover:text-secondary-foreground transition-colors">Business Analytics</a></li>
              <li><a href="#" className="hover:text-secondary-foreground transition-colors">Payment Reminders</a></li>
              <li><a href="#" className="hover:text-secondary-foreground transition-colors">Customer Support</a></li>
            </ul>
          </div>

          <div className="mt-6 sm:mt-0">
            <h3 className="text-sm sm:text-base font-semibold mb-3 sm:mb-4">📋 Legal & Support</h3>
            <ul className="space-y-2 text-xs sm:text-sm text-secondary-foreground/80">
              <li><a href="/privacy-policy" className="hover:text-secondary-foreground transition-colors">Privacy Policy</a></li>
              <li><a href="/terms-of-service" className="hover:text-secondary-foreground transition-colors">Terms of Service</a></li>
              <li><a href="/contact" className="hover:text-secondary-foreground transition-colors">Contact Us</a></li>
              <li><a href="/sitemap.xml" className="hover:text-secondary-foreground transition-colors">Sitemap</a></li>
              <li><a href="#" className="hover:text-secondary-foreground transition-colors">Help Center</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/20 mt-6 sm:mt-8 pt-6 sm:pt-8">
          <div className="flex flex-col space-y-4 text-center">
            <div className="text-secondary-foreground/60">
              <p className="text-xs sm:text-sm">&copy; 2025 Khatabook: Lenden Ledger. All rights reserved.</p>
              <p className="text-xs mt-1">Best Digital Khatabook App for Indian Business Owners & Merchants</p>
            </div>
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 text-xs text-secondary-foreground/60">
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