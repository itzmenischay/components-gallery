import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCode } from "react-icons/fa6";

import CodeModal from '../codemodal/CodeModal';
import BlobAnimate from '../../bg-elements/BlobAnimate';
import NightSky from '../../bg-elements/NightSky';
import MidnightPurple from '../../bg-elements/MidnightPurple';
import SunsetFade from '../../bg-elements/SunsetFade';
import OceanBreeze from '../../bg-elements/OceanBreeze';
import SleekGray from '../../bg-elements/SleekGray';
import TwilightBlue from '../../bg-elements/TwilightBlue';
import DeepSpace from '../../bg-elements/DeepSpace';
import { backgroundsCode } from '../../code/backgroundsCode';

const animationVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    transition: { duration: 0.5 }
  },
};

const Backgrounds = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalCode, setModalCode] = useState("");

  const handleShowCode = (componentName) => {
    setModalCode(backgroundsCode[componentName]);
    setModalOpen(true);
  };

  const backgroundsList = [
    { component: <BlobAnimate size="8rem" />, name: 'BlobAnimate' },
    { component: <NightSky />, name: 'NightSky' },
    { component: <MidnightPurple />, name: 'MidnightPurple' },
    { component: <SunsetFade />, name: 'SunsetFade' },
    { component: <OceanBreeze />, name: 'OceanBreeze' },
    { component: <SleekGray />, name: 'SleekGray' },
    { component: <TwilightBlue />, name: 'TwilightBlue' },
    { component: <DeepSpace />, name: 'DeepSpace' },
  ];

  return (
    <main className="min-h-screen w-full flex flex-col pt-14 px-4 md:px-10 scroll-smooth overflow-x-clip">
      <div className="pb-10">
        <h1 className="text-3xl text-white pl-10">Reusable Backgrounds</h1>
      </div>

      <div className="w-full max-w-screen-xl mx-auto relative left-4">
        <div className="components grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 py-4 w-full min-h-screen">
          {backgroundsList.map((item, index) => (
            <motion.div
              key={index}
              variants={animationVariants}
              initial="hidden"
              whileInView="visible"
              transition={{ delay: index * 0.1 }}
              viewport={{ once: false, amount: 0.4 }}
            >
              <ComponentWrapper onClick={() => handleShowCode(item.name)}>
                {item.component}
              </ComponentWrapper>
            </motion.div>
          ))}
        </div>
      </div>
      <AnimatePresence>
        {modalOpen && (
          <CodeModal code={modalCode} onClose={() => setModalOpen(false)} />
        )}
      </AnimatePresence>
    </main>
  );
};

const ComponentWrapper = ({ children, onClick }) => (
  <div style={{ border: "2px solid #182130" }} className="relative w-full max-w-[350px] h-[350px] rounded-2xl shadow-lg overflow-hidden flex items-center justify-center">
    <FaCode onClick={onClick} className="absolute top-3 right-3 text-white text-xl cursor-pointer z-10" />
    <div className="w-full h-full">
      {children}
    </div>
  </div>
);

export default Backgrounds;
