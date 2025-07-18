import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Contact Us
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to book your ride? Get in touch with us for instant quotes and bookings
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <Card className="border-border shadow-card">
              <CardContent className="p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-warm rounded-xl flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">Call Us Now</h3>
                    <p className="text-muted-foreground">24×7 Customer Support</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <a 
                    href="tel:+918090032475" 
                    className="flex items-center text-lg font-semibold text-primary hover:underline"
                  >
                    📞 +91 80900 32475
                  </a>
                  <a 
                    href="tel:+918707850214" 
                    className="flex items-center text-lg font-semibold text-primary hover:underline"
                  >
                    📞 +91 87078 50214
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border shadow-card">
              <CardContent className="p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-warm rounded-xl flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">Our Office</h3>
                    <p className="text-muted-foreground">Visit us for bookings</p>
                  </div>
                </div>
                <p className="text-foreground font-medium leading-relaxed">
                  Karimuddinpur, Ghazipur<br />
                  Uttar Pradesh, India
                </p>
              </CardContent>
            </Card>

            <Card className="border-border shadow-card">
              <CardContent className="p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-warm rounded-xl flex items-center justify-center">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">Service Hours</h3>
                    <p className="text-muted-foreground">Always available for you</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-foreground">Booking & Support:</span>
                    <span className="font-semibold text-primary">24 × 7</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-foreground">Office Hours:</span>
                    <span className="font-semibold text-foreground">6 AM - 10 PM</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Quick Action Section */}
          <div>
            <Card className="border-border shadow-card h-full">
              <CardContent className="p-8 h-full flex flex-col justify-center">
                <div className="text-center mb-8">
                  <div className="w-20 h-20 bg-gradient-hero rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <span className="text-3xl">💬</span>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    Get Instant Quote
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Send us a message on WhatsApp with your travel details and get an 
                    instant quote. Our team responds within minutes!
                  </p>
                </div>

                <div className="space-y-4">
                  <Button 
                    variant="whatsapp" 
                    size="xl" 
                    className="w-full text-lg"
                    onClick={() => window.open('https://wa.me/918090032475?text=Hi! I need a taxi service quote', '_blank')}
                  >
                    💬 WhatsApp Now
                  </Button>
                  <Button 
                    variant="outline" 
                    size="xl" 
                    className="w-full text-lg"
                    onClick={() => window.location.href = 'tel:+918090032475'}
                  >
                    📞 Call Now
                  </Button>
                </div>

                <div className="mt-8 pt-8 border-t border-border">
                  <h4 className="font-semibold text-foreground mb-4 text-center">
                    What to include in your message:
                  </h4>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                      Pickup and drop locations
                    </div>
                    <div className="flex items-center">
                      <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                      Date and time of travel
                    </div>
                    <div className="flex items-center">
                      <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                      Number of passengers
                    </div>
                    <div className="flex items-center">
                      <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                      Vehicle preference (optional)
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* About Section */}
        <div className="mt-20 bg-white rounded-3xl p-8 md:p-12 shadow-card">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-6">
                About India Cab
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                India Cab is a licensed and UP Labour Department approved taxi service provider 
                based in Varanasi, Uttar Pradesh. We have been serving travelers, pilgrims, and 
                tourists with reliable and comfortable transportation services.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Our mission is to provide safe, affordable, and comfortable travel experiences 
                while maintaining the highest standards of service. We understand the sacred 
                nature of your journey and ensure every trip is handled with care and respect.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">500+</div>
                  <div className="text-sm text-muted-foreground">Happy Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">5+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">15+</div>
                  <div className="text-sm text-muted-foreground">Vehicle Fleet</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">24×7</div>
                  <div className="text-sm text-muted-foreground">Service</div>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-6">
                <h4 className="font-bold text-foreground mb-3">🛡️ Licensed & Approved</h4>
                <p className="text-muted-foreground text-sm">
                  Fully licensed by UP Labour Department with proper insurance coverage for passenger safety.
                </p>
              </div>
              <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-6">
                <h4 className="font-bold text-foreground mb-3">💎 Transparent Pricing</h4>
                <p className="text-muted-foreground text-sm">
                  No hidden charges. All costs including tolls, parking, and driver allowances are clearly mentioned.
                </p>
              </div>
              <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-6">
                <h4 className="font-bold text-foreground mb-3">⭐ Professional Drivers</h4>
                <p className="text-muted-foreground text-sm">
                  Experienced and courteous drivers with local knowledge and respect for cultural values.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;