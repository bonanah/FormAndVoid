import React from 'react';
import { ContentItem } from '../types';
import { ArrowUpRight } from 'lucide-react';

interface GridItemProps {
  item: ContentItem;
}

export const GridItem: React.FC<GridItemProps> = ({ item }) => {
  return (
    <div className="group relative w-full h-full bg-paper overflow-hidden flex flex-col">
      {/* Container for content - making it full height to stretch in grid */}
      <div className="flex flex-col h-full w-full">
        
        {/* Image Section */}
        {/* We allow the image to take up all available space minus the header/footer areas */}
        <div className="w-full flex-grow p-5 bg-paper flex flex-col min-h-0">
          <div className="relative w-full h-full overflow-hidden border-[0.5px] border-line/30">
            {/* Developing Effect Layer */}
            <div className="relative w-full h-full filter grayscale contrast-[1.1] transition-all duration-300 ease-in-out group-hover:grayscale-0 group-hover:contrast-100">
              <img 
                src={item.imageUrl} 
                alt={item.title}
                className="w-full h-full object-cover absolute inset-0 block"
                loading="lazy"
              />
              
              {/* Noise Overlay */}
              <div className="absolute inset-0 noise-overlay opacity-30 mix-blend-overlay" />
            </div>

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-brick/0 transition-colors duration-300 group-hover:bg-brick/10 mix-blend-multiply" />
          </div>
        </div>

        {/* Content Section */}
        {/* Fixed height content area to ensure alignment at the bottom of the cell */}
        <div className="flex flex-col justify-between px-5 pb-6 pt-0 bg-paper z-10 shrink-0">
          
          <div className="flex justify-between items-start mb-3 border-t-[0.5px] border-line pt-3">
            <span className="font-mono text-[10px] tracking-widest text-ink/50 uppercase border-[0.5px] border-line px-1.5 py-0.5">
              {item.type}
            </span>
            <ArrowUpRight className="w-3.5 h-3.5 text-ink opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>

          <div>
            {/* Updated to font-medium (slightly bolder) as requested */}
            <h3 className="font-sans font-medium text-lg leading-snug text-ink mb-1 group-hover:text-brick transition-colors duration-300 line-clamp-2">
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