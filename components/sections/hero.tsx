'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Github, Linkedin } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Typewriter } from 'react-simple-typewriter';

export function HeroSection() {
  return (
    <section id='home' className='py-24 sm:py-32'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8 relative'>
        <div className='grid items-center gap-12 lg:grid-cols-2'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className='text-center lg:text-left'>
            <h1 className='text-4xl font-bold tracking-tight sm:text-5xl'>
              Md Ashfakul Karim Rahi
            </h1>
            <h2 className='text-3xl mt-6 font-bold tracking-tight sm:text-4xl'>
              Frontend Developer
            </h2>
            <p className='mt-6 text-lg leading-8 text-muted-foreground'>
              Crafting beautiful and performant web experiences with React js,{' '}
              <span className='text-[#ceb395]'>
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
            </p>
            <div className='mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-4 lg:justify-start'>
              <Button asChild>
                <a href='#contact'>
                  Contact me <ArrowRight className='ml-2 h-4 w-4' />
                </a>
              </Button>
              <Button variant='outline' size='icon' asChild>
                <Link
                  href='https://github.com/ashfak101'
                  target='_blank'
                  rel='noopener noreferrer'>
                  <Github className='h-4 w-4' />
                </Link>
              </Button>
              <Button variant='outline' size='icon' asChild>
                <Link
                  href='https://www.linkedin.com/in/md-ashfakul-karim-rahi-3a0b62211/'
                  target='_blank'
                  rel='noopener noreferrer'>
                  <Linkedin className='h-4 w-4' />
                </Link>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className='relative mx-auto aspect-square w-full max-w-md lg:max-w-none'>
            <div className='relative h-full w-full overflow-hidden rounded-full bg-gradient-to-b from-primary/10 to-primary/30'>
              <Image
                src='/images/1.jpg'
                alt='Professional headshot'
                fill
                className='object-cover object-center'
                priority
              />
            </div>
            <div className='absolute -inset-0.5 -z-10 rounded-full bg-gradient-to-br from-primary/50 to-primary/30 blur-2xl' />
          </motion.div>
          <div className='absolute hidden lg:block right-0 text-right text-[#efd3b3]  bg-black px-4 py-2 rounded-lg'>
            <Link
              href={'mailto:ashfakulkarim2@gmail.com'}
              className='text-xs color-animation'>
              ashfakulkarim2@gmail.com
            </Link>{' '}
            <br />
            <Link href={'/'} className='text-[10px]'>
              Sylhet, Bangladesh
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
