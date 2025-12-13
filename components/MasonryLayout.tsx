import React from 'react';
import { ContentItem } from '../types';
import { GridItem } from './GridItem';

interface MasonryLayoutProps {
  items: ContentItem[];
  onItemClick?: (item: ContentItem) => void;
}

// Enhanced Void Cell with Text Support
interface VoidCellProps {
  text?: string;
  subText?: string;
  align?: 'center' | 'bottom-left';
}

const VoidCell: React.FC<VoidCellProps> = ({ text, subText, align = 'center' }) => (
  <div className="w-full h-full min-h-[100px] bg-paper relative hidden md:flex flex-col p-8 overflow-hidden group">
    {/* Architectural Grid Pattern */}
    <div 
      className="absolute inset-0 opacity-20 pointer-events-none transition-opacity duration-500 group-hover:opacity-10"
      style={{
        backgroundImage: `
          linear-gradient(to right, #2A2A2A 0.5px, transparent 0.5px),
          linear-gradient(to bottom, #2A2A2A 0.5px, transparent 0.5px)
        `,
        backgroundSize: '24px 24px'
      }}
    />

    {/* Content Container */}
    <div className={`relative z-10 w-full h-full flex flex-col ${align === 'center' ? 'justify-center items-center text-center' : 'justify-end items-start text-left'}`}>
      {text && (
        <p className="font-serif italic text-2xl md:text-3xl text-ink/80 mb-3 leading-tight">
          {text}
        </p>
      )}
      {subText && (
        <div className="flex items-center gap-2">
           <div className={`h-[0.5px] bg-ink/30 w-8 ${align === 'center' ? 'hidden' : 'block'}`} />
           <p className="font-mono text-[10px] text-brick/80 uppercase tracking-[0.2em]">
            {subText}
          </p>
        </div>
      )}
    </div>
  </div>
);

// Type helper to inject voids into the data stream
type GridElement = 
  | { type: 'ITEM'; data: ContentItem }
  | { type: 'VOID'; id: string; spanClass: string; text?: string; subText?: string; align?: 'center' | 'bottom-left' };

export const MasonryLayout: React.FC<MasonryLayoutProps> = ({ items, onItemClick }) => {
  
  const mixedElements: GridElement[] = [];
  
  // Strategy: Interleave Items and Voids more organically
  items.forEach((item, index) => {
    mixedElements.push({ type: 'ITEM', data: item });
    
    // 1. Philosophical Slogan (Small square)
    if (index === 1) {
      mixedElements.push({ 
        type: 'VOID', 
        id: 'void-1', 
        spanClass: 'md:col-span-1 md:row-span-1',
        text: '"Form follows Context."',
        subText: 'DESIGN PRINCIPLE 01',
        align: 'center'
      });
    }

    // 2. Brand Atmosphere (Wide banner)
    if (index === 3) {
      mixedElements.push({ 
        type: 'VOID', 
        id: 'void-2', 
        spanClass: 'md:col-span-2 md:row-span-1',
        text: 'The Quiet Archive',
        subText: 'COLLECTING SILENCE',
        align: 'center'
      });
    }

    // 3. Time Stamp (Small square, bottom aligned)
    if (index === 5) {
       mixedElements.push({ 
         type: 'VOID', 
         id: 'void-3', 
         spanClass: 'md:col-span-1 md:row-span-1',
         text: '02:00 AM',
         subText: 'SEOUL / STUDIO',
         align: 'bottom-left'
       });
    }
  });

  const getSpanClasses = (item: ContentItem) => {
    switch (item.aspectRatio) {
      case 'portrait':
        return 'md:col-span-1 md:row-span-2';
      case 'landscape':
        return 'md:col-span-2 md:row-span-1';
      case 'square':
      default:
        return 'md:col-span-1 md:row-span-1';
    }
  };

  return (
    <div className="w-full border-t-[0.5px] border-line">
      {/* 
        GRID CONFIGURATION:
        - gap-x-1: Adds a thin (4px) empty space between columns (gutters).
      */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 auto-rows-[300px] grid-flow-dense gap-x-1">
        {mixedElements.map((element, idx) => {
          if (element.type === 'VOID') {
            return (
              <div 
                key={element.id} 
                className={`relative border-b-[0.5px] border-line ${element.spanClass}`}
              >
                <VoidCell 
                  text={element.text} 
                  subText={element.subText} 
                  align={element.align}
                />
              </div>
            );
          }

          const item = element.data;
          const spanClass = getSpanClasses(item);

          return (
            <div 
              key={item.id} 
              className={`
                relative border-b-[0.5px] border-line 
                ${spanClass}
                min-h-[300px]
              `}
            >
              <GridItem 
                item={item} 
                onClick={() => onItemClick && onItemClick(item)}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};