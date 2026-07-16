import React from 'react';
import { motion } from 'framer-motion';
import { SlideProps } from '../../types';
import { Database, Cpu, Display } from 'react-bootstrap-icons';

// 로고 이미지 import
import viteLogo from '../../vite-logo.svg';
import fastapiLogo from '../../fastapi-logo.svg';
import renderLogo from '../../render logo.jpeg';
import openaiLogo from '../../openai-logo.svg';
import supabaseLogo from '../../supabase-logo.svg';

const ArchitectureSlide: React.FC<SlideProps> = () => {
  return (
    <div className="h-full flex flex-col justify-center items-center px-6 overflow-hidden">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-black mb-3 text-white tracking-tight">시스템 구조 및 기술 스택</h2>
        <p className="text-slate-300 text-2xl font-medium">오픈데이터 전처리부터 AI 분석, Render 배포까지의 <strong className="text-brand-400">엔드 투 엔드(End-to-End)</strong> 아키텍처</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl w-full items-stretch">
        {/* System Flow Card */}
        <div className="bg-slate-800/60 rounded-[2.5rem] border border-slate-700 p-10 flex flex-col justify-center shadow-2xl relative">
          <h3 className="text-3xl font-black text-white mb-8 flex items-center gap-3">
            <span className="w-2 h-9 bg-brand-500 rounded-full" />
            데이터 및 서비스 흐름
          </h3>

          <div className="space-y-7">
            {/* Step 1: Data Input */}
            <div className="flex items-start gap-6 group">
              <div className="w-16 h-16 bg-blue-500/10 text-blue-400 rounded-2xl flex items-center justify-center shrink-0 border border-blue-500/20 group-hover:scale-105 transition-transform mt-1">
                <Database size={34} />
              </div>
              <div className="flex-1">
                <p className="text-white font-black text-xl mb-1.5">공공데이터 CSV → ETL → PostgreSQL</p>
                <p className="text-slate-400 text-base leading-relaxed font-medium" style={{ wordBreak: 'keep-all' }}>
                  체력측정(20만건), 청소년 프로그램(172,000건), 공공체육시설(42,000개) 등 5개 핵심 데이터셋
                </p>
              </div>
            </div>

            {/* Step 2: Processing */}
            <div className="flex items-start gap-6 group">
              <div className="w-16 h-16 bg-brand-500/10 text-brand-400 rounded-2xl flex items-center justify-center shrink-0 border border-brand-500/20 group-hover:scale-105 transition-transform mt-1">
                <Cpu size={34} />
              </div>
              <div className="flex-1">
                <p className="text-white font-black text-xl mb-1.5">FastAPI 서버 + 생성형 AI(OpenAI) 연동</p>
                <p className="text-slate-400 text-base leading-relaxed font-medium" style={{ wordBreak: 'keep-all' }}>
                  연령·성별 그룹별 체력 분포 분석, 가중치 기반 재능 점수 산출, AI 맞춤형 코멘트 생성
                </p>
              </div>
            </div>

            {/* Step 3: Client */}
            <div className="flex items-start gap-6 group">
              <div className="w-16 h-16 bg-purple-500/10 text-purple-400 rounded-2xl flex items-center justify-center shrink-0 border border-purple-500/20 group-hover:scale-105 transition-transform mt-1">
                <Display size={34} />
              </div>
              <div className="flex-1">
                <p className="text-white font-black text-xl mb-1.5">Vite 프론트엔드 + Tailwind CSS</p>
                <p className="text-slate-400 text-base leading-relaxed font-medium" style={{ wordBreak: 'keep-all' }}>
                  체력측정 입력 → 재능 진단 → 프로그램·시설 추천 → 이력 관리
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="flex flex-col justify-center gap-3">
          {[
            { logo: viteLogo, cat: 'Frontend', name: 'Vite / JS', sub: 'Tailwind CSS', img: 'w-9 h-9', bg: 'bg-slate-800' },
            { logo: fastapiLogo, cat: 'Backend', name: 'FastAPI', sub: 'SQLAlchemy', img: 'w-11 h-11', bg: 'bg-slate-800' },
            { logo: supabaseLogo, cat: 'Database', name: 'Supabase', sub: 'PostgreSQL', img: 'w-9 h-9', bg: 'bg-slate-800' },
            { logo: renderLogo, cat: 'Infrastructure', name: 'Render Cloud', sub: '배포 · 호스팅', img: 'w-11 h-11', bg: 'bg-white' },
            { logo: openaiLogo, cat: 'AI Engine', name: 'OpenAI GPT', sub: 'Generative AI', img: 'w-10 h-10', bg: 'bg-slate-800' },
          ].map((s, i) => (
            <motion.div key={i} whileHover={{ x: 4 }} className="flex items-center gap-4 bg-slate-800/80 rounded-2xl border border-slate-700 px-5 py-3 shadow-lg">
              <div className={`w-14 h-14 rounded-xl ${s.bg} border border-slate-600 flex items-center justify-center overflow-hidden shrink-0`}>
                <img src={s.logo} alt={s.name} className={`${s.img} object-contain`} />
              </div>
              <div className="min-w-0">
                <div className="text-slate-500 text-xs font-black uppercase tracking-widest">{s.cat}</div>
                <div className="text-white font-black text-xl leading-tight">{s.name} <span className="text-brand-400 text-sm font-bold">· {s.sub}</span></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ArchitectureSlide;