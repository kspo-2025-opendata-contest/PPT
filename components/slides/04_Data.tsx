import React from 'react';
import { motion } from 'framer-motion';
import { SlideProps } from '../../types';
import { Database, Activity, Map, CreditCard, Award, ArrowRight, Zap } from 'lucide-react';

const DataSlide: React.FC<SlideProps> = () => {
  const datasets = [
    {
      title: "국민체력 100 측정 데이터",
      fields: "신장, 체중, 윗몸일으키기, 왕복달리기 등",
      usage: "전수 조사된 체력 데이터를 분석하여 T-Score를 산출하고, 1~5등급의 객관적 재능 지표로 변환",
      icon: Database,
      color: "blue"
    },
    {
      title: "국민체력 100 운동처방 데이터",
      fields: "등급별 추천 운동, 운동 강도, 빈도",
      usage: "부족한 체력 요소를 보완할 수 있는 개인 맞춤형 운동 프로그램 자동 생성 알고리즘에 활용",
      icon: Activity,
      color: "green"
    },
    {
      title: "전국 공공체육시설 정보",
      fields: "시설명, 위경도 좌표, 운영 종목",
      usage: "사용자 위치(LBS) 기반으로 접근 가능한 최적의 공공 체육 시설을 매칭하여 정보 비대칭 해소",
      icon: Map,
      color: "teal"
    },
    {
      title: "스포츠 강좌 이용권 데이터",
      fields: "지원 대상 자격, 가맹 시설 현황",
      usage: "저소득층 청소년이 비용 부담 없이 훈련할 수 있도록 바우처 사용 가능 시설 필터링 및 안내",
      icon: CreditCard,
      color: "purple"
    },
    {
      title: "체육지도자 자격 정보",
      fields: "자격 종목, 급수, 취득 연도",
      usage: "시설 매칭 시 국가 공인 자격을 보유한 전문 지도자가 근무하는지 검증하여 훈련의 전문성 확보",
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