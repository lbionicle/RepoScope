'use client';

import type { PropsWithChildren } from 'react';

import { Description, Message, Title } from './styled';

interface StatusMessageProps extends PropsWithChildren {
  title: string;
  description: string;
}

export function StatusMessage({
  children,
  description,
  title,
}: StatusMessageProps) {
  return (
    <Message>
      <Title>{title}</Title>
      <Description>{description}</Description>
      {children}
    </Message>
  );
}
