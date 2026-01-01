import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Momentum Mentor - Accelerate Your Future',
  description: 'Expert mentorship for professional growth. A structured goal-setting framework with AI-powered validation.',
  openGraph: {
    title: 'Momentum Mentor - Accelerate Your Future',
    description: 'Expert mentorship for professional growth. A structured goal-setting framework with AI-powered validation.',
    images: [
      {
        url: '/og-image.png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Momentum Mentor - Accelerate Your Future',
    description: 'Expert mentorship for professional growth.',
    images: [
      {
        url: '/og-image.png',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
