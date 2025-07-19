import React, { useState } from 'react';
import { Filter } from 'lucide-react';
import { trackGalleryFilter } from '../utils/analytics';
import { GalleryItemSkeleton } from './UI/LoadingSkeleton';

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [isLoading, setIsLoading] = useState(false);

  const categories = [
    { id: 'all', label: 'Semua' },
    { id: 'jersey', label: 'Jersey' },
    { id: 'jaket', label: 'Jaket' },
    { id: 'kaos', label: 'Kaos' },
    { id: 'kaos-kaki', label: 'Kaos Kaki' },
    { id: 'seragam', label: 'Seragam' }
  ];

  const products = [
    {
      id: 1,
      category: 'jersey',
      image: '/img/jersey-1.jpg',
      title: 'Jersey Custom'
    },
    {
      id: 2,
      category: 'jersey',
      image: '/img/jersey-2.jpg',
      title: 'Jersey Custom'
    },
    {
      id: 3,
      category: 'jersey',
      image: '/img/jersey-3.jpg',
      title: 'Jersey Custom'
    },
    {
      id: 4,
      category: 'jersey',
      image: '/img/jersey-4.jpg',
      title: 'Jersey Custom'
    },
    {
      id: 5,
      category: 'jersey',
      image: '/img/jersey-5.jpg',
      title: 'Jersey Custom'
    },
    {
      id: 6,
      category: 'jersey',
      image: '/img/jersey-6.jpg',
      title: 'Jersey Custom'
    },
    {
      id: 7,
      category: 'jersey',
      image: '/img/jersey-7.jpg',
      title: 'Jersey Custom'
    },
    {
      id: 8,
      category: 'jersey',
      image: '/img/jersey-8.jpg',
      title: 'Jersey Custom'
    },
    {
      id: 9,
      category: 'jersey',
      image: '/img/jersey-9.jpg',
      title: 'Jersey Custom'
    },
    {
      id: 10,
      category: 'jersey',
      image: '/img/jersey-10.jpg',
      title: 'Jersey Custom'
    },
    {
      id: 11,
      category: 'jersey',
      image: '/img/jersey-11.jpg',
      title: 'Jersey Custom'
    },
    {
      id: 12,
      category: 'jersey',
      image: '/img/jersey-12.jpg',
      title: 'Jersey Running Custom'
    },
    {
      id: 13,
      category: 'jersey',
      image: '/img/jersey-13.jpg',
      title: 'Jersey Custom'
    },
    {
      id: 14,
      category: 'jersey',
      image: '/img/jersey-14.jpg',
      title: 'Jersey Custom'
    },
    {
      id: 15,
      category: 'jersey',
      image: '/img/jersey-15.jpg',
      title: 'Jersey Vintage Custom'
    },
    {
      id: 16,
      category: 'jersey',
      image: '/img/jersey-16.jpg',
      title: 'Jersey Vintage Custom'
    },
    {
      id: 17,
      category: 'jersey',
      image: '/img/jersey-17.jpg',
      title: 'Jersey Vintage Custom'
    },
    {
      id: 18,
      category: 'jersey',
      image: '/img/jersey-19.jpg',
      title: 'Jersey Custom'
    },
    {
      id: 19,
      category: 'seragam',
      image: '/img/seragam-1.jpg',
      title: 'Seragam Olahraga Custom'
    },
    {
      id: 20,
      category: 'seragam',
      image: '/img/seragam-2.jpg',
      title: 'Seragam Olahraga Custom'
    },
    {
      id: 21,
      category: 'seragam',
      image: '/img/seragam-3.jpg',
      title: 'Seragam Olahraga Custom'
    },
    {
      id: 22,
      category: 'seragam',
      image: '/img/seragam-4.jpg',
      title: 'Seragam Olahraga Custom'
    },
    {
      id: 23,
      category: 'seragam',
      image: '/img/seragam-5.jpg',
      title: 'Seragam Olahraga Custom'
    },
    {
      id: 24,
      category: 'seragam',
      image: '/img/seragam-6.jpg',
      title: 'Seragam Olahraga Custom'
    },
    {
      id: 25,
      category: 'seragam',
      image: '/img/seragam-8.jpg',
      title: 'Seragam Olahraga Custom'
    },
    {
      id: 26,
      category: 'seragam',
      image: '/img/seragam-9.jpg',
      title: 'Seragam Olahraga Custom'
    },
    {
      id: 27,
      category: 'seragam',
      image: '/img/seragam-12.jpg',
      title: 'Seragam Olahraga Custom'
    },
    {
      id: 28,
      category: 'seragam',
      image: '/img/seragam-14.jpg',
      title: 'Seragam Olahraga Custom'
    },
    {
      id: 29,
      category: 'jaket',
      image: '/img/jaket-1.jpg',
      title: 'Jaket Custom'
    },
    {
      id: 30,
      category: 'jaket',
      image: '/img/jaket-2.jpg',
      title: 'Jaket Custom'
    },
    {
      id: 31,
      category: 'kaos-kaki',
      image: '/img/kaoskaki-1.jpg',
      title: 'Kaos Kaki Custom'
    },
    {
      id: 32,
      category: 'kaos-kaki',
      image: '/img/kaoskaki-2.jpg',
      title: 'Kaos Kaki Custom'
    },
    {
      id: 33,
      category: 'kaos-kaki',
      image: '/img/kaoskaki-3.jpg',
      title: 'Kaos Kaki Custom'
    },
    {
      id: 34,
      category: 'kaos',
      image: '/img/kaos-1.jpg',
      title: 'Kaos Custom'
    },
    {
      id: 35,
      category: 'kaos',
      image: '/img/kaos-2.jpg',
      title: 'Kaos Custom'
    },
    {
      id: 36,
      category: 'kaos',
      image: '/img/kaos-3.jpg',
      title: 'Kaos Custom'
    },
    {
      id: 37,
      category: 'kaos',
      image: '/img/kaos-4.jpg',
      title: 'Kaos Custom'
    },
    {
      id: 38,
      category: 'kaos',
      image: '/img/kaos-5.jpg',
      title: 'Kaos Custom'
    }
  ];

  const filteredProducts = activeFilter === 'all'
    ? products
    : products.filter(product => product.category === activeFilter);

  const handleFilterChange = async (categoryId: string) => {
    if (categoryId === activeFilter) return;

    setIsLoading(true);
    trackGalleryFilter(categoryId);

    // Simulate loading delay for better UX
    await new Promise(resolve => setTimeout(resolve, 300));

    setActiveFilter(categoryId);
    setIsLoading(false);
  };

  return (
    <section id="gallery" className="py-20 bg-slate-800 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Galeri <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Produk</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Lihat koleksi produk berkualitas tinggi yang telah kami buat untuk berbagai kebutuhan
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12" data-aos="fade-up">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => handleFilterChange(category.id)}
              disabled={isLoading}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 text-sm ${activeFilter === category.id
                ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg'
                : 'bg-white/5 backdrop-blur-sm text-gray-300 border border-white/10 hover:bg-white/10 disabled:opacity-50'
                }`}
              aria-label={`Filter produk berdasarkan ${category.label}`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {isLoading ? (
            Array.from({ length: 12 }).map((_, index) => (
              <GalleryItemSkeleton key={index} />
            ))
          ) : (
            filteredProducts.map((product, index) => (
              <div
                key={product.id}
                className="group relative bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                data-aos="fade-up"
                data-aos-delay={index * 50}
                role="article"
                aria-label={`Produk ${product.title}`}
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <div className="p-4 md:p-6">
                  <h3 className="text-white font-semibold text-sm md:text-base mb-2 line-clamp-2">{product.title}</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-xs md:text-sm text-gray-400 capitalize">{product.category.replace('-', ' ')}</span>
                    <button className="text-blue-400 hover:text-blue-300 transition-colors">
                      <Filter className="w-3 h-3 md:w-4 md:h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Show more button */}
        {!isLoading && filteredProducts.length > 8 && (
          <div className="text-center mt-12" data-aos="fade-up">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-full hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105">
              Lihat Lebih Banyak
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;