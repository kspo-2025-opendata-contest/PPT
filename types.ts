import React, { ReactNode } from 'react';

export interface SlideProps {
  isActive: boolean;
}

export interface SlideData {
  id: number;
  component: React.FC<SlideProps>;
  title: string;
}

export interface LayoutProps {
  children: ReactNode;
  title?: string;
  subtitle?: string;
  pageNumber: number;
  totalPages: number;
}