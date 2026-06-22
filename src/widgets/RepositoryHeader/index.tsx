'use client';

import { Description, StyledPageHeader, Title } from './styled';

interface RepositoryHeaderProps {
  description?: string;
  title: string;
}

export function RepositoryHeader({
  description,
  title,
}: RepositoryHeaderProps) {
  return (
    <StyledPageHeader>
      <Title>{title}</Title>

      {description && <Description>{description}</Description>}
    </StyledPageHeader>
  );
}
