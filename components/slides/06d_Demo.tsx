import React from 'react';
import { motion } from 'framer-motion';
import { SlideProps } from '../../types';
import { ArrowRight } from 'react-bootstrap-icons';

const steps = [
  { img: '/demo/c_g2_dashboard.png', no: '07', title: '지역 인프라 현황', desc: '시설·수혜·지도자 통계와 시도별 격차 시각화' },
  { img: '/demo/dash_seg1.png', no: '08', title: '데이터 심층 분석', desc: '시설 75.5%가 간이운동장 — 격차 원인까지 규명' },
];

const Demo4Slide: React.FC<SlideProps> = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center px-6 py-1">
      <div className="text-center mb-3">
        <h2 className="text-4xl font-black text-white tracking-tight mb-1">
          서비스 둘러보기 <span className="text-brand-400">③ 인프라 대시보드 (정책용)</span>
        </h2>
        <p className="text-slate-400 text-lg font-medium">
          개인 진단을 넘어 지역 정책 인사이트까지 · <span className="font-mono text-slate-500">hidden-talent-web.onrender.com</span>
        </p>
      </div>

      <div className="w-full max-w-[98%] flex items-stretch justify-center gap-8">
        {steps.map((s, i) => (
          <React.Fragment key={s.no}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * i }}
              className="flex-1 min-w-0 bg-slate-800 rounded-2xl border border-slate-700 shadow-2xl overflow-hidden flex flex-col hover:border-brand-500/40 transition-colors"
            >
              <div className="relative h-[500px] bg-slate-950/60 flex items-center justify-center p-4 border-b border-slate-700/60">
                <img src={s.img} alt={s.title} className="max-w-full max-h-full object-contain object-top rounded-md shadow-lg" />
                <div className="absolute top-4 left-4 rounded-xl bg-brand-500 text-slate-900 font-black text-xl flex items-center justify-center shadow-lg" style={{width:'3.25rem',height:'3.25rem'}}>
                  {s.no}
                </div>
              </div>
              <div className="p-4">
                <h4 className="text-white font-black text-2xl leading-tight mb-1">{s.title}</h4>
                <p className="text-slate-400 text-base font-medium leading-tight">{s.desc}</p>
              </div>
            </motion.div>
            {i < steps.length - 1 && (
              <div className="flex items-center text-slate-500 shrink-0">
                <ArrowRight size={40} />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Demo4Slide;
