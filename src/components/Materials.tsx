import React from 'react';
import { Shield, Droplets, Wind, Zap, Thermometer, Star } from 'lucide-react';

const Materials = () => {
  const materials = [
    {
      icon: Shield,
      name: "Dry Fit Milano",
      description: "Bahan polyester dengan tekstur halus dan elastis, cocok untuk pakaian olahraga karena ringan dan cepat menyerap keringat.",
      features: ["Tekstur halus & elastis", "Ringan dan breathable", "Tahan lama & tidak mudah melar"],
      image: "/img/dry-fit.jpg",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Droplets,
      name: "Dry Fit Brazil",
      description: "Kain dryfit berpori dengan sirkulasi udara yang baik, sangat nyaman dipakai untuk aktivitas fisik berat.",
      features: ["Bahan berpori untuk sirkulasi udara maksimal", "Cocok untuk olahraga berat & outdoor", "Tidak perlu disetrika, praktis", "Permukaan agak bertekstur, tampilan sporty"],
      image: "/img/dryfit-brazil.jpg",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Wind,
      name: "Cotton Combed",
      description: "Kain katun lembut berkualitas tinggi yang adem, tidak berbulu, dan nyaman untuk pakaian sehari-hari.",
      features: ["Soft Touch", "Skin Friendly", "Natural Fiber", "Easy Care"],
      image: "/img/cutton-combed.jpg",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Zap,
      name: "Dry Fit Drop Needle",
      description: "Bahan dryfit bermotif titik-titik (drop needle) yang lembut dan stretch, memberikan kenyamanan dan tampilan sporty.",
      features: ["Stretchy & fleksibel", "Perawatan mudah", "Kelembapan cepat menguap dari tubuh"],
      image: "/img/dryfit-drop.jpg",
      color: "from-orange-500 to-orange-600"
    }
  ];

  const qualityFeatures = [
    {
      icon: Thermometer,
      title: "Temperature Control",
      description: "Teknologi pengatur suhu tubuh untuk kenyamanan maksimal"
    },
    {
      icon: Shield,
      title: "Durability Tested",
      description: "Telah melalui uji ketahanan untuk memastikan kualitas terbaik"
    },
    {
      icon: Star,
      title: "Premium Grade",
      description: "Hanya menggunakan bahan grade A dengan standar internasional"
    }
  ];

  return (
    <section id="materials" className="py-20 bg-slate-800 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Material <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Berkualitas</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Kami hanya menggunakan bahan premium dengan teknologi terdepan untuk memastikan kenyamanan dan durabilitas produk Anda
          </p>
        </div>

        {/* Materials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {materials.map((material, index) => (
            <div
              key={index}
              className="group relative bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105 overflow-hidden"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Material Image */}
              <div className="aspect-square overflow-hidden">
                <img
                  src={material.image}
                  alt={material.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  loading="lazy"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${material.color} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>
              </div>

              <div className="relative z-10 p-6">
                <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <material.icon className="w-6 h-6 text-blue-400" />
                </div>

                <h3 className="text-xl font-bold text-white mb-3">{material.name}</h3>
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">{material.description}</p>

                <div className="space-y-2">
                  {material.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-2 text-xs text-gray-300">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quality Features */}
        <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10" data-aos="fade-up">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">Jaminan Kualitas Premium</h3>
            <p className="text-gray-400">Setiap produk melalui kontrol kualitas ketat untuk memastikan standar terbaik</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {qualityFeatures.map((feature, index) => (
              <div
                key={index}
                className="text-center group"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-blue-400" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">{feature.title}</h4>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Material Care Instructions */}
        <div className="mt-16 bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm rounded-3xl p-8 border border-white/10" data-aos="fade-up">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Perawatan Material</h3>
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div className="space-y-2">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-blue-400 font-bold">30°</span>
                </div>
                <p className="text-gray-300 text-sm">Cuci air dingin</p>
              </div>
              <div className="space-y-2">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-blue-400 font-bold">🌙</span>
                </div>
                <p className="text-gray-300 text-sm">Jemur tidak langsung</p>
              </div>
              <div className="space-y-2">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-blue-400 font-bold">🚫</span>
                </div>
                <p className="text-gray-300 text-sm">Jangan gunakan bleach</p>
              </div>
              <div className="space-y-2">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-blue-400 font-bold">🔥</span>
                </div>
                <p className="text-gray-300 text-sm">Setrika suhu rendah</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Materials;