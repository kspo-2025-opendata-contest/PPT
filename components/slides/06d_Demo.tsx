import React from 'react';
import { motion } from 'framer-motion';
import { SlideProps } from '../../types';
import { ArrowRight, ExternalLink } from 'lucide-react';

const steps = [
  { img: '/demo/c_g2_dashboard.png', no: '07', title: '지역 인프라 현황', desc: '시설·수혜·지도자 통계와 시도별 격차 시각화' },
  { img: '/demo/dash_seg1.png', no: '08', title: '데이터 심층 분석', desc: '시설 75.5%가 간이운동장 — 격차 원인까지 규명' },
];

const Demo4Slide: React.FC<SlideProps> = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center px-8 py-2">
      <div className="text-center mb-4">
        <h2 className="text-3xl font-black text-white tracking-tight mb-1">
          서비스 시연 <span className="text-brand-400">④ 인프라 대시보드 (정책용)</span>
        </h2>
        <p className="text-slate-400 text-base font-medium">
          개인 진단을 넘어 지역 정책 인사이트까지 · <span className="font-mono text-slate-500">hidden-talent-web.onrender.com</span>
        </p>
      </div>

      <div className="w-full max-w-[92%] flex items-stretch justify-center gap-6">
        {steps.map((s, i) => (
          <React.Fragment key={s.no}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * i }}
              className="flex-1 min-w-0 bg-slate-800 rounded-2xl border border-slate-700 shadow-2xl overflow-hidden flex flex-col hover:border-brand-500/40 transition-colors"
            >
              <div className="relative h-[440px] bg-slate-950/60 flex items-center justify-center p-3 border-b border-slate-700/60">
                <img src={s.img} alt={s.title} className="max-w-full max-h-full object-contain object-top rounded-md shadow-lg" />
                <div className="absolute top-3 left-3 w-10 h-10 rounded-xl bg-brand-500 text-slate-900 font-black text-lg flex items-center justify-center shadow-lg">
                  {s.no}
                </div>
              </div>
              <div className="p-4">
                <h4 className="text-white font-black text-xl leading-tight mb-1">{s.title}</h4>
                <p className="text-slate-400 text-sm font-medium leading-tight">{s.desc}</p>
              </div>
            </motion.div>
            {i < steps.length - 1 && (
              <div className="flex items-center text-slate-500 shrink-0">
                <ArrowRight size={32} strokeWidth={3} />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>

      <a
        href="https://hidden-talent-web.onrender.com/#home"
        target="_blank"
        rel="noreferrer"
        className="mt-4 inline-flex items-center gap-2 text-brand-400 font-bold text-base hover:text-brand-300 transition-colors"
      >
        <span className="border-b-2 border-brand-500/60 pb-0.5">라이브 서비스 바로가기</span>
        <ExternalLink size={18} />
      </a>
    </div>
  );
};

export default Demo4Slide;
