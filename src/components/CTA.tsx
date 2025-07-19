import React from 'react';
import { MessageCircle, Phone, Mail } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-20 bg-slate-800 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-slate-700/20 via-transparent to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center" data-aos="fade-up">
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12 border border-white/10">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Siap Wujudkan <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Impian Anda?</span>
            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Konsultasikan kebutuhan produksi pakaian custom Anda sekarang juga. Tim profesional kami siap membantu mewujudkan ide kreatif Anda.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a 
                href="https://wa.me/6281273884309" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-full hover:from-blue-700 hover:to-blue-800 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <MessageCircle className="w-6 h-6 group-hover:animate-bounce" />
                Konsultasi Gratis via WhatsApp
              </a>
              <a 
                href="tel:+6281273884309"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <Phone className="w-5 h-5" />
                Hubungi Sekarang
              </a>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-gray-400">
              {/* <div className="flex items-center gap-2">
                <Mail className="w-5 h-5" />
                <span>prodibsportwear@gmail.com</span>
              </div> */}
              {/* <div className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                <span>081273884309</span>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;