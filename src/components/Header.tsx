import { Phone, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ModeToggle } from '@/components/ui/mode-toggle';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="glass-morphism border-b border-border sticky top-0 z-50 shadow-card"
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div 
            className="flex items-center space-x-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="w-10 h-10 bg-gradient-hero rounded-xl flex items-center justify-center hover-glow">
              <span className="text-white font-bold text-lg">IC</span>
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-warm bg-clip-text text-transparent">India Cab</h1>
              <p className="text-xs text-muted-foreground">UP Labour Dept Approved</p>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#services" className="text-foreground hover:text-primary transition-all duration-300 hover:scale-105">Services</a>
            <a href="#fleet" className="text-foreground hover:text-primary transition-all duration-300 hover:scale-105">Fleet & Pricing</a>
            <a href="#tours" className="text-foreground hover:text-primary transition-all duration-300 hover:scale-105">Tour Packages</a>
            <a href="#about" className="text-foreground hover:text-primary transition-all duration-300 hover:scale-105">About</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-all duration-300 hover:scale-105">Contact</a>
          </nav>

          {/* Contact Info & CTA */}
          <motion.div 
            className="hidden md:flex items-center space-x-4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="text-right">
              <p className="text-sm font-medium text-foreground">24×7 Service</p>
              <a href="tel:+918090032475" className="text-primary font-semibold text-sm hover:underline">
                +91 80900 32475
              </a>
            </div>
            <ModeToggle />
            <Button variant="whatsapp" size="sm" className="bounce-subtle hover-glow">
              <Phone className="w-4 h-4" />
              Book Now
            </Button>
          </motion.div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center space-x-2 md:hidden">
            <ModeToggle />
            <button
              className="p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 pb-4 border-t border-border overflow-hidden"
            >
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
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;