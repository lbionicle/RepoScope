import Image from 'next/image';
import styled from 'styled-components';

export const Overview = styled.section`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: ${({ theme }) => theme.spacing.xl2};
  padding: ${({ theme }) => theme.spacing.xl};
  border: 1px solid ${({ theme }) => theme.colors.border.primary};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  background-color: ${({ theme }) => theme.colors.surface.primary};
`;

export const Avatar = styled(Image)`
  border-radius: ${({ theme }) => theme.borderRadius.md};
`;

export const Content = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing.xl};
  min-width: 0;
`;

export const Identity = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing.xs};
`;

export const Name = styled.h2`
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: ${({ theme }) => theme.fontSizes.xl2};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  line-height: ${({ theme }) => theme.lineHeights.compact};
`;

export const Login = styled.a`
  color: ${({ theme }) => theme.colors.text.link};
  font-size: ${({ theme }) => theme.fontSizes.sm};

  &:hover {
    text-decoration: underline;
  }
`;

export const Bio = styled.p`
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  line-height: ${({ theme }) => theme.lineHeights.normal};
`;

export const Stats = styled.dl`
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: ${({ theme }) => theme.spacing.md};
`;

export const Stat = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing.xs};
`;

export const StatValue = styled.dd`
  margin: 0;
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
`;

export const StatLabel = styled.dt`
  color: ${({ theme }) => theme.colors.text.tertiary};
  font-size: ${({ theme }) => theme.fontSizes.xs};
`;

export const RateLimit = styled.p`
  color: ${({ theme }) => theme.colors.text.tertiary};
  font-size: ${({ theme }) => theme.fontSizes.xs};
`;
