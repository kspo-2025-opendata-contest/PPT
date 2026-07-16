import React from 'react';
import { motion } from 'framer-motion';
import { QA_ITEMS } from './qaData';

const DOT: Record<string, string> = {
  brand: 'bg-brand-500', blue: 'bg-blue-500', purple: 'bg-purple-500',
  emerald: 'bg-emerald-500', amber: 'bg-amber-500', orange: 'bg-orange-500',
};
const NUM: Record<string, string> = {
  brand: 'text-brand-300', blue: 'text-blue-300', purple: 'text-purple-300',
  emerald: 'text-emerald-300', amber: 'text-amber-300', orange: 'text-orange-300',
};

const QAIndex: React.FC = () => {
  const per = Math.ceil(QA_ITEMS.length / 3);
  const cols = [QA_ITEMS.slice(0, per), QA_ITEMS.slice(per, per * 2), QA_ITEMS.slice(per * 2)];

  return (
    <div className="h-full flex flex-col justify-center px-8 md:px-12 max-w-[95%] mx-auto w-full">
      <div className="mb-8">
        <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-3">예상 질문 목록</h2>
        <p className="text-slate-400 text-xl">
          심사기준 <span className="text-white font-semibold">완성도·AI 혁신성·독창성·발전가능성·ESG</span> 전 영역 + 정체성·차별화·개인정보까지 준비했습니다.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-5">
        {cols.map((col, ci) => (
          <div key={ci} className="space-y-2.5">
            {col.map((it, i) => (
              <motion.div
                key={it.no}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.04 * (ci * per + i), duration: 0.3 }}
                className="flex items-center gap-3 bg-slate-800/40 border border-slate-700/60 rounded-xl px-4 py-3"
              >
                <span className={`font-mono font-black text-sm ${NUM[it.accent] ?? 'text-brand-300'} shrink-0`}>
                  Q{it.no.toString().padStart(2, '0')}
                </span>
                <span className={`w-1.5 h-1.5 rounded-full ${DOT[it.accent] ?? 'bg-brand-500'} shrink-0`} />
                <span className="text-slate-200 text-base font-medium leading-snug line-clamp-1">{it.q}</span>
              </motion.div>
            ))}
          </div>
        ))}
      </div>

      <p className="text-center text-slate-500 text-base mt-8">
        질문 순서대로 다음 슬라이드에 정리되어 있습니다 · 해당 번호로 넘겨 함께 확인합니다
      </p>
    </div>
  );
};

export default QAIndex;
