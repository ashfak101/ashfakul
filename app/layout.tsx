import './globals.css';
import type { Metadata } from 'next';
import { Inter, Roboto } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Toaster } from '@/components/ui/toaster';
import Head from 'next/head';
import { Analytics } from '@vercel/analytics/next';

const inter = Inter({ subsets: ['latin'] });
const robots = Roboto({ subsets: ['latin'], weight: '400' });

export const metadata: Metadata = {
  title: {
    default: " Ashfakul's Portfolio | React & Next.js Expert",
    template: "Ashfakul's Portfolio ",
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
    url: 'https://ashfakulkarim.xyz/',
    siteName: "Ashfakul's Portfolio ",
    title: " Ashfakul's Portfolio | React & Next.js Expert",
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
    title: " Ashfakul's Portfolio | React & Next.js Expert",
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
    google: '6hfr8b1Vo01MufjLDQuj6YQhJHOxCH7fE3uMM3gGU3k',
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
        <link rel='canonical' href='https://ashfakulkarim.xyz/' />
        <meta
          name='google-site-verification'
          content='6hfr8b1Vo01MufjLDQuj6YQhJHOxCH7fE3uMM3gGU3k'
        />
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
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
