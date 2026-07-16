import React from 'react';
import { motion } from 'framer-motion';
import { SlideProps } from '../../types';
import { CheckCircleFill, XCircle, DashCircle } from 'react-bootstrap-icons';

const rows = [
  { cap: '체력 측정 · 등급 산출', legacy: 'o', ours: 'o' },
  { cap: "또래 대비 내 '위치' 분석", legacy: 'd', ours: 'o' },
  { cap: '종목 적합도 진단 (어디에 도전하면 잘할까?)', legacy: 'x', ours: 'o' },
  { cap: '주변 프로그램 · 시설 매칭', legacy: 'x', ours: 'o' },
  { cap: '비장애 · 장애 통합 포용', legacy: 'x', ours: 'o' },
  { cap: '생성형 AI 맞춤 코칭', legacy: 'x', ours: 'o' },
];

const Mark: React.FC<{ t: string }> = ({ t }) => {
  if (t === 'o') return <CheckCircleFill className="text-brand-400" size={28} />;
  if (t === 'd') return <DashCircle className="text-slate-500" size={26} />;
  return <XCircle className="text-slate-600" size={26} />;
};

const CompareSlide: React.FC<SlideProps> = () => {
  return (
    <div className="h-full flex flex-col justify-center items-center px-8">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-black text-white tracking-tight mb-3">
          기존 서비스와 <span className="text-brand-400">무엇이 다른가</span>
        </h2>
        <p className="text-slate-300 text-xl font-medium">
          측정에서 끝나지 않고 — <span className="text-white font-semibold">발굴 · 분석 · 매칭 · 포용</span>까지 하나로.
        </p>
      </div>

      <div className="w-full max-w-5xl rounded-3xl border border-slate-700 overflow-hidden shadow-2xl">
        {/* Header row */}
        <div className="flex items-stretch bg-slate-800">
          <div className="flex-1 px-7 py-5 text-slate-400 font-bold text-lg">기능</div>
          <div className="w-64 px-4 py-5 text-center border-l border-slate-700">
            <div className="text-slate-300 font-black text-lg leading-tight">기존 체력측정 서비스</div>
            <div className="text-slate-500 text-sm mt-0.5">국민체력100 · PAPS</div>
          </div>
          <div className="w-56 px-4 py-5 text-center border-l border-brand-500/40 bg-brand-500/10">
            <div className="text-brand-300 font-black text-xl">숨인재</div>
          </div>
        </div>

        {/* Body rows */}
        {rows.map((r, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 + i * 0.08 }}
            className={`flex items-center ${i % 2 === 0 ? 'bg-slate-900/40' : 'bg-slate-900/20'} border-t border-slate-800`}
          >
            <div className="flex-1 px-7 py-4 text-white font-semibold text-lg" style={{ wordBreak: 'keep-all' }}>{r.cap}</div>
            <div className="w-64 px-4 py-4 flex justify-center border-l border-slate-800"><Mark t={r.legacy} /></div>
            <div className="w-56 px-4 py-4 flex justify-center border-l border-brand-500/30 bg-brand-500/[0.06]"><Mark t={r.ours} /></div>
          </motion.div>
        ))}
      </div>

      <div className="flex items-center gap-5 mt-6 text-slate-400 text-base font-medium">
        <span className="flex items-center gap-2"><CheckCircleFill className="text-brand-400" size={18} /> 제공</span>
        <span className="flex items-center gap-2"><DashCircle className="text-slate-500" size={18} /> 부분 제공</span>
        <span className="flex items-center gap-2"><XCircle className="text-slate-600" size={18} /> 미제공</span>
      </div>
    </div>
  );
};

export default CompareSlide;
