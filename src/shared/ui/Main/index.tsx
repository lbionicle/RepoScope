'use client';

import type { HTMLAttributes, ReactNode } from 'react';

import { StyledMain } from './styled';

interface MainProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
}

export function Main({ children, ...props }: MainProps) {
  return <StyledMain {...props}>{children}</StyledMain>;
}
