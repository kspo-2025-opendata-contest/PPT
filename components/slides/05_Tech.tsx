import React from 'react';
import { motion } from 'framer-motion';
import { SlideProps } from '../../types';
import { AreaChart, Area, XAxis, YAxis, ResponsiveContainer, ReferenceLine } from 'recharts';

// Generate bell curve data using integers to avoid floating point precision issues
const generateBellCurve = () => {
  const data = [];
  // Range from -3.5 to 3.5 in steps of 0.1
  for (let i = -35; i <= 35; i++) {
    const z = i / 10;
    const val = (1 / Math.sqrt(2 * Math.PI)) * Math.exp(-(z * z) / 2);
    // T-Score conversion: 50 + 10*z
    data.push({ z: parseFloat(z.toFixed(1)), y: val, label: (z * 10 + 50).toFixed(0) }); 
  }
  return data;
};

const data = generateBellCurve();

const TechSlide: React.FC<SlideProps> = () => {
  return (
    <div className="h-full flex flex-col md:flex-row gap-12 items-center px-4">
      
      {/* Visual: Normal Distribution */}
      {/* Added min-w-0 to ensure Recharts sizes correctly in flex context */}
      <div className="relative h-[450px] w-full md:w-1/2 min-w-0 bg-slate-800/30 rounded-[2rem] border border-white/5 flex items-center justify-center overflow-hidden p-6 shadow-2xl">
        <h3 className="absolute top-6 right-6 text-white/30 text-base font-bold tracking-widest">STATISTICAL MODEL</h3>
        
        {/* Formula Badge */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
          className="absolute top-6 left-6 bg-slate-900/90 backdrop-blur border border-slate-600 px-4 py-2 rounded-lg shadow-lg z-10"
        >
          <code className="text-brand-400 font-mono text-lg font-bold">P5~P95 → 0-100</code>
        </motion.div>

        <ResponsiveContainer width="100%" height="80%">
          <AreaChart data={data} margin={{ top: 20, right: 0, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="colorY" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#14b8a6" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#14b8a6" stopOpacity={0}/>
              </linearGradient>
            </defs>
            {/* 
              XAxis must be type="number" for ReferenceLine to position correctly by value 
              instead of by index. domain includes data min/max.
            */}
            <XAxis dataKey="z" type="number" domain={['dataMin', 'dataMax']} hide />
            <YAxis hide />
            <Area type="monotone" dataKey="y" stroke="#14b8a6" strokeWidth={3} fillOpacity={1} fill="url(#colorY)" isAnimationActive={false} />
            {/* User Position at Z = 1.7 (Top 4.5% approx, Grade 1) */}
            <ReferenceLine x={1.7} stroke="#fff" strokeWidth={2} strokeDasharray="5 5" label={{ position: 'top', value: 'You (1등급)', fill: 'white', fontSize: 18, fontWeight: 'bold' }} />
          </AreaChart>
        </ResponsiveContainer>

        <div className="absolute bottom-4 w-full px-12 flex justify-between text-sm text-slate-400 font-mono font-bold">
           <span>하위 1%</span>
           <span>평균 (50%)</span>
           <span>상위 1%</span>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 space-y-8">
        <div>
          <h2 className="text-3xl font-bold mb-4 text-white">재능 등급 산출 알고리즘</h2>
          <p className="text-slate-300 text-lg leading-relaxed">
            국민체력100 실측 3.5만명(청소년)을 모집단으로 하여,<br/>
            개인의 기록이 전체 분포에서 어느 위치에 해당하는지<br/>
            <strong className="text-white">실데이터로 검증된 백분위 정규화 모델</strong>로 분석합니다.
          </p>
        </div>

        <div className="space-y-6">
          <div className="relative pl-8 border-l-4 border-slate-700">
            <div className="absolute -left-[11px] top-1 w-5 h-5 rounded-full bg-slate-800 border-4 border-brand-500" />
            <h4 className="font-bold text-white text-xl mb-2">1. 데이터 정규화 (Normalization)</h4>
            <p className="text-slate-300 text-base leading-relaxed">
              성별·연령별로 상이한 체력 분포를 동일 기준으로 정규화하여<br/>
              서로 다른 항목(근력 vs 지구력)간의 <strong className="text-white">비교 불가능 문제를 해결</strong>했습니다.
            </p>
          </div>

          <div className="relative pl-8 border-l-4 border-slate-700">
             <div className="absolute -left-[11px] top-1 w-5 h-5 rounded-full bg-slate-800 border-4 border-brand-500" />
            <h4 className="font-bold text-white text-xl mb-2">2. 백분위 기반 5단계 등급제</h4>
            <p className="text-slate-300 text-base leading-relaxed">
              각 체력 항목을 <strong className="text-white">0~100으로 정규화</strong>하고, 실제 점수 분포로 임계값을 보정하여<br/>
              1~5단계의 직관적인 '재능 등급'을 부여합니다.
            </p>
          </div>

          <div className="p-4 bg-brand-500/10 rounded-2xl border border-brand-500/20 mt-4">
             <h5 className="font-bold text-brand-300 text-base mb-1">Why This Matters?</h5>
             <p className="text-sm text-brand-100 leading-relaxed">
               단순히 "오래달리기 50회"라는 기록은 의미가 없습니다.<br/>
               <strong className="text-white">"또래 상위 5% 수준"</strong>이라는 상대적 위치 정보가 재능 발견의 핵심입니다.
             </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechSlide;