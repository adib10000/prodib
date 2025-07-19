import React from 'react';
import { Shield, Clock, Award, Users, Palette, ThumbsUp } from 'lucide-react';

const WhyChooseUs = () => {
  const advantages = [
    {
      icon: Shield,
      title: "Kualitas Terjamin",
      description: "Menggunakan bahan premium dan proses produksi yang ketat untuk memastikan kualitas terbaik"
    },
    {
      icon: Clock,
      title: "Pengerjaan Cepat",
      description: "Tim profesional yang berpengalaman memastikan pesanan selesai tepat waktu"
    },
    {
      icon: Award,
      title: "Harga Kompetitif",
      description: "Dapatkan harga terbaik dengan kualitas premium langsung dari produsen"
    },
    {
      icon: Users,
      title: "Layanan 24/7",
      description: "Tim customer service siap membantu Anda kapan saja melalui WhatsApp"
    },
    {
      icon: Palette,
      title: "Desain Gratis",
      description: "Tim desainer profesional siap membantu mewujudkan ide kreatif Anda"
    },
    {
      icon: ThumbsUp,
      title: "Trusted Brand",
      description: "Dipercaya oleh 1000+ pelanggan di seluruh Indonesia dengan rating 4.9/5"
    }
  ];

  return (
    <section className="py-20 bg-slate-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Kenapa Pilih <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Kami?</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Keunggulan yang membuat kami menjadi pilihan utama untuk kebutuhan produksi pakaian Anda
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <div 
              key={index}
              className="group relative p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <advantage.icon className="w-8 h-8 text-blue-400" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">{advantage.title}</h3>
                <p className="text-gray-400 leading-relaxed">{advantage.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;