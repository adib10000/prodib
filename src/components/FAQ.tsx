import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  
  const faqs = [
    {
      question: "Berapa minimal order untuk produksi custom?",
      answer: "Tidak ada minimal order untuk produksi custom. Ini memungkinkan kami memberikan harga yang lebih kompetitif dan kualitas yang konsisten."
    },
    {
      question: "Berapa lama waktu pengerjaan pesanan?",
      answer: "Waktu pengerjaan standar adalah 4-10 hari kerja tergantung jumlah dan kompleksitas pesanan. Untuk pesanan urgent, tersedia layanan express 1-3 hari dengan biaya tambahan."
    },
    {
      question: "Apakah bisa melihat contoh bahan sebelum order?",
      answer: "Tentu saja! Kami menyediakan sample bahan yang bisa dikirim ke alamat Anda. Hubungi nomor WhatsApp kami untuk request sample bahan."
    },
    {
      question: "Bagaimana sistem pembayaran?",
      answer: "Sistem pembayaran kami adalah DP 50% setelah desain disetujui, dan pelunasan 50% sebelum pengiriman. Kami menerima transfer bank dan e-wallet."
    },
    {
      question: "Apakah ada garansi untuk produk?",
      answer: "Ya, kami memberikan garansi kualitas produk. Jika ada kerusakan atau cacat produksi, kami akan replace atau refund sesuai kebijakan garansi."
    },
    {
      question: "Bisa kirim ke seluruh Indonesia?",
      answer: "Ya, kami melayani pengiriman ke seluruh Indonesia melalui JNE, J&T, dan ekspedisi lainnya. Ongkos kirim akan disesuaikan dengan lokasi tujuan."
    }
  ];
  
  return (
    <section className="py-20 bg-slate-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Questions</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Temukan jawaban untuk pertanyaan yang sering diajukan
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-white/10 transition-colors duration-300"
                >
                  <h3 className="text-lg font-semibold text-white pr-4">{faq.question}</h3>
                  {openIndex === index ? (
                    <ChevronUp className="w-6 h-6 text-blue-400 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-blue-400 flex-shrink-0" />
                  )}
                </button>
                
                {openIndex === index && (
                  <div className="px-8 pb-6">
                    <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;