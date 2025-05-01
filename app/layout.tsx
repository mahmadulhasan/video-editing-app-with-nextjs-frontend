'use client';

import './globals.css';

// app/layout.tsx 
import Navbar from './component/navbar';
import Footer from './component/footer';
import type { ReactNode } from 'react';
import { usePathname } from 'next/navigation';

export default function RootLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  const hideNavbarAndFooter = pathname === '/edit'; 

  return (
    <html lang="en">
      <title>Video Editor app</title>
      <body>
        {!hideNavbarAndFooter && <Navbar />}
        <main className={hideNavbarAndFooter ? '' : 'pt-21'}>{children}</main>
        {!hideNavbarAndFooter && <Footer />}
      </body>
    </html>
  );
}
