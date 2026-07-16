import React from 'react';
import { motion } from 'framer-motion';
import { SlideProps } from '../../types';
import { Target, Activity, Award } from 'lucide-react';

const RoadmapSlide: React.FC<SlideProps> = () => {
  const plans = [
    {
      phase: "Phase 1. 도입기",
      title: "서비스 고도화",
      items: ["지자체·학교 연계 실증(파일럿) 추진", "사회적 배려 대상자 데이터 태깅 시스템", "공공데이터 품질 개선 및 API 최적화"],
      icon: Target,
      borderColor: "border-brand-500",
      textColor: "text-brand-500",
      bgColor: "bg-brand-500"
    },
    {
      phase: "Phase 2. 확장기",
      title: "성장 관리 시스템 구축",
      items: ["부상 위험 예측 AI 모델 도입", "4주/8주 단위 맞춤형 훈련 처방 자동화", "체육 인재 장학 재단 자동 매칭"],
      icon: Activity,
      borderColor: "border-blue-500",
      textColor: "text-blue-500",
      bgColor: "bg-blue-500"
    },
    {
      phase: "Phase 3. 완성기",
      title: "국가 스포츠 인재 지도",
      items: ["전국 단위 유소년 스포츠 DB 구축", "엘리트-생활체육 선순환 구조 확립", "글로벌 스카우팅 데이터 표준 제시"],
      icon: Award,
      borderColor: "border-purple-500",
      textColor: "text-purple-500",
      bgColor: "bg-purple-500"
    }
  ];

  return (
    <div className="h-full flex flex-col justify-center items-center">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[90%] mx-auto w-full px-4">
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className={`relative p-6 rounded-2xl bg-slate-800 border-t-4 ${plan.borderColor} shadow-2xl h-full flex flex-col`}
          >
            <div className={`absolute -top-5 left-6 bg-slate-900 px-4 py-1.5 rounded-full border-2 ${plan.borderColor}`}>
               <span className={`font-bold text-base ${plan.textColor}`}>{plan.phase}</span>
            </div>

            <div className="mt-6 mb-6">
              <plan.icon size={40} className={`mb-4 ${plan.textColor}`} />
              <h3 className="text-2xl font-bold text-white leading-tight">{plan.title}</h3>
            </div>

            <ul className="space-y-4 flex-1">
              {plan.items.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-200">
                  <div className={`w-2 h-2 rounded-full mt-2 shrink-0 bg-current ${plan.textColor}`} />
                  <span className="leading-relaxed text-base font-medium">{item}</span>
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