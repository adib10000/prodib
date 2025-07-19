import React from 'react';
import { MessageCircle, Star, Users, Award, Instagram, ShoppingBag } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-slate-800/20 via-transparent to-transparent"></div>

      {/* Animated Background Shapes */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-slate-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">
          {/* Content */}
          <div className="space-y-8" data-aos="fade-right">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 backdrop-blur-sm border border-blue-500/20">
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
              <span className="text-sm text-gray-300">Trusted by 1000+ customers</span>
            </div>

            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Prodib</span>
                <br />
                Sportwear
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-2xl leading-relaxed">
                Produksi jersey custom, kaos kaki, dan pakaian olahraga berkualitas tinggi untuk tim, komunitas, dan brand Anda dengan harga terjangkau
              </p>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-6 py-4">
              <div className="flex items-center gap-2">
                <Users className="w-6 h-6 text-blue-400" />
                <span className="text-white font-semibold">1000+ Customers</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-6 h-6 text-blue-400" />
                <span className="text-white font-semibold">Premium Quality</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/6281273884309"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-full hover:from-blue-700 hover:to-blue-800 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <MessageCircle className="w-5 h-5 group-hover:animate-bounce" />
                Konsultasi Gratis
              </a>
              <div className="flex gap-3">
                <a
                  href="https://instagram.com/prodib_sportswear"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://shopee.co.id/prodib_sportswear"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <ShoppingBag className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative" data-aos="fade-left">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-transparent rounded-3xl blur-3xl"></div>
            <div className="relative bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
              <img
                src="/img/jersey-hero.png"
                alt="Prodib Sportwear Jersey Custom"
                className="w-full h-auto rounded-2xl shadow-2xl"
                loading="eager" />
              <div className="absolute top-4 right-4 bg-green-500/20 backdrop-blur-sm rounded-full px-4 py-2 border border-green-500/30">
                <span className="text-green-400 font-semibold">Ready Stock</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;