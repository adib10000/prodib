import React from 'react';
import { MessageCircle } from 'lucide-react';
import { trackWhatsAppClick } from '../utils/analytics';

const FloatingWhatsApp = () => {
  const handleClick = () => {
    trackWhatsAppClick('floating_button');
  };

  return (
    <a
      href="https://wa.me/6281273884309"
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Chat dengan kami di WhatsApp"
    >
      <div className="relative">
        {/* Pulse Animation */}
        <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-20"></div>
        
        {/* Main Button */}
        <div className="relative w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300">
          <MessageCircle className="w-8 h-8 text-white group-hover:animate-bounce" />
        </div>
        
        {/* Tooltip */}
        <div className="absolute bottom-full right-0 mb-2 px-3 py-1 bg-slate-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          Chat di WhatsApp
        </div>
      </div>
    </a>
  );
};

export default FloatingWhatsApp;