import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

import GlowButton from '../../elements/GlowButton';
import BlobAnimate from '../../bg-elements/BlobAnimate';
import Illustration from "./../../assets/illustration.jpg"

const HomePage = () => {
  const [showContent, setShowContent] = useState(false);
  const navigate = useNavigate()

  const handleDiscoverClick = () => {
    navigate('/components')
  }

  const handleGitHubClick = () => {
    window.open('https://github.com/dashboard', '_blank')
  }
  

  useEffect(() => {
    AOS.init({
      duration: 500,
      easing: 'ease-in-out',
      once: true,
    });

    // Delay the content mount to ensure AOS is ready
    const timeout = setTimeout(() => {
      setShowContent(true);
      AOS.refresh();
    }, 100); // 100ms delay is usually enough

    return () => clearTimeout(timeout);
  }, []);

  if (!showContent){
    return <div className='min-h-screen w-full' />;
  }

  return (
    <div className='flex flex-col py-60 px-10 items-center w-full min-h-screen scroll-smooth'>
      <div className='flex flex-col md:flex-row justify-around items-center gap-10 w-full'>
        <div data-aos="fade-right" className='flex flex-col justify-start gap-4 text-white max-w-xl'>
          <h1 className='text-6xl text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.6)]'>
            Build Better UIs, Faster
          </h1>
          <p className='text-lg'>
            Browse a growing gallery of reusable,<br />
            animated React components.
          </p>
          <div className='flex gap-6 mt-4'>
            <GlowButton onClick={handleDiscoverClick}>Discover</GlowButton>
            <GlowButton onClick={handleGitHubClick}>GitHub</GlowButton>
          </div>
        </div>
        <div data-aos="fade-left">
            <BlobAnimate size='20rem'/>
            <p className='text-white text-xl'>Some image or illustration here</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;