export enum ContentType {
  BLUEPRINT = 'BLUEPRINT',
  ESSAY = 'ESSAY',
  PROJECT = 'PROJECT',
  INSPIRATION = 'INSPIRATION',
}

export interface ContentItem {
  id: string;
  type: ContentType;
  title: string;
  description?: string;
  date: string;
  imageUrl: string;
  aspectRatio?: string; // 'square' | 'portrait' | 'landscape'
  isLocked?: boolean; // For NDA protected items
  keywords?: string[]; // For contextual search
}

export interface NavItem {
  label: string;
  href: string;
  meta?: string;
}