import React from 'react';
import { motion } from 'framer-motion';
import { SlideProps } from '../../types';
import { Hand, Eye, Ear, Brain, CheckCircle2 } from 'lucide-react';

const types = [
  {
    label: '지체장애', icon: Hand,
    sports: ['휠체어농구', '휠체어테니스', '파라수영', '보치아', '파라탁구'],
    iconBg: 'bg-brand-500', chip: 'bg-brand-500/10 text-brand-300 border-brand-500/30', ring: 'border-brand-500/30',
  },
  {
    label: '시각장애', icon: Eye,
    sports: ['골볼', '파라수영', '파라육상', '유도'],
    iconBg: 'bg-blue-500', chip: 'bg-blue-500/10 text-blue-300 border-blue-500/30', ring: 'border-blue-500/30',
  },
  {
    label: '청각장애', icon: Ear,
    sports: ['축구', '농구', '배구', '수영', '파라탁구'],
    iconBg: 'bg-purple-500', chip: 'bg-purple-500/10 text-purple-300 border-purple-500/30', ring: 'border-purple-500/30',
  },
  {
    label: '지적장애', icon: Brain,
    sports: ['파라수영', '파라육상', '파라탁구', '보치아'],
    iconBg: 'bg-pink-500', chip: 'bg-pink-500/10 text-pink-300 border-pink-500/30', ring: 'border-pink-500/30',
  },
];

const AccessibilitySlide: React.FC<SlideProps> = () => {
  return (
    <div className="h-full flex flex-col justify-center items-center px-6 py-2">
      <div className="text-center mb-6">
        <h2 className="text-4xl font-black mb-2 text-white">
          <span className="text-brand-400">장애인 체육</span>까지 아우르는 통합 플랫폼
        </h2>
        <p className="text-slate-200 text-lg max-w-4xl mx-auto">
          장애 유형별로 <strong className="text-brand-400 font-black">맞춤 패럴림픽 종목</strong>을 진단하고, 지역 장애인 체육 프로그램까지 연계합니다.
        </p>
      </div>

      {/* 장애 유형별 맞춤 종목 매핑 */}
      <div className="w-full max-w-[92%] grid grid-cols-4 gap-4">
        {types.map((t, i) => (
          <motion.div
            key={t.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.12 }}
            className={`bg-slate-800/80 rounded-2xl border ${t.ring} p-5 shadow-2xl flex flex-col`}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className={`w-11 h-11 ${t.iconBg} rounded-xl flex items-center justify-center text-white shadow-lg shrink-0`}>
                <t.icon size={22} />
              </div>
              <h3 className="text-xl font-black text-white">{t.label}</h3>
            </div>
            <div className="text-slate-500 text-xs font-bold uppercase tracking-wider mb-2">맞춤 추천 종목</div>
            <div className="flex flex-wrap gap-2">
              {t.sports.map((s) => (
                <span key={s} className={`text-sm font-bold px-3 py-1.5 rounded-lg border ${t.chip}`}>
                  {s}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* 실제 구현 강조 */}
      <div className="w-full max-w-[92%] mt-5 bg-brand-500/10 border border-brand-500/30 rounded-2xl px-6 py-4 flex items-center justify-center gap-8">
        <div className="flex items-center gap-3">
          <CheckCircle2 className="text-brand-400 shrink-0" size={26} />
          <span className="text-white font-bold text-lg">
            진단에서 끝나지 않고 <span className="text-brand-400">실제 장애인 체육 프로그램 추천까지 구현</span>
          </span>
        </div>
        <div className="h-8 w-px bg-slate-600" />
        <div className="text-slate-300 text-base font-medium">
          장애 유형별 종목 가중치 설계 · 지역 장애인 프로그램 실연계
        </div>
      </div>
    </div>
  );
};

export default AccessibilitySlide;
