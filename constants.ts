import { ContentItem, ContentType } from './types';

export const BRAND = {
  name: "FORM & VOID",
  slogan: "Architecting the Quiet Context",
  manifesto: "우리는 당신의 맥락이 숨 쉴 수 있도록 형태를 짓습니다.\n(We build the form to let your context breathe.)"
};

export const DATA: ContentItem[] = [
  {
    id: '1',
    type: ContentType.BLUEPRINT,
    title: "Flow Architect: 불안을 잠재우는 수험생 관리 설계도",
    date: "2023.10.24",
    imageUrl: "https://picsum.photos/600/800", // Portrait
    aspectRatio: 'portrait'
  },
  {
    id: '2',
    type: ContentType.ESSAY,
    title: "12년의 기록: 데이터로 내 취향의 패턴을 읽다",
    date: "2023.11.02",
    imageUrl: "https://picsum.photos/600/600", // Changed to Square
    aspectRatio: 'square'
  },
  {
    id: '3',
    type: ContentType.PROJECT,
    title: "Persona Modeling: 고객의 마음을 구조화하는 법",
    date: "2024.01.15",
    imageUrl: "https://picsum.photos/600/600", // Square
    aspectRatio: 'square'
  },
  {
    id: '4',
    type: ContentType.INSPIRATION,
    title: "일본 소설의 첫 문장 수집",
    date: "ARCHIVE_042",
    imageUrl: "https://picsum.photos/600/750", // Portrait
    aspectRatio: 'portrait'
  },
  {
    id: '5',
    type: ContentType.ESSAY,
    title: "비움의 미학: 여백이 주는 완전함",
    date: "2024.02.10",
    imageUrl: "https://picsum.photos/600/500", 
    aspectRatio: 'square'
  },
  {
    id: '6',
    type: ContentType.BLUEPRINT,
    title: "Morning Routine System v2.0",
    date: "SYSTEM_LOG",
    imageUrl: "https://picsum.photos/600/900", // Tall Portrait
    aspectRatio: 'portrait'
  },
  {
    id: '7',
    type: ContentType.PROJECT,
    title: "Library of Silence: 공간 브랜딩",
    date: "2023.09.11",
    imageUrl: "https://picsum.photos/600/600", // Changed to Square
    aspectRatio: 'square'
  }
];