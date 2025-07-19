import React from 'react';
import { MessageCircle, Palette, CreditCard, Truck } from 'lucide-react';

const HowToOrder = () => {
  const steps = [
    {
      icon: MessageCircle,
      title: "Konsultasi",
      description: "Hubungi kami melalui WhatsApp untuk diskusi kebutuhan dan detail pesanan Anda"
    },
    {
      icon: Palette,
      title: "Desain",
      description: "Tim desainer kami akan membantu membuat mockup sesuai dengan keinginan Anda"
    },
    {
      icon: CreditCard,
      title: "Pembayaran",
      description: "Lakukan pembayaran DP 50% setelah desain disetujui untuk memulai produksi"
    },
    {
      icon: Truck,
      title: "Pengiriman",
      description: "Produk akan dikirim setelah selesai dengan packaging yang aman dan rapi"
    }
  ];

  return (
    <section className="py-20 bg-slate-800 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Cara <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Order</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Proses pemesanan yang mudah dan transparan dalam 4 langkah sederhana
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="group relative"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Step Number */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                {index + 1}
              </div>
              
              {/* Card */}
              <div className="pt-8 p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10 text-center">
                  <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                    <step.icon className="w-8 h-8 text-blue-400" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{step.description}</p>
                </div>
              </div>
              
              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-blue-600 to-blue-700 transform -translate-y-1/2"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowToOrder;