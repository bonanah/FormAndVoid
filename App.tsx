import React, { useState, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import { BRAND, DATA } from './constants';
import { MasonryLayout } from './components/MasonryLayout';
import { DetailPage } from './components/DetailPage';
import { ContentItem, ContentType } from './types';

// About Modal Component
const AboutModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-ink/20 backdrop-blur-sm animate-in fade-in duration-300" 
        onClick={onClose} 
      />
      
      {/* Modal Content */}
      <div className="relative bg-paper w-full max-w-lg border-[0.5px] border-line p-8 md:p-12 animate-in fade-in zoom-in-95 duration-300 shadow-none">
        <button 
          onClick={onClose} 
          className="absolute top-6 right-6 text-ink/40 hover:text-ink transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
        
        <div className="space-y-8">
          <div>
             <span className="font-mono text-xs text-brick tracking-widest uppercase mb-2 block">Brand Identity</span>
             <h2 className="font-serif text-3xl text-ink mb-1">FORM & VOID</h2>
             <p className="font-sans text-sm text-ink/60">Architecting the Quiet Context</p>
          </div>
          
          <div className="w-12 h-[0.5px] bg-ink/20" />
          
          <div className="space-y-4 font-sans font-light text-ink/80 leading-relaxed text-sm">
            <p>
              우리는 사람의 자연스러운 행동(Void/Context)을 지키기 위해, 
              가장 논리적인 시스템(Form/System)을 만드는 '라이프 아키텍트' 그룹입니다.
            </p>
            <p>
              새벽 2시의 작업실, 오래된 도서관 아카이브, 
              그리고 빗소리만 들리는 다다미 방에서 영감을 받습니다.
            </p>
          </div>

          <div className="pt-4 border-t-[0.5px] border-line grid grid-cols-2 gap-4">
             <div>
               <h4 className="font-mono text-[10px] text-ink/40 uppercase mb-1">Atmosphere</h4>
               <p className="font-sans text-xs">Serene, Static, Logical</p>
             </div>
             <div>
               <h4 className="font-mono text-[10px] text-ink/40 uppercase mb-1">Contact</h4>
               <p className="font-sans text-xs underline decoration-[0.5px] underline-offset-2">studio@formvoid.com</p>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Header Props Definition
interface HeaderProps {
  onLogoClick: () => void;
  onNavClick: (filter: string) => void;
  onAboutClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onLogoClick, onNavClick, onAboutClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Nav Items configuration including the new ABOUT action
  const navItems = [
    { label: 'ABOUT', desc: 'Manifesto', action: 'ABOUT' },
    { label: 'ARCHIVE', desc: 'Essay', action: 'FILTER', filter: ContentType.ESSAY },
    { label: 'BLUEPRINT', desc: 'Shop', action: 'FILTER', filter: ContentType.BLUEPRINT },
    { label: 'STUDIO', desc: 'Consulting', action: 'FILTER', filter: ContentType.PROJECT }
  ];

  const handleInteraction = (item: any) => {
    if (item.action === 'ABOUT') {
      onAboutClick();
    } else {
      onNavClick(item.filter);
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-paper/95 backdrop-blur-sm border-b-[0.5px] border-line w-full">
      <div className="flex justify-between items-stretch h-16">
        
        {/* Logo Section */}
        <div 
          className="flex items-center px-6 border-r-[0.5px] border-line min-w-[200px] cursor-pointer hover:bg-ink/5 transition-colors" 
          onClick={onLogoClick}
        >
          <h1 className="font-sans text-lg tracking-widest text-ink font-bold uppercase">
            {BRAND.name}
          </h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex flex-1">
          {navItems.map((item) => (
            <button 
              key={item.label}
              onClick={() => handleInteraction(item)}
              className="group flex-1 flex flex-col justify-center items-center border-l-[0.5px] border-line first:border-l-0 hover:bg-ink/5 transition-colors duration-300 relative"
            >
              <span className="font-sans font-light text-sm tracking-widest text-ink">{item.label}</span>
              <span className="font-mono text-[10px] text-ink/50 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute bottom-3">
                [{item.desc}]
              </span>
            </button>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden flex items-center justify-center w-16 border-l-[0.5px] border-line hover:bg-ink/5 transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="w-5 h-5 text-ink" /> : <Menu className="w-5 h-5 text-ink" />}
        </button>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-paper border-b-[0.5px] border-line animate-in slide-in-from-top-2 duration-200 shadow-xl">
          {navItems.map((item) => (
            <button 
              key={item.label}
              onClick={() => handleInteraction(item)}
              className="w-full flex justify-between items-center px-6 py-4 border-b-[0.5px] border-line last:border-b-0 hover:bg-ink/5 text-left"
            >
              <span className="font-sans font-light text-lg text-ink">{item.label}</span>
              <span className="font-mono text-xs text-ink/50">[{item.desc}]</span>
            </button>
          ))}
        </div>
      )}
    </header>
  );
};

// Hero Props Definition
interface HeroProps {
  onScrollDown: () => void;
}

const Hero: React.FC<HeroProps> = ({ onScrollDown }) => {
  return (
    <section className="relative w-full py-32 md:py-48 px-6 md:px-12 lg:px-24 flex flex-col justify-center border-b-[0.5px] border-line bg-paper overflow-hidden">
       <div className="noise-overlay absolute inset-0 opacity-20 pointer-events-none" />
       
       <div className="max-w-7xl w-full relative z-10">
         <div className="font-mono text-xs text-brick mb-8 tracking-widest uppercase flex items-center gap-2">
            <span className="w-2 h-2 bg-brick inline-block" />
            Manifesto 01
         </div>
         
         {/* Typography */}
         <div className="flex flex-col gap-4">
            <h2 className="font-sans font-bold text-ink tracking-tight whitespace-nowrap" style={{ fontSize: 'clamp(1.2rem, 4vw, 3.5rem)' }}>
              우리는 당신의 맥락이 숨 쉴 수 있도록 형태를 짓습니다.
            </h2>
            <p className="font-sans font-light text-ink/60 tracking-wide" style={{ fontSize: 'clamp(0.8rem, 1.5vw, 1.25rem)' }}>
              We build the form to let your context breathe.
            </p>
         </div>

         <div className="mt-20 flex items-center gap-4 cursor-pointer group w-fit" onClick={onScrollDown}>
            <div className="h-[0.5px] w-24 bg-ink/30 group-hover:w-32 transition-all duration-300" />
            <span className="font-mono text-xs text-ink/50 group-hover:text-ink transition-colors">
              SCROLL TO ARCHIVE
            </span>
         </div>
       </div>
    </section>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer className="w-full py-12 px-6 border-t-[0.5px] border-line bg-paper text-center md:text-left">
      <div className="flex flex-col md:flex-row justify-between items-end gap-8">
        <div>
          <h4 className="font-sans font-bold text-sm tracking-widest mb-2">FORM & VOID</h4>
          <p className="font-mono text-xs text-ink/60">
            © 2024 Life Architecture Lab.<br/>
            All forms are structured for your void.
          </p>
        </div>
        <div className="font-mono text-xs text-ink/40">
          SEOUL, 02:00 AM<br/>
          37.5665° N, 126.9780° E
        </div>
      </div>
    </footer>
  );
};

// Main App Component
const App: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<ContentItem | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('ALL');
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  
  // Ref for smooth scrolling to the grid section
  const archiveRef = useRef<HTMLDivElement>(null);

  // Filter Logic
  const filteredData = activeFilter === 'ALL' 
    ? DATA 
    : DATA.filter(item => item.type === activeFilter);

  // Handlers
  const handleItemClick = (item: ContentItem) => {
    setSelectedItem(item);
    window.scrollTo({ top: 0, behavior: 'auto' });
  };

  const handleBack = () => {
    setSelectedItem(null);
  };

  const scrollToArchive = () => {
    archiveRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleLogoClick = () => {
    setSelectedItem(null);
    setActiveFilter('ALL');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (filter: string) => {
    setSelectedItem(null);
    setActiveFilter(filter);
    // Add a small delay to allow render if switching from DetailPage, then scroll
    setTimeout(() => scrollToArchive(), 100);
  };

  return (
    <div className="min-h-screen bg-paper flex flex-col font-sans selection:bg-brick/20 selection:text-ink">
      <AboutModal isOpen={isAboutOpen} onClose={() => setIsAboutOpen(false)} />
      
      <Header 
        onLogoClick={handleLogoClick} 
        onNavClick={handleNavClick} 
        onAboutClick={() => setIsAboutOpen(true)}
      />
      
      <main className="flex-grow w-full max-w-[1920px] mx-auto border-x-[0.5px] border-line box-content">
        {selectedItem ? (
          <DetailPage item={selectedItem} onBack={handleBack} />
        ) : (
          <>
            <Hero onScrollDown={scrollToArchive} />
            
            {/* Filter Bar */}
            <div 
              ref={archiveRef} 
              className="sticky top-16 z-30 bg-paper/95 backdrop-blur w-full py-4 px-6 border-b-[0.5px] border-line flex justify-end items-center gap-6 overflow-x-auto scrollbar-hide"
            >
              {['ALL', 'BLUEPRINT', 'ESSAY', 'PROJECT', 'INSPIRATION'].map((filter) => (
                <button 
                  key={filter} 
                  onClick={() => setActiveFilter(filter)}
                  className={`
                    font-mono text-xs tracking-wider transition-all duration-300
                    ${activeFilter === filter 
                      ? 'text-ink underline decoration-[0.5px] underline-offset-4 font-bold' 
                      : 'text-ink/40 hover:text-brick'}
                  `}
                >
                  {filter}
                </button>
              ))}
            </div>

            {/* Empty State or Grid */}
            {filteredData.length > 0 ? (
              <MasonryLayout items={filteredData} onItemClick={handleItemClick} />
            ) : (
              <div className="w-full h-64 flex flex-col items-center justify-center border-t-[0.5px] border-line text-ink/40 font-mono text-xs">
                <span>NO DATA FOUND IN THIS CONTEXT.</span>
                <button 
                  onClick={() => setActiveFilter('ALL')} 
                  className="mt-4 text-brick hover:underline underline-offset-4"
                >
                  RESET FILTER
                </button>
              </div>
            )}
          </>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default App;