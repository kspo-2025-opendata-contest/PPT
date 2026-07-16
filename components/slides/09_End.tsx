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
        className="flex flex-col items-center"
      >
        <h1 className="text-6xl md:text-7xl font-black mb-8 tracking-tight leading-none">
          <span className="block mb-5">경청해 주셔서</span>
          <span className="block text-white">감사합니다</span>
        </h1>
        <p className="text-2xl md:text-3xl text-slate-300 mb-10 font-light">
          숨어있는 재능을 찾아서, <span className="text-brand-400 font-bold">숨인재</span>
        </p>

        {/* QR + Q&A */}
        <div className="flex items-center justify-center gap-8">
          {/* 배포 서비스 QR */}
          <div className="flex items-center gap-4 bg-white rounded-2xl p-4 shadow-xl shadow-black/30">
            <img src="/qr_service.png" alt="숨인재 서비스 QR" className="w-32 h-32 rounded-md" />
            <div className="text-left pr-2" style={{ wordBreak: 'keep-all' }}>
              <p className="text-brand-600 font-black text-lg leading-tight">지금 바로<br/>체험해 보세요</p>
              <p className="text-slate-400 font-mono text-xs mt-2 leading-tight">hidden-talent-<br/>web.onrender.com</p>
            </div>
          </div>

          {/* Q&A pill */}
          <div className="inline-block p-1 rounded-full bg-gradient-to-r from-brand-500 to-blue-500 shadow-lg shadow-brand-500/20">
            <div className="bg-slate-900 rounded-full px-12 py-8 hover:bg-slate-800 transition-colors">
              <span className="text-white font-mono text-3xl font-bold">Q &amp; A</span>
            </div>
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
