import { useState } from 'react';
import { Car, Users, Luggage, IndianRupee } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import cabFleetImage from '@/assets/cab-fleet.jpg';

const Fleet = () => {
  const [selectedService, setSelectedService] = useState('airport');

  const vehicles = [
    {
      name: "Swift Dzire",
      category: "Sedan",
      seating: 4,
      luggage: 2,
      features: ["AC", "Music System", "Comfortable"],
      rates: {
        airport: 900,
        city: 1800,
        outstation: 2200,
        perKm: 12
      }
    },
    {
      name: "Honda City",
      category: "Premium Sedan",
      seating: 4,
      luggage: 2,
      features: ["AC", "Premium Interior", "GPS"],
      rates: {
        airport: 1100,
        city: 1800,
        outstation: 2200,
        perKm: 12
      }
    },
    {
      name: "Tavera/Ertiga",
      category: "SUV",
      seating: 7,
      luggage: 4,
      features: ["AC", "Spacious", "Family Friendly"],
      rates: {
        airport: 1200,
        city: 2400,
        outstation: 2600,
        perKm: 14
      }
    },
    {
      name: "Toyota Innova",
      category: "Premium MPV",
      seating: 7,
      luggage: 5,
      features: ["AC", "Premium Comfort", "Reliable"],
      rates: {
        airport: 1450,
        city: 2400,
        outstation: 3000,
        perKm: 16
      }
    },
    {
      name: "Innova Crysta",
      category: "Luxury MPV",
      seating: 7,
      luggage: 5,
      features: ["AC", "Luxury Interior", "Premium"],
      rates: {
        airport: 1500,
        city: 2600,
        outstation: 3200,
        perKm: 17
      }
    },
    {
      name: "Bolero",
      category: "SUV",
      seating: 7,
      luggage: 4,
      features: ["AC", "Sturdy", "All Terrain"],
      rates: {
        airport: 1250,
        city: 1800,
        outstation: 2300,
        perKm: 13
      }
    },
    {
      name: "Force Cruiser",
      category: "Large SUV",
      seating: 13,
      luggage: 8,
      features: ["AC", "Group Travel", "Spacious"],
      rates: {
        airport: 1600,
        city: 2600,
        outstation: 3200,
        perKm: 17
      }
    },
    {
      name: "Tempo Traveller 17s",
      category: "Mini Bus",
      seating: 17,
      luggage: 10,
      features: ["AC", "Group Tours", "Comfortable"],
      rates: {
        airport: 2500,
        city: 5000,
        outstation: 5000,
        perKm: 26
      }
    },
    {
      name: "Tempo Traveller 26s",
      category: "Bus",
      seating: 26,
      luggage: 15,
      features: ["AC", "Large Groups", "Tour Ready"],
      rates: {
        airport: 2700,
        city: 5000,
        outstation: 6500,
        perKm: 25
      }
    }
  ];

  const serviceLabels = {
    airport: "Airport Pickup",
    city: "City (8h/80km)",
    outstation: "Outstation (12h/200km)"
  };

  return (
    <section id="fleet" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Fleet & Pricing
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose from our well-maintained fleet of vehicles with transparent pricing
          </p>
        </div>

        {/* Fleet Showcase Image */}
        <div className="mb-12 rounded-3xl overflow-hidden shadow-card">
          <img 
            src={cabFleetImage} 
            alt="India Cab fleet showcasing modern vehicles"
            className="w-full h-64 md:h-80 object-cover"
          />
        </div>

        {/* Service Type Selector */}
        <div className="mb-12">
          <Tabs value={selectedService} onValueChange={setSelectedService} className="w-full">
            <TabsList className="grid w-full grid-cols-3 max-w-md mx-auto bg-muted rounded-2xl p-1">
              <TabsTrigger value="airport" className="rounded-xl">Airport</TabsTrigger>
              <TabsTrigger value="city" className="rounded-xl">City</TabsTrigger>
              <TabsTrigger value="outstation" className="rounded-xl">Outstation</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        {/* Vehicle Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {vehicles.map((vehicle, index) => (
            <Card key={index} className="group hover:shadow-warm transition-all duration-300 transform hover:-translate-y-2 border-border">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl text-foreground">{vehicle.name}</CardTitle>
                  <span className="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full">
                    {vehicle.category}
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                {/* Vehicle Specs */}
                <div className="flex justify-between mb-6 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-1" />
                    <span>{vehicle.seating} seats</span>
                  </div>
                  <div className="flex items-center">
                    <Luggage className="w-4 h-4 mr-1" />
                    <span>{vehicle.luggage} bags</span>
                  </div>
                </div>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {vehicle.features.map((feature, idx) => (
                    <span key={idx} className="bg-accent/20 text-accent-foreground px-2 py-1 rounded-lg text-xs">
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Pricing */}
                <div className="bg-muted/50 rounded-xl p-4 mb-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">
                      {serviceLabels[selectedService]}
                    </span>
                    <div className="flex items-center">
                      <IndianRupee className="w-5 h-5 text-primary" />
                      <span className="text-2xl font-bold text-foreground">
                        {vehicle.rates[selectedService]}
                      </span>
                    </div>
                  </div>
                  <div className="text-xs text-muted-foreground mt-2">
                    Per km rate: ₹{vehicle.rates.perKm}
                  </div>
                </div>

                {/* Book Button */}
                <Button 
                  variant="outline" 
                  className="w-full group-hover:border-primary group-hover:text-primary"
                  onClick={() => window.open(`https://wa.me/918090032475?text=Hi! I want to book ${vehicle.name} for ${serviceLabels[selectedService]}`, '_blank')}
                >
                  <Car className="w-4 h-4 mr-2" />
                  Book {vehicle.name}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Pricing Note */}
        <div className="mt-12 bg-accent/10 rounded-2xl p-6 text-center">
          <h3 className="text-lg font-semibold text-foreground mb-2">
            💡 Pricing Information
          </h3>
          <p className="text-muted-foreground text-sm max-w-3xl mx-auto">
            <strong>Rates include:</strong> Driver allowance, fuel charges. 
            <strong>Additional charges:</strong> Night charges (10 PM - 6 AM): ₹200, 
            Toll taxes, parking charges (if applicable), and outstation driver accommodation for multi-day trips.
          </p>
        </div>

        {/* WhatsApp CTA */}
        <div className="text-center mt-12">
          <Button 
            variant="whatsapp" 
            size="xl" 
            className="animate-float"
            onClick={() => window.open('https://wa.me/918090032475?text=Hi! I need a quote for taxi service', '_blank')}
          >
            💬 Get Instant Quote on WhatsApp
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Fleet;