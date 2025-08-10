export const backgroundsCode = {
    NightSky: `const NightSky = () => {
      return (
        <div className="min-h-screen bg-gradient-to-tr from-[#0f2027] via-[#203a43] to-[#2c5364]"></div>
      );
    };
    
    export default NightSky;`,
    MidnightPurple:`const MidnightPurple = () => {
      return (
        <div className="min-h-screen bg-gradient-to-br from-[#2e003e] via-[#3a015c] to-[#610094]"></div>
      );
    };
    
    export default MidnightPurple;`,
    SunsetFade:`const SunsetFade = () => {
      return (
        <div className="min-h-screen bg-gradient-to-r from-[#ff6a00] to-[#ee0979]"></div>
      );
    };
    
    export default SunsetFade;`,
    OceanBreeze:`const OceanBreeze = () => {
      return (
        <div className="min-h-screen bg-gradient-to-r from-[#00c9ff] to-[#92fe9d]"></div>
      );
    };
    
    export default OceanBreeze;
    `,
    SleekGray:`const SleekGray = () => {
      return (
        <div className="min-h-screen bg-gradient-to-r from-[#232526] to-[#414345]"></div>
      );
    };
    
    export default SleekGray;`,
    TwilightBlue:`const TwilightBlue = () => {
      return (
        <div className="min-h-screen bg-gradient-to-b from-[#141e30] to-[#243b55]"></div>
      );
    };
    
    export default TwilightBlue;`,
    DeepSpace:`const DeepSpace = () => {
      return (
        <div className="min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e]"></div>
      );
    };

    export default DeepSpace;`,
    
    BlobAnimate: `import React from 'react';

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
    <div className={\`relative w-full h-full flex items-center justify-center \${className}\`}>
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


// inside index.css
@layer utilities{
 @keyframes blobMotion {
  0% {
    transform: translate(-50%, -50%) scale(1);
  }
  33% {
    transform: translate(-30%, -70%) scale(1.1);
  }
  66% {
    transform: translate(-70%, -40%) scale(0.9);
  }
  100% {
    transform: translate(-50%, -50%) scale(1);
  }
}

.blob-motion {
  animation: blobMotion 10s infinite;
}
}`,

}