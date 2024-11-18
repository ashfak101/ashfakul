import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Toaster } from '@/components/ui/toaster';
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: " Ashfalul's Portfolio | React & Next.js Expert",
    template: "Ashfalul's Portfolio ",
  },
  description:
    'Expert Frontend Developer specializing in React, Next.js, Redux, and modern web technologies. View my projects and get in touch for collaboration.',
  keywords: [
    'Frontend Developer',
    'React',
    'Next.js',
    'Redux',
    'TypeScript',
    'Tailwind CSS',
    'Web Development',
    'UI/UX',
    'JavaScript',
  ],
  authors: [{ name: 'Md Ashfakul Karim Rahi' }],
  creator: 'Ashfakul Karim Rahi',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ashfakul.vercel.app/',
    siteName: "Ashfalul's Portfolio ",
    title: " Ashfalul's Portfolio | React & Next.js Expert",
    description:
      'Expert Frontend Developer specializing in React, Next.js, Redux, and modern web technologies. View my projects and get in touch for collaboration.',
    images: [
      {
        url: '/images/og-image.png',
        width: 800,
        height: 600,
        alt: 'Frontend Developer Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title:  " Ashfalul's Portfolio | React & Next.js Expert",
    description:
      'Expert Frontend Developer specializing in React, Next.js, Redux, and modern web technologies. View my projects and get in touch for collaboration.',
    images: ['/images/og-image.png'],
    creator: '',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' suppressHydrationWarning>
      <Head>
        <meta charSet='utf-8' />
        <link rel='icon' href='/favicon.ico' />
        <link rel='canonical' href='https://ashfakul.vercel.app/' />
      </Head>
      <body className={inter.className}>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange>
          <div className='flex min-h-screen flex-col'>
            <Navbar />
            <main className='flex-1'>{children}</main>
            <Footer />
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
