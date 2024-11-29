import React from 'react';

import type { Metadata } from 'next';
import { Roboto_Condensed } from 'next/font/google';

import { Navbar } from './components/navbar/Navbar';

import './globals.css';

const roboto = Roboto_Condensed({
  subsets: ['latin', 'cyrillic', 'cyrillic-ext'],
  display: 'swap',
  weight: ['300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: 'Boost Brand',
  description: 'Бүх төрлийн дүрэмт хувцас',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${roboto.className} antialiased`}>
        <Navbar />
        <main className="h-screen w-screen">{children}</main>
      </body>
    </html>
  );
}
