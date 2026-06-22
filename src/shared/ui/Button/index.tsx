'use client';

import type { ButtonHTMLAttributes } from 'react';

import { StyledButton } from './styled';

export function Button({
  type = 'button',
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return <StyledButton type={type} {...props} />;
}
