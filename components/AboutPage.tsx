import React, { useEffect } from 'react';
import { ArrowLeft, Mail, CornerDownRight, Phone, Linkedin, Printer, BookOpen, Layers } from 'lucide-react';

interface AboutPageProps {
  onBack: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handlePrint = () => {
    window.print();
  };

  // Data Structure
  const experiences = [
    {
      period: "2025.02 ~ Present",
      role: "Graduate Researcher",
      company: "DCX Lab, Hanyang University @ School of Business",
      desc: "Conducting Ontology & Graph RAG research for AI Chatbots.",
    
      // Nested Projects
      projects: [
        {
          period: "2025.10 ~ Present",
          role: "Researcher (Global H&A Company)",
          desc: "Developed CX Evaluation Framework using text mining on 4,000+ VOC data."
        },

        {
          period: "2025.12 ~ Present",
          role: "Researcher (Leading Beauty Brand)",
          desc: "Designed Persona-based Ontology for AI Customer Service."
        },

        {
          period: "2025.09 ~ Present",
          role: "Researcher",
          desc: "Ontology Modeling & Knowledge Graph Construction."
        }
      ]
    },

    {
      period: "2021.05 ~ Present",
      role: "System Operator",
      company: "Math Academy, Seoul",
      desc: "Built internal automation systems (NAS, Problem Bank Server) using Python & SQL."
    },

    {
      period: "2025.08 ~ Present",
      role: "Notion Campus Leader",
      company: "Notion Korea",
      desc:"Organized productivity workshops and managed community events."
    }, 

    {
      period: "2022.08 ~ 2022.09",
      role: "Research Assistant",
      company: "Yonsei University, Seoul",
      desc: "Digital Media Lab - Assisted in architectural archive digitization."
    }
  ];

  const education = [
    {
      period: "2025 ~ Present",
      role: "M.S. in Business Informatics",
      school: "Hanyang University, Seoul"
    },
    {
      period: "2020 ~ 2025",
      role: "B.Arch in Interior Architecture<br/>B.S. in Computer Engineering",
      school: "Hongik University, Seoul"
    }
  ];

  const publications = [
    {
      year: "2024",
      title: "Optimizing Graph RAG for Context-Aware AI Agents",
      journal: "KIISE Fall Conference (Proceedings)"
    },
    {
      year: "2023",
      title: "Architectural Space Analysis using Computer Vision",
      journal: "Journal of Asian Architecture and Building Engineering (Under Review)"
    }
  ];

  // Structured Tech Stack
  const techSystem = [
    {
      layer: "LAYER 01 : STRUCTURE",
      desc: "Data Engineering & Backend",
      stack: ["Python", "SQL", "Neo4j", "FastAPI"]
    },
    {
      layer: "LAYER 02 : LOGIC",
      desc: "AI Research & Methodology",
      stack: ["GraphRAG", "Ontology Modeling", "Prompt Engineering", "Knowledge Graph"]
    },
    {
      layer: "LAYER 03 : SURFACE",
      desc: "Experience Design & Tools",
      stack: ["Figma", "Notion", "Customer Journey Map", "React / Tailwind"]
    }
  ];

