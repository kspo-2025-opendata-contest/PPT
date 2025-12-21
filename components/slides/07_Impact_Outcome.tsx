import React from 'react';
import { SlideProps } from '../../types';
import { TrendingUp, FileText, CheckCircle2, ArrowRight } from 'lucide-react';

const ImpactOutcomeSlide: React.FC<SlideProps> = () => {
  const metrics = [
    {
      id: 1,
      title: "비만 진료비 절감",
      value: "7,194",
      unit: "만원/년",
      logicTitle: "Health Cost Logic",
      logicDesc: "연 1만 명 참여, 비만 발생 1%p 감소 시 1인당 71.9만 원 기준 직접 진료비 절감",
      color: "text-brand-400",
      bg: "bg-brand-500/5"
    },
    {
      id: 2,
      title: "장애인 체육 참여 확대",
      value: "5종목",
      unit: "패럴림픽",
      logicTitle: "Inclusion Logic",
      logicDesc: "장애 유형별 맞춤 분석으로 골볼, 휠체어농구, 파라수영 등 패럴림픽 종목 매칭 지원",
      color: "text-blue-400",
      bg: "bg-blue-500/5"
    },
    {
      id: 3,
      title: "전국 확대 시",
      value: "300~700",
      unit: "억원/년",
      logicTitle: "Scale Logic",
      logicDesc: "전국 참여 100만 명 기준 비만·부상 비용 절감 및 바우처 효율화 종합 효과 추정",
      color: "text-purple-400",
      bg: "bg-purple-500/5"
    }
  ];

  return (
    <div className="h-full flex flex-col justify-center px-4 overflow-hidden pb-16">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-black mb-1 text-white tracking-tight">데이터로 입증하는 <span className="text-brand-400">정량적 기대효과</span></h2>
        <p className="text-slate-400 text-xl font-medium">공공데이터의 결합이 가져올 사회적 가치를 수치로 증명합니다.</p>
      </div>
      
      {/* Container width significantly expanded to 85% to maximize horizontal space */}
      <div className="max-w-[85%] mx-auto w-full grid grid-cols-1 gap-5">
        {/* Header Row - Adjusted to 3:1:8 ratio for better balance */}
        <div className="grid grid-cols-12 gap-4 px-2 mb-1">
          <div className="col-span-3 flex items-center gap-3 text-white font-black uppercase tracking-wider text-base border-l-4 border-brand-500 pl-4">
            <TrendingUp size={18} className="text-brand-400" />
            성과 지표
          </div>
          <div className="col-span-1" />
          <div className="col-span-8 flex items-center gap-3 text-white font-black uppercase tracking-wider text-base border-l-4 border-brand-500 pl-4">
            <FileText size={18} className="text-brand-400" />
            성과 산출 근거
          </div>
        </div>

        {/* Metric Rows - Grid ratio changed to 3:1:8 for better balance */}
        {metrics.map((item) => (
          <div key={item.id} className="grid grid-cols-12 gap-4 items-stretch group">
            {/* Left: Metric Card (3/12) */}
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

            {/* Middle: Arrow Icon (1/12) */}
            <div className="col-span-1 flex items-center justify-center text-slate-600">
               <ArrowRight size={28} strokeWidth={3} className="group-hover:text-brand-500 group-hover:translate-x-1 transition-all" />
            </div>

            {/* Right: Logic Card (8/12) */}
            <div className="col-span-8 bg-slate-800/40 border border-white/5 rounded-xl px-8 py-3 flex flex-col justify-center group-hover:bg-slate-800/60 transition-all shadow-inner h-[90px]">
               <h4 className={`text-xs font-black uppercase tracking-widest mb-1.5 ${item.color}`}>{item.logicTitle}</h4>
               <p className="text-slate-100 text-lg font-bold leading-relaxed">
                 {item.logicDesc}
               </p>
            </div>
          </div>
        ))}
      </div>

      {/* Verification Footer */}
      <div className="mt-8 flex justify-center">
        <div className="bg-slate-900/80 px-8 py-2 rounded-full border border-slate-700 flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-brand-500 animate-pulse" />
          <span className="text-slate-400 text-xs font-bold tracking-wider">
            출처: 국민체육진흥공단 국민체력100 인구 통계 데이터 기반 시뮬레이션
          </span>
        </div>
      </div>
    </div>
  );
};

export default ImpactOutcomeSlide;