import React, { useState, useEffect, useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Layout from './components/Layout';
import { SlideData } from './types';

// Import Slides
import IntroSlide from './components/slides/01_Intro';
import TOCSlide from './components/slides/01_TOC';
import ProblemSlide from './components/slides/02_Problem';
import SolutionSlide from './components/slides/03_Solution';
import AccessibilitySlide from './components/slides/03_Accessibility';
import DataSlide from './components/slides/04_Data';
import TechSlide from './components/slides/05_Tech';
import AISlide from './components/slides/05_AI_Logic';
import ArchitectureSlide from './components/slides/05_Architecture';
import DemoSlide from './components/slides/06_Demo';
import Demo2Slide from './components/slides/06b_Demo';
import Demo3Slide from './components/slides/06c_Demo';
import Demo4Slide from './components/slides/06d_Demo';
import ImpactLogicSlide from './components/slides/07_Impact_Logic';
import ImpactOutcomeSlide from './components/slides/07_Impact_Outcome';
import RoadmapSlide from './components/slides/08_Roadmap';
import TeamSlide from './components/slides/08_Team';
import EndSlide from './components/slides/09_End';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides: SlideData[] = [
  { id: 1, component: IntroSlide, title: "Intro" },
  { id: 2, component: TOCSlide, title: "목차" },
  { id: 3, component: ProblemSlide, title: "제안 배경 및 문제 정의" },
  { id: 4, component: SolutionSlide, title: "서비스 개요" },
  { id: 5, component: AccessibilitySlide, title: "장애인 체육 지원" },
  { id: 6, component: DataSlide, title: "공공데이터 활용 전략" },
  { id: 7, component: TechSlide, title: "핵심 기술: 통계 모델" },
  { id: 8, component: AISlide, title: "핵심 기술: AI 알고리즘" },
  { id: 9, component: ArchitectureSlide, title: "시스템 구조 및 기술 스택" },
  { id: 10, component: DemoSlide, title: "서비스 시연 ① 재능 진단" },
  { id: 101, component: Demo2Slide, title: "서비스 시연 ② AI 코칭·추천" },
  { id: 102, component: Demo3Slide, title: "서비스 시연 ③ 프로그램 매칭" },
  { id: 103, component: Demo4Slide, title: "서비스 시연 ④ 인프라 대시보드" },
  { id: 11, component: ImpactLogicSlide, title: "기대 효과: 서비스 가치" },
  { id: 12, component: ImpactOutcomeSlide, title: "기대 효과: 정량적 성과" },
  { id: 13, component: RoadmapSlide, title: "향후 발전 계획" },
  { id: 14, component: TeamSlide, title: "팀 소개" },
  { id: 15, component: EndSlide, title: "End" },
];

function App() {
  // URL 파라미터에서 슬라이드 번호 읽기 (PDF 생성용)
  const getInitialSlide = () => {
    const params = new URLSearchParams(window.location.search);
    const slideParam = params.get('slide');
    if (slideParam) {
      const slideNum = parseInt(slideParam, 10);
      if (!isNaN(slideNum) && slideNum >= 0 && slideNum < slides.length) {
        return slideNum;
      }
    }
    return 0;
  };

  const [currentSlide, setCurrentSlide] = useState(getInitialSlide);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev < slides.length - 1 ? prev + 1 : prev));
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev > 0 ? prev - 1 : prev));
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'Space') {
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        prevSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  const CurrentSlideComponent = slides[currentSlide].component;

  return (
    <Layout 
      title={currentSlide > 0 && currentSlide < slides.length - 1 ? slides[currentSlide].title : undefined}
      subtitle={currentSlide > 0 && currentSlide < slides.length - 1 ? `PART ${currentSlide.toString().padStart(2, '0')}` : undefined}
      pageNumber={currentSlide + 1}
      totalPages={slides.length}
    >
      <div className="relative w-full h-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="w-full h-full"
          >
            <CurrentSlideComponent isActive={true} />
          </motion.div>
        </AnimatePresence>

        <div className="fixed bottom-8 right-8 flex gap-2 z-50 opacity-0 hover:opacity-100 transition-opacity">
          <button 
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className="p-3 bg-white/10 hover:bg-white/20 rounded-full disabled:opacity-30 backdrop-blur-md transition-colors"
          >
            <ChevronLeft size={24} />
          </button>
          <button 
            onClick={nextSlide}
            disabled={currentSlide === slides.length - 1}
            className="p-3 bg-brand-500 hover:bg-brand-600 rounded-full disabled:opacity-30 shadow-lg shadow-brand-500/30 transition-colors"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </Layout>
  );
}

export default App;
