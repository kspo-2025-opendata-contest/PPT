import React from 'react';
import { motion } from 'framer-motion';
import { SlideProps } from '../../types';
import { FileEarmarkText, Lightbulb, Database, Gem, PlayCircleFill, GraphUpArrow, People, RocketTakeoff } from 'react-bootstrap-icons';

const TOCSlide: React.FC<SlideProps> = () => {
  const sections = [
    { number: "01", title: "제안 배경 및 문제 정의", icon: FileEarmarkText, color: "text-slate-400" },
    { number: "02", title: "서비스 개요", icon: Lightbulb, color: "text-brand-400" },
    { number: "03", title: "공공데이터 활용 전략", icon: Database, color: "text-blue-400" },
    { number: "04", title: "핵심 기술", icon: Gem, color: "text-purple-400" },
    { number: "05", title: "서비스 둘러보기", icon: PlayCircleFill, color: "text-pink-400" },
    { number: "06", title: "기대 효과", icon: GraphUpArrow, color: "text-green-400" },
    { number: "07", title: "향후 발전 계획", icon: RocketTakeoff, color: "text-orange-400" },
    { number: "08", title: "팀 소개", icon: People, color: "text-cyan-400" },
  ];

  return (
    <div className="h-full flex flex-col justify-center items-center px-6">
      <div className="w-full max-w-[95%] grid grid-cols-2 md:grid-cols-4 gap-7">
        {sections.map((section, index) => (
          <motion.div
            key={section.number}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-slate-800/60 rounded-2xl p-10 border border-slate-700 hover:border-brand-500/40 transition-all duration-300 group"
          >
            <div className="flex items-center gap-6 mb-6">
              <div className={`w-20 h-20 bg-slate-900 rounded-xl flex items-center justify-center ${section.color} group-hover:scale-110 transition-transform`}>
                <section.icon size={40} />
              </div>
              <span className="text-brand-400 font-mono font-black text-4xl">{section.number}</span>
            </div>
            <h3 className="text-white font-bold text-2xl leading-snug whitespace-nowrap">{section.title}</h3>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TOCSlide;
