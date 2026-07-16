import React from 'react';
import { motion } from 'framer-motion';
import { SlideProps } from '../../types';
import { Database, Activity, Map, CreditCard, Award, ArrowRight, Zap } from 'lucide-react';

const DataSlide: React.FC<SlideProps> = () => {
  const datasets = [
    {
      title: "국민체력 100 측정 데이터",
      fields: "신장, 체중, 악력, 윗몸일으키기, 왕복달리기 등",
      usage: "실측 3.5만명(청소년)을 분석하여 백분위 기반 정규화로 1~5단계의 객관적 재능 지표로 변환",
      icon: Database,
      color: "blue"
    },
    {
      title: "청소년·유아동 체육 프로그램",
      fields: "종목, 대상, 지역, 가격, 대중교통 접근성",
      usage: "재능 진단 결과와 매칭하여 지역 맞춤 프로그램을 추천 (장애인 체육 프로그램 포함)",
      icon: Activity,
      color: "green"
    },
    {
      title: "전국 공공체육시설 정보",
      fields: "시도, 시군구, 시설수, 인구수",
      usage: "지역별 시설 현황(42,000개)을 분석하여 인구 대비 시설 접근성 격차를 시각화하고 정책 인사이트 제공",
      icon: Map,
      color: "teal"
    },
    {
      title: "스포츠 강좌 이용권 데이터",
      fields: "지역, 수혜 대상, 수혜자 수",
      usage: "지역별 수혜자 현황(103,513명)을 분석하여 스포츠 복지 사각지대를 파악하고 정책 효과 측정",
      icon: CreditCard,
      color: "purple"
    },
    {
      title: "체육지도자 자격 정보",
      fields: "자격 유형, 연도별 취득자 수",
      usage: "연간 2만명의 자격 취득 현황을 분석하여 전문 지도 인력 수급 추이 파악 및 정책 기초자료 제공",
      icon: Award,
      color: "orange"
    }
  ];

  const getStyles = (color: string) => {
    switch (color) {
      case 'blue': return { bg: 'bg-blue-500/10', text: 'text-blue-400', border: 'border-blue-500/30' };
      case 'green': return { bg: 'bg-green-500/10', text: 'text-green-400', border: 'border-green-500/30' };
      case 'teal': return { bg: 'bg-brand-500/10', text: 'text-brand-400', border: 'border-brand-500/30' };
      case 'purple': return { bg: 'bg-purple-500/10', text: 'text-purple-400', border: 'border-purple-500/30' };
      case 'orange': return { bg: 'bg-orange-500/10', text: 'text-orange-400', border: 'border-orange-500/30' };
      default: return { bg: 'bg-slate-500/10', text: 'text-slate-400', border: 'border-slate-500/30' };
    }
  };

  return (
    <div className="h-full flex flex-col justify-center items-center px-4 overflow-hidden">
      <div className="mb-6 text-center max-w-4xl">
        <p className="text-slate-200 text-2xl leading-snug font-medium">
          <strong className="text-brand-400 font-black">국민체육진흥공단 공공데이터</strong>를 서비스 기능 단위로 결합하여<br/> 
          실질적인 가치를 창출합니다.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-2.5 w-full max-w-[88%]">
        {datasets.map((data, idx) => {
          const styles = getStyles(data.color);
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.08 }}
              className={`flex flex-col md:flex-row items-center gap-4 p-3.5 rounded-2xl border bg-slate-800/80 backdrop-blur-md hover:bg-slate-800 transition-all duration-300 md:min-h-[82px] shadow-lg ${styles.border}`}
            >
              {/* Left Column: Data Source */}
              <div className="flex items-center gap-4 w-full md:w-[340px] shrink-0">
                <div className={`w-11 h-11 flex items-center justify-center rounded-xl ${styles.bg} ${styles.text} shrink-0 shadow-inner`}>
                  <data.icon size={22} />
                </div>
                <div>
                  <h4 className="text-base font-black text-white leading-tight mb-0.5 whitespace-nowrap">{data.title}</h4>
                  <span className="text-[11px] text-slate-400 font-mono truncate block font-medium opacity-80">{data.fields}</span>
                </div>
              </div>

              {/* Middle Column: Arrow (Centrally aligned) */}
              <div className="hidden md:flex items-center justify-center text-slate-500 shrink-0 opacity-60">
                <ArrowRight size={20} strokeWidth={3} />
              </div>
              
              {/* Right Column: Usage Description (items-center added for vertical alignment) */}
              <div className="flex-1 flex items-center gap-4 w-full min-w-0 md:pl-2">
                 <div className="p-1.5 rounded-lg bg-brand-500/20 text-brand-400 shrink-0">
                   <Zap size={16} fill="currentColor" />
                 </div>
                 <div className="flex-1 min-w-0">
                    <p className="text-slate-100 text-[17px] font-bold leading-snug break-keep">
                      {data.usage}
                    </p>
                 </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default DataSlide;