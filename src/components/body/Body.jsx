import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import "./Body.css"
import { FaCode } from "react-icons/fa6";
import HoverButton from '../../elements/HoverButton';
import GradientText1 from '../../elements/GradientText1';
import GradientText2 from '../../elements/GradientText2';
import ButtonRotatingBackgroundGradient from '../../elements/ButtonRotatingBackgroundGradient ';
import GradientCard from '../../elements/GradientCard';
import PerspectiveCard from '../../elements/PerspectiveCard';
import CodeModal from '../codemodal/CodeModal';
import { componentsCode } from '../../code/componentsCode';

const Body = () => {
  
  const [modalOpen, setModalOpen] = useState(false);
  const [modalCode, setModalCode] = useState("");

  useEffect(() => {
    AOS.init({
      duration: 500,
      easing: 'ease-in-out',
      twi: true,
    });
  }, []);

  // const handleShowCode = (code) => {
  //   setModalCode(code);
  //   setModalOpen(true);
  // };

  const handleShowCode = (componentName) => {
    setModalCode(componentsCode[componentName])
    setModalOpen(true);
  }
  
  
  

  return (
    <main className="min-h-screen w-full flex flex-col pt-14 px-4 md:px-10 scroll-smooth overflow-clip">
      <div className="pb-10">
        <h1 className="text-3xl text-white pl-10">Reusable Components</h1>
      </div>
      <div className="w-full min-h-[80vh] max-w-screen-xl mx-auto overflow-hidden relative left-4">
        <div className="components grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-16 py-4 w-full min-h-0">
          <div className="component-item" data-aos="fade-up">
            <ComponentWrapper onClick={()=>handleShowCode('HoverButton')}><HoverButton label="Hover Me!" /></ComponentWrapper>
          </div>
          <div className="component-item" data-aos="fade-up" data-aos-delay="100">
            <ComponentWrapper onClick={()=>handleShowCode('GradientText1')}><GradientText1 text="Sample Text" /></ComponentWrapper>
          </div>
          <div className="component-item" data-aos="fade-up" data-aos-delay="100">
            <ComponentWrapper onClick={()=>handleShowCode('GradientText2')}><GradientText2 text="Sample Text" /></ComponentWrapper>
          </div>
          <div className="component-item" data-aos="fade-up" data-aos-delay="100">
            <ComponentWrapper onClick={()=>handleShowCode('ButtonRotatingBackgroundGradient')}><ButtonRotatingBackgroundGradient text="Click Me!" /></ComponentWrapper>
          </div>
          <div className="component-item" data-aos="fade-up" data-aos-delay="100">
            <ComponentWrapper onClick={()=>handleShowCode('GradientCard')}><GradientCard> Animated Gradient </GradientCard></ComponentWrapper>
          </div>
          <div className="component-item" data-aos="fade-up" data-aos-delay="100">
            <ComponentWrapper onClick={()=>handleShowCode('PerspectiveCard')}><PerspectiveCard> Hover Me! </PerspectiveCard></ComponentWrapper>
          </div>
        </div>
      </div>

      {modalOpen && (
        <CodeModal code={modalCode} onClose={()=>setModalOpen(false)} />
      )}

    </main>
  );
};

const ComponentWrapper = ({ children, onClick }) => (
  <div className="relative w-full max-w-[250px] h-[250px] bg-[#01050e] cborder rounded-xl shadow-lg flex items-center justify-center">
    <FaCode onClick={onClick} className="absolute top-2 right-2 text-white text-xl cursor-pointer" />
    {children}
  </div>
);

export default Body;
