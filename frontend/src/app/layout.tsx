import React from 'react';

import type { Metadata } from 'next';
import { Roboto_Condensed } from 'next/font/google';

import { Navbar } from './components';

import './globals.css';

const roboto = Roboto_Condensed({
  subsets: ['latin', 'cyrillic', 'cyrillic-ext'],
  display: 'swap',
  weight: ['300', '400', '700'],
});

export const metadata: Metadata = {
  title: 'Boots Brand',
  description: 'Бүх төрлийн дүрэмт хувцас',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${roboto.className} antialiased`}>
        <main className="grid h-screen grid-rows-[auto,1fr]">
          <Navbar />

          {children}
        </main>
      </body>
    </html>
  );
}
