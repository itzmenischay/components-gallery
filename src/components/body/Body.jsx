import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCode } from "react-icons/fa6";
import { AnimatePresence } from 'framer-motion';

import HoverButton from '../../elements/HoverButton';
import GradientText1 from '../../elements/GradientText1';
import GradientText2 from '../../elements/GradientText2';
import ButtonRotatingBackgroundGradient from '../../elements/ButtonRotatingBackgroundGradient';
import GradientCard from '../../elements/GradientCard';
import PerspectiveCard from '../../elements/PerspectiveCard';
import CodeModal from '../codemodal/CodeModal';
import { componentsCode } from '../../code/componentsCode';
import RotatingGradientInput from '../../elements/RotatingGradientInput';
import InputGradientBorder from '../../elements/InputGradientBorder';
import CursorSpotlightInput from '../../elements/CursorSpotlightInput';

const Body = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalCode, setModalCode] = useState("");
  const [input, setinput] = useState("");

  const handleChange = (e) => {
    setinput(e.target.value);
  }

  const handleShowCode = (componentName) => {
    setModalCode(componentsCode[componentName]);
    setModalOpen(true);
  };

  const componentsList = [
    { component: <HoverButton label="Hover Me!" />, name: 'HoverButton' },
    { component: <GradientText1 text="Gradient Text" />, name: 'GradientText1' },
    { component: <GradientText2 text="Gradient Shift" />, name: 'GradientText2' },
    { component: <ButtonRotatingBackgroundGradient text="Click Me!" />, name: 'ButtonRotatingBackgroundGradient' },
    { component: <GradientCard>Animated Gradient</GradientCard>, name: 'GradientCard' },
    { component: <PerspectiveCard>Hover Me!</PerspectiveCard>, name: 'PerspectiveCard' },
    { component: <RotatingGradientInput/>, name: 'RotatingGradientInput' },
    { component: <InputGradientBorder/>, name: 'InputGradientBorder'},
    { component: <CursorSpotlightInput/>, name: 'CursorSpotlightInput' },
  ];

  return (
    <main className="min-h-screen w-full flex flex-col pt-14 px-4 md:px-10 scroll-smooth overflow-x-clip">
      <div className="pb-10">
        <h1 className="text-3xl text-white pl-10">Reusable Components</h1>
      </div>

      <div className="w-full max-w-screen-xl mx-auto relative left-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 py-4 w-full min-h-screen">
          {componentsList.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{
                opacity: 1,
                scale: 1,
                transition: { duration: 0.5 }
              }}
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
  <div style={{ border: "2px solid #182130" }} className="p-10 relative w-full max-w-[350px] h-[350px] bg-[#01050e] rounded-2xl overflow-hidden shadow-lg flex items-center justify-center">
    <FaCode onClick={onClick} className="absolute top-3 right-3 text-white text-xl cursor-pointer"/>
    {children}
  </div>
);

export default Body;
