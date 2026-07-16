import React from 'react';
import { motion } from 'framer-motion';
import { SlideProps } from '../../types';
import { Trophy, Stars, GeoAltFill } from 'react-bootstrap-icons';

const cols = [
  { img: '/demo/f2_result_1.png', icon: Trophy, label: '① 종목별 재능 진단', desc: '장애 유형 맞춤 3종목 · 백분위 등급', accent: 'text-brand-400' },
  { img: '/demo/f2_result_2.png', icon: Stars, label: '② 등급 해석 · AI 코칭', desc: '존중 기반 생성형 AI 코멘트(OpenAI)', accent: 'text-blue-400' },
  { img: '/demo/f2_result_3.png', icon: GeoAltFill, label: '③ 지역 맞춤 프로그램', desc: '강남구 장애인 체육 프로그램 자동 연계', accent: 'text-emerald-400' },
];

const DemoResultSlide: React.FC<SlideProps> = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center px-6 py-1">
      <div className="text-center mb-4">
        <h2 className="text-4xl font-black text-white tracking-tight mb-1">
          서비스 둘러보기 <span className="text-brand-400">① 재능 진단 결과</span>
        </h2>
        <p className="text-slate-400 text-lg font-medium">
          종목 진단 → <span className="text-white font-semibold">생성형 AI 코칭</span> → 지역 프로그램 연계까지 · 실제 진단 화면
        </p>
      </div>

      <div className="w-full max-w-[96%] flex items-stretch justify-center gap-5">
        {cols.map((c, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 + i * 0.12 }}
            className="flex-1 min-w-0 flex flex-col"
          >
            <div className="flex items-center gap-2 mb-2">
              <c.icon className={`${c.accent} shrink-0`} size={20} />
              <span className="text-white font-black text-lg leading-tight">{c.label}</span>
            </div>
            <div className="bg-slate-800 rounded-2xl border border-slate-700 shadow-2xl p-2.5 flex items-center justify-center flex-1">
              <img src={c.img} alt={c.label} className="w-full max-h-[500px] object-contain rounded-lg" />
            </div>
            <p className="text-slate-400 text-sm font-medium mt-2 leading-snug" style={{ wordBreak: 'keep-all' }}>{c.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default DemoResultSlide;
