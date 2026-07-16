import React from 'react';
import { SlideProps } from '../../types';
import { TrendingUp, FileText, ArrowRight } from 'lucide-react';

const ImpactOutcomeSlide: React.FC<SlideProps> = () => {
  const metrics = [
    {
      id: 1,
      title: "데이터 활용 범위",
      value: "40만+",
      unit: "건",
      logicTitle: "Data Coverage",
      logicDesc: "청소년 프로그램 172,000건 + 체력측정 20만건 + 시설현황 42,000개를 통합 분석",
      color: "text-brand-400",
      bg: "bg-brand-500/5"
    },
    {
      id: 2,
      title: "장애인 체육 지원",
      value: "5종목",
      unit: "패럴림픽",
      logicTitle: "Inclusion Logic",
      logicDesc: "장애 유형별(지체·시각·청각·지적) 패럴림픽 종목 진단 + 맞춤 프로그램 추천까지 실제 구현",
      color: "text-blue-400",
      bg: "bg-blue-500/5"
    },
    {
      id: 3,
      title: "스포츠 복지 수혜",
      value: "10만+",
      unit: "명/년",
      logicTitle: "Welfare Logic",
      logicDesc: "스포츠강좌이용권 수혜자 103,513명의 지역별 분포를 분석하여 복지 사각지대 발굴",
      color: "text-purple-400",
      bg: "bg-purple-500/5"
    }
  ];

  return (
    <div className="h-full flex flex-col justify-center px-4 overflow-hidden pb-16">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-black mb-1 text-white tracking-tight">공공데이터 기반 <span className="text-brand-400">서비스 가치</span></h2>
        <p className="text-slate-400 text-xl font-medium">국민체육진흥공단 데이터를 결합하여 실질적인 정책 인사이트를 제공합니다.</p>
      </div>

      <div className="max-w-[85%] mx-auto w-full grid grid-cols-1 gap-5">
        <div className="grid grid-cols-12 gap-4 px-2 mb-1">
          <div className="col-span-3 flex items-center gap-3 text-white font-black uppercase tracking-wider text-base border-l-4 border-brand-500 pl-4">
            <TrendingUp size={18} className="text-brand-400" />
            성과 지표
          </div>
          <div className="col-span-1" />
          <div className="col-span-8 flex items-center gap-3 text-white font-black uppercase tracking-wider text-base border-l-4 border-brand-500 pl-4">
            <FileText size={18} className="text-brand-400" />
            데이터 기반 근거
          </div>
        </div>

        {metrics.map((item) => (
          <div key={item.id} className="grid grid-cols-12 gap-4 items-stretch group">
            <div className={`col-span-3 ${item.bg} border border-white/10 rounded-xl px-5 py-3 flex flex-col items-center justify-center group-hover:border-brand-500/30 transition-all duration-300 shadow-lg relative overflow-hidden h-[90px]`}>
               <div className="absolute top-0 right-0 w-16 h-16 bg-white/5 rotate-45 translate-x-8 -translate-y-8" />
               <div className="flex flex-col items-center relative z-10 w-full text-center">
                 <span className="text-slate-200 text-base font-black leading-tight mb-1">{item.title}</span>
                 <div className="flex items-baseline gap-1">
                   <span className="text-4xl font-black text-white tracking-tighter leading-none">{item.value}</span>
                   <span className={`text-xl font-black ${item.color} self-end mb-0.5`}>{item.unit}</span>
                 </div>
               </div>
            </div>

            <div className="col-span-1 flex items-center justify-center text-slate-600">
               <ArrowRight size={28} strokeWidth={3} className="group-hover:text-brand-500 group-hover:translate-x-1 transition-all" />
            </div>

            <div className="col-span-8 bg-slate-800/40 border border-white/5 rounded-xl px-8 py-3 flex flex-col justify-center group-hover:bg-slate-800/60 transition-all shadow-inner h-[90px]">
               <h4 className={`text-xs font-black uppercase tracking-widest mb-1.5 ${item.color}`}>{item.logicTitle}</h4>
               <p className="text-slate-100 text-lg font-bold leading-relaxed">
                 {item.logicDesc}
               </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 flex justify-center">
        <div className="bg-slate-900/80 px-8 py-2 rounded-full border border-slate-700 flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-brand-500 animate-pulse" />
          <span className="text-slate-400 text-xs font-bold tracking-wider">
            출처: 국민체육진흥공단 공공데이터 (2025~2026.3 최신 기준)
          </span>
        </div>
      </div>
    </div>
  );
};

export default ImpactOutcomeSlide;
