import React from 'react';
import { motion } from 'framer-motion';
import { SlideProps } from '../../types';
import { MapPinOff, UserX, Info, TrendingUp, Building2 } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, LabelList } from 'recharts';

// 실제 공공데이터 기반 (국민체육진흥공단, 2025년 6월)
const facilityData = [
  { name: '수도권', facilities: 33, professional: 45, facilitiesLabel: '33개', professionalLabel: '45%' },
  { name: '비수도권 도시', facilities: 65, professional: 28, facilitiesLabel: '65개', professionalLabel: '28%' },
  { name: '농어촌', facilities: 134, professional: 12, facilitiesLabel: '134개', professionalLabel: '12%' },
];

const ProblemSlide: React.FC<SlideProps> = () => {
  return (
    <div className="h-full flex flex-col md:flex-row gap-8 items-stretch px-4">
      {/* Left: Key Problems */}
      <div className="flex-1 flex flex-col justify-center gap-6">
        <motion.div
          className="p-8 rounded-3xl bg-amber-500/10 border border-amber-500/20"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <div className="flex items-center gap-4 mb-3">
            <div className="p-3 rounded-xl bg-amber-500/20 text-amber-400">
              <MapPinOff size={32} />
            </div>
            <h3 className="text-2xl font-bold text-amber-100">숨겨진 역설</h3>
          </div>
          <p className="text-slate-200 text-xl leading-relaxed">
            농어촌 시설이 인구 대비 <strong className="text-white">4배</strong> 많지만,<br/>
            전국 시설의 <strong className="text-amber-400">75%가 마을 간이운동장</strong>.<br/>
            <strong className="text-white">전문 훈련 환경</strong>은 여전히 수도권에 집중됩니다.
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

      {/* Right: Data Viz - 역설적 비교 */}
      <div className="flex-1 bg-slate-800/40 rounded-3xl p-8 border border-white/10 flex flex-col">
        <div className="mb-4">
           <h3 className="text-2xl font-bold text-white mb-2">지역별 체육 인프라 현황</h3>
           <p className="text-sm text-slate-400">
             <span className="text-brand-400 font-bold">출처:</span> 국민체육진흥공단 공공데이터 (2025년 6월)
           </p>
        </div>

        {/* 두 가지 지표 비교 */}
        <div className="flex-1 flex flex-col gap-4">
          {/* 시설 수 */}
          <div className="flex-1 bg-black/20 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <Building2 size={18} className="text-brand-400" />
              <span className="text-sm font-bold text-slate-300">인구 10만명당 공공체육시설 수</span>
              <span className="text-xs text-slate-500 ml-auto">농어촌이 가장 많음</span>
            </div>
            <div className="h-[90px] min-w-0">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={facilityData} layout="vertical" margin={{ left: 0, right: 50, top: 0, bottom: 0 }}>
                  <XAxis type="number" domain={[0, 150]} hide />
                  <YAxis
                    dataKey="name"
                    type="category"
                    tick={{ fill: 'white', fontSize: 14, fontWeight: 'bold' }}
                    width={110}
                    axisLine={false}
                    tickLine={false}
                  />
                  <Bar dataKey="facilities" radius={[0, 8, 8, 0]} barSize={24} fill="#14b8a6">
                    <LabelList dataKey="facilitiesLabel" position="right" fill="white" fontSize={14} fontWeight="700" />
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* 전문시설 비율 */}
          <div className="flex-1 bg-black/20 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp size={18} className="text-red-400" />
              <span className="text-sm font-bold text-slate-300">전문 훈련시설 비율 (체육관, 수영장 등)</span>
              <span className="text-xs text-slate-500 ml-auto">수도권이 가장 높음</span>
            </div>
            <div className="h-[90px] min-w-0">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={facilityData} layout="vertical" margin={{ left: 0, right: 50, top: 0, bottom: 0 }}>
                  <XAxis type="number" domain={[0, 100]} hide />
                  <YAxis
                    dataKey="name"
                    type="category"
                    tick={{ fill: 'white', fontSize: 14, fontWeight: 'bold' }}
                    width={110}
                    axisLine={false}
                    tickLine={false}
                  />
                  <Bar dataKey="professional" radius={[0, 8, 8, 0]} barSize={24} fill="#ef4444">
                    <LabelList dataKey="professionalLabel" position="right" fill="white" fontSize={14} fontWeight="700" />
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        <div className="mt-4 p-4 bg-brand-500/10 rounded-xl flex items-center gap-3 border border-brand-500/20">
          <Info className="text-brand-400 shrink-0" size={24} />
          <p className="text-base text-slate-200">
            <strong className="text-amber-400">역설:</strong> 시설 수는 농어촌이 <strong className="text-white">4배</strong> 많지만,<br/>
            마을 간이운동장에서는 올림픽 꿈나무를 발견할 수 없습니다.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProblemSlide;