  return (
    <div className="w-full bg-paper min-h-screen flex flex-col animate-in fade-in slide-in-from-bottom-4 duration-500 print:bg-white">
      
      {/* Navigation - Hidden on Print */}
      <div className="sticky top-0 z-40 bg-paper/95 backdrop-blur-sm border-b-[0.5px] border-line w-full px-6 h-16 flex items-center justify-between print:hidden">
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

      <div className="max-w-6xl mx-auto w-full px-6 py-12 md:py-20 flex flex-col gap-20 print:py-0 print:px-0 print:max-w-none">
        
        {/* Header Section */}
        <section className="space-y-8 print:space-y-4">
          <div className="space-y-6 print:space-y-2">
            <div className="flex justify-between items-start">
              <span className="font-mono text-xs text-brick tracking-widest uppercase block mb-4 print:mb-1 print:text-black">
                Hello, I am a Life Architect.
              </span>
              {/* Print Only Contact Header */}
              <div className="hidden print:block text-right font-mono text-[10px] text-black">
                studio@formvoid.com<br/>
                +82 10-1234-5678
              </div>
            </div>
            
            <h1 className="font-sans font-bold text-4xl md:text-5xl text-ink leading-tight print:text-3xl print:text-black">
              Architecting the Logical Context.
            </h1>
            <p className="font-sans text-ink/60 leading-relaxed max-w-6xl text-lg print:text-black print:text-sm">
              공간의 여백에서 사람을 배웠고 구조의 논리에서 시스템을 익혔습니다. <br/>
              12년의 기록이 제게 알려준 것은 좋은 도구는 행동을 억지로 바꾸는 것이 아니라 그저 당신의 흐름을 발견해 준다는 사실입니다. <br/>
              이제 데이터라는 재료로 당신의 고유한 맥락이 숨 쉴 수 있는 집을 짓습니다.
            </p>
          </div>

          {/* Action Buttons - Hidden on Print */}
          <div className="pt-2 print:hidden">
            <button 
              onClick={handlePrint}
              className="group flex items-center gap-3 px-6 py-3 border-[0.5px] border-ink/30 hover:border-brick hover:bg-brick/5 transition-all duration-300"
            >
              <Printer className="w-4 h-4 text-ink group-hover:text-brick transition-colors" />
              <span className="font-mono text-xs tracking-widest text-ink group-hover:text-brick uppercase">Print Portfolio / Save PDF</span>
            </button>
          </div>
        </section>

        <div className="w-full h-[0.5px] bg-line print:bg-black" />

        {/* Experience Section */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 print:gap-4 print:block">
          <div className="md:col-span-2 print:mb-4">
            <h3 className="font-sans font-bold text-sm tracking-widest sticky top-24 print:static print:text-black">EXPERIENCE</h3>
          </div>
          <div className="md:col-span-10 space-y-16 border-l-[0.5px] border-line pl-8 md:pl-16 relative print:border-l-0 print:pl-0 print:space-y-8">
             {experiences.map((exp, idx) => (
               <div key={idx} className="relative group break-inside-avoid">
                 {/* Timeline Dot - Hidden on Print */}
                 <div className="absolute -left-[37px] md:-left-[69px] top-1.5 w-2 h-2 rounded-full bg-paper border-[0.5px] border-line group-hover:bg-brick group-hover:border-brick transition-colors duration-300 print:hidden" />
                 
                 <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-8 mb-2">
                   <span className="font-mono text-xs text-brick w-28 shrink-0 pt-1 border-r-[0.5px] border-transparent sm:border-line/30 pr-4 text-left sm:text-right print:text-black print:border-none print:w-auto print:pr-2">{exp.period}</span>
                   <h4 className="font-sans font-medium text-xl text-ink group-hover:text-brick transition-colors print:text-black print:text-lg">{exp.role}</h4>
                 </div>
                 
                 <div className="sm:pl-36 print:pl-0">
                   <div className="font-mono text-[10px] text-ink/40 uppercase tracking-wider mb-2 print:text-black/60">{exp.company}</div>
                   <p className="font-sans text-sm text-ink/70 font-light leading-relaxed mb-6 print:text-black">
                     {exp.desc}
                   </p>

                   {/* Nested Projects */}
                   {exp.projects && (
                     <div className="space-y-6 mt-6 pt-6 border-t-[0.5px] border-line/30 print:space-y-3 print:pt-3">
                        {exp.projects.map((proj, pIdx) => (
                          <div key={pIdx} className="flex gap-4 print:gap-2">
                            <CornerDownRight className="w-4 h-4 text-ink/30 shrink-0 mt-1 print:hidden" />
                            <div className="print:border-l-[0.5px] print:border-black/20 print:pl-3">
                              <h5 className="font-sans font-medium text-sm text-ink/90 mb-1 print:text-black">
                                {proj.role} <span className="hidden print:inline text-[10px] text-black/50 ml-2">({proj.period})</span>
                              </h5>
                              <p className="font-sans text-sm text-ink/60 font-light leading-relaxed print:text-black">
                                {proj.desc}
                              </p>
                            </div>
                          </div>
                        ))}
                     </div>
                   )}
                 </div>
               </div>
             ))}
          </div>
        </section>

        {/* Education Section */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 print:gap-4 print:block print:mt-8 break-inside-avoid">
          <div className="md:col-span-2 print:mb-4">
            <h3 className="font-sans font-bold text-sm tracking-widest sticky top-24 print:static print:text-black">EDUCATION</h3>
          </div>
          <div className="md:col-span-10 space-y-8 border-l-[0.5px] border-line pl-8 md:pl-16 print:border-l-0 print:pl-0 print:space-y-4">
            {education.map((edu, idx) => (
               <div key={idx} className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-8 group">
                 <span className="font-mono text-xs text-brick w-28 shrink-0 pt-1 border-r-[0.5px] border-transparent sm:border-line/30 pr-4 text-left sm:text-right print:text-black print:border-none print:w-auto">{edu.period}</span>
                 <div>
                   <h4 className="font-sans font-medium text-lg text-ink group-hover:text-brick transition-colors print:text-black" dangerouslySetInnerHTML={{ __html: edu.role }} />
                   <p className="font-mono text-[10px] text-ink/40 uppercase tracking-wider mt-1 print:text-black/60">{edu.school}</p>
                 </div>
               </div>
             ))}
          </div>
        </section>

        {/* Publications Section */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 print:gap-4 print:block print:mt-8 break-inside-avoid">
          <div className="md:col-span-2 print:mb-4">
            <h3 className="font-sans font-bold text-sm tracking-widest sticky top-24 print:static print:text-black">PUBLICATIONS</h3>
          </div>
          <div className="md:col-span-10 space-y-6 border-l-[0.5px] border-line pl-8 md:pl-16 print:border-l-0 print:pl-0 print:space-y-3">
            {publications.map((pub, idx) => (
               <div key={idx} className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-8 group">
                 <span className="font-mono text-xs text-brick w-28 shrink-0 pt-1 border-r-[0.5px] border-transparent sm:border-line/30 pr-4 text-left sm:text-right print:text-black print:border-none print:w-auto">{pub.year}</span>
                 <div>
                   <h4 className="font-sans font-medium text-lg text-ink group-hover:text-brick transition-colors leading-snug print:text-black">{pub.title}</h4>
                   <div className="flex items-center gap-2 mt-2 text-ink/40 print:text-black/60">
                      <BookOpen className="w-3 h-3" />
                      <p className="font-mono text-[10px] uppercase tracking-wider">{pub.journal}</p>
                   </div>
                 </div>
               </div>
             ))}
          </div>
        </section>

        {/* Structured Tech Stack (System Diagram Style) */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 print:gap-4 print:block print:mt-8 break-inside-avoid">
          <div className="md:col-span-2 print:mb-4">
             <h3 className="font-sans font-bold text-sm tracking-widest print:text-black">TECH SYSTEM</h3>
          </div>
          <div className="md:col-span-10 print:pl-0">
            <div className="flex flex-col gap-6">
              {techSystem.map((sys, idx) => (
                <div key={idx} className="flex flex-col md:flex-row md:items-center gap-4 group">
                  <div className="md:w-48 shrink-0">
                     <span className="font-mono text-[10px] text-brick uppercase tracking-widest block mb-1 print:text-black font-bold">{sys.layer}</span>
                     <span className="font-sans text-xs text-ink/40 print:text-black/50">{sys.desc}</span>
                  </div>
                  {/* Connector Line (Desktop) */}
                  <div className="hidden md:block w-12 h-[0.5px] bg-line group-hover:bg-brick transition-colors print:hidden" />
                  
                  {/* Stack Items */}
                  <div className="flex flex-wrap gap-2 flex-1">
                    {sys.stack.map((item) => (
                      <span key={item} className="px-3 py-1 border-[0.5px] border-line bg-white text-ink font-mono text-xs group-hover:border-brick/50 transition-colors print:border-black print:text-black">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Architectural Seal (Signature) - Visible heavily on Print/Bottom */}
        <div className="flex justify-end pt-12 print:pt-8 break-inside-avoid">
           <div className="relative group cursor-default">
              <div className="w-48 h-48 border-4 border-brick/20 rounded-full flex items-center justify-center p-2 group-hover:border-brick/100 transition-colors duration-700 print:border-black">
                 <div className="w-full h-full border-[1px] border-brick/20 rounded-full flex flex-col items-center justify-center text-center p-4 group-hover:border-brick/100 transition-colors duration-700 print:border-black">
                    <span className="font-mono text-[10px] text-brick uppercase tracking-widest mb-1 print:text-black">Form & Void</span>
                    <span className="font-serif italic text-xl text-brick font-bold mb-1 print:text-black">Verified<br/>Context</span>
                    <div className="w-full h-[1px] bg-brick/20 my-2 group-hover:bg-brick transition-colors print:bg-black" />
                    <span className="font-mono text-[9px] text-brick/60 print:text-black">ARCHITECT: J.Y. NAH</span>
                    <span className="font-mono text-[9px] text-brick/60 print:text-black">DATE: {new Date().getFullYear()}</span>
                 </div>
              </div>
              {/* Stamp Texture Overlay */}
              <div className="absolute inset-0 opacity-50 pointer-events-none mix-blend-multiply print:hidden">
                 <div className="w-full h-full bg-noise opacity-20" />
              </div>
           </div>
        </div>
        
        {/* Contact Section - Hidden on Print (moved to header for print) */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 pb-20 print:hidden">
          <div className="md:col-span-2">
             <h3 className="font-sans font-bold text-sm tracking-widest">CONTACT</h3>
          </div>
          <div className="md:col-span-10">
            <div className="flex flex-col md:flex-row gap-6 md:gap-16">
              
              <a href="mailto:studio@formvoid.com" className="group flex items-center gap-3 w-fit">
                <div className="w-8 h-8 rounded-full border-[0.5px] border-line flex items-center justify-center group-hover:bg-brick group-hover:border-brick transition-colors bg-white">
                  <Mail className="w-4 h-4 text-ink group-hover:text-paper transition-colors" />
                </div>
                <span className="font-sans text-sm text-ink group-hover:text-brick transition-colors">studio@formvoid.com</span>
              </a>

              <a href="tel:+821012345678" className="group flex items-center gap-3 w-fit">
                <div className="w-8 h-8 rounded-full border-[0.5px] border-line flex items-center justify-center group-hover:bg-brick group-hover:border-brick transition-colors bg-white">
                  <Phone className="w-4 h-4 text-ink group-hover:text-paper transition-colors" />
                </div>
                <span className="font-sans text-sm text-ink group-hover:text-brick transition-colors">+82 10-1234-5678</span>
              </a>

              <a href="https://www.linkedin.com/in/jeoungyoon-nah/" target="_blank" rel="noreferrer" className="group flex items-center gap-3 w-fit">
                <div className="w-8 h-8 rounded-full border-[0.5px] border-line flex items-center justify-center group-hover:bg-brick group-hover:border-brick transition-colors bg-white">
                  <Linkedin className="w-4 h-4 text-ink group-hover:text-paper transition-colors" />
                </div>
                <span className="font-sans text-sm text-ink group-hover:text-brick transition-colors">linkedin.com/in/jeoungyoon-nah</span>
              </a>

            </div>
          </div>
        </section>

      </div>
    </div>
  );
};