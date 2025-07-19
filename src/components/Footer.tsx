import React from 'react';
import { Shirt, MapPin, Phone, Mail, Instagram, ShoppingBag } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 border-t border-white/10 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/5 via-transparent to-transparent"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="py-16">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-32 h-32 bg-gradient-to-r from-white-600 to-white-700 rounded-xl flex items-center justify-center">
                  <img
                    src="/img/logo.png"
                    alt="Logo"
                    className="w-32 h-64 object-contain"
                  />
                </div>
              </div>

              <p className="text-gray-400 leading-relaxed max-w-md">
                Spesialis produksi jersey custom, kaos kaki, dan pakaian olahraga berkualitas tinggi. Melayani sewa jersey dan berbagai kebutuhan fashion olahraga lainnya.
              </p>

              <div className="flex gap-4">
                <a
                  href="https://instagram.com/prodib_sportswear"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-pink-500/20 transition-colors duration-300"
                  aria-label="Follow us on Instagram"
                >
                  <Instagram className="w-5 h-5 text-gray-400 hover:text-pink-400" />
                </a>
                <a
                  href="https://shopee.co.id/prodib_sportswear"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-orange-500/20 transition-colors duration-300"
                  aria-label="Visit our Shopee store"
                >
                  <ShoppingBag className="w-5 h-5 text-gray-400 hover:text-orange-400" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-semibold mb-4">Layanan</h4>
              <ul className="space-y-2">
                <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Jersey Custom</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Produksi Massal</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Sewa Jersey</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Kaos Kaki Custom</a></li>
                <li><a href="#gallery" className="text-gray-400 hover:text-white transition-colors">Galeri Produk</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-white font-semibold mb-4">Hubungi Kami</h4>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-400 text-sm">Bungo, Komplex Sapta Marga No 101</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-blue-400" />
                  <a href="https://wa.me/6281273884309" className="text-gray-400 hover:text-white transition-colors">081273884309</a>
                </div>
                <div className="flex items-center gap-3">
                  <Instagram className="w-5 h-5 text-blue-400" />
                  <a href="https://instagram.com/prodib_sportswear" className="text-gray-400 hover:text-white transition-colors">@prodib_sportwear</a>
                </div>
                <div className="flex items-center gap-3">
                  <ShoppingBag className="w-5 h-5 text-blue-400" />
                  <a href="https://shopee.co.id/prodib_sportswear" className="text-gray-400 hover:text-white transition-colors">Prodib Sportswear</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2024 Prodib Sportwear. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;