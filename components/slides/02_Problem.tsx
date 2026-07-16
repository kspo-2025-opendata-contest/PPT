import React from 'react';
import { motion } from 'framer-motion';
import { SlideProps } from '../../types';
import { Archive, EyeSlashFill, SignpostSplit, ArrowRightCircleFill } from 'react-bootstrap-icons';

const problems = [
  {
    icon: Archive,
    title: '쌓이지만, 사장되는 데이터',
    desc: (
      <>매년 <strong className="text-white">20만+ 건</strong>의 체력 측정 데이터가 쌓이지만, 정작 <strong className="text-white">'내 재능이 무엇인지'</strong> 알려주는 데는 쓰이지 못합니다.</>
    ),
    accent: 'text-amber-400', bg: 'bg-amber-500/10', border: 'border-amber-500/25',
  },
  {
    icon: EyeSlashFill,
    title: '주관적 발굴의 사각지대',
    desc: (
      <>재능 발굴이 교사·코치의 <strong className="text-white">'경험과 감'</strong>에 의존해, 조용한 학생·소외지역·<strong className="text-white">장애 청소년</strong>은 발굴 기회조차 갖지 못합니다.</>
    ),
    accent: 'text-blue-400', bg: 'bg-blue-500/10', border: 'border-blue-500/25',
  },
  {
    icon: SignpostSplit,
    title: '끊기는 다음 걸음',
    desc: (
      <>재능을 알아도 <strong className="text-white">"그래서 어디서 시작하지?"</strong> — 프로그램·시설 정보가 흩어져 다음 단계로 이어지지 않습니다.</>
    ),
    accent: 'text-purple-400', bg: 'bg-purple-500/10', border: 'border-purple-500/25',
  },
];

const ProblemSlide: React.FC<SlideProps> = () => {
  return (
    <div className="h-full flex flex-col justify-center items-center px-8">
      <div className="text-center mb-10">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-black text-white tracking-tight mb-4"
        >
          재능은 있지만, <span className="text-brand-400">발굴되지 못합니다</span>
        </motion.h2>
        <p className="text-slate-300 text-2xl font-medium">
          숨은 스포츠 재능을 데이터로 찾아낼 방법이, 지금까지 없었습니다.
        </p>
      </div>

      <div className="w-full max-w-[95%] grid grid-cols-3 gap-8">
        {problems.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 + i * 0.15 }}
            className={`rounded-3xl border ${p.border} ${p.bg} p-10 flex flex-col shadow-2xl`}
          >
            <div className={`w-16 h-16 rounded-2xl bg-slate-900/50 flex items-center justify-center mb-6 ${p.accent}`}>
              <p.icon size={34} />
            </div>
            <h3 className="text-2xl font-black text-white mb-4 leading-tight" style={{ wordBreak: 'keep-all' }}>{p.title}</h3>
            <p className="text-slate-200 text-xl leading-relaxed" style={{ wordBreak: 'keep-all' }}>{p.desc}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="w-full max-w-[95%] mt-8 bg-brand-500/10 border border-brand-500/30 rounded-2xl px-8 py-5 flex items-center gap-4"
      >
        <ArrowRightCircleFill className="text-brand-400 shrink-0" size={34} />
        <p className="text-white text-xl font-bold" style={{ wordBreak: 'keep-all' }}>
          그래서, 흩어진 <span className="text-brand-400">공공데이터</span>로 숨은 재능을 <span className="text-brand-400">공정하게 발굴하고 연결</span>하는 플랫폼이 필요합니다.
        </p>
      </motion.div>
    </div>
  );
};

export default ProblemSlide;
