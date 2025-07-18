import { MapPin, Clock, Shield, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import heroImage from '@/assets/varanasi-hero.jpg';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Varanasi Ganga Aarti ceremony at golden hour"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <motion.div 
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-2xl px-4 py-2">
              <Shield className="w-4 h-4 text-green-400" />
              <span className="text-sm font-medium">UP Labour Dept Approved</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-2xl px-4 py-2">
              <Clock className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">24×7 Service</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-2xl px-4 py-2">
              <Star className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium">No Hidden Charges</span>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            India Cab
          </h1>
          
          <h2 className="text-xl md:text-3xl lg:text-4xl font-semibold mb-4 text-primary-glow">
            Your 24×7 Varanasi Taxi & Tour Partner
          </h2>

          <p className="text-lg md:text-xl mb-8 text-white/90 max-w-2xl mx-auto leading-relaxed">
            Licensed car rental & intercity taxi service in Varanasi. Professional drivers, 
            well-maintained fleet, and transparent pricing for all your travel needs.
          </p>

          {/* Location */}
          <div className="flex items-center justify-center space-x-2 mb-8 text-white/80">
            <MapPin className="w-5 h-5" />
            <span className="text-lg">Varanasi, Uttar Pradesh</span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="hero" 
              size="xl" 
              className="text-lg px-8 py-4 min-w-[200px]"
              onClick={() => window.open('https://wa.me/918090032475?text=Hi! I want to book a cab', '_blank')}
            >
              📱 Book Now via WhatsApp
            </Button>
            <Button 
              variant="outline" 
              size="xl" 
              className="text-lg px-8 py-4 min-w-[200px] bg-white/10 border-white/30 text-white hover:bg-white/20"
            >
              View Fleet & Pricing
            </Button>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-8 border-t border-white/20">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary-glow">500+</div>
              <div className="text-sm text-white/70">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary-glow">50+</div>
              <div className="text-sm text-white/70">Destinations</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary-glow">24×7</div>
              <div className="text-sm text-white/70">Service</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary-glow">5★</div>
              <div className="text-sm text-white/70">Rated Service</div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;