import React, { ReactNode } from 'react';

export interface SlideProps {
  isActive: boolean;
}

export interface SlideData {
  id: number;
  component: React.FC<SlideProps>;
  title: string;
  hideChrome?: boolean;       // 헤더(제목/페이지) 숨김 (표지·엔딩·구분 슬라이드)
  subtitleOverride?: string;  // 상단 서브타이틀 강제 지정 (기본은 PART 번호)
}

export interface LayoutProps {
  children: ReactNode;
  title?: string;
  subtitle?: string;
  pageNumber: number;
  totalPages: number;
}