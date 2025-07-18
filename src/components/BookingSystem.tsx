import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, MapPin, Users, Clock, Calculator, Star } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import bookingInterface from '@/assets/booking-interface.jpg';

const vehicles = [
  { name: 'Swift Dzire', seats: 4, rate: 12, airport: 900, city: 1800, outstation: 2200, rating: 4.8, popular: true },
  { name: 'Honda City', seats: 4, rate: 12, airport: 1100, city: 1800, outstation: 2200, rating: 4.7 },
  { name: 'Tavera/Ertiga', seats: 7, rate: 14, airport: 1200, city: 2400, outstation: 2600, rating: 4.6 },
  { name: 'Innova', seats: 7, rate: 16, airport: 1450, city: 2400, outstation: 3000, rating: 4.9, popular: true },
  { name: 'Crysta', seats: 7, rate: 17, airport: 1500, city: 2600, outstation: 3200, rating: 4.8 },
  { name: 'Tempo Traveller 17s', seats: 17, rate: 26, airport: 2500, city: 5000, outstation: 5000, rating: 4.5 },
];

const popularRoutes = [
  { from: 'Varanasi Airport', to: 'City Center', price: '₹900', duration: '45 min', bookings: 150 },
  { from: 'Varanasi', to: 'Mathura-Vrindavan', price: '₹3,200', duration: '6 hours', bookings: 89 },
  { from: 'Railway Station', to: 'Kashi Vishwanath', price: '₹400', duration: '20 min', bookings: 127 },
  { from: 'Varanasi', to: 'Ayodhya', price: '₹2,800', duration: '4 hours', bookings: 73 },
];

const BookingSystem = () => {
  const [tripType, setTripType] = useState('airport');
  const [pickup, setPickup] = useState('');
  const [drop, setDrop] = useState('');
  const [selectedVehicle, setSelectedVehicle] = useState('');
  const [estimatedFare, setEstimatedFare] = useState(0);
  const [showFareBreakdown, setShowFareBreakdown] = useState(false);

  const calculateFare = () => {
    const vehicle = vehicles.find(v => v.name === selectedVehicle);
    if (!vehicle) return;

    let baseFare = 0;
    switch (tripType) {
      case 'airport':
        baseFare = vehicle.airport;
        break;
      case 'city':
        baseFare = vehicle.city;
        break;
      case 'outstation':
        baseFare = vehicle.outstation;
        break;
    }
    setEstimatedFare(baseFare);
    setShowFareBreakdown(true);
  };

  const addToGoogleCalendar = () => {
    const startDate = new Date();
    const endDate = new Date(Date.now() + 2 * 60 * 60 * 1000); // 2 hours later
    const title = `India Cab - ${pickup} to ${drop}`;
    const details = `Cab booking with ${selectedVehicle} | Estimated fare: ₹${estimatedFare}`;
    
    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(title)}&dates=${startDate.toISOString().replace(/[-:]/g, '').split('.')[0]}Z/${endDate.toISOString().replace(/[-:]/g, '').split('.')[0]}Z&details=${encodeURIComponent(details)}`;
    
    window.open(googleCalendarUrl, '_blank');
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-background via-background to-primary/5">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-warm bg-clip-text text-transparent">
            Smart Booking System
          </h2>
          <p className="text-muted-foreground text-lg">Real-time availability & instant fare estimation</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Booking Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="glass-morphism border-0 shadow-warm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calculator className="h-5 w-5 text-primary" />
                  Fare Estimator
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="trip-type">Trip Type</Label>
                  <Select value={tripType} onValueChange={setTripType}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select trip type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="airport">Airport Transfer</SelectItem>
                      <SelectItem value="city">City Ride (8h/80km)</SelectItem>
                      <SelectItem value="outstation">Outstation (12h/200km)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="pickup">Pickup Location</Label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="pickup"
                        placeholder="Enter pickup"
                        value={pickup}
                        onChange={(e) => setPickup(e.target.value)}
                        className="pl-10"
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="drop">Drop Location</Label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="drop"
                        placeholder="Enter destination"
                        value={drop}
                        onChange={(e) => setDrop(e.target.value)}
                        className="pl-10"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <Label htmlFor="vehicle">Select Vehicle</Label>
                  <Select value={selectedVehicle} onValueChange={setSelectedVehicle}>
                    <SelectTrigger>
                      <SelectValue placeholder="Choose your cab" />
                    </SelectTrigger>
                    <SelectContent>
                      {vehicles.map((vehicle) => (
                        <SelectItem key={vehicle.name} value={vehicle.name}>
                          <div className="flex items-center justify-between w-full">
                            <span>{vehicle.name}</span>
                            <div className="flex items-center gap-2 ml-4">
                              <Users className="h-3 w-3" />
                              <span className="text-xs">{vehicle.seats}</span>
                              {vehicle.popular && <Badge variant="secondary" className="text-xs">Popular</Badge>}
                            </div>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <Button 
                  onClick={calculateFare} 
                  className="w-full"
                  disabled={!pickup || !drop || !selectedVehicle}
                >
                  Calculate Fare
                </Button>

                <AnimatePresence>
                  {showFareBreakdown && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="glass-morphism p-4 rounded-lg"
                    >
                      <h4 className="font-semibold mb-2">Fare Breakdown</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span>Base Fare ({tripType})</span>
                          <span>₹{estimatedFare}</span>
                        </div>
                        <div className="flex justify-between text-muted-foreground">
                          <span>* Excludes tolls & parking</span>
                        </div>
                        <div className="pt-2 border-t flex justify-between font-semibold text-lg">
                          <span>Estimated Total</span>
                          <span className="text-primary">₹{estimatedFare}</span>
                        </div>
                      </div>
                      <div className="mt-4 space-y-2">
                        <Button onClick={addToGoogleCalendar} variant="outline" className="w-full">
                          <Calendar className="h-4 w-4 mr-2" />
                          Add to Calendar
                        </Button>
                        <Button className="w-full bg-green-600 hover:bg-green-700">
                          Book via WhatsApp
                        </Button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </CardContent>
            </Card>
          </motion.div>

          {/* Popular Routes */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="glass-morphism border-0 shadow-warm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Star className="h-5 w-5 text-primary" />
                  Most Popular Rides
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {popularRoutes.map((route, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="glass-morphism p-4 rounded-lg hover:shadow-lg transition-all cursor-pointer"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <p className="font-medium">{route.from} → {route.to}</p>
                          <p className="text-sm text-muted-foreground flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {route.duration}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold text-primary">{route.price}</p>
                          <p className="text-xs text-muted-foreground">{route.bookings} bookings</p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm" className="w-full">
                        Quick Book
                      </Button>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Real-time Availability */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Card className="glass-morphism border-0 shadow-warm inline-block">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <div className="absolute inset-0 w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
                </div>
                <div>
                  <p className="font-semibold">Live Availability</p>
                  <p className="text-sm text-muted-foreground">Next cab available in 8 minutes</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default BookingSystem;