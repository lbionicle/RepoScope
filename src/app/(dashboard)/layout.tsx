import type { PropsWithChildren } from 'react';

import { Container } from '@/shared/ui/Container';
import { Main } from '@/shared/ui/Main';
import { Header } from '@/widgets/Header';

export default function DashboardLayout({ children }: PropsWithChildren) {
  return (
    <>
      <Header />
      <Main>
        <Container>{children}</Container>
      </Main>
    </>
  );
}
