import React from 'react';
import { motion } from 'framer-motion';
import { SlideProps } from '../../types';
import { Accessibility, Eye, Ear, Brain, Hand, Users } from 'lucide-react';

const AccessibilitySlide: React.FC<SlideProps> = () => {
  const disabilityTypes = [
    { label: "비장애", icon: Users, color: "bg-slate-500" },
    { label: "지체장애", icon: Hand, color: "bg-brand-500" },
    { label: "시각장애", icon: Eye, color: "bg-blue-500" },
    { label: "청각장애", icon: Ear, color: "bg-purple-500" },
    { label: "지적장애", icon: Brain, color: "bg-pink-500" },
  ];

  const paraSports = ["골볼", "휠체어농구", "파라수영", "보치아", "탁구"];

  return (
    <div className="h-full flex flex-col justify-center items-center px-4 overflow-hidden py-2">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-black mb-3 text-white">
          <span className="text-brand-400">장애인 체육</span>까지 아우르는 통합 플랫폼
        </h2>
        <p className="text-slate-200 text-xl max-w-4xl mx-auto">
          장애 유형별 맞춤 분석으로 <strong className="text-brand-400 font-black">패럴림픽 종목</strong>까지 추천합니다.
        </p>
      </div>

      <div className="w-full max-w-[90%] flex flex-col md:flex-row items-stretch justify-center gap-8">

        {/* Left: 장애 유형 선택 */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="flex-1 bg-slate-800 rounded-[2rem] p-6 border border-slate-700 shadow-2xl"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-14 h-14 bg-brand-500/20 rounded-2xl flex items-center justify-center text-brand-400">
              <Accessibility size={32} />
            </div>
            <h3 className="text-2xl font-black text-white">장애 유형 선택</h3>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {disabilityTypes.map((type, index) => (
              <motion.div
                key={type.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="flex items-center gap-3 bg-slate-900/60 p-4 rounded-xl border border-white/5 hover:border-brand-500/30 transition-colors"
              >
                <div className={`w-10 h-10 ${type.color} rounded-xl flex items-center justify-center text-white shadow-lg shrink-0`}>
                  <type.icon size={20} />
                </div>
                <span className="text-white font-bold text-base">{type.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right: 패럴림픽 종목 추천 */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="flex-1 bg-gradient-to-br from-slate-800 to-slate-900 rounded-[2rem] p-6 border-2 border-brand-500/30 shadow-[0_0_40px_rgba(20,184,166,0.1)]"
        >
          <h3 className="text-2xl font-black text-white mb-4 text-center">
            패럴림픽 & 장애인 스포츠 추천
          </h3>

          <div className="grid grid-cols-2 gap-3 mb-4">
            {paraSports.map((sport, index) => (
              <motion.div
                key={sport}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="bg-brand-500/10 border border-brand-500/30 rounded-xl p-4 text-center hover:bg-brand-500/20 transition-colors"
              >
                <span className="text-white font-bold text-lg">{sport}</span>
              </motion.div>
            ))}
          </div>

          <div className="bg-slate-900/80 rounded-xl p-4 border border-white/10">
            <p className="text-slate-300 text-base leading-relaxed font-medium text-center">
              <span className="text-brand-400 font-black">장애인 체력인증센터</span> 측정 기준 적용<br />
              장애 특성에 맞는 체력 평가 및 종목 매칭
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AccessibilitySlide;
