'use client';

import type { PropsWithChildren } from 'react';
import { ThemeProvider } from 'styled-components';

import { GraphQLProvider } from '@/shared/api/githubGraphql/GraphQLProvider';
import { GlobalStyles } from '@/shared/styles/globalStyles';
import { theme } from '@/shared/styles/theme';

export default function Providers({ children }: PropsWithChildren) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />

      <GraphQLProvider>{children}</GraphQLProvider>
    </ThemeProvider>
  );
}
