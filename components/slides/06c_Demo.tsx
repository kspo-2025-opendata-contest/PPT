import React from 'react';
import { motion } from 'framer-motion';
import { SlideProps } from '../../types';
import { ArrowRight } from 'lucide-react';

const steps = [
  { img: '/demo/c_g1_matching.png', no: '05', title: '프로그램 검색·필터', desc: '지역·종목·대상 조건으로 참여 가능한 프로그램 탐색' },
  { img: '/demo/p_modal_card.png', no: '06', title: '프로그램 상세', desc: '주소·기간·수강료·정원·홈페이지까지 상세 정보' },
];

const Demo3Slide: React.FC<SlideProps> = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center px-8 py-2">
      <div className="text-center mb-5">
        <h2 className="text-3xl font-black text-white tracking-tight mb-1">
          서비스 시연 <span className="text-brand-400">③ 프로그램 매칭</span>
        </h2>
        <p className="text-slate-400 text-base font-medium">
          진단 종목에 맞는 실제 참여 프로그램 연결 · <span className="font-mono text-slate-500">hidden-talent-web.onrender.com</span>
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
                <img src={s.img} alt={s.title} className="max-w-full max-h-full object-contain rounded-md shadow-lg" />
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
    </div>
  );
};

export default Demo3Slide;
