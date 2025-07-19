import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Send, Loader2, User, Mail, Phone, Package, MessageSquare, Hash } from 'lucide-react';
import { contactFormSchema, ContactFormData } from '../../utils/validation';
import { trackFormSubmission } from '../../utils/analytics';
import { showToast } from '../UI/Toast';

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
    watch
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    mode: 'onChange',
    defaultValues: {
      quantity: 12,
      service: ''
    }
  });

  const watchedValues = watch();

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Track form submission
      trackFormSubmission('contact_form');
      
      // Create WhatsApp message
      const message = `Halo! Saya tertarik dengan layanan Prodib Sportwear.

*Detail Pesanan:*
• Nama: ${data.name}
• Email: ${data.email}
• No. HP: ${data.phone}
• Layanan: ${data.service}
• Jumlah: ${data.quantity} pcs
• Pesan: ${data.message}

Mohon informasi lebih lanjut. Terima kasih!`;

      const whatsappUrl = `https://wa.me/6281273884309?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');
      
      showToast.success('Pesan berhasil dikirim! Anda akan diarahkan ke WhatsApp.');
      reset();
      
    } catch (error) {
      showToast.error('Terjadi kesalahan. Silakan coba lagi.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const services = [
    'Jersey Custom',
    'Jaket Custom',
    'Sweater Custom',
    'Seragam Sekolah',
    'Outfit Skena Pria',
    'Vest Custom',
    'Baju Almamater',
    'Produksi Massal'
  ];

  return (
    <section id="contact" className="py-20 bg-slate-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Konsultasi <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Gratis</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Ceritakan kebutuhan Anda dan dapatkan penawaran terbaik dari tim profesional kami
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <form 
            onSubmit={handleSubmit(onSubmit)}
            className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10"
            data-aos="fade-up"
            noValidate
          >
            <div className="grid md:grid-cols-2 gap-6">
              {/* Name Field */}
              <div>
                <label 
                  htmlFor="name"
                  className="block text-white font-semibold mb-3"
                >
                  Nama Lengkap *
                </label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    {...register('name')}
                    type="text"
                    id="name"
                    placeholder="Masukkan nama lengkap"
                    className={`w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm rounded-xl border text-white placeholder-gray-400 focus:outline-none focus:ring-2 transition-all duration-300 ${
                      errors.name 
                        ? 'border-red-500/50 focus:ring-red-500/50' 
                        : 'border-white/20 focus:ring-blue-500/50'
                    }`}
                    aria-invalid={errors.name ? 'true' : 'false'}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                  />
                </div>
                {errors.name && (
                  <p id="name-error" className="mt-2 text-red-400 text-sm" role="alert">
                    {errors.name.message}
                  </p>
                )}
              </div>

              {/* Email Field */}
              <div>
                <label 
                  htmlFor="email"
                  className="block text-white font-semibold mb-3"
                >
                  Email *
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    {...register('email')}
                    type="email"
                    id="email"
                    placeholder="nama@email.com"
                    className={`w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm rounded-xl border text-white placeholder-gray-400 focus:outline-none focus:ring-2 transition-all duration-300 ${
                      errors.email 
                        ? 'border-red-500/50 focus:ring-red-500/50' 
                        : 'border-white/20 focus:ring-blue-500/50'
                    }`}
                    aria-invalid={errors.email ? 'true' : 'false'}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                  />
                </div>
                {errors.email && (
                  <p id="email-error" className="mt-2 text-red-400 text-sm" role="alert">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Phone Field */}
              <div>
                <label 
                  htmlFor="phone"
                  className="block text-white font-semibold mb-3"
                >
                  No. WhatsApp *
                </label>
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    {...register('phone')}
                    type="tel"
                    id="phone"
                    placeholder="08123456789"
                    className={`w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm rounded-xl border text-white placeholder-gray-400 focus:outline-none focus:ring-2 transition-all duration-300 ${
                      errors.phone 
                        ? 'border-red-500/50 focus:ring-red-500/50' 
                        : 'border-white/20 focus:ring-blue-500/50'
                    }`}
                    aria-invalid={errors.phone ? 'true' : 'false'}
                    aria-describedby={errors.phone ? 'phone-error' : undefined}
                  />
                </div>
                {errors.phone && (
                  <p id="phone-error" className="mt-2 text-red-400 text-sm" role="alert">
                    {errors.phone.message}
                  </p>
                )}
              </div>

              {/* Service Field */}
              <div>
                <label 
                  htmlFor="service"
                  className="block text-white font-semibold mb-3"
                >
                  Jenis Layanan *
                </label>
                <div className="relative">
                  <Package className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <select
                    {...register('service')}
                    id="service"
                    className={`w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm rounded-xl border text-white focus:outline-none focus:ring-2 transition-all duration-300 ${
                      errors.service 
                        ? 'border-red-500/50 focus:ring-red-500/50' 
                        : 'border-white/20 focus:ring-blue-500/50'
                    }`}
                    aria-invalid={errors.service ? 'true' : 'false'}
                    aria-describedby={errors.service ? 'service-error' : undefined}
                  >
                    <option value="">Pilih jenis layanan</option>
                    {services.map((service) => (
                      <option key={service} value={service} className="bg-slate-800">
                        {service}
                      </option>
                    ))}
                  </select>
                </div>
                {errors.service && (
                  <p id="service-error" className="mt-2 text-red-400 text-sm" role="alert">
                    {errors.service.message}
                  </p>
                )}
              </div>

              {/* Quantity Field */}
              <div className="md:col-span-2">
                <label 
                  htmlFor="quantity"
                  className="block text-white font-semibold mb-3"
                >
                  Jumlah Pesanan (pcs) *
                </label>
                <div className="relative">
                  <Hash className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    {...register('quantity', { valueAsNumber: true })}
                    type="number"
                    id="quantity"
                    min="12"
                    max="10000"
                    placeholder="Minimal 12 pcs"
                    className={`w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm rounded-xl border text-white placeholder-gray-400 focus:outline-none focus:ring-2 transition-all duration-300 ${
                      errors.quantity 
                        ? 'border-red-500/50 focus:ring-red-500/50' 
                        : 'border-white/20 focus:ring-blue-500/50'
                    }`}
                    aria-invalid={errors.quantity ? 'true' : 'false'}
                    aria-describedby={errors.quantity ? 'quantity-error' : undefined}
                  />
                </div>
                {errors.quantity && (
                  <p id="quantity-error" className="mt-2 text-red-400 text-sm" role="alert">
                    {errors.quantity.message}
                  </p>
                )}
              </div>

              {/* Message Field */}
              <div className="md:col-span-2">
                <label 
                  htmlFor="message"
                  className="block text-white font-semibold mb-3"
                >
                  Pesan & Detail Pesanan *
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
                  <textarea
                    {...register('message')}
                    id="message"
                    rows={4}
                    placeholder="Ceritakan detail pesanan, warna yang diinginkan, ukuran, deadline, atau pertanyaan lainnya..."
                    className={`w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm rounded-xl border text-white placeholder-gray-400 focus:outline-none focus:ring-2 transition-all duration-300 resize-none ${
                      errors.message 
                        ? 'border-red-500/50 focus:ring-red-500/50' 
                        : 'border-white/20 focus:ring-blue-500/50'
                    }`}
                    aria-invalid={errors.message ? 'true' : 'false'}
                    aria-describedby={errors.message ? 'message-error' : undefined}
                  />
                </div>
                {errors.message && (
                  <p id="message-error" className="mt-2 text-red-400 text-sm" role="alert">
                    {errors.message.message}
                  </p>
                )}
              </div>
            </div>

            {/* Submit Button */}
            <div className="mt-8">
              <button
                type="submit"
                disabled={!isValid || isSubmitting}
                className={`w-full inline-flex items-center justify-center gap-3 px-8 py-4 font-semibold rounded-full transition-all duration-300 ${
                  isValid && !isSubmitting
                    ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 transform hover:scale-105 shadow-lg hover:shadow-xl'
                    : 'bg-gray-600 text-gray-400 cursor-not-allowed'
                }`}
                aria-label={isSubmitting ? 'Mengirim pesan...' : 'Kirim pesan konsultasi'}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Mengirim...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Kirim Konsultasi Gratis
                  </>
                )}
              </button>
            </div>

            {/* Form Info */}
            <div className="mt-6 p-4 bg-blue-500/10 rounded-xl border border-blue-500/20">
              <p className="text-blue-300 text-sm text-center">
                <strong>100% Gratis!</strong> Tidak ada biaya konsultasi. Tim kami akan merespons dalam 5 menit.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;