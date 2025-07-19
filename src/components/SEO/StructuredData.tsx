import React from 'react';

const StructuredData = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Prodib Sportwear - Produksi Jersey Custom & Kaos Kaki",
    "description": "Spesialis produksi jersey custom, kaos kaki, dan pakaian olahraga berkualitas tinggi. Melayani sewa jersey, jaket, sweater, seragam dengan harga terjangkau.",
    "url": "https://prodibsportwear.com",
    "telephone": "081273884309",
    "email": "prodibsportwear@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Komplex Sapta Marga No 101",
      "addressLocality": "Bungo",
      "addressRegion": "Jambi",
      "postalCode": "37216",
      "addressCountry": "ID"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "-1.5729",
      "longitude": "102.1353"
    },
    "openingHours": "Mo-Su 08:00-22:00",
    "priceRange": "$$",
    "image": "https://prodibsportwear.com/logo.jpg",
    "logo": "https://prodibsportwear.com/logo.jpg",
    "sameAs": [
      "https://www.instagram.com/prodib_sportwear",
      "https://shopee.co.id/prodib_sportswear",
      "https://wa.me/6281273884309"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Layanan Produksi Jersey Custom & Kaos Kaki",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Jersey Custom",
            "description": "Produksi jersey olahraga custom dengan desain sesuai keinginan dan sewa jersey"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Kaos Kaki Custom",
            "description": "Produksi kaos kaki olahraga custom dengan kualitas premium"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Jaket & Sweater Custom",
            "description": "Produksi jaket dan sweater custom dengan berbagai model dan bahan"
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "150",
      "bestRating": "5",
      "worstRating": "1"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
};

export default StructuredData;