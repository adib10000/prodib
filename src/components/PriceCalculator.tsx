import React, { useState } from 'react';
import { Calculator, MessageCircle } from 'lucide-react';
import { trackPriceCalculation, trackWhatsAppClick } from '../utils/analytics';

const PriceCalculator = () => {
  const [product, setProduct] = useState('jersey');
  const [quantity, setQuantity] = useState(12);
  const [material, setMaterial] = useState('premium');
  
  const prices = {
    jersey: { premium: 85000, standard: 65000 },
    jaket: { premium: 150000, standard: 120000 },
    sweater: { premium: 120000, standard: 95000 },
    seragam: { premium: 95000, standard: 75000 }
  };
  
  const discounts = {
    12: 0,
    25: 0.05,
    50: 0.10,
    100: 0.15,
    250: 0.20
  };
  
  const getDiscount = (qty: number) => {
    if (qty >= 250) return 0.20;
    if (qty >= 100) return 0.15;
    if (qty >= 50) return 0.10;
    if (qty >= 25) return 0.05;
    return 0;
  };
  
  const basePrice = prices[product as keyof typeof prices][material as keyof typeof prices.jersey];
  const discount = getDiscount(quantity);
  const totalPrice = basePrice * quantity * (1 - discount);

  const handleCalculation = (newProduct?: string, newQuantity?: number, newMaterial?: string) => {
    const productToTrack = newProduct || product;
    const quantityToTrack = newQuantity || quantity;
    
    trackPriceCalculation(productToTrack, quantityToTrack);
  };

  const handleWhatsAppClick = () => {
    trackWhatsAppClick('price_calculator');
  };
  
  return (
    <section className="py-20 bg-slate-800 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Kalkulator <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Harga</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Hitung estimasi harga untuk kebutuhan produksi Anda
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Calculator Form */}
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10" data-aos="fade-right">
              <div className="flex items-center gap-3 mb-8">
                <Calculator className="w-8 h-8 text-blue-400" />
                <h3 className="text-2xl font-bold text-white">Kalkulator Harga</h3>
              </div>
              
              <div className="space-y-6">
                {/* Product Selection */}
                <div>
                  <label className="block text-white font-semibold mb-3">Jenis Produk</label>
                  <select 
                    value={product} 
                    onChange={(e) => {
                      setProduct(e.target.value);
                      handleCalculation(e.target.value);
                    }}
                    className="w-full p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    aria-label="Pilih jenis produk"
                  >
                    <option value="jersey">Jersey</option>
                    <option value="jaket">Jaket</option>
                    <option value="sweater">Sweater</option>
                    <option value="seragam">Seragam</option>
                  </select>
                </div>
                
                {/* Quantity */}
                <div>
                  <label className="block text-white font-semibold mb-3">Jumlah (pcs)</label>
                  <input 
                    type="number" 
                    value={quantity} 
                    onChange={(e) => {
                      const newQuantity = Number(e.target.value);
                      setQuantity(newQuantity);
                      handleCalculation(undefined, newQuantity);
                    }}
                    min="12"
                    className="w-full p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    aria-label="Masukkan jumlah pesanan"
                  />
                </div>
                
                {/* Material */}
                <div>
                  <label className="block text-white font-semibold mb-3">Kualitas Bahan</label>
                  <select 
                    value={material} 
                    onChange={(e) => {
                      setMaterial(e.target.value);
                      handleCalculation(undefined, undefined, e.target.value);
                    }}
                    className="w-full p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    aria-label="Pilih kualitas bahan"
                  >
                    <option value="premium">Premium</option>
                    <option value="standard">Standard</option>
                  </select>
                </div>
              </div>
            </div>
            
            {/* Price Result */}
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10" data-aos="fade-left">
              <h3 className="text-2xl font-bold text-white mb-8">Estimasi Harga</h3>
              
              <div className="space-y-6">
                <div className="flex justify-between items-center py-3 border-b border-white/10">
                  <span className="text-gray-400">Harga Satuan</span>
                  <span className="text-white font-semibold">Rp {basePrice.toLocaleString()}</span>
                </div>
                
                <div className="flex justify-between items-center py-3 border-b border-white/10">
                  <span className="text-gray-400">Jumlah</span>
                  <span className="text-white font-semibold">{quantity} pcs</span>
                </div>
                
                <div className="flex justify-between items-center py-3 border-b border-white/10">
                  <span className="text-gray-400">Diskon</span>
                  <span className="text-green-400 font-semibold">{(discount * 100).toFixed(0)}%</span>
                </div>
                
                <div className="flex justify-between items-center py-3 text-xl font-bold">
                  <span className="text-white">Total</span>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                    Rp {totalPrice.toLocaleString()}
                  </span>
                </div>
                
                <div className="bg-blue-500/20 rounded-xl p-4 border border-blue-500/30">
                  <p className="text-blue-300 text-sm">
                    * Harga sudah termasuk desain gratis dan dapat berubah sesuai kompleksitas pesanan
                  </p>
                </div>
                
                <a 
                  href={`https://wa.me/6281273884309?text=Halo, saya tertarik dengan ${product} sebanyak ${quantity} pcs dengan estimasi harga Rp ${totalPrice.toLocaleString()}`}
                  target="_blank" 
                  rel="noopener noreferrer"
                  onClick={handleWhatsAppClick}
                  className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-full hover:from-blue-700 hover:to-blue-800 transition-all duration-300"
                  aria-label={`Pesan ${product} sebanyak ${quantity} pcs dengan harga ${totalPrice.toLocaleString()}`}
                >
                  <MessageCircle className="w-5 h-5" />
                  Pesan Sekarang
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PriceCalculator;