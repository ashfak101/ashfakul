'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import {
  Brain,
  Code2,
  Database,
  Layout,
  Palette,
  Rocket,
  CheckCircle2,
  Briefcase,
  GraduationCap,
  Award,
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

const skills = [
  {
    name: 'Frontend Development',
    description: 'Building responsive and interactive user interfaces',
    icon: Layout,
    tools: ['React', 'Next.js', 'HTML5', 'CSS3'],
  },
  {
    name: 'State Management',
    description: 'Managing application state efficiently',
    icon: Brain,
    tools: ['Redux', 'Context API', 'RTK Query', 'Zustand'],
  },
  {
    name: 'Modern JavaScript',
    description: 'Utilizing latest JavaScript features',
    icon: Code2,
    tools: ['ES6+', 'TypeScript', 'Babel', 'Webpack'],
  },
  {
    name: 'UI/UX Design',
    description: 'Creating beautiful user interfaces',
    icon: Palette,
    tools: ['Tailwind CSS', 'Figma', 'Material UI', 'Styled Components'],
  },
  {
    name: 'API Integration',
    description: 'Connecting frontend with backend services',
    icon: Database,
    tools: ['REST APIs', 'GraphQL', 'Axios', 'SWR'],
  },
  {
    name: 'Performance Optimization',
    description: 'Ensuring fast loading and rendering',
    icon: Rocket,
    tools: ['Code Splitting', 'Lazy Loading', 'Memoization', 'Lighthouse'],
  },
];

export function AboutSection() {
  return (
    <section
      id='about'
      className='py-24 sm:py-32 relative'
      aria-labelledby='about-heading'>
      {/* Background decorative elements */}
      <div className='absolute inset-0 -z-10 overflow-hidden'>
        <div className='absolute right-1/4 -top-24 h-72 w-72 rounded-full bg-primary/5 blur-3xl'></div>
        <div className='absolute left-1/4 bottom-0 h-80 w-80 rounded-full bg-accent/5 blur-3xl'></div>
      </div>

      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className='mx-auto max-w-2xl text-center'>
          <span className='inline-block mb-2 font-medium text-primary animate-text-color'>
            Get to know me
          </span>
          <h2
            id='about-heading'
            className='text-3xl font-bold tracking-tight sm:text-4xl animate-text-gradient bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-primary bg-size-200'>
            About Me
          </h2>
        </motion.div>

        {/* Bio Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className='mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center'>
          {/* Image column */}
          <div className='lg:col-span-5 flex justify-center lg:justify-end'>
            <div className='relative w-64 h-64 sm:w-80 sm:h-80 rounded-2xl overflow-hidden'>
              <div className='absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30 mix-blend-overlay z-10 animate-gradient-shift'></div>
              <Image
                src='/images/2.4fa599cf.jpg'
                alt='Md Ashfakul Karim Rahi'
                fill
                className='object-cover'
                sizes='(max-width: 768px) 100vw, 50vw'
              />
              <div className='absolute inset-0 border-2 border-accent/30 rounded-2xl animate-border-glow'></div>
            </div>
          </div>

          {/* Bio content column */}
          <div className='lg:col-span-7'>
            <h3 className='text-2xl font-bold mb-4'>
              Frontend Developer & UI/UX Enthusiast
            </h3>
            <p className='text-muted-foreground mb-6'>
              I'm Ashfakul, a passionate frontend developer with over 4 years of
              experience creating beautiful and functional web experiences. My
              journey in web development started with a fascination for creating
              interfaces that are both visually appealing and highly usable.
            </p>
            <p className='text-muted-foreground mb-6'>
              I specialize in React and Next.js, and I'm dedicated to writing
              clean, maintainable code that delivers exceptional user
              experiences. Whether it's building complex web applications or
              optimizing existing sites for performance, I approach each project
              with creativity and technical precision.
            </p>

            {/* Timeline highlights */}
            <div className='space-y-3 mb-8'>
              <div className='flex gap-3'>
                <Briefcase className='h-5 w-5 text-primary flex-shrink-0 mt-0.5' />
                <div>
                  <span className='font-medium'>
                    Frontend Developer at Staff Asia Ltd
                  </span>
                  <p className='text-sm text-muted-foreground'>
                    2022 - Present
                  </p>
                </div>
              </div>
              <div className='flex gap-3'>
                <GraduationCap className='h-5 w-5 text-primary flex-shrink-0 mt-0.5' />
                <div>
                  <span className='font-medium'>BSc in Computer Science</span>
                  <p className='text-sm text-muted-foreground'>2017 - 2020</p>
                </div>
              </div>
              <div className='flex gap-3'>
                <Award className='h-5 w-5 text-primary flex-shrink-0 mt-0.5' />
                <div>
                  <span className='font-medium'>Certified React Developer</span>
                  <p className='text-sm text-muted-foreground'>2021</p>
                </div>
              </div>
            </div>

            {/* Quick facts */}
            <div className='flex flex-wrap gap-3'>
              <Badge
                variant='outline'
                className='bg-primary/10 hover:bg-primary/20'>
                50+ Projects Completed
              </Badge>
              <Badge
                variant='outline'
                className='bg-primary/10 hover:bg-primary/20'>
                3+ Years Experience
              </Badge>
              <Badge
                variant='outline'
                className='bg-primary/10 hover:bg-primary/20'>
                20+ Satisfied Clients
              </Badge>
            </div>
          </div>
        </motion.div>

        {/* Skills Section */}
        <div className='mt-24'>
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className='text-2xl font-bold text-center mb-12'>
            My Expertise
          </motion.h3>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}>
                <Card className='h-full hover:shadow-md transition-shadow border-accent/10 hover:border-accent/30 group'>
                  <CardContent className='p-6'>
                    <div className='h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors'>
                      <skill.icon
                        className='h-6 w-6 text-primary'
                        aria-hidden='true'
                      />
                    </div>
                    <h4 className='text-lg font-semibold mb-2'>{skill.name}</h4>
                    <p className='text-muted-foreground mb-4'>
                      {skill.description}
                    </p>
                    <div className='flex flex-wrap gap-2 mt-auto'>
                      {skill.tools.map((tool) => (
                        <span
                          key={tool}
                          className='text-xs px-2 py-1 rounded-full bg-accent/10 text-accent/80'>
                          {tool}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
