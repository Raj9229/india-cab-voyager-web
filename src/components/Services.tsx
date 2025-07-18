import { Plane, MapPin, Route, Mountain } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Services = () => {
  const services = [
    {
      icon: Plane,
      title: "Airport & Railway Transfers",
      description: "Reliable pickups and drops from Lal Bahadur Shastri Airport, Varanasi Junction, and Manduadih Railway Station.",
      features: ["On-time arrival", "Flight tracking", "Fixed rates", "24×7 availability"],
      startingPrice: "₹900",
    },
    {
      icon: MapPin,
      title: "City Rides",
      description: "Convenient local transportation within Varanasi city for temple visits, shopping, and business meetings.",
      features: ["8 hours / 80 km", "Wait time included", "AC vehicles", "Experienced drivers"],
      startingPrice: "₹1,800",
    },
    {
      icon: Route,
      title: "Outstation Trips",
      description: "Comfortable intercity travel to nearby destinations like Ayodhya, Allahabad, Bodhgaya, and more.",
      features: ["12 hours / 200 km", "Fuel included", "Driver allowance", "Well-maintained cars"],
      startingPrice: "₹2,200",
    },
    {
      icon: Mountain,
      title: "Multi-day Tour Packages",
      description: "Complete tour packages covering spiritual destinations, hill stations, and cultural sites across North India.",
      features: ["Customizable routes", "Hotel bookings", "Guide services", "Group discounts"],
      startingPrice: "₹5,000",
    },
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-muted/50 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional taxi services tailored to your travel needs in and around Varanasi
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-warm transition-all duration-300 transform hover:-translate-y-2 border-border bg-card"
            >
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-warm rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center justify-center text-sm text-muted-foreground">
                      <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                      {feature}
                    </div>
                  ))}
                </div>

                <div className="mb-4">
                  <span className="text-2xl font-bold text-primary">{service.startingPrice}</span>
                  <span className="text-sm text-muted-foreground ml-1">starting</span>
                </div>

                <Button 
                  variant="outline" 
                  className="w-full group-hover:border-primary group-hover:text-primary"
                >
                  View Rates
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Section */}
        <div className="mt-16 bg-gradient-hero rounded-3xl p-8 md:p-12 text-white text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Why Choose India Cab?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                <span className="text-2xl">🛡️</span>
              </div>
              <h4 className="font-semibold mb-2">Licensed & Insured</h4>
              <p className="text-white/80 text-sm">UP Labour Department approved with full insurance coverage</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                <span className="text-2xl">💎</span>
              </div>
              <h4 className="font-semibold mb-2">No Hidden Charges</h4>
              <p className="text-white/80 text-sm">Transparent pricing with all costs mentioned upfront</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                <span className="text-2xl">⏰</span>
              </div>
              <h4 className="font-semibold mb-2">24×7 Availability</h4>
              <p className="text-white/80 text-sm">Round-the-clock service for all your travel needs</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;