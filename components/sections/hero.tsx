'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Github, Linkedin, Mail, MapPin } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Typewriter } from 'react-simple-typewriter';

export function HeroSection() {
  return (
    <section id='home' className='py-24 sm:py-32 overflow-hidden'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8 relative'>
        <div className='grid items-center gap-12 lg:grid-cols-2'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className='text-center lg:text-left relative z-10'>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h1 className='text-4xl font-bold tracking-tight sm:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent'>
                Md Ashfakul Karim Rahi
              </h1>
              <h2 className='text-3xl mt-4 font-bold tracking-tight sm:text-4xl'>
                Frontend Developer
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className='mt-6 text-lg leading-8 text-muted-foreground'>
              Crafting beautiful and performant web experiences with React js,{' '}
              <span className='text-accent font-semibold'>
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

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className='mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-4 lg:justify-start'>
              <Button asChild className='button-glow hover-lift bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-all'>
                <a href='#contact'>
                  Contact me <ArrowRight className='ml-2 h-4 w-4' />
                </a>
              </Button>
              <Button variant='outline' size='icon' asChild className='hover-lift'>
                <Link
                  href='https://github.com/ashfak101'
                  target='_blank'
                  rel='noopener noreferrer'>
                  <Github className='h-4 w-4' />
                </Link>
              </Button>
              <Button variant='outline' size='icon' asChild className='hover-lift'>
                <Link
                  href='https://www.linkedin.com/in/md-ashfakul-karim-rahi-3a0b62211/'
                  target='_blank'
                  rel='noopener noreferrer'>
                  <Linkedin className='h-4 w-4' />
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className='relative mx-auto aspect-square w-full max-w-md lg:max-w-none float-animation'>
            <div className='relative h-full w-full overflow-hidden rounded-full bg-gradient-to-b from-primary/20 to-primary/40 border-4 border-accent/20 shadow-xl'>
              <Image
                src='/images/1.jpg'
                alt='Professional headshot'
                fill
                className='object-cover object-center'
                priority
              />
            </div>
            <div className='absolute -inset-1 -z-10 rounded-full bg-gradient-to-br from-primary/60 to-accent/40 blur-2xl' />

            {/* Decorative elements */}
            <div className='absolute -top-4 -right-4 w-16 h-16 bg-accent/10 rounded-full blur-xl'></div>
            <div className='absolute -bottom-8 -left-8 w-24 h-24 bg-primary/10 rounded-full blur-xl'></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className='absolute hidden lg:flex flex-col items-end right-0 text-right bg-gradient-to-r from-background/80 to-background/95 backdrop-blur-sm px-5 py-4 rounded-xl shadow-lg border border-accent/20'>
            <Link
              href={'mailto:ashfakulkarim2@gmail.com'}
              className='text-sm font-medium flex items-center hover:text-accent transition-colors'>
              <Mail className='mr-2 h-4 w-4' /> ashfakulkarim2@gmail.com
            </Link>
            <Link
              href={'/'}
              className='text-xs mt-2 text-muted-foreground flex items-center hover:text-accent transition-colors'>
              <MapPin className='mr-1 h-3 w-3' /> Sylhet, Bangladesh
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
