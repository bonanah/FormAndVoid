import React from 'react';
import { ContentItem } from '../types';
import { ArrowUpRight, Lock } from 'lucide-react';

interface GridItemProps {
  item: ContentItem;
  onClick?: () => void;
}

export const GridItem: React.FC<GridItemProps> = ({ item, onClick }) => {
  
  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (item.isLocked) {
      alert("⚠️ ACCESS DENIED\n\nThis project is protected by NDA (Non-Disclosure Agreement).\nConfidentiality protocols are active.");
      return;
    }
    onClick?.();
  };

  return (
    <div 
      onClick={handleClick}
      className="group relative w-full h-full bg-paper overflow-hidden flex flex-col cursor-pointer"
    >
      {/* Container for content */}
      <div className="flex flex-col h-full w-full">
        
        {/* Image Section */}
        <div className="w-full flex-grow p-5 bg-paper flex flex-col min-h-0 relative">
          <div className="relative w-full h-full overflow-hidden border-[0.5px] border-line/30">
            
            {/* Image Layer */}
            <div className={`relative w-full h-full transition-all duration-500 ease-in-out ${item.isLocked ? 'blur-md grayscale opacity-50' : 'filter grayscale contrast-[1.1] group-hover:grayscale-0 group-hover:contrast-100'}`}>
              <img 
                src={item.imageUrl} 
                alt={item.title}
                className="w-full h-full object-cover absolute inset-0 block"
                loading="lazy"
              />
              
              {/* Noise Overlay */}
              <div className="absolute inset-0 noise-overlay opacity-30 mix-blend-overlay" />
            </div>

            {/* Hover Overlay (Only for unlocked) */}
            {!item.isLocked && (
               <div className="absolute inset-0 bg-brick/0 transition-colors duration-300 group-hover:bg-brick/10 mix-blend-multiply" />
            )}

            {/* Locked Overlay */}
            {item.isLocked && (
              <div className="absolute inset-0 flex flex-col items-center justify-center z-20">
                <div className="w-10 h-10 border-[0.5px] border-ink rounded-full flex items-center justify-center bg-paper/80 mb-2">
                  <Lock className="w-4 h-4 text-ink" />
                </div>
                <span className="font-mono text-[9px] text-ink uppercase tracking-widest bg-paper/80 px-2 py-1 border-[0.5px] border-line">
                  [CONFIDENTIAL]
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Content Section */}
        <div className="flex flex-col justify-between px-5 pb-6 pt-0 bg-paper z-10 shrink-0">
          
          <div className="flex justify-between items-start mb-3 border-t-[0.5px] border-line pt-3">
            <span className={`font-mono text-[10px] tracking-widest uppercase border-[0.5px] border-line px-1.5 py-0.5 ${item.isLocked ? 'text-brick/60 border-brick/30' : 'text-ink/50'}`}>
              {item.isLocked ? 'PRIVATE VAULT' : item.type}
            </span>
            {!item.isLocked && (
               <ArrowUpRight className="w-3.5 h-3.5 text-ink opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            )}
          </div>

          <div>
            <h3 className={`font-sans font-medium text-lg leading-snug mb-1 transition-colors duration-300 line-clamp-2 ${item.isLocked ? 'text-ink/40' : 'text-ink group-hover:text-brick'}`}>
              {item.title}
            </h3>
            <p className="font-mono text-[10px] text-ink/40 tracking-tight">
              {item.date}
            </p>
          </div>
          
        </div>
      </div>
    </div>
  );
};