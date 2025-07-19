import React from 'react';
import { Helmet } from 'react-helmet-async';

interface MetaTagsProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

const MetaTags: React.FC<MetaTagsProps> = ({
  title = "Prodib Sportwear - Produksi Jersey Custom & Kaos Kaki Berkualitas Premium",
  description = "Spesialis produksi jersey custom, kaos kaki, dan pakaian olahraga berkualitas tinggi. Melayani sewa jersey, jaket, sweater, seragam dengan harga terjangkau di Bungo.",
  keywords = "jersey custom bungo, produksi jersey, kaos kaki custom, sewa jersey, jaket custom, sweater custom, seragam olahraga, prodib sportwear",
  image = "https://prodibsportwear.com/og-image.jpg",
  url = "https://prodibsportwear.com",
  type = "website"
}) => {
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Prodib Sportwear" />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      <link rel="canonical" href={url} />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Prodib Sportwear" />
      <meta property="og:locale" content="id_ID" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:site" content="@prodib_sportwear" />
      <meta name="twitter:creator" content="@prodib_sportwear" />
      
      {/* Additional SEO Meta Tags */}
      <meta name="theme-color" content="#1e293b" />
      <meta name="msapplication-TileColor" content="#1e293b" />
      <meta name="application-name" content="Prodib Sportwear" />
      <meta name="apple-mobile-web-app-title" content="Prodib Sportwear" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      
      {/* Geo Meta Tags */}
      <meta name="geo.region" content="ID-JA" />
      <meta name="geo.placename" content="Bungo" />
      <meta name="geo.position" content="-1.5729;102.1353" />
      <meta name="ICBM" content="-1.5729, 102.1353" />
      
      {/* Business Meta Tags */}
      <meta name="business:contact_data:street_address" content="Komplex Sapta Marga No 101" />
      <meta name="business:contact_data:locality" content="Bungo" />
      <meta name="business:contact_data:region" content="Jambi" />
      <meta name="business:contact_data:postal_code" content="37216" />
      <meta name="business:contact_data:country_name" content="Indonesia" />
      <meta name="business:contact_data:phone_number" content="081273884309" />
      <meta name="business:contact_data:email" content="prodibsportwear@gmail.com" />
    </Helmet>
  );
};

export default MetaTags;