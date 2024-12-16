'use client';

import { useEffect, useState } from 'react';
import { Inter } from "next/font/google";
import { Noto_Sans_Arabic } from "next/font/google";
import "./globals.css";
import dynamic from 'next/dynamic';

const Navbar = dynamic(() => import('@/components/Navbar'), {
  ssr: false,
  loading: () => <div className="h-16" /> // Placeholder for navbar height
});

const inter = Inter({ subsets: ["latin"] });
const notoSansArabic = Noto_Sans_Arabic({ subsets: ["arabic"] });

export function RootLayoutClient({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <html lang="ar" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <meta name="color-scheme" content="dark" />
      </head>
      <body 
        className={`${inter.className} ${notoSansArabic.variable} bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white min-h-screen`}
        suppressHydrationWarning
      >
        {mounted && <Navbar />}
        {children}
      </body>
    </html>
  );
} 