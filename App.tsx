import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { BRAND, DATA } from './constants';
import { MasonryLayout } from './components/MasonryLayout';

// Inline Header Component for cohesive structure
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'ARCHIVE', desc: 'Essay' },
    { label: 'BLUEPRINT', desc: 'Shop' },
    { label: 'STUDIO', desc: 'Consulting' }
  ];

  return (
    <header className="sticky top-0 z-50 bg-paper/95 backdrop-blur-sm border-b-[0.5px] border-line w-full">
      <div className="flex justify-between items-stretch h-16">
        
        {/* Logo Section */}
        <div className="flex items-center px-6 border-r-[0.5px] border-line min-w-[200px]">
          <h1 className="font-sans text-lg tracking-widest text-ink font-bold uppercase">
            {BRAND.name}
          </h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex flex-1">
          {navItems.map((item) => (
            <a 
              key={item.label}
              href="#"
              className="group flex-1 flex flex-col justify-center items-center border-l-[0.5px] border-line first:border-l-0 hover:bg-ink/5 transition-colors duration-300 relative"
            >
              <span className="font-sans font-light text-sm tracking-widest text-ink">{item.label}</span>
              <span className="font-mono text-[10px] text-ink/50 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute bottom-3">
                [{item.desc}]
              </span>
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden flex items-center justify-center w-16 border-l-[0.5px] border-line"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="w-5 h-5 text-ink" /> : <Menu className="w-5 h-5 text-ink" />}
        </button>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-paper border-b-[0.5px] border-line">
          {navItems.map((item) => (
            <a 
              key={item.label}
              href="#"
              className="flex justify-between items-center px-6 py-4 border-b-[0.5px] border-line last:border-b-0 hover:bg-ink/5"
            >
              <span className="font-sans font-light text-lg text-ink">{item.label}</span>
              <span className="font-mono text-xs text-ink/50">[{item.desc}]</span>
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

// Hero Component
const Hero = () => {
  return (
    <section className="relative w-full py-32 md:py-48 px-6 md:px-12 lg:px-24 flex flex-col justify-center border-b-[0.5px] border-line bg-paper overflow-hidden">
       <div className="noise-overlay absolute inset-0 opacity-20 pointer-events-none" />
       
       <div className="max-w-7xl w-full relative z-10">
         <div className="font-mono text-xs text-brick mb-8 tracking-widest uppercase flex items-center gap-2">
            <span className="w-2 h-2 bg-brick inline-block" />
            Manifesto 01
         </div>
         
         {/* Updated Typography per user request: Strictly One Line & Responsive */}
         <div className="flex flex-col gap-4">
            <h2 className="font-sans font-bold text-ink tracking-tight whitespace-nowrap" style={{ fontSize: 'clamp(1.2rem, 4vw, 3.5rem)' }}>
              우리는 당신의 맥락이 숨 쉴 수 있도록 형태를 짓습니다.
            </h2>
            <p className="font-sans font-light text-ink/60 tracking-wide" style={{ fontSize: 'clamp(0.8rem, 1.5vw, 1.25rem)' }}>
              We build the form to let your context breathe.
            </p>
         </div>

         <div className="mt-20 flex items-center gap-4">
            <div className="h-[0.5px] w-24 bg-ink/30" />
            <span className="font-mono text-xs text-ink/50">
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
  return (
    <div className="min-h-screen bg-paper flex flex-col font-sans selection:bg-brick/20 selection:text-ink">
      <Header />
      <main className="flex-grow w-full max-w-[1920px] mx-auto border-x-[0.5px] border-line box-content">
        <Hero />
        
        {/* Filter Bar */}
        <div className="w-full py-4 px-6 border-b-[0.5px] border-line flex justify-end items-center gap-6 overflow-x-auto">
          {['ALL', 'BLUEPRINT', 'ESSAY', 'PROJECT', 'INSPIRATION'].map((filter, idx) => (
            <button 
              key={filter} 
              className={`font-mono text-xs tracking-wider transition-colors hover:text-brick ${idx === 0 ? 'text-ink underline decoration-[0.5px] underline-offset-4' : 'text-ink/40'}`}
            >
              {filter}
            </button>
          ))}
        </div>

        <MasonryLayout items={DATA} />
      </main>
      <Footer />
    </div>
  );
};

export default App;