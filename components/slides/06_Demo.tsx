import React from 'react';
import { motion } from 'framer-motion';
import { SlideProps } from '../../types';
import { PersonFill, GeoAltFill, PersonWheelchair, Activity } from 'react-bootstrap-icons';

const DemoSlide: React.FC<SlideProps> = () => {
  const profile = [
    { icon: PersonFill, label: '만 16세 · 남성' },
    { icon: GeoAltFill, label: '서울특별시 강남구' },
    { icon: PersonWheelchair, label: '지체장애' },
  ];
  const metrics = [
    { k: '악력', v: '48 kg' },
    { k: '윗몸일으키기', v: '64 회' },
    { k: '제자리멀리뛰기', v: '228 cm' },
    { k: '왕복오래달리기', v: '74 회' },
  ];

  return (
    <div className="h-full flex flex-col items-center justify-center px-8 py-1">
      <div className="text-center mb-4">
        <h2 className="text-4xl font-black text-white tracking-tight mb-1">
          서비스 둘러보기 <span className="text-brand-400">① 재능 진단 · 데이터 입력</span>
        </h2>
        <p className="text-slate-400 text-lg font-medium">
          서울 강남 지체장애 청소년 예시 · <span className="font-mono text-slate-500">hidden-talent-web.onrender.com</span>
        </p>
      </div>

      <div className="w-full max-w-[92%] flex items-stretch justify-center gap-8">
        {/* 입력 폼 이미지 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="flex-[1.15] min-w-0 bg-slate-800 rounded-2xl border border-slate-700 shadow-2xl p-4 flex items-center justify-center"
        >
          <img src="/demo/f1_input_full.png" alt="재능 진단 입력" className="max-h-[560px] w-auto object-contain rounded-lg" />
        </motion.div>

        {/* 설명 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex-1 flex flex-col justify-center gap-5"
        >
          <div className="bg-slate-800/70 rounded-2xl border border-slate-700 p-6">
            <h4 className="text-white font-black text-xl mb-4 flex items-center gap-2">
              <PersonFill className="text-brand-400" size={22} /> 학생 프로필
            </h4>
            <div className="space-y-3">
              {profile.map((p, i) => (
                <div key={i} className="flex items-center gap-3 text-slate-200 text-lg">
                  <p.icon className="text-slate-400 shrink-0" size={20} />
                  <span className="font-semibold">{p.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-800/70 rounded-2xl border border-slate-700 p-6">
            <h4 className="text-white font-black text-xl mb-4 flex items-center gap-2">
              <Activity className="text-brand-400" size={22} /> 입력 체력 데이터
            </h4>
            <div className="grid grid-cols-2 gap-3">
              {metrics.map((m, i) => (
                <div key={i} className="bg-slate-900/60 rounded-xl px-4 py-3 border border-white/5">
                  <div className="text-slate-400 text-sm">{m.k}</div>
                  <div className="text-white font-black text-lg">{m.v}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-brand-500/10 border border-brand-500/25 rounded-2xl px-6 py-4">
            <p className="text-brand-100 text-base leading-relaxed font-medium" style={{ wordBreak: 'keep-all' }}>
              <strong className="text-brand-300">장애 유형 선택 시</strong> 패럴림픽 종목 가중치로 자동 전환 · 비회원도 즉시 진단
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default DemoSlide;
