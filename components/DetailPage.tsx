import React, { useEffect } from 'react';
import { ContentItem } from '../types';
import { ArrowLeft, Clock, MapPin, Tag, Share2 } from 'lucide-react';

interface DetailPageProps {
  item: ContentItem;
  onBack: () => void;
}

export const DetailPage: React.FC<DetailPageProps> = ({ item, onBack }) => {
  // Scroll to top when mounted
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleShare = () => {
    // In a real app, this would use the actual URL structure.
    // Here we simulate copying a link to this specific item.
    const dummyUrl = `${window.location.origin}/archive/${item.id}`;
    
    navigator.clipboard.writeText(dummyUrl).then(() => {
      alert(`[LINK COPIED]\n${item.title}\n${dummyUrl}`);
    }).catch(() => {
      alert('Failed to copy link.');
    });
  };

  // Dummy content generator based on item type
  const getDummyContent = () => {
    return (
      <div className="space-y-8 text-ink/80 font-sans font-light leading-relaxed">
        <p className="text-lg">
          모든 구조는 맥락에서 시작됩니다. 우리가 흔히 '빈 공간'이라 부르는 것은 사실 
          가능성으로 가득 찬 잠재적 형태입니다. 이 프로젝트는 그 보이지 않는 선을 
          시각화하는 과정에서 출발했습니다.
        </p>
        <p>
          "Form follows Context."<br/>
          형태는 단순히 기능을 따르는 것이 아니라, 그 공간에 머무는 사람의 
          무의식적인 맥락을 따라야 합니다. 우리는 데이터를 통해 그 맥락을 읽어내고, 
          가장 논리적인 그리드 시스템 위에 감각적인 질감을 입혔습니다.
        </p>
        <div className="py-8 border-y-[0.5px] border-line my-8">
           <h4 className="font-mono text-xs text-brick mb-4 uppercase tracking-widest">Design Logic</h4>
           <ul className="list-none space-y-2 font-mono text-sm text-ink/60">
             <li>01. GRID SYSTEM : 8pt base modular scale</li>
             <li>02. TYPOGRAPHY : Contrast between Serif & Mono</li>
             <li>03. MATERIAL : Paper texture background with ink noise</li>
           </ul>
        </div>
        <p>
          결국 남는 것은 본질입니다. 장식을 걷어내고, 색을 최소화하며, 
          오직 구조와 빛만이 공간을 설명하도록 두었습니다. 
          이것이 우리가 정의하는 '조용한 맥락(Quiet Context)'입니다.
        </p>
      </div>
    );
  };

  return (
    <div className="w-full bg-paper min-h-screen flex flex-col animate-in fade-in duration-500">
      
      {/* Top Navigation Bar */}
      <div className="sticky top-16 z-40 bg-paper/95 backdrop-blur-sm border-b-[0.5px] border-line w-full px-6 h-14 flex items-center justify-between">
        <button 
          onClick={onBack}
          className="group flex items-center gap-2 font-mono text-xs text-ink/60 hover:text-brick transition-colors"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          BACK TO ARCHIVE
        </button>
        
        <div className="flex items-center gap-4">
           <button 
             onClick={handleShare}
             className="text-ink/40 hover:text-ink transition-colors group flex items-center gap-2"
             title="Copy Link"
           >
             <span className="font-mono text-[10px] opacity-0 group-hover:opacity-100 transition-opacity">SHARE</span>
             <Share2 className="w-4 h-4" />
           </button>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="flex-grow w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 min-h-screen">
        
        {/* Left Sidebar (Meta Data) - Sticky on Desktop */}
        <div className="md:col-span-3 md:border-r-[0.5px] border-line p-6 md:p-12 md:sticky md:top-[7.5rem] md:h-[calc(100vh-7.5rem)] flex flex-col gap-8 bg-paper">
          
          <div className="space-y-1">
             <span className="font-mono text-[10px] text-brick uppercase tracking-widest border-[0.5px] border-brick/30 px-1.5 py-0.5 inline-block mb-2">
               {item.type}
             </span>
             {/* Changed font size from text-3xl/4xl to text-2xl/3xl for better balance */}
             <h1 className="font-sans text-2xl md:text-3xl text-ink leading-tight font-medium">
               {item.title}
             </h1>
          </div>

          <div className="w-8 h-[0.5px] bg-ink/20" />

          <div className="space-y-4 font-mono text-xs text-ink/60">
             <div className="flex items-center gap-3">
               <Clock className="w-3.5 h-3.5" />
               <span>{item.date}</span>
             </div>
             <div className="flex items-center gap-3">
               <MapPin className="w-3.5 h-3.5" />
               <span>Seoul, Korea</span>
             </div>
             <div className="flex items-center gap-3">
               <Tag className="w-3.5 h-3.5" />
               <span>Architecture, Data, Vibe</span>
             </div>
          </div>
          
          <div className="mt-auto hidden md:block">
            <p className="font-mono text-[10px] text-ink/30">
              REF_ID: {item.id.padStart(4, '0')}
            </p>
          </div>
        </div>

        {/* Right Content Area */}
        <div className="md:col-span-9 flex flex-col">
          
          {/* Hero Image */}
          <div className="w-full aspect-video md:aspect-[21/9] overflow-hidden border-b-[0.5px] border-line relative group">
            <img 
              src={item.imageUrl} 
              alt={item.title} 
              className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700 ease-in-out"
            />
            <div className="absolute inset-0 noise-overlay opacity-20 mix-blend-overlay" />
          </div>

          {/* Article Body */}
          <div className="p-6 md:p-12 md:max-w-3xl">
             {getDummyContent()}
          </div>
          
        </div>
      </div>
    </div>
  );
};