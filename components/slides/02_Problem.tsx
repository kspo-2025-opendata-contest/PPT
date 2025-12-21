import React from 'react';
import { motion } from 'framer-motion';
import { SlideProps } from '../../types';
import { MapPinOff, UserX, Info, Calculator } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Cell, LabelList, Tooltip } from 'recharts';

const data = [
  { name: '수도권', value: 85, color: '#14b8a6', label: '85점' },
  { name: '비수도권 도시', value: 45, color: '#64748b', label: '45점' },
  { name: '농어촌', value: 20, color: '#334155', label: '20점' },
];

const ProblemSlide: React.FC<SlideProps> = () => {
  return (
    <div className="h-full flex flex-col md:flex-row gap-8 items-stretch px-4">
      {/* Left: Key Problems */}
      <div className="flex-1 flex flex-col justify-center gap-6">
        <motion.div 
          className="p-8 rounded-3xl bg-red-500/10 border border-red-500/20"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <div className="flex items-center gap-4 mb-3">
            <div className="p-3 rounded-xl bg-red-500/20 text-red-400">
              <MapPinOff size={32} />
            </div>
            <h3 className="text-2xl font-bold text-red-100">심각한 지역 불균형</h3>
          </div>
          <p className="text-slate-200 text-xl leading-relaxed">
            체육 인프라와 전문 지도자가 수도권에 집중되어,<br/>
            <strong className="text-white">지방 거주 청소년</strong>은 재능 발견의 기회조차<br/> 
            박탈당하고 있습니다.
          </p>
        </motion.div>

        <motion.div 
          className="p-8 rounded-3xl bg-slate-800/50 border border-slate-700"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <div className="flex items-center gap-4 mb-3">
            <div className="p-3 rounded-xl bg-slate-700 text-slate-300">
              <UserX size={32} />
            </div>
            <h3 className="text-2xl font-bold text-slate-100">주관적 선발의 한계</h3>
          </div>
          <p className="text-slate-200 text-xl leading-relaxed">
            데이터가 아닌 <strong className="text-white">"경험과 감"</strong>에 의존하는 관행으로,<br/>
            객관적 지표가 없는 숨겨진 원석들이<br/> 
            평가 과정에서 배제됩니다.
          </p>
        </motion.div>
      </div>

      {/* Right: Data Viz */}
      <div className="flex-1 bg-slate-800/40 rounded-3xl p-8 border border-white/10 flex flex-col">
        <div className="mb-6">
           <h3 className="text-2xl font-bold text-white mb-2">지역별 체육 인프라 접근성 격차</h3>
           <div className="flex items-start gap-2 text-sm text-slate-400 bg-black/20 p-3 rounded-lg">
             <Calculator size={16} className="mt-0.5 text-brand-400 shrink-0" />
             <p className="break-keep leading-relaxed">
               <span className="text-brand-400 font-bold block mb-1">접근성 지수(Accessibility Index)란?</span>
               인구 10만 명당 공공 체육 시설 수(60%)와 전문 지도자 확보율(40%)을 반영하여<br/> 
               100점 만점으로 환산한 종합 지표입니다.
             </p>
           </div>
        </div>
        
        {/* Added min-w-0 to fix Recharts width warning in flex container */}
        <div className="flex-1 min-h-[300px] w-full min-w-0">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} layout="vertical" margin={{ left: 0, right: 40, top: 0, bottom: 0 }}>
              <XAxis type="number" domain={[0, 100]} hide />
              <YAxis
                dataKey="name"
                type="category"
                tick={{ fill: 'white', fontSize: 18, fontWeight: 'bold' }}
                width={130}
                axisLine={false}
                tickLine={false}
              />
              <Bar dataKey="value" radius={[0, 12, 12, 0]} barSize={50} animationDuration={1500}>
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
                <LabelList dataKey="label" position="right" fill="white" fontSize={20} fontWeight="800" />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
        
        <div className="mt-4 p-4 bg-brand-500/10 rounded-xl flex items-center gap-3 border border-brand-500/20">
          <Info className="text-brand-400 shrink-0" size={24} />
          <p className="text-base text-slate-200">
            수도권(85점) 대비 농어촌(20점)은 <strong className="text-white">4배 이상의 격차</strong>를 보이며,<br/>
            이는 물리적 환경이 재능 발굴의 가장 큰 장벽임을 시사합니다.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProblemSlide;