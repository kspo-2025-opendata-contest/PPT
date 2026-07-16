import React from 'react';
import { motion } from 'framer-motion';
import { QAItem } from './qaData';
import { QuestionCircleFill, CheckCircleFill, ExclamationTriangleFill } from 'react-bootstrap-icons';

// Tailwind purge 대비: accent별 클래스를 정적으로 매핑
const ACCENT: Record<string, { chipBg: string; chipText: string; bar: string; catText: string; dot: string; qMark: string }> = {
  brand:   { chipBg: 'bg-brand-500/15',   chipText: 'text-brand-300',   bar: 'bg-brand-500',   catText: 'text-brand-300',   dot: 'text-brand-400',   qMark: 'text-brand-500/30' },
  blue:    { chipBg: 'bg-blue-500/15',    chipText: 'text-blue-300',    bar: 'bg-blue-500',    catText: 'text-blue-300',    dot: 'text-blue-400',    qMark: 'text-blue-500/30' },
  purple:  { chipBg: 'bg-purple-500/15',  chipText: 'text-purple-300',  bar: 'bg-purple-500',  catText: 'text-purple-300',  dot: 'text-purple-400',  qMark: 'text-purple-500/30' },
  emerald: { chipBg: 'bg-emerald-500/15', chipText: 'text-emerald-300', bar: 'bg-emerald-500', catText: 'text-emerald-300', dot: 'text-emerald-400', qMark: 'text-emerald-500/30' },
  amber:   { chipBg: 'bg-amber-500/15',   chipText: 'text-amber-300',   bar: 'bg-amber-500',   catText: 'text-amber-300',   dot: 'text-amber-400',   qMark: 'text-amber-500/30' },
  orange:  { chipBg: 'bg-orange-500/15',  chipText: 'text-orange-300',  bar: 'bg-orange-500',  catText: 'text-orange-300',  dot: 'text-orange-400',   qMark: 'text-orange-500/30' },
};

const QASlide: React.FC<{ item: QAItem }> = ({ item }) => {
  const c = ACCENT[item.accent] ?? ACCENT.brand;

  return (
    <div className="h-full flex flex-col justify-center px-8 md:px-12 max-w-7xl mx-auto w-full">
      {/* Category + number */}
      <div className="flex items-center gap-4 mb-5">
        <span className={`inline-flex items-center gap-2 px-5 py-2 rounded-full ${c.chipBg} ${c.catText} font-bold text-base border border-white/10`}>
          <span className={`w-2 h-2 rounded-full ${c.bar}`} />
          {item.category}
        </span>
        <span className="text-white/25 font-mono font-bold text-base">Q{item.no.toString().padStart(2, '0')}</span>
      </div>

      {/* Question */}
      <div className="flex items-start gap-4 mb-6">
        <QuestionCircleFill className={`${c.dot} shrink-0 mt-1`} size={38} />
        <h2 className="text-4xl font-black text-white leading-snug tracking-tight" style={{ wordBreak: 'keep-all', textWrap: 'balance' } as React.CSSProperties}>
          {item.q}
        </h2>
      </div>

      {/* Answer card */}
      <div className="bg-slate-800/50 rounded-[1.75rem] border border-slate-700/70 p-10 shadow-2xl relative overflow-hidden">
        <div className={`absolute left-0 top-0 bottom-0 w-1.5 ${c.bar}`} />

        {/* Core answer */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex items-start gap-4 mb-6"
        >
          <CheckCircleFill className={`${c.dot} shrink-0 mt-1`} size={30} />
          <p className="text-2xl font-bold text-white leading-relaxed" style={{ wordBreak: 'keep-all', textWrap: 'balance' } as React.CSSProperties}>{item.aCore}</p>
        </motion.div>

        {/* Supporting points */}
        <ul className="space-y-3 pl-1">
          {item.points.map((p, i) => (
            <li key={i} className="flex items-start gap-3 text-slate-200 text-lg leading-relaxed" style={{ wordBreak: 'keep-all', textWrap: 'pretty' } as React.CSSProperties}>
              <span className={`${c.dot} font-black mt-0.5 shrink-0`}>·</span>
              <span>{p}</span>
            </li>
          ))}
        </ul>

        {/* Honesty note */}
        {item.honesty && (
          <div className="mt-5 flex items-start gap-3 bg-amber-500/10 border border-amber-500/25 rounded-2xl px-5 py-4">
            <ExclamationTriangleFill className="text-amber-400 shrink-0 mt-0.5" size={22} />
            <p className="text-amber-100 text-lg leading-relaxed font-medium" style={{ wordBreak: 'keep-all', textWrap: 'pretty' } as React.CSSProperties}>{item.honesty}</p>
          </div>
        )}
      </div>

      {/* Evidence chips */}
      {item.chips && item.chips.length > 0 && (
        <div className="flex flex-wrap gap-3 mt-5">
          {item.chips.map((chip, i) => (
            <span key={i} className={`px-5 py-2.5 rounded-xl ${c.chipBg} ${c.chipText} font-bold text-base border border-white/10`}>
              {chip}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default QASlide;
