import React from 'react';
import { Shirt, Users, Palette, Zap, MessageCircle, Scissors } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Shirt,
      title: "Jersey Custom",
      description: "Desain jersey olahraga sesuai keinginan Anda dengan kualitas premium dan harga terjangkau",
      features: ["Desain Bebas", "Bahan Premium", "Minimal Order 12 pcs"],
      image: '/img/jersey-hero.png'
    },
    {
      icon: Users,
      title: "Produksi Massal",
      description: "Layanan produksi dalam jumlah besar dengan harga grosir dan kualitas terjamin",
      features: ["Harga Grosir", "Quality Control", "Fast Production"],
      image: "/img/produksi.jpg"
    },
    {
      icon: Palette,
      title: "Custom Design",
      description: "Tim desainer profesional siap membantu mewujudkan ide kreatif Anda",
      features: ["Free Design", "Unlimited Revisi", "Professional Team"],
      image: "/img/jersey-custom.png"
    },
    {
      icon: Scissors,
      title: "Sewa Jersey",
      description: "Layanan sewa jersey dan produksi kaos kaki custom untuk kebutuhan tim Anda",
      features: ["Sewa Harian", "Kaos Kaki Custom", "Paket Lengkap"],
      image: "/img/sewa-jersey.jpg"
    }
  ];

  return (
    <section id="services" className="py-20 bg-slate-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Layanan <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Kami</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Solusi lengkap untuk semua kebutuhan produksi pakaian olahraga dan custom Anda
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group relative bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105 overflow-hidden"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Service Image */}
              <div className="aspect-video overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10 p-6">
                <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-6 h-6 text-blue-400" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">{service.description}</p>
                
                <ul className="space-y-1 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-xs text-gray-300">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <a 
                  href="https://wa.me/6281273884309" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-full hover:from-blue-700 hover:to-blue-800 transition-all duration-300 text-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  Konsultasi
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;