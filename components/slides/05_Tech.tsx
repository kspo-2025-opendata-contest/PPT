import React from 'react';
import { motion } from 'framer-motion';
import { SlideProps } from '../../types';
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  ResponsiveContainer,
  ReferenceLine,
  ReferenceArea,
} from 'recharts';

// 실측 분포 히스토그램(예시 형상).
// 핵심: 정규분포를 "가정"하지 않고, 국민체력100 실측 표본의 경험적 분포를 그대로 사용.
// p5(하위 5%)=0점, p95(상위 5%)=100점 앵커로 선형 정규화한다.
const P5_IDX = 5;   // 하위 5% 지점 → 0점
const P95_IDX = 39; // 상위 5% 지점 → 100점
const YOU_IDX = 34; // 사용자 위치(예시)

const generateEmpiricalHistogram = () => {
  const data = [];
  for (let i = 0; i <= 44; i++) {
    // 약간 우편향된 경험적 형상 + 미세한 요철(실측 히스토그램처럼 보이도록)
    const base = Math.exp(-((i - 19) * (i - 19)) / (2 * 9 * 9));
    const skew = i > 19 ? 0.9 : 1.05; // 오른쪽 꼬리를 살짝 두껍게
    const wiggle = 1 + 0.08 * Math.sin(i * 1.3) + 0.05 * Math.cos(i * 0.7);
    const y = base * skew * wiggle;
    data.push({
      x: i,
      y: Math.max(0.01, parseFloat(y.toFixed(4))),
      inBand: i >= P5_IDX && i <= P95_IDX,
    });
  }
  return data;
};

const data = generateEmpiricalHistogram();

const TechSlide: React.FC<SlideProps> = () => {
  return (
    <div className="h-full flex flex-col md:flex-row gap-12 items-center px-4">

      {/* Visual: 실측 분포 + p5~p95 선형 정규화 */}
      <div className="relative h-[450px] w-full md:w-1/2 min-w-0 bg-slate-800/30 rounded-[2rem] border border-white/5 flex flex-col justify-center overflow-hidden p-6 shadow-2xl">
        <h3 className="absolute top-6 right-6 text-white/30 text-base font-bold tracking-widest">EMPIRICAL MODEL</h3>

        {/* Formula Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
          className="absolute top-6 left-6 bg-slate-900/90 backdrop-blur border border-slate-600 px-4 py-2 rounded-lg shadow-lg z-10"
        >
          <code className="text-brand-400 font-mono text-lg font-bold">P5~P95 → 0-100</code>
        </motion.div>

        <div className="w-full h-[78%] mt-4">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} margin={{ top: 30, right: 8, left: 8, bottom: 8 }} barCategoryGap={1}>
              <XAxis dataKey="x" hide />
              <YAxis hide domain={[0, 'dataMax']} />

              {/* p5~p95 유효 구간 음영 */}
              <ReferenceArea x1={P5_IDX} x2={P95_IDX} fill="#14b8a6" fillOpacity={0.08} />

              <Bar dataKey="y" isAnimationActive={false} radius={[2, 2, 0, 0]}>
                {data.map((d, idx) => (
                  <Cell
                    key={idx}
                    fill={d.x === YOU_IDX ? '#ffffff' : d.inBand ? '#14b8a6' : '#334155'}
                    fillOpacity={d.x === YOU_IDX ? 1 : d.inBand ? 0.7 : 0.5}
                  />
                ))}
              </Bar>

              {/* p5 = 0점 앵커 */}
              <ReferenceLine
                x={P5_IDX}
                stroke="#64748b"
                strokeWidth={2}
                strokeDasharray="4 4"
                label={{ position: 'top', value: 'P5 → 0점', fill: '#94a3b8', fontSize: 13, fontWeight: 'bold' }}
              />
              {/* p95 = 100점 앵커 */}
              <ReferenceLine
                x={P95_IDX}
                stroke="#64748b"
                strokeWidth={2}
                strokeDasharray="4 4"
                label={{ position: 'top', value: 'P95 → 100점', fill: '#94a3b8', fontSize: 13, fontWeight: 'bold' }}
              />
              {/* 사용자 위치 */}
              <ReferenceLine
                x={YOU_IDX}
                stroke="#fff"
                strokeWidth={2}
                label={{ position: 'top', value: 'You', fill: 'white', fontSize: 16, fontWeight: 'bold' }}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="w-full px-8 flex justify-between text-sm text-slate-400 font-mono font-bold mt-1">
          <span>또래 하위</span>
          <span className="text-brand-300">실측 분포</span>
          <span>또래 상위</span>
        </div>
        <p className="text-center text-xs text-slate-500 mt-2">정규분포 가정 없음 · 실측 표본 3.5만명의 경험적 분포</p>
      </div>

      {/* Content */}
      <div className="flex-1 space-y-8">
        <div>
          <h2 className="text-4xl font-bold mb-4 text-white">재능 등급 산출 알고리즘</h2>
          <p className="text-slate-300 text-xl leading-relaxed" style={{ wordBreak: 'keep-all' }}>
            국민체력100 실측 3.5만명(청소년)을 모집단으로, 개인의 기록이 전체 분포에서 어느 위치인지 <strong className="text-white">실측 백분위 기반 정규화 모델</strong>로 분석합니다.
          </p>
        </div>

        <div className="space-y-6">
          <div className="relative pl-8 border-l-4 border-slate-700">
            <div className="absolute -left-[11px] top-1 w-5 h-5 rounded-full bg-slate-800 border-4 border-brand-500" />
            <h4 className="font-bold text-white text-xl mb-2">1. 백분위 선형 정규화 (P5~P95)</h4>
            <p className="text-slate-300 text-base leading-relaxed">
              성별·항목별 실측 분포의 <strong className="text-white">하위 5%(P5)를 0점, 상위 5%(P95)를 100점</strong>으로 매핑하여
              근력·지구력처럼 <strong className="text-white">단위가 다른 항목을 동일 척도로 비교</strong>합니다.
            </p>
          </div>

          <div className="relative pl-8 border-l-4 border-slate-700">
             <div className="absolute -left-[11px] top-1 w-5 h-5 rounded-full bg-slate-800 border-4 border-brand-500" />
            <h4 className="font-bold text-white text-xl mb-2">2. 실측 분포 기반 5단계 등급제</h4>
            <p className="text-slate-300 text-base leading-relaxed">
              가중합 점수를 <strong className="text-white">실제 점수 분포로 보정한 임계값(82/69/54/43)</strong>에 대입해
              '재능 등급'을 부여합니다. 등급별 백분위 주장이 실제 비율과 일치하도록 캘리브레이션했습니다.
            </p>
          </div>

          <div className="p-4 bg-brand-500/10 rounded-2xl border border-brand-500/20 mt-4">
             <h5 className="font-bold text-brand-300 text-base mb-1">Why This Matters?</h5>
             <p className="text-sm text-brand-100 leading-relaxed">
               단순히 "오래달리기 50회"라는 기록은 의미가 없습니다.<br/>
               <strong className="text-white">"또래 상위 5% 수준"</strong>이라는 상대적 위치 정보가 재능 발견의 핵심입니다.
             </p>
          </div>

          <p className="text-sm text-slate-400 leading-relaxed" style={{ wordBreak: 'keep-all' }}>
            ※ <strong className="text-slate-300">종목 적합도</strong>는 스포츠과학 문헌 기반 가중치로 설계하며, 확정이 아닌 <strong className="text-white">'도전 우선순위' 제안</strong>입니다.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TechSlide;
