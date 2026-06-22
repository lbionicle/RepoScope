import styled from 'styled-components';

const MAX_WIDTH_CONTAINER = '1200px';

export const StyledContainer = styled.div`
  width: 100%;
  max-width: ${MAX_WIDTH_CONTAINER};
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.xl};
`;
