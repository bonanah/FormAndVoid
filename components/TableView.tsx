import React from 'react';
import { ContentItem } from '../types';
import { Lock, FileText, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

interface TableViewProps {
  items: ContentItem[];
  onItemClick: (item: ContentItem) => void;
}

export const TableView: React.FC<TableViewProps> = ({ items, onItemClick }) => {
  
  const handleRowClick = (item: ContentItem) => {
    if (item.isLocked) {
      alert("⚠️ ACCESS DENIED\n\nThis project is protected by NDA.");
      return;
    }
    onItemClick(item);
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="w-full p-6 md:p-12 min-h-[50vh]"
    >
      <div className="w-full border-[0.5px] border-line">
        {/* Table Header */}
        <div className="grid grid-cols-12 border-b-[0.5px] border-line bg-paper/50 sticky top-32 z-20">
          <div className="col-span-1 p-3 border-r-[0.5px] border-line font-mono text-[10px] text-ink/40 uppercase tracking-widest">ID</div>
          <div className="col-span-2 p-3 border-r-[0.5px] border-line font-mono text-[10px] text-ink/40 uppercase tracking-widest hidden md:block">Type</div>
          <div className="col-span-6 md:col-span-5 p-3 border-r-[0.5px] border-line font-mono text-[10px] text-ink/40 uppercase tracking-widest">Project Title</div>
          <div className="col-span-2 p-3 border-r-[0.5px] border-line font-mono text-[10px] text-ink/40 uppercase tracking-widest hidden md:block">Date</div>
          <div className="col-span-5 md:col-span-2 p-3 font-mono text-[10px] text-ink/40 uppercase tracking-widest">Status</div>
        </div>

        {/* Table Body */}
        {items.map((item) => (
          <div 
            key={item.id}
            onClick={() => handleRowClick(item)}
            className="group grid grid-cols-12 border-b-[0.5px] border-line last:border-b-0 hover:bg-brick/5 cursor-pointer transition-colors duration-150"
          >
            {/* ID */}
            <div className="col-span-1 p-3 border-r-[0.5px] border-line font-mono text-xs text-ink/60 flex items-center justify-center">
              {item.id.padStart(2, '0')}
            </div>
            
            {/* Type */}
            <div className="col-span-2 p-3 border-r-[0.5px] border-line font-mono text-[10px] text-brick uppercase tracking-wider hidden md:flex items-center">
              {item.type}
            </div>
            
            {/* Title */}
            <div className="col-span-6 md:col-span-5 p-3 border-r-[0.5px] border-line font-sans text-sm text-ink group-hover:text-brick flex items-center font-medium">
              {item.title}
            </div>
            
            {/* Date */}
            <div className="col-span-2 p-3 border-r-[0.5px] border-line font-mono text-xs text-ink/40 hidden md:flex items-center">
              {item.date}
            </div>
            
            {/* Status */}
            <div className="col-span-5 md:col-span-2 p-3 flex items-center gap-2">
              {item.isLocked ? (
                <>
                  <Lock className="w-3 h-3 text-ink/40" />
                  <span className="font-mono text-[9px] text-ink/40 uppercase">LOCKED</span>
                </>
              ) : (
                <>
                  <div className="w-1.5 h-1.5 rounded-full bg-brick animate-pulse" />
                  <span className="font-mono text-[9px] text-brick uppercase">ACTIVE</span>
                </>
              )}
            </div>
          </div>
        ))}

        {items.length === 0 && (
          <div className="p-12 text-center font-mono text-xs text-ink/40">
            NO RECORDS FOUND IN DATABASE.
          </div>
        )}
      </div>
    </motion.div>
  );
};