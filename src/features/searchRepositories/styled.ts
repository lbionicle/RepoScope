import styled from 'styled-components';

export const SearchSection = styled.section`
  display: grid;
  gap: ${({ theme }) => theme.spacing.xl};
`;

export const SearchForm = styled.form`
  display: flex;
  align-items: flex-end;
  gap: ${({ theme }) => theme.spacing.md};
`;

export const SearchField = styled.label`
  display: grid;
  flex: 1;
  gap: ${({ theme }) => theme.spacing.xs};
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
`;

export const SearchInput = styled.input`
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.md}`};
  border: 1px solid ${({ theme }) => theme.colors.border.primary};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  background-color: ${({ theme }) => theme.colors.surface.primary};
  color: ${({ theme }) => theme.colors.text.primary};

  &::placeholder {
    color: ${({ theme }) => theme.colors.text.tertiary};
  }

  &:hover {
    border-color: ${({ theme }) => theme.colors.border.secondary};
  }

  &:focus {
    border-color: ${({ theme }) => theme.colors.border.focus};
  }
`;

export const ResultsHeader = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing.md};
`;

export const ResultsTitle = styled.h2`
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
`;

export const ResultsCount = styled.span`
  color: ${({ theme }) => theme.colors.text.tertiary};
  font-size: ${({ theme }) => theme.fontSizes.sm};
`;

export const RepositoryList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};
`;

export const RepositoryListItem = styled.li`
  display: flex;
  min-width: 0;
`;

export const Actions = styled.div`
  display: flex;
  justify-content: center;
`;
