import React from 'react';
import { motion } from 'framer-motion';
import { SlideProps } from '../../types';
import { Search, Speedometer2, GeoAltFill, Link45deg, ChevronRight } from 'react-bootstrap-icons';

const SolutionSlide: React.FC<SlideProps> = () => {
  const steps = [
    {
      id: 1,
      title: "재능 발견",
      eng: "DISCOVER",
      desc: (
        <>
          측정 데이터로 <strong className="text-white">재능 발굴</strong>
        </>
      ),
      icon: Search,
      color: "bg-blue-500"
    },
    {
      id: 2,
      title: "위치 진단",
      eng: "ANALYZE",
      desc: (
        <>
          또래 대비 <strong className="text-white">위치·적합 종목</strong>
        </>
      ),
      icon: Speedometer2,
      color: "bg-brand-500"
    },
    {
      id: 3,
      title: "인프라 매칭",
      eng: "CONNECT",
      desc: (
        <>
          주변 <strong className="text-white">시설·지도자 연결</strong>
        </>
      ),
      icon: GeoAltFill,
      color: "bg-purple-500"
    },
    {
      id: 4,
      title: "참여 연계",
      eng: "ENGAGE",
      desc: (
        <>
          이용권·<strong className="text-white">지원제도 연결</strong>
        </>
      ),
      icon: Link45deg,
      color: "bg-pink-500"
    }
  ];

  return (
    <div className="h-full flex flex-col items-center justify-center py-8">
      <div className="text-center mb-14">
        <h2 className="text-4xl font-bold mb-5 text-white">데이터 기반 <span className="text-brand-400">청소년 스포츠 재능 발굴</span> 플랫폼</h2>
        <p className="text-white text-2xl">내 체력이 또래 중 어느 위치인지 분석하고, 주변 스포츠 인프라까지 연결합니다.</p>
      </div>

      <div className="flex items-stretch justify-center w-full px-8 gap-4">
        {steps.map((step, index) => (
          <React.Fragment key={step.id}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              className="group relative flex-1 max-w-[380px]"
            >
              <div className="bg-slate-800/90 border border-slate-700/80 rounded-2xl p-10 hover:border-brand-500/50 transition-all duration-300 relative overflow-hidden flex flex-col h-full shadow-xl backdrop-blur-sm">
                <div className={`absolute -right-6 -top-6 w-32 h-32 ${step.color} blur-[60px] opacity-20`} />

                <div className="flex items-center justify-between mb-7">
                  <div className={`w-18 h-18 ${step.color} rounded-xl flex items-center justify-center shadow-lg shrink-0 p-4`}>
                    <step.icon className="text-white" size={36} />
                  </div>
                  <span className="text-sm font-bold tracking-widest text-slate-500">{step.eng}</span>
                </div>

                <div className="mb-4">
                  <h3 className="text-3xl font-bold text-white leading-tight">{step.title}</h3>
                </div>

                <div className="flex-1">
                  <p className="text-slate-300 text-lg leading-relaxed font-medium" style={{ wordBreak: 'keep-all' }}>
                    {step.desc}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Connector Arrow */}
            {index < steps.length - 1 && (
              <div className="hidden md:flex items-center justify-center shrink-0">
                <div className="w-10 h-10 rounded-full bg-slate-800/80 border border-slate-700 flex items-center justify-center">
                  <ChevronRight className="text-brand-400" size={22} />
                </div>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default SolutionSlide;