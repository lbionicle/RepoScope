import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import type { PropsWithChildren } from 'react';

import StyledComponentsRegistry from '@/lib/registry';
import { palette } from '@/shared/styles/palette';

import Providers from './providers';

const inter = Inter({
  subsets: ['latin', 'cyrillic-ext'],
  weight: ['400', '500', '600', '700'],
  style: ['normal'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'RepoScope',
  description: 'Explore GitHub profiles and repositories.',
  authors: {
    name: 'Mikalai Tsymbal',
    url: 'https://gitlab.modsen.app/mikalai.tsymbal',
  },
};

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    {
      color: palette.gray[50],
      media: '(prefers-color-scheme: light)',
    },
    {
      color: palette.gray[950],
      media: '(prefers-color-scheme: dark)',
    },
  ],
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StyledComponentsRegistry>
          <Providers>{children}</Providers>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
