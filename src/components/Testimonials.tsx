import React, { useState, useEffect } from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const testimonials = [
    {
      name: "Ahmad Rizki",
      role: "Ketua Tim Futsal",
      rating: 5,
      comment: "Kualitas jersey yang sangat memuaskan! Desainnya sesuai dengan keinginan tim dan bahan yang digunakan sangat nyaman. Pelayanan juga sangat responsif.",
      image: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      name: "Sari Dewi",
      role: "Event Organizer",
      rating: 5,
      comment: "Sudah beberapa kali order untuk berbagai event. Selalu puas dengan hasil dan ketepatan waktu. Harga juga sangat kompetitif untuk kualitas premium.",
      image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      name: "Budi Santoso",
      role: "Kepala Sekolah",
      rating: 5,
      comment: "Seragam sekolah yang dipesan sangat berkualitas. Anak-anak merasa nyaman memakainya. Tim customer service juga sangat membantu dalam proses pemesanan.",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      name: "Lisa Permata",
      role: "Owner Brand Fashion",
      rating: 5,
      comment: "Kerjasama yang sangat baik untuk produksi massal. Kualitas konsisten dan pengiriman tepat waktu. Highly recommended!",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150"
    }
  ];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [testimonials.length]);
  
  return (
    <section id="testimonials" className="py-20 bg-slate-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Testimoni <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Pelanggan</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Kepuasan pelanggan adalah prioritas utama kami
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {/* Main Testimonial */}
          <div className="relative bg-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/10 mb-8" data-aos="fade-up">
            <Quote className="w-12 h-12 text-blue-400 mb-6" />
            
            <div className="grid md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-2">
                <p className="text-lg md:text-xl text-gray-300 mb-6 leading-relaxed">
                  "{testimonials[currentIndex].comment}"
                </p>
                
                <div className="flex items-center gap-4 mb-4">
                  <img 
                    src={testimonials[currentIndex].image} 
                    alt={testimonials[currentIndex].name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-blue-400"
                  />
                  <div>
                    <h4 className="text-white font-semibold text-lg">{testimonials[currentIndex].name}</h4>
                    <p className="text-gray-400">{testimonials[currentIndex].role}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-1">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
              
              <div className="flex justify-center">
                <div className="w-32 h-32 bg-gradient-to-r from-blue-600/20 to-blue-700/20 rounded-full flex items-center justify-center">
                  <img 
                    src={testimonials[currentIndex].image} 
                    alt={testimonials[currentIndex].name}
                    className="w-24 h-24 rounded-full object-cover border-2 border-blue-400"
                  />
                </div>
              </div>
            </div>
          </div>
          
          {/* Pagination */}
          <div className="flex justify-center gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-blue-400' : 'bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;