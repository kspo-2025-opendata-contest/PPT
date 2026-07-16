import React from 'react';
import { motion } from 'framer-motion';
import { SlideProps } from '../../types';
import { RocketTakeoff, GraphUpArrow, Globe } from 'react-bootstrap-icons';

const RoadmapSlide: React.FC<SlideProps> = () => {
  const plans = [
    {
      phase: "Phase 1. 도입기",
      title: "서비스 고도화",
      items: ["지자체·학교 연계 실증(파일럿) 추진", "사회적 배려 대상자 데이터 태깅 시스템", "공공데이터 품질 개선 및 API 최적화"],
      icon: RocketTakeoff,
      borderColor: "border-brand-500",
      textColor: "text-brand-500",
      bgColor: "bg-brand-500"
    },
    {
      phase: "Phase 2. 확장기",
      title: "분석·매칭 고도화",
      items: ["개인 맞춤 프로그램 추천 정교화", "비장애·장애 통합 분석 고도화", "지역 인프라 실시간 연계 확대"],
      icon: GraphUpArrow,
      borderColor: "border-blue-500",
      textColor: "text-blue-500",
      bgColor: "bg-blue-500"
    },
    {
      phase: "Phase 3. 완성기",
      title: "스포츠 접근성 플랫폼",
      items: ["전국 스포츠 인프라·수요 지도 구축", "생활체육 참여 사각지대 해소", "공공데이터 기반 정책 의사결정 지원"],
      icon: Globe,
      borderColor: "border-purple-500",
      textColor: "text-purple-500",
      bgColor: "bg-purple-500"
    }
  ];

  return (
    <div className="h-full flex flex-col justify-center items-center">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-[95%] mx-auto w-full px-6">
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className={`relative p-10 rounded-2xl bg-slate-800 border-t-4 ${plan.borderColor} shadow-2xl h-full flex flex-col`}
          >
            <div className={`absolute -top-5 left-6 bg-slate-900 px-5 py-2 rounded-full border-2 ${plan.borderColor}`}>
               <span className={`font-bold text-lg ${plan.textColor}`}>{plan.phase}</span>
            </div>

            <div className="mt-8 mb-8">
              <plan.icon size={52} className={`mb-5 ${plan.textColor}`} />
              <h3 className="text-3xl font-bold text-white leading-tight">{plan.title}</h3>
            </div>

            <ul className="space-y-5 flex-1">
              {plan.items.map((item, i) => (
                <li key={i} className="flex items-start gap-4 text-slate-200">
                  <div className={`w-2.5 h-2.5 rounded-full mt-2.5 shrink-0 bg-current ${plan.textColor}`} />
                  <span className="leading-relaxed text-xl font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default RoadmapSlide;