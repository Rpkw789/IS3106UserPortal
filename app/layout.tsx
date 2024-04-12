import React from 'react';

import { type Metadata, type Viewport } from 'next';

import './styles/ui.css';
import './styles/site.css';

import Alert from '@components/Alert/Alert';

export const runtime = 'edge';

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>): React.JSX.Element => (
  <html lang='en'>
    <body>
      {children}
      <Alert />
    </body>
  </html>
);

const title = 'Modern ticketing';
const canonical = 'https://modern-ticketing.com';
const description = 'Modern ticketing is a modern ticketing solution';

export const viewport: Viewport = {
  width: 'device-width',
  themeColor: '#ffffff',
  initialScale: 1,
};

export const metadata: Metadata = {
  title,
  description,
  robots: 'noindex, nofollow', // TODO: change in production
  keywords: 'modern ticketing',
  alternates: { canonical },
  icons: {
    icon: '/favicon.ico',
    apple: '/logo192.png',
    shortcut: '/logo192.png',
  },
  metadataBase: new URL(canonical),
  openGraph: {
    title,
    description,
    url: canonical,
    type: 'website',
    images: '/logo192.png',
    siteName: 'Modern Ticketing',
  },
};

export default RootLayout;
