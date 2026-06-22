'use client';

import type { HTMLAttributes, ReactNode } from 'react';

import { StyledContainer } from './styled';

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export function Container({ children, ...props }: ContainerProps) {
  return <StyledContainer {...props}>{children}</StyledContainer>;
}
