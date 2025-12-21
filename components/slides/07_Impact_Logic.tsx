import React from 'react';
import { motion } from 'framer-motion';
import { SlideProps } from '../../types';
import { Target, Scale, Zap } from 'lucide-react';

const ImpactLogicSlide: React.FC<SlideProps> = () => {
  const points = [
    {
      title: "완전한 객관성 확보",
      icon: Scale,
      desc: (
        <>
          주관적 판단 대신 데이터 기반 선발 방식으로<br />
          신체적 잠재력에 맞는 진로 로드맵 제시
        </>
      ),
      color: "text-brand-400",
      bgColor: "bg-brand-500/10"
    },
    {
      title: "재능 발굴 사각지대 해소",
      icon: Target,
      desc: (
        <>
          소외 지역에서도 측정 데이터만 있으면<br />
          AI가 인재를 발굴하여 동등한 기회 보장
        </>
      ),
      color: "text-blue-400",
      bgColor: "bg-blue-500/10"
    },
    {
      title: "데이터 융합의 선순환",
      icon: Zap,
      desc: (
        <>
          등급 산출에서 국민체육진흥공단 시설·지도자 매칭까지,<br />
          재능 발견부터 훈련까지 완결형 체계 실현
        </>
      ),
      color: "text-purple-400",
      bgColor: "bg-purple-500/10"
    }
  ];

  return (
    <div className="h-full flex flex-col justify-center px-4 overflow-hidden pb-24">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-black mb-4">왜 <span className="text-brand-400">숨인재</span>가 필요한가?</h2>
        <p className="text-slate-300 text-2xl font-medium">데이터가 주관적 선발의 한계를 극복하는 유일한 해법입니다.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-[95%] mx-auto w-full">
        {points.map((point, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="bg-slate-800/80 p-6 rounded-2xl border border-slate-700 shadow-2xl flex flex-col relative group hover:border-brand-500/40 transition-all duration-300"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className={`w-12 h-12 ${point.bgColor} ${point.color} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform shrink-0`}>
                <point.icon size={28} />
              </div>
              <h3 className="text-xl font-black text-white tracking-tight">{point.title}</h3>
            </div>

            <p className="text-slate-300 text-base leading-relaxed font-medium">
              {point.desc}
            </p>

          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ImpactLogicSlide;
