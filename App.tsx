import React, { useState, useRef, useEffect } from 'react';
import { Menu, X, ChevronDown, Check } from 'lucide-react';
import { BRAND, DATA } from './constants';
import { MasonryLayout } from './components/MasonryLayout';
import { TableView } from './components/TableView';
import { DetailPage } from './components/DetailPage';
import { AboutPage } from './components/AboutPage';
import { ContentItem, ContentType } from './types';
import { AnimatePresence, motion, useMotionValue, useSpring } from 'framer-motion';

// --- Custom Architect Dropdown ---
interface CustomDropdownProps {
  value: string;
  options: string[];
  onChange: (val: string) => void;
  label: string;
}

const CustomDropdown: React.FC<CustomDropdownProps> = ({ value, options, onChange, label }) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    window.addEventListener('mousedown', handleClickOutside);
    return () => window.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div ref={containerRef} className="inline-block relative align-baseline">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group flex items-center gap-1 border-b-[1px] border-brick/40 hover:border-brick transition-all duration-300 pb-0.5 px-1 cursor-pointer"
      >
        <span className="font-serif italic text-brick text-2xl md:text-4xl">
          {value}
        </span>
        <ChevronDown className={`w-4 h-4 text-brick transition-transform duration-500 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 5, scale: 0.98 }}
            transition={{ duration: 0.3, ease: [0.19, 1, 0.22, 1] }}
            className="absolute left-0 top-full mt-4 z-[60] min-w-[180px] bg-paper border-[0.5px] border-line shadow-2xl overflow-hidden"
          >
            <div className="noise-overlay absolute inset-0 opacity-10 pointer-events-none" />
            <div className="p-2 border-b-[0.5px] border-line bg-ink/[0.02]">
              <span className="font-mono text-[9px] text-ink/40 tracking-[0.2em] uppercase px-2">{label}</span>
            </div>
            {/* 
                아이템 2개 분량의 높이로 제한 (각 아이템 높이 약 42px 기준)
                max-h-[84px]를 적용하여 정확히 2개까지만 노출되고 이후 스크롤되도록 설정
            */}
            <div className="flex flex-col py-1 max-h-[84px] overflow-y-auto scrollbar-hide">
              {options.map((opt) => (
                <button
                  key={opt}
                  onClick={() => {
                    onChange(opt);
                    setIsOpen(false);
                  }}
                  className="group flex items-center justify-between px-4 py-3 hover:bg-brick/5 transition-colors text-left cursor-pointer shrink-0"
                >
                  <span className={`font-mono text-xs tracking-wide transition-colors ${value === opt ? 'text-brick font-bold' : 'text-ink/60 group-hover:text-ink'}`}>
                    {opt.toUpperCase()}
                  </span>
                  {value === opt && <Check className="w-3 h-3 text-brick" />}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// --- Fluid Monotone Cursor ---
const FluidCursor = () => {
  const [isHovering, setIsHovering] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 25, stiffness: 150, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      const target = e.target as HTMLElement;
      const isClickable = target.tagName === 'A' || target.tagName === 'BUTTON' || target.closest('a') || target.closest('button') || target.tagName === 'SELECT' || target.classList.contains('cursor-pointer');
      setIsHovering(!!isClickable);
    };
    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="custom-cursor fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
      style={{ x: cursorX, y: cursorY, translateX: "-50%", translateY: "-50%" }}
    >
      <motion.div
        animate={{
          width: isHovering ? 48 : 12,
          height: isHovering ? 48 : 12,
          backgroundColor: isHovering ? "rgba(255, 255, 255, 0)" : "rgba(255, 255, 255, 1)",
          border: isHovering ? "1px solid rgba(255, 255, 255, 1)" : "0px solid transparent",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="rounded-full bg-white"
      />
    </motion.div>
  );
};

// Header Props
interface HeaderProps {
  onLogoClick: () => void;
  onNavClick: (filter: string) => void;
  onAboutClick: () => void;
  viewMode: 'GRID' | 'TABLE';
  toggleViewMode: () => void;
}

const Header: React.FC<HeaderProps> = ({ onLogoClick, onNavClick, onAboutClick, viewMode, toggleViewMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems = [
    { label: 'ABOUT', desc: 'Manifesto', action: 'ABOUT' },
    { label: 'ARCHIVE', desc: 'Essay', action: 'FILTER', filter: ContentType.ESSAY },
    { label: 'BLUEPRINT', desc: 'Shop', action: 'FILTER', filter: ContentType.BLUEPRINT },
    { label: 'STUDIO', desc: 'Consulting', action: 'FILTER', filter: ContentType.PROJECT }
  ];

  const handleInteraction = (item: any) => {
    if (item.action === 'ABOUT') { onAboutClick(); } else { onNavClick(item.filter); }
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-paper/95 backdrop-blur-sm border-b-[0.5px] border-line w-full">
      <div className="flex justify-between items-stretch h-16">
        <div className="flex items-center px-6 border-r-[0.5px] border-line min-w-[200px] hover:bg-ink/5 transition-colors cursor-pointer" onClick={onLogoClick}>
          <h1 className="font-sans text-lg tracking-widest text-ink font-bold uppercase">{BRAND.name}</h1>
        </div>
        <nav className="hidden md:flex flex-1">
          {navItems.map((item) => (
            <button key={item.label} onClick={() => handleInteraction(item)} className="group flex-1 flex flex-col justify-center items-center border-l-[0.5px] border-line first:border-l-0 hover:bg-ink/5 transition-colors duration-300 relative cursor-pointer">
              <span className="font-sans font-light text-sm tracking-widest text-ink">{item.label}</span>
              <span className="font-mono text-[10px] text-ink/50 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute bottom-3">[{item.desc}]</span>
            </button>
          ))}
        </nav>
        <div className="hidden md:flex items-center px-6 border-l-[0.5px] border-line">
           <button onClick={toggleViewMode} className="flex items-center gap-3 cursor-pointer group">
             <span className={`font-mono text-[10px] uppercase tracking-widest transition-colors ${viewMode === 'GRID' ? 'text-brick font-bold' : 'text-ink/40'}`}>Grid</span>
             <div className="relative w-10 h-5 bg-paper border-[0.5px] border-line rounded-full flex items-center px-0.5">
                <motion.div className="w-4 h-4 bg-ink rounded-full" animate={{ x: viewMode === 'GRID' ? 0 : 20, backgroundColor: viewMode === 'GRID' ? '#A03C3C' : '#2A2A2A' }} transition={{ type: "spring", stiffness: 500, damping: 30 }} />
             </div>
             <span className={`font-mono text-[10px] uppercase tracking-widest transition-colors ${viewMode === 'TABLE' ? 'text-ink font-bold' : 'text-ink/40'}`}>Table</span>
           </button>
        </div>
        <button className="md:hidden flex items-center justify-center w-16 border-l-[0.5px] border-line hover:bg-ink/5 transition-colors" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className="w-5 h-5 text-ink" /> : <Menu className="w-5 h-5 text-ink" />}
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-paper border-b-[0.5px] border-line animate-in slide-in-from-top-2 duration-200 shadow-xl">
          {navItems.map((item) => (
            <button key={item.label} onClick={() => handleInteraction(item)} className="w-full flex justify-between items-center px-6 py-4 border-b-[0.5px] border-line last:border-b-0 hover:bg-ink/5 text-left">
              <span className="font-sans font-light text-lg text-ink">{item.label}</span>
              <span className="font-mono text-xs text-ink/50">[{item.desc}]</span>
            </button>
          ))}
        </div>
      )}
    </header>
  );
};

// Hero Props
interface HeroProps {
  onContextFilterChange: (condition: string, need: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onContextFilterChange }) => {
  const [condition, setCondition] = useState('Anxious');
  const [need, setNeed] = useState('Structure');

  const conditions = ['Anxious', 'Lost', 'Overwhelmed', 'Curious'];
  const needs = ['Structure', 'Insight', 'Silence', 'Reference'];

  const handleConditionChange = (val: string) => {
    setCondition(val);
    onContextFilterChange(val, need);
  };

  const handleNeedChange = (val: string) => {
    setNeed(val);
    onContextFilterChange(condition, val);
  };

  return (
    <section className="relative w-full py-24 md:py-32 px-6 md:px-12 lg:px-24 flex flex-col justify-center border-b-[0.5px] border-line bg-paper overflow-visible">
       <div className="noise-overlay absolute inset-0 opacity-20 pointer-events-none" />
       <div className="max-w-7xl w-full relative z-10">
         <div className="mb-16 md:mb-20">
            <h1 className="font-serif font-medium text-4xl md:text-6xl text-ink leading-tight mb-6">{BRAND.slogan}</h1>
            <p className="font-sans font-light text-ink/60 text-lg md:text-xl max-w-2xl whitespace-pre-line leading-relaxed">{BRAND.manifesto}</p>
         </div>
         <div className="pt-12 border-t-[0.5px] border-line/50">
           <div className="font-mono text-xs text-brick mb-8 tracking-widest uppercase flex items-center gap-2">
              <span className="w-2 h-2 bg-brick inline-block" />
              Architectural Context
           </div>
           <div className="flex flex-col gap-2">
              <h3 className="font-sans font-light text-ink/90 tracking-tight leading-[1.4] flex flex-wrap items-center gap-x-4 gap-y-6" style={{ fontSize: 'clamp(1.2rem, 3vw, 2.2rem)' }}>
                <span>I am feeling</span>
                <CustomDropdown 
                  label="CONDITION"
                  value={condition} 
                  options={conditions} 
                  onChange={handleConditionChange} 
                />
                <span>and I need</span>
                <CustomDropdown 
                  label="REQUIREMENT"
                  value={need} 
                  options={needs} 
                  onChange={handleNeedChange} 
                />
                <span>.</span>
              </h3>
              <p className="font-mono text-[10px] text-ink/30 tracking-[0.3em] mt-8 uppercase">
                // System identifies context via metadata keywords
              </p>
           </div>
         </div>
       </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="w-full py-12 px-6 border-t-[0.5px] border-line bg-paper text-center md:text-left">
      <div className="flex flex-col md:flex-row justify-between items-end gap-8">
        <div>
          <h4 className="font-sans font-bold text-sm tracking-widest mb-2">FORM & VOID</h4>
          <p className="font-mono text-xs text-ink/60">© 2024 Life Architecture Lab.<br/>All forms are structured for your void.</p>
        </div>
        <div className="font-mono text-xs text-ink/40">SEOUL, 02:00 AM<br/>37.5665° N, 126.9780° E</div>
      </div>
    </footer>
  );
};

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<'HOME' | 'ABOUT' | 'DETAIL'>('HOME');
  const [viewMode, setViewMode] = useState<'GRID' | 'TABLE'>('GRID');
  const [selectedItem, setSelectedItem] = useState<ContentItem | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('ALL');
  const [contextFilter, setContextFilter] = useState<{condition: string, need: string} | null>(null);
  const archiveRef = useRef<HTMLDivElement>(null);

  const getFilteredData = () => {
    let data = DATA;
    if (activeFilter !== 'ALL') { data = data.filter(item => item.type === activeFilter); }
    if (contextFilter) {
      const targetKeywords = [contextFilter.condition.toLowerCase(), contextFilter.need.toLowerCase()];
      data = data.filter(item => {
         if (!item.keywords) return false;
         return targetKeywords.some(k => item.keywords?.includes(k));
      });
    }
    return data;
  };

  const filteredData = getFilteredData();
  const handleItemClick = (item: ContentItem) => { setSelectedItem(item); setCurrentView('DETAIL'); };
  const handleBackToHome = () => { setSelectedItem(null); setCurrentView('HOME'); };
  const scrollToArchive = () => { archiveRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }); };
  const handleLogoClick = () => { setSelectedItem(null); setActiveFilter('ALL'); setContextFilter(null); setCurrentView('HOME'); window.scrollTo({ top: 0, behavior: 'smooth' }); };
  const handleNavClick = (filter: string) => { setSelectedItem(null); setActiveFilter(filter); setContextFilter(null); setCurrentView('HOME'); setTimeout(() => scrollToArchive(), 100); };
  const handleAboutClick = () => { setSelectedItem(null); setCurrentView('ABOUT'); };
  const handleContextFilterChange = (condition: string, need: string) => { setContextFilter({ condition, need }); setActiveFilter('ALL'); setTimeout(() => scrollToArchive(), 100); };

  const renderContent = () => {
    if (currentView === 'DETAIL' && selectedItem) { return <DetailPage item={selectedItem} onBack={handleBackToHome} />; }
    if (currentView === 'ABOUT') { return <AboutPage onBack={handleBackToHome} />; }
    return (
      <>
        <Hero onContextFilterChange={handleContextFilterChange} />
        <div ref={archiveRef} className="sticky top-16 z-30 bg-paper/95 backdrop-blur w-full py-4 px-6 border-b-[0.5px] border-line flex justify-between items-center">
          <div className="flex items-center gap-6 overflow-x-auto scrollbar-hide">
            {['ALL', 'BLUEPRINT', 'ESSAY', 'PROJECT', 'INSPIRATION'].map((filter) => (
              <button key={filter} onClick={() => { setActiveFilter(filter); setContextFilter(null); }} className={`font-mono text-xs tracking-wider transition-all duration-300 whitespace-nowrap cursor-pointer ${activeFilter === filter && !contextFilter ? 'text-ink underline decoration-[0.5px] underline-offset-4 font-bold' : 'text-ink/40 hover:text-brick'}`}>
                {filter}
              </button>
            ))}
          </div>
          <div className="font-mono text-[10px] text-ink/40 uppercase tracking-widest hidden md:block">{filteredData.length} records found</div>
        </div>
        <AnimatePresence mode="wait">
          {viewMode === 'GRID' ? (
             <motion.div key="grid" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                {filteredData.length > 0 ? ( <MasonryLayout items={filteredData} onItemClick={handleItemClick} /> ) : (
                  <div className="w-full h-64 flex flex-col items-center justify-center border-t-[0.5px] border-line text-ink/40 font-mono text-xs">
                    <span>NO MATCHING CONTEXT FOUND.</span>
                    <button onClick={handleLogoClick} className="mt-4 text-brick hover:underline underline-offset-4 cursor-pointer">RESET SYSTEM</button>
                  </div>
                )}
             </motion.div>
          ) : (
             <motion.div key="table" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
               <TableView items={filteredData} onItemClick={handleItemClick} />
             </motion.div>
          )}
        </AnimatePresence>
      </>
    );
  };

  return (
    <div className="min-h-screen bg-paper flex flex-col font-sans selection:bg-brick/20 selection:text-ink">
      <FluidCursor />
      <Header onLogoClick={handleLogoClick} onNavClick={handleNavClick} onAboutClick={handleAboutClick} viewMode={viewMode} toggleViewMode={() => setViewMode(prev => prev === 'GRID' ? 'TABLE' : 'GRID')} />
      <main className="flex-grow w-full max-w-[1920px] mx-auto border-x-[0.5px] border-line box-content overflow-visible">{renderContent()}</main>
      <Footer />
    </div>
  );
};

export default App;