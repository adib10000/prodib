import React from 'react';

interface SkeletonProps {
  className?: string;
  variant?: 'text' | 'rectangular' | 'circular';
  width?: string | number;
  height?: string | number;
  lines?: number;
}

const Skeleton: React.FC<SkeletonProps> = ({
  className = '',
  variant = 'text',
  width = '100%',
  height = variant === 'text' ? '1rem' : '200px',
  lines = 1
}) => {
  const baseClasses = 'animate-pulse bg-gradient-to-r from-slate-700 via-slate-600 to-slate-700 bg-[length:200%_100%]';
  
  const variantClasses = {
    text: 'rounded',
    rectangular: 'rounded-lg',
    circular: 'rounded-full'
  };

  if (variant === 'text' && lines > 1) {
    return (
      <div className={`space-y-2 ${className}`}>
        {Array.from({ length: lines }).map((_, index) => (
          <div
            key={index}
            className={`${baseClasses} ${variantClasses[variant]}`}
            style={{
              width: index === lines - 1 ? '75%' : width,
              height
            }}
          />
        ))}
      </div>
    );
  }

  return (
    <div
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      style={{ width, height }}
    />
  );
};

// Predefined skeleton components
export const ServiceCardSkeleton = () => (
  <div className="p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
    <Skeleton variant="rectangular" width="4rem" height="4rem" className="mb-6" />
    <Skeleton variant="text" width="60%" height="1.5rem" className="mb-4" />
    <Skeleton variant="text" lines={3} className="mb-6" />
    <div className="space-y-2 mb-8">
      <Skeleton variant="text" width="40%" />
      <Skeleton variant="text" width="50%" />
      <Skeleton variant="text" width="45%" />
    </div>
    <Skeleton variant="rectangular" width="8rem" height="3rem" />
  </div>
);

export const GalleryItemSkeleton = () => (
  <div className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10">
    <Skeleton variant="rectangular" className="aspect-square" />
    <div className="p-6">
      <Skeleton variant="text" width="70%" height="1.25rem" className="mb-2" />
      <div className="flex items-center justify-between">
        <Skeleton variant="text" width="30%" />
        <Skeleton variant="circular" width="1rem" height="1rem" />
      </div>
    </div>
  </div>
);

export const TestimonialSkeleton = () => (
  <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/10">
    <Skeleton variant="rectangular" width="3rem" height="3rem" className="mb-6" />
    <div className="grid md:grid-cols-3 gap-8 items-center">
      <div className="md:col-span-2">
        <Skeleton variant="text" lines={4} className="mb-6" />
        <div className="flex items-center gap-4 mb-4">
          <Skeleton variant="circular" width="4rem" height="4rem" />
          <div>
            <Skeleton variant="text" width="8rem" height="1.25rem" className="mb-2" />
            <Skeleton variant="text" width="6rem" />
          </div>
        </div>
        <div className="flex gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Skeleton key={i} variant="rectangular" width="1.25rem" height="1.25rem" />
          ))}
        </div>
      </div>
      <div className="flex justify-center">
        <Skeleton variant="circular" width="8rem" height="8rem" />
      </div>
    </div>
  </div>
);

export default Skeleton;