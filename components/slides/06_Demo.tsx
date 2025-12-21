import React from 'react';
import { motion } from 'framer-motion';
import { SlideProps } from '../../types';
import { ExternalLink, CirclePlay } from 'lucide-react';

const DemoSlide: React.FC<SlideProps> = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center px-8">

      <div className="relative w-full max-w-5xl max-h-[70vh] aspect-video bg-slate-800 rounded-2xl border border-slate-700 shadow-2xl overflow-hidden group">
        {/* Browser Chrome */}
        <div className="h-10 bg-slate-900 border-b border-slate-700 flex items-center px-6 gap-3">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
          <div className="ml-6 flex-1 bg-slate-800 h-6 rounded flex items-center px-4 text-[10px] text-slate-500 font-mono">
            https://hidden-talent-web.onrender.com
          </div>
        </div>
        
        {/* Content Area - Placeholder for Live Demo */}
        <div className="relative h-full w-full flex items-center justify-center bg-slate-900/50 pb-16">
          <div className="flex flex-col items-center justify-center text-center space-y-6">
            <motion.div 
              animate={{ scale: [1, 1.05, 1], opacity: [0.8, 1, 0.8] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="w-24 h-24 bg-brand-500 rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(20,184,166,0.5)] cursor-pointer hover:bg-brand-400 transition-colors"
            >
               {/* Removed ml-2 to fix the centering issue */}
               <CirclePlay size={56} className="text-white fill-white/10" />
            </motion.div>
            
            <div className="space-y-4">
              <h3 className="text-4xl font-black text-white tracking-tight">Live Service Showcase</h3>
              <p className="text-slate-300 text-xl max-w-2xl px-4 leading-relaxed font-medium">
                공공데이터가 실제 가치로 변환되는 순간.<br/>
                <span className="text-brand-400">데이터 기반 재능 진단</span>의 전 과정을 직접 확인하세요.
              </p>
            </div>
          </div>
        </div>

        {/* Hover overlay with actual link */}
        <a
          href="https://hidden-talent-web.onrender.com/#home"
          target="_blank"
          rel="noreferrer"
          className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center backdrop-blur-md z-10 pb-32"
        >
          <div className="flex items-center gap-3 text-white font-black text-2xl group/link">
            <span className="border-b-2 border-brand-500 pb-1">서비스 바로가기</span>
            <ExternalLink size={28} className="group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
          </div>
        </a>
      </div>
    </div>
  );
};

export default DemoSlide;