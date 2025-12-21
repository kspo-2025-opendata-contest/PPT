import React from 'react';
import { motion } from 'framer-motion';
import { SlideProps } from '../../types';
import { Database, Cpu, MonitorSmartphone } from 'lucide-react';

// 로고 이미지 import
import viteLogo from '../../vite logo.png';
import fastapiLogo from '../../fastapi logo.svg';
import renderLogo from '../../render logo.jpeg';
import geminiLogo from '../../gemini logo.png';

const ArchitectureSlide: React.FC<SlideProps> = () => {
  return (
    <div className="h-full flex flex-col justify-center items-center px-4 overflow-hidden">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-black mb-3 text-white tracking-tight">시스템 구조 및 기술 스택</h2>
        <p className="text-slate-300 text-xl font-medium">오픈데이터 전처리부터 AI 분석, Render 배포까지의 <strong className="text-brand-400">엔드 투 엔드(End-to-End)</strong> 아키텍처</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl w-full items-stretch">
        {/* System Flow Card */}
        <div className="bg-slate-800/60 rounded-[2.5rem] border border-slate-700 p-10 flex flex-col justify-center shadow-2xl relative">
          <h3 className="text-2xl font-black text-white mb-8 flex items-center gap-3">
            <span className="w-2 h-8 bg-brand-500 rounded-full" />
            데이터 및 서비스 흐름
          </h3>
          
          <div className="space-y-6">
            {/* Step 1: Data Input */}
            <div className="flex items-start gap-5 group">
              <div className="w-14 h-14 bg-blue-500/10 text-blue-400 rounded-2xl flex items-center justify-center shrink-0 border border-blue-500/20 group-hover:scale-105 transition-transform mt-1">
                <Database size={28} />
              </div>
              <div className="flex-1">
                <p className="text-white font-black text-lg mb-1">공공데이터 CSV → ETL → PostgreSQL</p>
                <p className="text-slate-400 text-sm leading-relaxed font-medium">
                  체력측정(30,000건), 청소년 프로그램(200,000건),<br/>
                  체육시설(3,500건) 등 5개 핵심 데이터셋
                </p>
              </div>
            </div>

            {/* Step 2: Processing */}
            <div className="flex items-start gap-5 group">
              <div className="w-14 h-14 bg-brand-500/10 text-brand-400 rounded-2xl flex items-center justify-center shrink-0 border border-brand-500/20 group-hover:scale-105 transition-transform mt-1">
                <Cpu size={28} />
              </div>
              <div className="flex-1">
                <p className="text-white font-black text-lg mb-1">FastAPI 서버 + Gemini API 연동</p>
                <p className="text-slate-400 text-sm leading-relaxed font-medium">
                  연령·성별 그룹별 체력 분포 분석,<br/>
                  가중치 기반 재능 점수 산출, AI 맞춤형 코멘트 생성
                </p>
              </div>
            </div>

            {/* Step 3: Client */}
            <div className="flex items-start gap-5 group">
              <div className="w-14 h-14 bg-purple-500/10 text-purple-400 rounded-2xl flex items-center justify-center shrink-0 border border-purple-500/20 group-hover:scale-105 transition-transform mt-1">
                <MonitorSmartphone size={28} />
              </div>
              <div className="flex-1">
                <p className="text-white font-black text-lg mb-1">Vite 프론트엔드 + Tailwind CSS</p>
                <p className="text-slate-400 text-sm leading-relaxed font-medium">
                  사용자 체력측정 입력 → 재능 진단 결과<br/>
                  → 프로그램·시설 추천 → 마이페이지 이력 관리
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Tech Stack Grid */}
        <div className="grid grid-cols-2 gap-4">
          <motion.div whileHover={{ y: -5 }} className="bg-slate-800/80 p-8 rounded-3xl border border-slate-700 flex flex-col items-center text-center shadow-lg">
            <div className="w-16 h-16 mb-4 flex items-center justify-center rounded-full bg-slate-800 border border-slate-600 overflow-hidden">
              <img src={viteLogo} alt="Vite" className="w-10 h-10 object-contain" />
            </div>
            <h4 className="text-slate-500 text-xs font-black uppercase mb-2 tracking-widest">Frontend</h4>
            <p className="text-white font-black text-xl leading-tight">Vite / JS<br/><span className="text-brand-400 text-sm">Tailwind CSS</span></p>
          </motion.div>

          <motion.div whileHover={{ y: -5 }} className="bg-slate-800/80 p-8 rounded-3xl border border-slate-700 flex flex-col items-center text-center shadow-lg">
            <div className="w-16 h-16 mb-4 flex items-center justify-center rounded-full bg-slate-800 border border-slate-600 overflow-hidden">
              <img src={fastapiLogo} alt="FastAPI" className="w-10 h-10 object-contain" />
            </div>
            <h4 className="text-slate-500 text-xs font-black uppercase mb-2 tracking-widest">Backend</h4>
            <p className="text-white font-black text-xl leading-tight">FastAPI<br/><span className="text-brand-400 text-xs">SQLAlchemy</span></p>
          </motion.div>

          <motion.div whileHover={{ y: -5 }} className="bg-slate-800/80 p-8 rounded-3xl border border-slate-700 flex flex-col items-center text-center shadow-lg">
            <div className="w-16 h-16 mb-4 flex items-center justify-center rounded-full bg-white border border-slate-600 overflow-hidden">
              <img src={renderLogo} alt="Render" className="w-10 h-10 object-contain" />
            </div>
            <h4 className="text-slate-500 text-xs font-black uppercase mb-2 tracking-widest">Infrastructure</h4>
            <p className="text-white font-black text-xl leading-tight">Render Cloud<br/><span className="text-brand-400 text-sm">PostgreSQL</span></p>
          </motion.div>

          <motion.div whileHover={{ y: -5 }} className="bg-slate-800/80 p-8 rounded-3xl border border-slate-700 flex flex-col items-center text-center shadow-lg">
            <div className="w-16 h-16 mb-4 flex items-center justify-center rounded-full bg-slate-800 border border-slate-600 overflow-hidden">
              <img src={geminiLogo} alt="Gemini" className="w-10 h-10 object-contain" />
            </div>
            <h4 className="text-slate-500 text-xs font-black uppercase mb-2 tracking-widest">AI Engine</h4>
            <p className="text-white font-black text-xl leading-tight">Gemini API<br/><span className="text-brand-400 text-sm">Generative AI</span></p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ArchitectureSlide;