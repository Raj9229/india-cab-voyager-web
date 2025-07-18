import { Phone, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-border sticky top-0 z-50 shadow-card">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-hero rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-lg">IC</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">India Cab</h1>
              <p className="text-xs text-muted-foreground">UP Labour Dept Approved</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#services" className="text-foreground hover:text-primary transition-colors">Services</a>
            <a href="#fleet" className="text-foreground hover:text-primary transition-colors">Fleet & Pricing</a>
            <a href="#tours" className="text-foreground hover:text-primary transition-colors">Tour Packages</a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">About</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">Contact</a>
          </nav>

          {/* Contact Info & CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="text-right">
              <p className="text-sm font-medium text-foreground">24×7 Service</p>
              <a href="tel:+918090032475" className="text-primary font-semibold text-sm hover:underline">
                +91 80900 32475
              </a>
            </div>
            <Button variant="whatsapp" size="sm" className="animate-float">
              <Phone className="w-4 h-4" />
              Book Now
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border animate-fade-in">
            <nav className="flex flex-col space-y-3 mt-4">
              <a href="#services" className="text-foreground hover:text-primary transition-colors py-2">Services</a>
              <a href="#fleet" className="text-foreground hover:text-primary transition-colors py-2">Fleet & Pricing</a>
              <a href="#tours" className="text-foreground hover:text-primary transition-colors py-2">Tour Packages</a>
              <a href="#about" className="text-foreground hover:text-primary transition-colors py-2">About</a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors py-2">Contact</a>
              <div className="flex flex-col space-y-2 mt-4 pt-4 border-t border-border">
                <a href="tel:+918090032475" className="text-primary font-semibold">
                  📞 +91 80900 32475
                </a>
                <Button variant="whatsapp" size="sm" className="w-full">
                  <Phone className="w-4 h-4" />
                  Book via WhatsApp
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;