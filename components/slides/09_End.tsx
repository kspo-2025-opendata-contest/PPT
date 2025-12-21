import React from 'react';
import { motion } from 'framer-motion';
import { SlideProps } from '../../types';

const EndSlide: React.FC<SlideProps> = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center text-center relative z-10 pb-16">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-6xl md:text-8xl font-black mb-12 tracking-tight leading-none">
          <span className="block mb-6">경청해 주셔서</span>
          <span className="block text-white">감사합니다</span>
        </h1>
        <p className="text-3xl text-slate-300 mb-12 font-light">
          숨어있는 재능을 찾아서, <span className="text-brand-400 font-bold">숨인재</span>
        </p>

        <div className="inline-block p-1 rounded-full bg-gradient-to-r from-brand-500 to-blue-500 shadow-lg shadow-brand-500/20">
           <div className="bg-slate-900 rounded-full px-12 py-5 hover:bg-slate-800 transition-colors cursor-pointer">
              <span className="text-white font-mono text-2xl font-bold">Q & A</span>
           </div>
        </div>
      </motion.div>
      
      <div className="absolute bottom-16 text-white text-xl font-bold tracking-[0.2em] uppercase">
        TEAM. 숨어있는 재능을 찾아서
      </div>
    </div>
  );
};

export default EndSlide;