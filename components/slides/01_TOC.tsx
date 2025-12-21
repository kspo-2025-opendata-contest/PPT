import React from 'react';
import { motion } from 'framer-motion';
import { SlideProps } from '../../types';
import { FileText, Lightbulb, Database, Cpu, Monitor, TrendingUp, Users, Rocket } from 'lucide-react';

const TOCSlide: React.FC<SlideProps> = () => {
  const sections = [
    { number: "01", title: "제안 배경 및 문제 정의", icon: FileText, color: "text-slate-400" },
    { number: "02", title: "서비스 개요", icon: Lightbulb, color: "text-brand-400" },
    { number: "03", title: "공공데이터 활용 전략", icon: Database, color: "text-blue-400" },
    { number: "04", title: "핵심 기술", icon: Cpu, color: "text-purple-400" },
    { number: "05", title: "서비스 시연", icon: Monitor, color: "text-pink-400" },
    { number: "06", title: "기대 효과", icon: TrendingUp, color: "text-green-400" },
    { number: "07", title: "향후 발전 계획", icon: Rocket, color: "text-orange-400" },
    { number: "08", title: "팀 소개", icon: Users, color: "text-cyan-400" },
  ];

  return (
    <div className="h-full flex flex-col justify-center items-center px-4">
      <div className="w-full max-w-[85%] grid grid-cols-2 md:grid-cols-4 gap-5">
        {sections.map((section, index) => (
          <motion.div
            key={section.number}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-slate-800/60 rounded-2xl p-8 border border-slate-700 hover:border-brand-500/40 transition-all duration-300 group"
          >
            <div className="flex items-center gap-5 mb-5">
              <div className={`w-16 h-16 bg-slate-900 rounded-xl flex items-center justify-center ${section.color} group-hover:scale-110 transition-transform`}>
                <section.icon size={32} />
              </div>
              <span className="text-brand-400 font-mono font-black text-3xl">{section.number}</span>
            </div>
            <h3 className="text-white font-bold text-xl leading-snug whitespace-nowrap">{section.title}</h3>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TOCSlide;
