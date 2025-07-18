import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Fleet from '@/components/Fleet';
import TourPackages from '@/components/TourPackages';
import Contact from '@/components/Contact';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import BookingSystem from '@/components/BookingSystem';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <BookingSystem />
        <Services />
        <Fleet />
        <TourPackages />
        <Contact />
      </main>
      <WhatsAppFloat />
    </div>
  );
};

export default Index;
