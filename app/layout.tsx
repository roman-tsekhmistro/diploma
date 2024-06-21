/** @format */

import './globals.css';

import { Footer, NavBar } from '@components';

export const metadata = {
  title: 'Roman Tsekhmistro Diploma',
  description: 'Roman Tsekhmistro Diploma',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className='relative'>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
