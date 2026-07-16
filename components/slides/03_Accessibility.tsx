import React from 'react';
import { motion } from 'framer-motion';
import { SlideProps } from '../../types';
import { People, PersonWheelchair, Eye, EarFill, Puzzle, CheckCircleFill } from 'react-bootstrap-icons';

const types = [
  {
    label: '비장애 (일반)', icon: People,
    sports: ['축구', '농구', '배구', '수영', '단거리 육상', '유도', '태권도', '야구'],
    iconBg: 'bg-slate-500', chip: 'bg-slate-500/10 text-slate-200 border-slate-500/30', ring: 'border-slate-500/40',
  },
  {
    label: '지체장애', icon: PersonWheelchair,
    sports: ['휠체어농구', '휠체어테니스', '파라수영', '보치아', '파라탁구'],
    iconBg: 'bg-brand-500', chip: 'bg-brand-500/10 text-brand-300 border-brand-500/30', ring: 'border-brand-500/30',
  },
  {
    label: '시각장애', icon: Eye,
    sports: ['골볼', '파라수영', '파라육상', '유도'],
    iconBg: 'bg-blue-500', chip: 'bg-blue-500/10 text-blue-300 border-blue-500/30', ring: 'border-blue-500/30',
  },
  {
    label: '청각장애', icon: EarFill,
    sports: ['축구', '농구', '배구', '수영', '파라탁구'],
    iconBg: 'bg-purple-500', chip: 'bg-purple-500/10 text-purple-300 border-purple-500/30', ring: 'border-purple-500/30',
  },
  {
    label: '지적장애', icon: Puzzle,
    sports: ['파라수영', '파라육상', '파라탁구', '보치아'],
    iconBg: 'bg-pink-500', chip: 'bg-pink-500/10 text-pink-300 border-pink-500/30', ring: 'border-pink-500/30',
  },
];

const AccessibilitySlide: React.FC<SlideProps> = () => {
  return (
    <div className="h-full flex flex-col justify-center items-center px-8 py-4">
      <div className="text-center mb-7">
        <h2 className="text-4xl font-black mb-3 text-white">
          <span className="text-brand-400">비장애·장애</span> 모두를 아우르는 포용적 분석
        </h2>
        <p className="text-slate-200 text-xl max-w-4xl mx-auto">
          비장애·장애 구분 없이 같은 방식으로 분석·매칭하며, <strong className="text-brand-400 font-black">장애 유형에 맞는 종목</strong>까지 포괄합니다.
        </p>
      </div>

      {/* 비장애·장애 모두 종목 매핑 */}
      <div className="w-full max-w-[97%] grid grid-cols-5 gap-4">
        {types.map((t, i) => (
          <motion.div
            key={t.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className={`bg-slate-800/80 rounded-2xl border ${t.ring} p-5 shadow-2xl flex flex-col`}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className={`w-12 h-12 ${t.iconBg} rounded-xl flex items-center justify-center text-white shadow-lg shrink-0`}>
                <t.icon size={26} />
              </div>
              <h3 className="text-xl font-black text-white leading-tight">{t.label}</h3>
            </div>
            <div className="text-slate-500 text-xs font-bold uppercase tracking-wider mb-3">맞춤 추천 종목</div>
            <div className="flex flex-wrap gap-1.5">
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
      <div className="w-full max-w-[97%] mt-6 bg-brand-500/10 border border-brand-500/30 rounded-2xl px-8 py-5 flex items-center justify-center gap-10">
        <div className="flex items-center gap-4">
          <CheckCircleFill className="text-brand-400 shrink-0" size={32} />
          <span className="text-white font-bold text-xl">
            누구나 같은 파이프라인으로 분석하고 <span className="text-brand-400">장애 유형별 종목까지 실제 추천·연계</span>
          </span>
        </div>
        <div className="h-10 w-px bg-slate-600" />
        <div className="text-slate-300 text-lg font-medium">
          유형별 종목 가중치 설계 · 지역 프로그램 실연계
        </div>
      </div>
    </div>
  );
};

export default AccessibilitySlide;
