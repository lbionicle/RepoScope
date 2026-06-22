import Link from 'next/link';
import styled from 'styled-components';

import { withHexOpacity } from '@/shared/lib/withHexOpacity';

export const Card = styled.article`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.lg};
  min-width: 0;
  padding: ${({ theme }) => theme.spacing.xl};
  border: 1px solid ${({ theme }) => theme.colors.border.primary};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  background-color: ${({ theme }) => theme.colors.surface.primary};
`;

export const Header = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing.md};
`;

export const RepositoryLink = styled(Link)`
  min-width: 0;
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  line-height: ${({ theme }) => theme.lineHeights.compact};
  overflow-wrap: anywhere;

  &:hover {
    color: ${({ theme }) => theme.colors.text.link};
  }
`;

interface VisibilityProps {
  $private: boolean;
}

export const Visibility = styled.span<VisibilityProps>`
  flex-shrink: 0;
  padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.sm}`};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  background-color: ${({ $private, theme }) =>
    withHexOpacity(
      $private ? theme.colors.status.warning : theme.colors.status.success,
      0.14,
    )};
  color: ${({ $private, theme }) =>
    $private ? theme.colors.status.warning : theme.colors.status.success};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  line-height: ${({ theme }) => theme.lineHeights.normal};
`;

export const Description = styled.p`
  flex: 1;
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  line-height: ${({ theme }) => theme.lineHeights.normal};
`;

export const Metadata = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.md};
`;

export const MetadataItem = styled.li`
  color: ${({ theme }) => theme.colors.text.tertiary};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  line-height: ${({ theme }) => theme.lineHeights.normal};
`;

export const Language = styled.span`
  color: ${({ theme }) => theme.colors.text.secondary};
`;
