import React from 'react';
import { motion } from 'framer-motion';
import { ChatDotsFill } from 'react-bootstrap-icons';

const QADivider: React.FC = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center text-center px-8 relative">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] bg-brand-500 blur-[150px] opacity-15 rounded-full" />
      </div>

      <div className="relative z-10 flex flex-col items-center">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="w-20 h-20 rounded-3xl bg-brand-500/15 border border-brand-500/30 flex items-center justify-center mb-8"
        >
          <ChatDotsFill className="text-brand-400" size={40} />
        </motion.div>

        <motion.p
          initial={{ y: 15, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.15, duration: 0.5 }}
          className="text-brand-300 font-bold tracking-[0.3em] uppercase mb-4 text-lg"
        >
          Appendix
        </motion.p>

        <motion.h1
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.25, duration: 0.5 }}
          className="text-6xl md:text-7xl font-black text-white tracking-tighter"
        >
          예상 질문 &amp; 답변
        </motion.h1>

        <motion.p
          initial={{ y: 15, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-xl md:text-2xl text-slate-400 font-light mt-6 max-w-2xl leading-relaxed"
        >
          심사위원님의 질문에 <span className="text-white font-medium">해당 슬라이드를 함께 보며</span> 답변드리겠습니다.
        </motion.p>
      </div>
    </div>
  );
};

export default QADivider;
