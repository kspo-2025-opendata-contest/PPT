import React from 'react';
import { motion } from 'framer-motion';
import { SlideProps } from '../../types';
import { Sparkles, Cpu, MapPin, Rocket, ChevronRight } from 'lucide-react';

const SolutionSlide: React.FC<SlideProps> = () => {
  const steps = [
    {
      id: 1,
      title: "재능 발견",
      eng: "DISCOVER",
      desc: (
        <>
          국민체력 100 측정 데이터를 활용하여<br />
          <strong className="text-white">재능을 정량적으로 발굴</strong>
        </>
      ),
      icon: Sparkles,
      color: "bg-blue-500"
    },
    {
      id: 2,
      title: "정밀 진단",
      eng: "ANALYZE",
      desc: (
        <>
          Z-Score 분석으로 <strong className="text-white">강점 요인</strong>을 도출,<br />
          AI가 <strong className="text-white">적합 종목을 추천</strong>
        </>
      ),
      icon: Cpu,
      color: "bg-brand-500"
    },
    {
      id: 3,
      title: "인프라 매칭",
      eng: "CONNECT",
      desc: (
        <>
          거주지 주변 <strong className="text-white">공공 체육 시설</strong>과<br />
          <strong className="text-white">전문 지도자</strong>를 매칭
        </>
      ),
      icon: MapPin,
      color: "bg-purple-500"
    },
    {
      id: 4,
      title: "성장 관리",
      eng: "GROWTH",
      desc: (
        <>
          스포츠 강좌 이용권과 연결하여<br />
          <strong className="text-white">엘리트 선수로 성장</strong> 지원
        </>
      ),
      icon: Rocket,
      color: "bg-pink-500"
    }
  ];

  return (
    <div className="h-full flex flex-col items-center justify-start pt-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4 text-white">데이터 기반 <span className="text-brand-400">완결형 인재 육성</span> 플랫폼</h2>
        <p className="text-white text-xl">단순 측정을 넘어, 발견부터 성장까지 끊김없는(Seamless) 경험을 제공합니다.</p>
      </div>

      <div className="flex items-stretch justify-center w-full px-4 gap-2">
        {steps.map((step, index) => (
          <React.Fragment key={step.id}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              className="group relative flex-1 max-w-[320px]"
            >
              <div className="bg-slate-800/90 border border-slate-700/80 rounded-2xl p-7 hover:border-brand-500/50 transition-all duration-300 relative overflow-hidden flex flex-col h-full shadow-xl backdrop-blur-sm">
                <div className={`absolute -right-6 -top-6 w-24 h-24 ${step.color} blur-[50px] opacity-20`} />

                <div className="flex items-center justify-between mb-5">
                  <div className={`w-14 h-14 ${step.color} rounded-xl flex items-center justify-center shadow-lg shrink-0`}>
                    <step.icon className="text-white" size={28} />
                  </div>
                  <span className="text-xs font-bold tracking-widest text-slate-500">{step.eng}</span>
                </div>

                <div className="mb-3">
                  <h3 className="text-2xl font-bold text-white leading-tight">{step.title}</h3>
                </div>

                <div className="flex-1">
                  <p className="text-slate-300 text-base leading-relaxed font-medium">
                    {step.desc}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Connector Arrow */}
            {index < steps.length - 1 && (
              <div className="hidden md:flex items-center justify-center shrink-0">
                <div className="w-8 h-8 rounded-full bg-slate-800/80 border border-slate-700 flex items-center justify-center">
                  <ChevronRight className="text-brand-400" size={18} />
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