import React from 'react';
import { motion } from 'framer-motion';
import { SlideProps } from '../../types';
import { HeartFill, CashCoin, Cpu } from 'react-bootstrap-icons';

const values = [
  {
    tag: 'ESG · 사회적 가치',
    icon: HeartFill,
    title: '스포츠 기회 불평등 해소',
    desc: '지역·경제·장애와 무관하게 누구나 공정하게 재능을 발굴합니다.',
    stat: '비장애 + 장애 4유형 통합 · 복지 사각지대 10만+명 분석',
    color: 'text-brand-400', bg: 'bg-brand-500/10', border: 'border-brand-500/30',
  },
  {
    tag: '경제적 가치',
    icon: CashCoin,
    title: '사장되던 데이터의 가치 전환',
    desc: '흩어진 공공데이터를 실질 가치로 바꾸고, 복지 예산의 효율적 배분을 지원합니다.',
    stat: '공공데이터 5종 · 40만+ 레코드 융합 활용',
    color: 'text-blue-400', bg: 'bg-blue-500/10', border: 'border-blue-500/30',
  },
  {
    tag: '기술적 가치',
    icon: Cpu,
    title: '통계 + 생성형 AI 하이브리드',
    desc: '정확성은 통계로, 공감은 생성형 AI로 — 역할을 분리한 재현 가능한 모델.',
    stat: '청소년 실측 3.5만명 백분위 재보정 · 재현 스크립트 공개',
    color: 'text-purple-400', bg: 'bg-purple-500/10', border: 'border-purple-500/30',
  },
];

const ImpactLogicSlide: React.FC<SlideProps> = () => {
  return (
    <div className="h-full flex flex-col justify-center items-center px-6">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-black mb-4 text-white">데이터가 만드는 <span className="text-brand-400">세 가지 가치</span></h2>
        <p className="text-slate-300 text-2xl font-medium">숨은 재능 발굴이 만드는 사회·경제·기술적 기대 효과입니다.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl w-full">
        {values.map((v, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 + i * 0.15 }}
            className={`rounded-3xl border ${v.border} bg-slate-800/70 p-8 flex flex-col shadow-2xl`}
          >
            <span className={`self-start px-3 py-1 rounded-full text-sm font-bold ${v.bg} ${v.color} border ${v.border} mb-5`}>
              {v.tag}
            </span>
            <div className="flex items-center gap-4 mb-4">
              <div className={`w-14 h-14 rounded-2xl ${v.bg} ${v.color} flex items-center justify-center shrink-0`}>
                <v.icon size={30} />
              </div>
              <h3 className="text-2xl font-black text-white leading-tight" style={{ wordBreak: 'keep-all' }}>{v.title}</h3>
            </div>
            <p className="text-slate-300 text-lg leading-relaxed font-medium mb-5" style={{ wordBreak: 'keep-all' }}>{v.desc}</p>
            <div className={`mt-auto pt-4 border-t border-slate-700`}>
              <p className={`${v.color} text-base font-bold`} style={{ wordBreak: 'keep-all' }}>{v.stat}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <p className="text-slate-500 text-sm mt-6">출처: 국민체육진흥공단 공공데이터 (체력측정 2025.6~2026.3 · 그 외 2025년 기준)</p>
    </div>
  );
};

export default ImpactLogicSlide;
