import React from 'react';

const BlobAnimate = ({
  blobs = [
    { color: '#ff8d37', opacity: 0.4, delay: '0s' },
    { color: '#ff08ef', opacity: 0.3, delay: '2s' },
    { color: '#7300ff', opacity: 0.3, delay: '4s' },
  ],
  size = '18rem',
  className = '',
}) => {
  return (
    <div className={`relative w-full h-full flex items-center justify-center ${className}`}>
      {blobs.map((blob, index) => (
        <div
          key={index}
          className="absolute rounded-full mix-blend-screen blur-2xl blob-motion"
          style={{
            backgroundColor: blob.color,
            opacity: blob.opacity,
            width: size,
            height: size,
            animationDelay: blob.delay,
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        />
      ))}
    </div>
  );
};

export default BlobAnimate;
