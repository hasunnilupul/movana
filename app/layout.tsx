import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/providers/theme-provider';
import Header from '@/components/header';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Movana - Discover Movies & TV Shows',
  description: 'Discover movies, TV shows, and people. Browse popular and trending content with spoiler-free mode and dark theme support.',
};

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
    <body
      className={`${inter.className} antialiased`}
    >
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      <Header />
      <main>{children}</main>
    </ThemeProvider>
    </body>
    </html>
  );
}
