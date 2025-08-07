import React, { useState, useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

import './Backgrounds.css'
import { FaCode } from "react-icons/fa6";

const Backgrounds = () => {
    const [Backgrounds, setBackgrounds] = useState("default")
    const [customStyle, setCustomStyle] = useState({})

    useEffect(() => {
        AOS.init({
          duration: 500,
          easing: 'ease-in-out',
          twi: true,
        });
      }, []);

  return (
    <main className='min-h-screen w-full flex flex-col pt-14 px-4 md:px-10 scroll-smooth overflow-clip'>
        <div className="pb-10">
            <h1 className="text-3xl text-white pl-10">Reusable Backgrounds</h1>
        </div>
        <div className='w-full min-h-[80vh] max-w-screen-xl mx-auto overflow-hidden relative left-4'>
            <div className='components grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-16 py-4 w-full min-h-0'>
                <div className="component-item" data-aos="fade-up">
                    <ComponentWrapper></ComponentWrapper>
                </div>
            </div>
        </div>
    </main>
  )
}

const ComponentWrapper = ({ children, onClick }) => (
  <div className="relative w-full max-w-[250px] h-[250px] bg-[#01050e] cborder rounded-xl shadow-lg flex items-center justify-center">
    <FaCode onClick={onClick} className="absolute top-2 right-2 text-white text-xl cursor-pointer" />
    {children}
  </div>
);

export default Backgrounds
