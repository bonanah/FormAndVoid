import React, { useEffect } from 'react';
import { ArrowLeft, Mail } from 'lucide-react';

interface AboutPageProps {
  onBack: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const experiences = [
    {
      period: "Current",
      role: "CX Lab Researcher",
      company: "AI Solution Lab",
      desc: "Conducting Ontology & Graph RAG research for AI Chatbots."
    },
    {
      period: "2023",
      role: "Project Lead",
      company: "Global H&A Company",
      desc: "Developed CX Evaluation Framework using text mining on 4,000+ VOC data."
    },
    {
      period: "2022",
      role: "Project Lead",
      company: "Leading Beauty Brand",
      desc: "Designed Persona-based Ontology for AI Customer Service."
    },
    {
      period: "5 Years",
      role: "System Operator",
      company: "Math Academy",
      desc: "Built internal automation systems (NAS, Problem Bank Server) using Python & SQL."
    }
  ];

  const education = [
    {
      period: "2025 ~ Present",
      role: "M.S. in Business Informatics",
      school: "Hanyang Univ."
    },
    {
      period: "2020 ~ 2025",
      role: "B.Arch in Interior Architecture",
      school: "Hongik Univ."
    }
  ];

  const techStack = ["Python", "SQL", "Notion", "Figma", "Neo4j"];

  return (
    <div className="w-full bg-paper min-h-screen flex flex-col animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Navigation */}
      <div className="sticky top-0 z-40 bg-paper/95 backdrop-blur-sm border-b-[0.5px] border-line w-full px-6 h-16 flex items-center justify-between">
        <button 
          onClick={onBack}
          className="group flex items-center gap-2 font-mono text-xs text-ink/60 hover:text-brick transition-colors"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          BACK TO MAIN
        </button>
        <div className="font-mono text-xs text-ink/40 tracking-widest uppercase">
          Resume / Profile
        </div>
      </div>

      <div className="max-w-4xl mx-auto w-full px-6 py-12 md:py-20 flex flex-col gap-20">
        
        {/* Header Section */}
        <section className="space-y-6">
          <span className="font-mono text-xs text-brick tracking-widest uppercase block mb-4">
            Hello, I am a Life Architect.
          </span>
          {/* Typography changed to Sans-serif */}
          <h1 className="font-sans font-bold text-4xl md:text-5xl text-ink leading-tight">
            Architecting the Logical Context.
          </h1>
          <p className="font-sans text-ink/60 leading-relaxed max-w-2xl text-lg">
            공간의 여백에서 사람을 배웠고 구조의 논리에서 시스템을 익혔습니다. <br/>
            12년의 기록이 제게 알려준 것은 좋은 도구는 행동을 억지로 바꾸는 것이 아니라 그저 당신의 흐름을 발견해 준다는 사실입니다. <br/>
            이제 데이터라는 재료로 당신의 고유한 맥락이 숨 쉴 수 있는 집을 짓습니다.
          </p>
        </section>

        <div className="w-full h-[0.5px] bg-line" />

        {/* Experience Section - Timeline */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
          <div className="md:col-span-3">
            <h3 className="font-sans font-bold text-sm tracking-widest sticky top-24">EXPERIENCE</h3>
          </div>
          <div className="md:col-span-9 space-y-12 border-l-[0.5px] border-line pl-8 md:pl-12 relative">
             {experiences.map((exp, idx) => (
               <div key={idx} className="relative group">
                 {/* Timeline Dot */}
                 <div className="absolute -left-[37px] md:-left-[53px] top-1.5 w-2 h-2 rounded-full bg-paper border-[0.5px] border-line group-hover:bg-brick group-hover:border-brick transition-colors duration-300" />
                 
                 <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-8 mb-2">
                   <span className="font-mono text-xs text-brick w-24 shrink-0 pt-1 border-r-[0.5px] border-transparent sm:border-line/30 pr-4 text-left sm:text-right">{exp.period}</span>
                   {/* Typography changed to Sans-serif */}
                   <h4 className="font-sans font-medium text-xl text-ink group-hover:text-brick transition-colors">{exp.role}</h4>
                 </div>
                 <div className="sm:pl-32">
                   <div className="font-mono text-[10px] text-ink/40 uppercase tracking-wider mb-2">{exp.company}</div>
                   <p className="font-sans text-sm text-ink/70 font-light leading-relaxed">
                     {exp.desc}
                   </p>
                 </div>
               </div>
             ))}
          </div>
        </section>

        {/* Education Section */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
          <div className="md:col-span-3">
            <h3 className="font-sans font-bold text-sm tracking-widest sticky top-24">EDUCATION</h3>
          </div>
          <div className="md:col-span-9 space-y-8 border-l-[0.5px] border-line pl-8 md:pl-12">
            {education.map((edu, idx) => (
               <div key={idx} className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-8 group">
                 <span className="font-mono text-xs text-brick w-24 shrink-0 pt-1 border-r-[0.5px] border-transparent sm:border-line/30 pr-4 text-left sm:text-right">{edu.period}</span>
                 <div>
                   {/* Typography changed to Sans-serif */}
                   <h4 className="font-sans font-medium text-lg text-ink group-hover:text-brick transition-colors">{edu.role}</h4>
                   <p className="font-mono text-[10px] text-ink/40 uppercase tracking-wider mt-1">{edu.school}</p>
                 </div>
               </div>
             ))}
          </div>
        </section>

        {/* Tech Stack Grid */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
          <div className="md:col-span-3">
             <h3 className="font-sans font-bold text-sm tracking-widest">TECH STACK</h3>
          </div>
          <div className="md:col-span-9">
            {/* Design changed to Flat Tags */}
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech) => (
                <div key={tech} className="px-3 py-1.5 border-[0.5px] border-line hover:border-brick hover:bg-brick/5 transition-colors cursor-default">
                  <span className="font-mono text-xs text-ink/80">{tech}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Contact Footer in Page */}
        <div className="py-20 text-center">
          <a href="mailto:studio@formvoid.com" className="inline-flex items-center gap-2 font-mono text-xs text-ink/40 hover:text-brick transition-colors border-b-[0.5px] border-transparent hover:border-brick pb-1">
            <Mail className="w-3 h-3" />
            STUDIO@FORMVOID.COM
          </a>
        </div>

      </div>
    </div>
  );
};