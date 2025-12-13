import { ContentItem, ContentType } from './types';

export const BRAND = {
  name: "FORM & VOID",
  slogan: "Architecting the Quiet Context",
  manifesto: "공간의 여백에서 사람을 배웠고 구조의 논리에서 시스템을 익혔습니다.\n12년의 기록이 제게 알려준 것은 좋은 도구는 행동을 억지로 바꾸는 것이 아니라 그저 당신의 흐름을 발견해 준다는 사실입니다.\n이제 데이터라는 재료로 당신의 고유한 맥락이 숨 쉴 수 있는 집을 짓습니다."
};

export const DATA: ContentItem[] = [
  {
    id: '1',
    type: ContentType.BLUEPRINT,
    title: "Flow Architect: 불안을 잠재우는 수험생 관리 설계도",
    date: "2023.10.24",
    imageUrl: "https://picsum.photos/600/800", // Portrait
    aspectRatio: 'portrait',
    keywords: ['structure', 'anxious'],
    isLocked: false
  },
  {
    id: '2',
    type: ContentType.ESSAY,
    title: "12년의 기록: 데이터로 내 취향의 패턴을 읽다",
    date: "2023.11.02",
    imageUrl: "https://picsum.photos/600/600", // Changed to Square
    aspectRatio: 'square',
    keywords: ['insight', 'lost'],
    isLocked: false
  },
  {
    id: '3',
    type: ContentType.PROJECT,
    title: "Persona Modeling: 고객의 마음을 구조화하는 법",
    date: "2024.01.15",
    imageUrl: "https://picsum.photos/600/600", // Square
    aspectRatio: 'square',
    keywords: ['reference', 'curious'],
    isLocked: true // NDA Protected
  },
  {
    id: '4',
    type: ContentType.INSPIRATION,
    title: "일본 소설의 첫 문장 수집",
    date: "ARCHIVE_042",
    imageUrl: "https://picsum.photos/600/750", // Portrait
    aspectRatio: 'portrait',
    keywords: ['silence', 'overwhelmed'],
    isLocked: false
  },
  {
    id: '5',
    type: ContentType.ESSAY,
    title: "비움의 미학: 여백이 주는 완전함",
    date: "2024.02.10",
    imageUrl: "https://picsum.photos/600/500", 
    aspectRatio: 'square',
    keywords: ['silence', 'insight', 'anxious'],
    isLocked: false
  },
  {
    id: '6',
    type: ContentType.BLUEPRINT,
    title: "Morning Routine System v2.0",
    date: "SYSTEM_LOG",
    imageUrl: "https://picsum.photos/600/900", // Tall Portrait
    aspectRatio: 'portrait',
    keywords: ['structure', 'overwhelmed'],
    isLocked: false
  },
  {
    id: '7',
    type: ContentType.PROJECT,
    title: "Library of Silence: 공간 브랜딩",
    date: "2023.09.11",
    imageUrl: "https://picsum.photos/600/600", // Changed to Square
    aspectRatio: 'square',
    keywords: ['reference', 'lost'],
    isLocked: true // NDA Protected
  }
];