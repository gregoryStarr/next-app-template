import React from 'react';
import { getServerSession } from 'next-auth';
import { MantineProvider, ColorSchemeScript } from '@mantine/core';
import SessionProvider from '../components/SessionProvider';
import { NavMenu } from '../components/layout/NavMenu';
import '@mantine/core/styles.css';
import { theme } from '../theme';

export const metadata = {
  title: 'Mantine Next.js template',
  description: 'I am using Mantine with Next.js!',
};

export default async function RootLayout({ children }: { children: any }) {
  const session = await getServerSession();

  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body>
        <SessionProvider session={session}>
          <MantineProvider theme={theme}>
            <main>
              <NavMenu />
              {children}
            </main>
          </MantineProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
