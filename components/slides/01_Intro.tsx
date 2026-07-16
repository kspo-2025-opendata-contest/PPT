import React from 'react';
import { motion } from 'framer-motion';
import { SlideProps } from '../../types';
import { Stars, Trophy, Database } from 'react-bootstrap-icons';

const IntroSlide: React.FC<SlideProps> = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center text-center px-8 relative">
      {/* Background Glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] bg-brand-500 blur-[150px] opacity-15 rounded-full" />
      </div>

      {/* All Content Centered */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Badge */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-slate-400 font-medium text-sm backdrop-blur-sm mb-8"
        >
          <Stars size={14} className="text-slate-500" />
          <span>제4회 문화체육관광 AI·데이터 활용 공모전 출품작</span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-8xl md:text-9xl font-black text-white tracking-tighter -mt-6"
        >
          숨인재
          <span className="text-brand-500">.</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-2xl md:text-3xl text-slate-400 font-light tracking-wide mt-6 max-w-3xl leading-relaxed"
        >
          <span className="text-white font-medium">데이터</span>로 찾아내는 대한민국 청소년의 <span className="text-brand-400 font-semibold">숨겨진 스포츠 재능</span>
        </motion.p>

        {/* Feature Cards */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="flex items-center gap-4 mt-6"
        >
          {[
            { icon: Database, text: "공공데이터 5종 융합" },
            { icon: Trophy, text: "데이터 기반 재능 진단" },
            { icon: Stars, text: "생성형 AI 맞춤 코칭" }
          ].map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-slate-800/60 border border-slate-700/80 backdrop-blur-sm"
            >
              <item.icon className="text-brand-400 shrink-0" size={24} />
              <span className="font-semibold text-white text-base whitespace-nowrap">{item.text}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default IntroSlide;