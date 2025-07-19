# Prodib Sportwear - Landing Page

![Prodib Sportwear](https://images.pexels.com/photos/8542871/pexels-photo-8542871.jpeg?auto=compress&cs=tinysrgb&w=800)

## 📋 Deskripsi Proyek

Landing page modern dan responsif untuk **Prodib Sportwear**, spesialis produksi jersey custom, kaos kaki, dan pakaian olahraga berkualitas tinggi. Website ini dirancang dengan pendekatan mobile-first dan menggunakan teknologi terdepan untuk memberikan pengalaman pengguna yang optimal.

## 🎯 Fitur Utama

### ✨ Design & UI/UX
- **Modern Glassmorphism Design** - Efek kaca transparan dengan backdrop blur
- **Responsive Layout** - Optimized untuk semua ukuran layar (mobile, tablet, desktop)
- **Smooth Animations** - Transisi halus dan micro-interactions
- **Clean Visual Hierarchy** - Tidak ada komponen yang tumpang tindih
- **Premium Color Palette** - Konsisten dengan brand identity

### 🛍️ Layanan Produk
- **Jersey Custom** - Desain jersey olahraga sesuai keinginan
- **Produksi Massal** - Layanan produksi dalam jumlah besar
- **Custom Design** - Tim desainer profesional
- **Sewa Jersey & Kaos Kaki** - Layanan rental dan produksi kaos kaki

### 🧵 Material Berkualitas
- **Dry Fit Premium** - Teknologi moisture-wicking
- **Polyester Mesh** - Ringan dengan sirkulasi udara optimal
- **Cotton Combed** - Katun berkualitas tinggi
- **Spandex Blend** - Fleksibilitas dan kenyamanan maksimal

### 📱 Fitur Interaktif
- **Price Calculator** - Kalkulator harga real-time
- **Contact Form** - Form konsultasi dengan validasi
- **Gallery Filter** - Filter produk berdasarkan kategori
- **WhatsApp Integration** - Integrasi langsung ke WhatsApp
- **Social Media Links** - Instagram dan Shopee

## 🛠️ Teknologi yang Digunakan

### Frontend Framework
- **React 18.3.1** - Library JavaScript untuk UI
- **TypeScript** - Type safety dan better development experience
- **Vite** - Build tool yang cepat dan modern

### Styling & Design
- **Tailwind CSS 3.4.1** - Utility-first CSS framework
- **Lucide React** - Icon library modern
- **AOS (Animate On Scroll)** - Scroll animations
- **Framer Motion** - Advanced animations

### Form & Validation
- **React Hook Form 7.60.0** - Form management
- **Zod 4.0.5** - Schema validation
- **@hookform/resolvers** - Zod integration

### UI Components
- **React Hot Toast** - Toast notifications
- **React Error Boundary** - Error handling
- **React Helmet Async** - SEO meta tags

### Development Tools
- **ESLint** - Code linting
- **TypeScript ESLint** - TypeScript linting
- **Autoprefixer** - CSS vendor prefixes
- **PostCSS** - CSS processing

## 📁 Struktur Proyek

```
src/
├── components/
│   ├── Forms/
│   │   └── ContactForm.tsx          # Form konsultasi dengan validasi
│   ├── SEO/
│   │   ├── MetaTags.tsx            # Meta tags untuk SEO
│   │   └── StructuredData.tsx      # Schema.org structured data
│   ├── UI/
│   │   ├── ErrorBoundary.tsx       # Error boundary component
│   │   ├── LoadingSkeleton.tsx     # Loading skeleton components
│   │   └── Toast.tsx               # Toast notification system
│   ├── Header.tsx                  # Navigation header
│   ├── Hero.tsx                    # Hero section
│   ├── Services.tsx                # Layanan produk
│   ├── Materials.tsx               # Section material berkualitas
│   ├── Gallery.tsx                 # Galeri produk
│   ├── WhyChooseUs.tsx            # Keunggulan perusahaan
│   ├── HowToOrder.tsx             # Cara pemesanan
│   ├── Testimonials.tsx           # Testimoni pelanggan
│   ├── PriceCalculator.tsx        # Kalkulator harga
│   ├── FAQ.tsx                    # Frequently Asked Questions
│   ├── CTA.tsx                    # Call to action
│   ├── Footer.tsx                 # Footer
│   └── FloatingWhatsApp.tsx       # Floating WhatsApp button
├── utils/
│   ├── analytics.ts               # Google Analytics tracking
│   └── validation.ts              # Form validation schemas
├── types/
│   └── index.ts                   # TypeScript type definitions
├── App.tsx                        # Main app component
├── main.tsx                       # Entry point
└── index.css                      # Global styles
```

## 🚀 Instalasi dan Setup

### Prerequisites
- Node.js 18+ 
- npm atau yarn

### Langkah Instalasi

1. **Clone repository**
```bash
git clone <repository-url>
cd prodib-sportwear
```

2. **Install dependencies**
```bash
npm install
```

3. **Jalankan development server**
```bash
npm run dev
```

4. **Build untuk production**
```bash
npm run build
```

5. **Preview build**
```bash
npm run preview
```

## 📱 Informasi Kontak

### Prodib Sportwear
- **WhatsApp:** 081273884309
- **Instagram:** @prodib_sportwear
- **Shopee:** prodib_sportswear
- **Alamat:** Bungo, Komplex Sapta Marga No 101
- **Email:** prodibsportwear@gmail.com

## 🎨 Design System

### Color Palette
```css
/* Primary Colors */
--slate-900: #0f172a    /* Background utama */
--slate-800: #1e293b    /* Background sekunder */
--blue-600: #2563eb     /* Primary brand color */
--blue-400: #60a5fa     /* Accent color */

/* Glassmorphism */
--glass-bg: rgba(255, 255, 255, 0.05)
--glass-border: rgba(255, 255, 255, 0.1)
--backdrop-blur: blur(12px)
```

### Typography
```css
/* Font Weights */
--font-normal: 400
--font-semibold: 600
--font-bold: 700

/* Font Sizes */
--text-sm: 0.875rem
--text-base: 1rem
--text-lg: 1.125rem
--text-xl: 1.25rem
--text-2xl: 1.5rem
--text-4xl: 2.25rem
--text-5xl: 3rem
```

### Spacing System
```css
/* 8px Grid System */
--space-1: 0.25rem    /* 4px */
--space-2: 0.5rem     /* 8px */
--space-4: 1rem       /* 16px */
--space-6: 1.5rem     /* 24px */
--space-8: 2rem       /* 32px */
--space-12: 3rem      /* 48px */
--space-16: 4rem      /* 64px */
--space-20: 5rem      /* 80px */
```

## 📊 SEO & Analytics

### Meta Tags
- **Title:** Prodib Sportwear - Produksi Jersey Custom & Kaos Kaki Berkualitas Premium
- **Description:** Spesialis produksi jersey custom, kaos kaki, dan pakaian olahraga berkualitas tinggi
- **Keywords:** jersey custom bungo, produksi jersey, kaos kaki custom, sewa jersey

### Structured Data
- **Local Business Schema** - Informasi bisnis lokal
- **Product Schema** - Detail produk dan layanan
- **Review Schema** - Rating dan testimoni

### Analytics Events
- WhatsApp click tracking
- Form submission tracking
- Price calculation tracking
- Gallery filter tracking

## 🔧 Konfigurasi

### Environment Variables
```env
# Google Analytics (opsional)
VITE_GA_MEASUREMENT_ID=your_ga_id

# API URLs (jika diperlukan)
VITE_API_URL=your_api_url
```

### Tailwind Configuration
```javascript
// tailwind.config.js
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      // Custom configurations
    },
  },
  plugins: [],
}
```

## 📱 Responsive Breakpoints

```css
/* Mobile First Approach */
sm: 640px    /* Small devices */
md: 768px    /* Medium devices */
lg: 1024px   /* Large devices */
xl: 1280px   /* Extra large devices */
2xl: 1536px  /* 2X large devices */
```

## 🧪 Testing

### Manual Testing Checklist
- [ ] Responsive design di semua breakpoints
- [ ] Form validation berfungsi dengan benar
- [ ] WhatsApp integration working
- [ ] Smooth scrolling navigation
- [ ] Image loading optimization
- [ ] Accessibility compliance

### Performance Optimization
- **Image Optimization** - Menggunakan format WebP dan lazy loading
- **Code Splitting** - Dynamic imports untuk komponen besar
- **Bundle Optimization** - Tree shaking dan minification
- **Caching Strategy** - Browser caching untuk assets

## 🚀 Deployment

### Build Commands
```bash
# Development
npm run dev

# Production build
npm run build

# Preview production build
npm run preview

# Linting
npm run lint
```

### Deployment Platforms
- **Netlify** - Recommended untuk static sites
- **Vercel** - Excellent untuk React applications
- **GitHub Pages** - Gratis untuk open source projects

## 🔄 Future Enhancements

### Phase 1 - Smart Ordering System
- [ ] Multi-step order form dengan progress indicator
- [ ] Order tracking dashboard
- [ ] Automated quotation generator
- [ ] Bulk order management

### Phase 2 - Interactive Product Customizer
- [ ] 3D product viewer
- [ ] Real-time color picker
- [ ] Logo placement tool
- [ ] Size guide interactive

### Phase 3 - Community Features
- [ ] Customer gallery wall
- [ ] Review system dengan media
- [ ] Design contest platform
- [ ] Referral program

## 🤝 Contributing

1. Fork the project
2. Create feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Team

- **Frontend Developer** - UI/UX Implementation
- **Designer** - Visual Design & Branding
- **Content Writer** - Copy & SEO Content

## 📞 Support

Untuk pertanyaan teknis atau support, hubungi:
- **Email:** support@prodibsportwear.com
- **WhatsApp:** 081273884309

---

**© 2024 Prodib Sportwear. All rights reserved.**