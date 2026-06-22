'use client';

import type { PropsWithChildren } from 'react';

import { Content } from './styled';

export function DashboardContent({ children }: PropsWithChildren) {
  return <Content>{children}</Content>;
}
