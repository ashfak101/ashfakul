'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import {
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Download,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Typewriter } from 'react-simple-typewriter';

export function HeroSection() {
  return (
    <section id='home' className='py-16 sm:py-24 overflow-hidden'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8 relative'>
        {/* Background decorative elements */}
        <div className='absolute inset-0 -z-10'>
          <div className='absolute -top-40 -right-20 h-96 w-96 rounded-full bg-primary/10 blur-3xl'></div>
          <div className='absolute top-40 -left-20 h-72 w-72 rounded-full bg-accent/10 blur-3xl'></div>
        </div>

        <div className=' '>
          {/* Left content column (wider on larger screens) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className='text-center relative z-10 max-w-[650px] mx-auto flex flex-col items-center'>
            {/* Greeting and name */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className='mb-4 inline-flex items-center px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium mx-auto'>
              <span className='animate-pulse mr-1.5 h-2 w-2 rounded-full bg-primary'></span>
              <span className='animate-text-color-slow'>
                Hello, I'm a developer based in Bangladesh
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}>
              <h1 className='text-4xl font-bold tracking-tight sm:text-6xl animate-text-gradient bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-primary bg-size-200'>
                Md Ashfakul Karim Rahi
              </h1>
              <h2 className='text-3xl mt-4 font-bold tracking-tight sm:text-4xl animate-text-color'>
                Frontend Developer
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className='mt-6 text-lg leading-8 text-muted-foreground max-w-2xl mx-auto text-center'>
              Crafting beautiful and performant web experiences with React js,{' '}
              <span className='text-accent font-semibold animate-text-shimmer bg-clip-text text-transparent bg-[linear-gradient(110deg,#9333ea,45%,#4f46e5,55%,#9333ea)] bg-size-200'>
                <Typewriter
                  words={[
                    'Next.js',
                    'Wordpress',
                    'Redux',
                    'RTQ Query',
                    'Payment Gateway',
                    'Tailwind CSS',
                    'Node Js',
                  ]}
                  loop={true}
                />
              </span>{' '}
              and modern web technologies.{' '}
            </motion.p>

            {/* Contact info card for both mobile and desktop */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className='mt-4 mb-6 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-sm text-muted-foreground'>
              <Link
                href={'mailto:ashfakulkarim2@gmail.com'}
                className='flex items-center hover:text-accent transition-colors'>
                <Mail className='mr-2 h-4 w-4' /> ashfakulkarim2@gmail.com
              </Link>
              <span className='hidden sm:inline'>•</span>
              <Link
                href={'/'}
                className='flex items-center hover:text-accent transition-colors'>
                <MapPin className='mr-1 h-4 w-4' /> Sylhet, Bangladesh
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className='mt-6 flex flex-wrap items-center justify-center gap-4'>
              <Button
                asChild
                className='button-glow hover-lift animate-button-gradient bg-gradient-to-r from-primary via-accent to-primary bg-size-200 hover:opacity-90 transition-all'>
                <a href='#contact'>
                  Contact me <ArrowRight className='ml-2 h-4 w-4' />
                </a>
              </Button>
              <Button variant='outline' asChild className='hover-lift'>
                <a href='Resume_Ashfakul_Karim_.pdf' download>
                  Download CV <Download className='ml-2 h-4 w-4' />
                </a>
              </Button>
              <div className='flex gap-2'>
                <Button
                  variant='outline'
                  size='icon'
                  asChild
                  className='hover-lift'>
                  <Link
                    href='https://github.com/ashfak101'
                    target='_blank'
                    rel='noopener noreferrer'>
                    <Github className='h-4 w-4' />
                  </Link>
                </Button>
                <Button
                  variant='outline'
                  size='icon'
                  asChild
                  className='hover-lift'>
                  <Link
                    href='https://www.linkedin.com/in/md-ashfakul-karim-rahi-3a0b62211/'
                    target='_blank'
                    rel='noopener noreferrer'>
                    <Linkedin className='h-4 w-4' />
                  </Link>
                </Button>
              </div>
            </motion.div>
            <Link
              href='https://backlink-list.com/product/e99e8573-1486-40f9-a458-8f1b621e7c31'
              target='_blank'
              title='Backlink-list.com Top 3 Daily Winner'
              className='mt-4 '>
              <img
                src='https://backlink-list.com/badges/top2-badge.png'
                alt='Backlink-list Badge'
                style={{ width: '250px', height: 'auto' }}
              />
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Add CSS for animations in global.css or you can create a style tag here */}
      <style jsx global>{`
        @keyframes text-color-change {
          0% {
            color: hsl(var(--primary));
          }
          50% {
            color: hsl(var(--accent));
          }
          100% {
            color: hsl(var(--primary));
          }
        }

        @keyframes text-color-change-slow {
          0% {
            color: hsl(var(--foreground));
          }
          50% {
            color: hsl(var(--accent));
          }
          100% {
            color: hsl(var(--foreground));
          }
        }

        @keyframes gradient-shift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        @keyframes border-glow {
          0% {
            border-color: rgba(var(--primary-rgb), 0.2);
          }
          50% {
            border-color: rgba(var(--accent-rgb), 0.4);
          }
          100% {
            border-color: rgba(var(--primary-rgb), 0.2);
          }
        }

        .animate-text-color {
          animation: text-color-change 3s infinite;
        }

        .animate-text-color-slow {
          animation: text-color-change-slow 6s infinite;
        }

        .animate-text-gradient {
          animation: gradient-shift 3s ease infinite;
        }

        .animate-text-shimmer {
          animation: gradient-shift 2s linear infinite;
        }

        .animate-button-gradient {
          animation: gradient-shift 3s ease infinite;
        }

        .animate-border-glow {
          animation: border-glow 4s ease infinite;
        }

        .animate-pulse-slow {
          animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        .bg-size-200 {
          background-size: 200% 200%;
        }
      `}</style>
    </section>
  );
}
