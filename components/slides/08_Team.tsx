import React from 'react';
import { motion } from 'framer-motion';
import { SlideProps } from '../../types';
import { Layers, Figma, Database, Server } from 'lucide-react';

const TeamSlide: React.FC<SlideProps> = () => {
  const members = [
    {
      name: "신주용",
      role: "PM & Full Stack",
      desc: (
        <>
          프로젝트 총괄<br />
          풀스택 개발 · 데이터 분석
        </>
      ),
      icon: Layers,
      color: "bg-brand-500"
    },
    {
      name: "강지나",
      role: "Frontend & UI/UX",
      desc: (
        <>
          웹 서비스 구현<br />
          UI/UX 디자인
        </>
      ),
      icon: Figma,
      color: "bg-blue-500"
    },
    {
      name: "김현웅",
      role: "Data Modeling",
      desc: (
        <>
          데이터 모델링<br />
          DB 설계
        </>
      ),
      icon: Database,
      color: "bg-pink-500"
    },
    {
      name: "송민지",
      role: "Backend Developer",
      desc: (
        <>
          백엔드 개발<br />
          API 서버 구축
        </>
      ),
      icon: Server,
      color: "bg-purple-500"
    }
  ];

  return (
    <div className="h-full flex flex-col justify-center items-center pb-16">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold mb-4">Team. 숨어있는 재능을 찾아서</h2>
        <p className="text-slate-300 text-xl">데이터로 세상을 바꾸는 사람들</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-[90%] w-full px-4">
        {members.map((member, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15 }}
            className="group relative"
          >
            <div className="bg-slate-800 rounded-[2rem] border border-slate-700 p-8 h-full flex flex-col items-center text-center hover:border-brand-500/50 transition-all duration-300 hover:-translate-y-2 shadow-xl">
              <div className={`w-24 h-24 ${member.color} rounded-full flex items-center justify-center mb-8 shadow-2xl`}>
                <member.icon className="text-white" size={40} />
              </div>
              
              <h3 className="text-3xl font-bold text-white mb-2">{member.name}</h3>
              <p className="text-brand-400 font-bold text-lg mb-6 uppercase tracking-wider">{member.role}</p>
              
              <div className="w-12 h-1 bg-slate-600 rounded-full mb-6 group-hover:bg-brand-500 transition-colors" />
              
              <p className="text-slate-200 text-xl leading-relaxed break-keep font-medium">
                {member.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TeamSlide;