import React from 'react';
import { motion } from 'framer-motion';
import { SlideProps } from '../../types';
import { Database, Robot, Trophy, ArrowRight, LightningChargeFill, Diagram3, ClipboardData } from 'react-bootstrap-icons';

const AISlide: React.FC<SlideProps> = () => {
  return (
    <div className="h-full flex flex-col justify-center items-center px-4 overflow-hidden py-2">
      <div className="text-center mb-5">
        <h2 className="text-4xl font-black mb-3 text-white">AI 매칭 및 분석 알고리즘</h2>
        <p className="text-slate-200 text-xl max-w-5xl mx-auto whitespace-nowrap">
          <strong className="text-brand-400 font-black">통계 진단 모델</strong>과 <strong className="text-brand-400 font-black">생성형 AI(OpenAI)</strong>를 결합해 개인별 맞춤형 성장 가이드를 생성합니다.
        </p>
      </div>

      <div className="w-full max-w-[98%] flex flex-col md:flex-row items-center justify-center gap-6">
        
        {/* Step 1: Input */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex-1 bg-slate-800 rounded-[2rem] p-6 border border-slate-700 flex flex-col items-center text-center group min-w-[280px] shadow-2xl"
        >
          <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center mb-5 text-blue-300 shadow-lg">
            <Database size={36} />
          </div>
          <h3 className="text-2xl font-black text-white mb-4">Data Context</h3>
          <div className="text-slate-200 text-lg space-y-3 bg-slate-900/60 p-5 rounded-2xl w-full border border-white/5 font-bold">
            <p>개인별 체력 측정 데이터</p>
            <p>백분위 기반 정규화 지표</p>
            <p>성별·연령별 통계 컨텍스트</p>
          </div>
          <div className="mt-auto pt-4 font-mono text-[10px] text-blue-400 font-black uppercase tracking-[0.3em]">Backend Pre-processing</div>
        </motion.div>

        <div className="hidden md:flex flex-col items-center justify-center text-brand-400 opacity-40">
          <ArrowRight size={40} />
        </div>

        {/* Step 2: Hybrid AI Engine */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          className="flex-[1.4] bg-gradient-to-br from-slate-800 to-slate-900 rounded-[2.5rem] p-8 border-2 border-brand-500/50 shadow-[0_0_60px_rgba(20,184,166,0.2)] relative flex flex-col items-center text-center min-w-[350px]"
        >
          <div className="absolute -top-4 px-8 py-2 bg-brand-500 rounded-full text-[10px] font-black text-white shadow-xl tracking-[0.2em] uppercase">HYBRID AI ENGINE</div>
          
          <div className="w-20 h-20 bg-brand-500/20 rounded-full flex items-center justify-center mb-6 text-brand-400 shadow-[0_0_30px_rgba(20,184,166,0.4)]">
            <LightningChargeFill size={40} className="animate-pulse" />
          </div>
          
          <h3 className="text-3xl font-black text-white mb-6 tracking-tight">AI Reasoning & Synthesis</h3>
          
          <div className="w-full space-y-4">
             <div className="bg-slate-900/90 p-5 rounded-2xl border border-slate-700 flex items-center gap-5 hover:border-brand-500/50 transition-colors">
               <Diagram3 size={28} className="text-purple-400 shrink-0" />
               <div className="text-left">
                 <div className="text-white font-black text-lg mb-0.5">통계 종목 매칭</div>
                 <div className="text-slate-400 text-sm leading-snug font-medium" style={{ wordBreak: 'keep-all' }}>측정 수치 × 종목별 가중치 모델로 최적 종목을 정량 산출</div>
               </div>
             </div>

             <div className="bg-slate-900/90 p-5 rounded-2xl border border-slate-700 flex items-center gap-5 hover:border-brand-500/50 transition-colors">
               <Robot size={28} className="text-green-400 shrink-0" />
               <div className="text-left">
                 <div className="text-white font-black text-lg mb-0.5">생성형 AI 코칭</div>
                 <div className="text-slate-400 text-sm leading-snug font-medium" style={{ wordBreak: 'keep-all' }}>OpenAI 기반, 존중을 담은 개인 맞춤 코칭 코멘트 생성</div>
               </div>
             </div>
          </div>
        </motion.div>

        <div className="hidden md:flex flex-col items-center justify-center text-brand-400 opacity-40">
          <ArrowRight size={40} />
        </div>

        {/* Step 3: Result Output */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex-1 bg-slate-800 rounded-[2rem] p-6 border border-slate-700 flex flex-col items-center text-center group min-w-[280px] shadow-2xl"
        >
          <div className="w-16 h-16 bg-pink-500/20 rounded-2xl flex items-center justify-center mb-5 text-pink-300 shadow-lg">
            <Trophy size={36} />
          </div>
          <h3 className="text-2xl font-black text-white mb-4">Actionable Insight</h3>
          
          <div className="w-full space-y-4 mt-1">
            <div className="bg-white/5 p-4 rounded-xl flex justify-between items-center border border-white/5">
               <div className="flex items-center gap-2">
                 <Trophy size={18} className="text-brand-400" />
                 <span className="text-white font-black text-base">최적 스포츠 종목 매칭</span>
               </div>
               <span className="text-brand-400 font-mono font-black text-base">COMPLETED</span>
            </div>
            <div className="bg-white/5 p-4 rounded-xl flex justify-between items-center border border-white/5">
               <div className="flex items-center gap-2">
                 <ClipboardData size={18} className="text-brand-400" />
                 <span className="text-white font-black text-base">AI 코멘트 리포트</span>
               </div>
               <span className="text-brand-400 font-mono font-black text-base">PREPARED</span>
            </div>
          </div>
          
          <div className="mt-auto pt-4 font-mono text-[10px] text-pink-400 font-black uppercase tracking-[0.3em]">Final Diagnostic Report</div>
        </motion.div>
      </div>

      <div className="w-full max-w-[98%] mt-6 flex items-center justify-center gap-5 bg-slate-800/50 border border-brand-500/25 rounded-2xl px-8 py-4">
        <span className="text-brand-400 font-black text-lg shrink-0">왜 하이브리드인가?</span>
        <span className="text-slate-300 text-base font-medium" style={{ wordBreak: 'keep-all' }}>
          점수는 <strong className="text-white">통계</strong>가, 해석은 <strong className="text-white">생성형 AI</strong>가 — 역할을 분리해 <strong className="text-brand-300">환각·과장을 원천 차단</strong>. 존중·정직 <strong className="text-white">6대 가드레일</strong> 내장.
        </span>
      </div>
    </div>
  );
};

export default AISlide;