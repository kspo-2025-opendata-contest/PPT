import React from 'react';
import { motion } from 'framer-motion';
import { SlideProps } from '../../types';
import { Speedometer2, FlagFill, GeoAltFill } from 'react-bootstrap-icons';

const questions = [
  {
    icon: Speedometer2,
    q: <>“내 체력, 전 국민 중<br />어디쯤일까?”</>,
    a: '데이터로 내 운동능력의 위치를 알려줍니다',
    accent: 'text-brand-400', bg: 'bg-brand-500/10', border: 'border-brand-500/30',
  },
  {
    icon: FlagFill,
    q: <>“어떤 종목에 도전하면<br />잘할까?”</>,
    a: '성공 가능성이 높은 종목을 분석해줍니다',
    accent: 'text-blue-400', bg: 'bg-blue-500/10', border: 'border-blue-500/30',
  },
  {
    icon: GeoAltFill,
    q: <>“그럼 어디서<br />시작하지?”</>,
    a: '주변 스포츠 인프라까지 연결해줍니다',
    accent: 'text-purple-400', bg: 'bg-purple-500/10', border: 'border-purple-500/30',
  },
];

const MotivationSlide: React.FC<SlideProps> = () => {
  return (
    <div className="h-full flex flex-col justify-center items-center px-8">
      <div className="text-center mb-10">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-brand-400 font-bold tracking-[0.2em] uppercase text-lg mb-3"
        >
          Why 숨인재
        </motion.p>
        <h2 className="text-5xl font-black text-white tracking-tight">
          누구나 한 번쯤 궁금했던 <span className="text-brand-400">세 가지</span>
        </h2>
      </div>

      <div className="w-full max-w-6xl grid grid-cols-3 gap-6">
        {questions.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 + i * 0.15 }}
            className={`bg-slate-800/70 rounded-3xl border ${item.border} p-9 flex flex-col items-center text-center shadow-2xl`}
          >
            <div className={`w-16 h-16 ${item.bg} rounded-2xl flex items-center justify-center mb-6`}>
              <item.icon className={item.accent} size={34} />
            </div>
            <p className="text-2xl font-black text-white leading-snug mb-4" style={{ wordBreak: 'keep-all', textWrap: 'balance' } as React.CSSProperties}>
              {item.q}
            </p>
            <div className={`w-10 h-0.5 ${item.bg} mb-4`} />
            <p className="text-slate-300 text-lg font-medium leading-relaxed" style={{ wordBreak: 'keep-all' }}>
              {item.a}
            </p>
          </motion.div>
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="text-slate-300 text-2xl font-medium mt-10 text-center"
        style={{ wordBreak: 'keep-all' }}
      >
        이 세 가지 궁금증을 <strong className="text-white">공공데이터로</strong> 답합니다.
      </motion.p>
    </div>
  );
};

export default MotivationSlide;
