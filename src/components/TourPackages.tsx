import { MapPin, Clock, Star, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const TourPackages = () => {
  const packages = [
    {
      title: "Varanasi Spiritual Tour",
      duration: "8 hours",
      destinations: ["Kashi Vishwanath Temple", "Sankat Mochan Hanuman Temple", "BHU", "Sarnath", "Ganga Aarti"],
      price: "₹1,800",
      rating: 4.8,
      image: "🕉️",
      type: "Spiritual",
      description: "Complete spiritual journey covering the most sacred places in Varanasi"
    },
    {
      title: "Mathura-Vrindavan Pilgrimage",
      duration: "2 days",
      destinations: ["Krishna Janmabhoomi", "Govind Dev Temple", "ISKCON Vrindavan", "Banke Bihari", "Prem Mandir"],
      price: "₹8,500",
      rating: 4.9,
      image: "🏛️",
      type: "Pilgrimage",
      description: "Sacred journey to the birthplace of Lord Krishna"
    },
    {
      title: "Ayodhya Darshan",
      duration: "1 day",
      destinations: ["Ram Janmabhoomi", "Hanuman Garhi", "Kanak Bhavan", "Tulsi Smarak", "Ramkatha Museum"],
      price: "₹4,500",
      rating: 4.7,
      image: "🏺",
      type: "Pilgrimage",
      description: "Visit the holy city of Lord Rama with comfortable transportation"
    },
    {
      title: "Haridwar-Rishikesh",
      duration: "3 days",
      destinations: ["Har Ki Pauri", "Mansa Devi", "Laxman Jhula", "Ram Jhula", "Beatles Ashram"],
      price: "₹12,000",
      rating: 4.6,
      image: "⛰️",
      type: "Spiritual",
      description: "Spiritual retreat in the foothills of Himalayas"
    },
    {
      title: "Bodhgaya Buddhist Circuit",
      duration: "2 days",
      destinations: ["Mahabodhi Temple", "Bodhi Tree", "Thai Monastery", "Japanese Temple", "Rajgir"],
      price: "₹7,500",
      rating: 4.8,
      image: "☸️",
      type: "Buddhist",
      description: "Explore the enlightenment place of Lord Buddha"
    },
    {
      title: "Nepal Kathmandu Tour",
      duration: "4 days",
      destinations: ["Pashupatinath", "Boudhanath", "Swayambhunath", "Kathmandu Durbar Square", "Pokhara"],
      price: "₹18,000",
      rating: 4.5,
      image: "🏔️",
      type: "International",
      description: "Cross-border tour to the land of temples and mountains"
    }
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      tour: "Varanasi Spiritual Tour",
      rating: 5,
      comment: "Excellent service! The driver was very knowledgeable about all the temples and helped us with the complete darshan.",
      image: "👩‍💼"
    },
    {
      name: "Rajesh Kumar",
      tour: "Mathura-Vrindavan",
      rating: 5,
      comment: "Perfect arrangement for our family pilgrimage. Clean car, respectful driver, and on-time service.",
      image: "👨‍👨‍👧‍👦"
    },
    {
      name: "Sarah Johnson",
      tour: "Bodhgaya Tour",
      rating: 4,
      comment: "Great experience exploring Buddhist sites. India Cab made our spiritual journey very comfortable.",
      image: "👩‍🦱"
    }
  ];

  return (
    <section id="tours" className="py-20 bg-gradient-to-b from-background to-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Tour Packages
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover spiritual destinations and cultural heritage sites with our curated tour packages
          </p>
        </div>

        {/* Package Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {packages.map((pkg, index) => (
            <Card key={index} className="group hover:shadow-warm transition-all duration-300 transform hover:-translate-y-2 border-border overflow-hidden">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <span className="text-3xl">{pkg.image}</span>
                    <div>
                      <CardTitle className="text-lg text-foreground leading-tight">{pkg.title}</CardTitle>
                      <Badge variant="secondary" className="mt-1">{pkg.type}</Badge>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center text-accent mb-1">
                      <Star className="w-4 h-4 fill-current mr-1" />
                      <span className="text-sm font-semibold">{pkg.rating}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {pkg.description}
                </p>

                <div className="flex items-center text-sm text-muted-foreground mb-4">
                  <Clock className="w-4 h-4 mr-2" />
                  <span>{pkg.duration}</span>
                </div>

                {/* Destinations */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-foreground mb-2">Key Destinations:</h4>
                  <div className="space-y-1">
                    {pkg.destinations.slice(0, 3).map((dest, idx) => (
                      <div key={idx} className="flex items-center text-sm text-muted-foreground">
                        <MapPin className="w-3 h-3 mr-2 text-primary" />
                        <span>{dest}</span>
                      </div>
                    ))}
                    {pkg.destinations.length > 3 && (
                      <div className="text-xs text-primary font-medium">
                        +{pkg.destinations.length - 3} more places
                      </div>
                    )}
                  </div>
                </div>

                {/* Price */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-primary">{pkg.price}</span>
                  <span className="text-sm text-muted-foreground">per vehicle</span>
                </div>

                <Button 
                  variant="outline" 
                  className="w-full group-hover:border-primary group-hover:text-primary"
                  onClick={() => window.open(`https://wa.me/918090032475?text=Hi! I'm interested in ${pkg.title} package`, '_blank')}
                >
                  Book Package
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Testimonials */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-card">
          <h3 className="text-3xl font-bold text-center text-foreground mb-12">
            What Our Travelers Say
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-4">{testimonial.image}</div>
                <div className="flex justify-center mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-accent fill-current" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic leading-relaxed">
                  "{testimonial.comment}"
                </p>
                <div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.tour}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Custom Tour CTA */}
        <div className="mt-16 bg-gradient-hero rounded-3xl p-8 md:p-12 text-white text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Need a Custom Tour Package?
          </h3>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            We can create personalized itineraries based on your preferences, budget, and travel dates. 
            Contact us to plan your perfect spiritual or cultural journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="outline" 
              size="lg" 
              className="bg-white/10 border-white/30 text-white hover:bg-white/20"
              onClick={() => window.open('https://wa.me/918090032475?text=Hi! I need a custom tour package', '_blank')}
            >
              <Users className="w-5 h-5 mr-2" />
              Plan Custom Tour
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="bg-white/10 border-white/30 text-white hover:bg-white/20"
            >
              View All Destinations
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TourPackages;