import React, { useState, useEffect } from 'react';
import { Menu, X, Shirt, Phone, Instagram, ShoppingBag, MessageCircle } from 'lucide-react';
import { trackWhatsAppClick } from '../utils/analytics';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleWhatsAppClick = () => {
    trackWhatsAppClick('header');
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    closeMenu();
  };

  const navigationItems = [
    { label: 'Beranda', href: '#hero' },
    { label: 'Layanan', href: '#services' },
    { label: 'Material', href: '#materials' },
    { label: 'Galeri', href: '#gallery' },
    { label: 'Testimoni', href: '#testimonials' },
    { label: 'Kontak', href: '#contact' }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? 'bg-slate-900/95 backdrop-blur-md border-b border-white/10 shadow-lg'
        : 'bg-transparent'
        }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div
            className="flex items-center gap-3 group cursor-pointer"
            onClick={() => scrollToSection('hero')}>
            <img
              src="/img/logo.png"
              alt="Logo"
              className="w-32 h-32 object-contain"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href.substring(1))}
                className="text-gray-300 hover:text-white font-medium transition-colors duration-300 relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-blue-600 group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
          </nav>

          {/* Desktop CTA & Social */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Social Links */}
            <div className="flex items-center gap-2">
              <a
                href="https://instagram.com/prodib_sportswear"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-pink-500/20 transition-all duration-300 group"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="w-4 h-4 text-gray-400 group-hover:text-pink-400 transition-colors duration-300" />
              </a>
              <a
                href="https://shopee.co.id/prodib_sportswear"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-orange-500/20 transition-all duration-300 group"
                aria-label="Visit our Shopee store"
              >
                <ShoppingBag className="w-4 h-4 text-gray-400 group-hover:text-orange-400 transition-colors duration-300" />
              </a>
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/6281273884309"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleWhatsAppClick}
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-full hover:from-blue-700 hover:to-blue-800 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <MessageCircle className="w-4 h-4" />
              <span className="hidden xl:inline">Konsultasi</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300"
            aria-label="Toggle mobile menu"
          >
            {isMenuOpen ? (
              <X className="w-5 h-5 text-white" />
            ) : (
              <Menu className="w-5 h-5 text-white" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
          }`}>
          <div className="py-4 bg-slate-800/95 backdrop-blur-md rounded-2xl mt-4 border border-white/10">
            {/* Mobile Navigation */}
            <nav className="px-6 py-4 space-y-4">
              {navigationItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href.substring(1))}
                  className="block w-full text-left text-gray-300 hover:text-white font-medium py-2 transition-colors duration-300"
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* Mobile Social & Contact */}
            <div className="px-6 py-4 border-t border-white/10">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <a
                    href="https://instagram.com/prodib_sportwear"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-pink-500/20 transition-all duration-300"
                    aria-label="Follow us on Instagram"
                  >
                    <Instagram className="w-4 h-4 text-gray-400" />
                  </a>
                  <a
                    href="https://shopee.co.id/prodib_sportswear"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-orange-500/20 transition-all duration-300"
                    aria-label="Visit our Shopee store"
                  >
                    <ShoppingBag className="w-4 h-4 text-gray-400" />
                  </a>
                </div>

                <a
                  href="tel:+6281273884309"
                  className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors duration-300"
                >
                  <Phone className="w-4 h-4" />
                  <span className="text-sm">081273884309</span>
                </a>
              </div>

              {/* Mobile WhatsApp CTA */}
              <a
                href="https://wa.me/6281273884309"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleWhatsAppClick}
                className="w-full inline-flex items-center justify-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-full hover:from-blue-700 hover:to-blue-800 transition-all duration-300"
              >
                <MessageCircle className="w-5 h-5" />
                Konsultasi Gratis
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;