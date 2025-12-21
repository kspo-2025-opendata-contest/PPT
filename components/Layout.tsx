import React from 'react';
import { motion } from 'framer-motion';
import { LayoutProps } from '../types';

const Layout: React.FC<LayoutProps> = ({ children, title, subtitle, pageNumber, totalPages }) => {
  return (
    <div className="relative w-full h-screen bg-slate-900 overflow-hidden flex flex-col p-8 md:p-12 selection:bg-brand-500 selection:text-white">
      {/* Background Ambience */}
      <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-brand-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />
      
      {/* Header */}
      <header className="flex justify-between items-end mb-8 border-b border-white/10 pb-4 z-10">
        <div>
          {subtitle && (
            <motion.h3 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-brand-400 font-medium text-lg uppercase tracking-wider mb-1"
            >
              {subtitle}
            </motion.h3>
          )}
          {title && (
            <motion.h1 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-black text-white tracking-tight"
            >
              {title}
            </motion.h1>
          )}
        </div>
        <div className="flex flex-col items-end">
          <span className="text-white/60 font-bold text-sm">2025년 국민체육진흥공단 공공데이터 활용 경진대회</span>
          <div className="flex items-center gap-2 mt-2">
            <div className="h-1 w-32 bg-slate-800 rounded-full overflow-hidden">
              <motion.div 
                className="h-full bg-brand-500"
                initial={{ width: 0 }}
                animate={{ width: `${(pageNumber / totalPages) * 100}%` }}
              />
            </div>
            <span className="text-white/80 font-mono text-sm">
              {pageNumber.toString().padStart(2, '0')} / {totalPages.toString().padStart(2, '0')}
            </span>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 relative z-10 flex flex-col justify-center">
        {children}
      </main>

      {/* Footer */}
      <footer className="absolute bottom-6 left-12 right-12 flex justify-between items-center text-xs text-white/30 z-10">
        <span>TEAM. 숨어있는 재능을 찾아서</span>
      </footer>
    </div>
  );
};

export default Layout;