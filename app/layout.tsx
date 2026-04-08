import type { Metadata } from 'next';
import './globals.css';
import { MainNav } from '@/components/layout/main-nav';
import { Footer } from '@/components/layout/footer';

export const metadata: Metadata = {
  title: 'Data Analyst Portfolio',
  description: 'Premium analytics-focused portfolio built with Next.js and Supabase.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <MainNav />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
