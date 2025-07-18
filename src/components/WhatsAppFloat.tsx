import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const WhatsAppFloat = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/918090032475?text=Hi! I want to book a cab with India Cab', '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-float">
      <Button
        variant="whatsapp"
        size="icon"
        className="w-16 h-16 rounded-full shadow-xl hover:shadow-2xl"
        onClick={handleWhatsAppClick}
      >
        <MessageCircle className="w-8 h-8" />
      </Button>
      
      {/* Pulse rings for attention */}
      <div className="absolute inset-0 -z-10">
        <div className="w-16 h-16 bg-green-500/30 rounded-full animate-ping"></div>
        <div className="w-16 h-16 bg-green-500/20 rounded-full animate-ping animation-delay-150 absolute top-0"></div>
      </div>
      
      {/* Tooltip */}
      <div className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        Book via WhatsApp
        <div className="absolute left-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-l-gray-900"></div>
      </div>
    </div>
  );
};

export default WhatsAppFloat;