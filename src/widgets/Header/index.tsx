'use client';

import { usePathname } from 'next/navigation';

import { Container } from '@/shared/ui/Container';

import { navigationItems } from './config';
import {
  Brand,
  HeaderContent,
  Navigation,
  NavigationLink,
  NavigationList,
  StyledHeader,
} from './styled';

function isNavigationItemActive(pathname: string, href: string): boolean {
  if (href === '/') {
    return pathname === href;
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Header() {
  const pathname = usePathname();

  return (
    <StyledHeader>
      <Container>
        <HeaderContent>
          <Brand href="/">RepoScope</Brand>

          <Navigation>
            <NavigationList>
              {navigationItems.map(({ href, label }) => {
                const isActive = isNavigationItemActive(pathname, href);

                return (
                  <li key={href}>
                    <NavigationLink $active={isActive} href={href}>
                      {label}
                    </NavigationLink>
                  </li>
                );
              })}
            </NavigationList>
          </Navigation>
        </HeaderContent>
      </Container>
    </StyledHeader>
  );
}
