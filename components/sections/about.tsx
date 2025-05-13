'use client';

import { motion } from 'framer-motion';
import { Brain, Code2, Database, Layout, Palette, Rocket } from 'lucide-react';

const skills = [
  {
    name: 'Frontend Development',
    description:
      'Expert in building responsive and interactive user interfaces using React and Next.js',
    icon: Layout,
  },
  {
    name: 'State Management',
    description:
      'Proficient in Redux, Context API, and other state management solutions',
    icon: Brain,
  },
  {
    name: 'Modern JavaScript',
    description:
      'Deep understanding of ES6+ features and modern JavaScript practices',
    icon: Code2,
  },
  {
    name: 'UI/UX Design',
    description:
      'Creating beautiful user interfaces with Tailwind CSS and modern design principles',
    icon: Palette,
  },
  {
    name: 'API Integration',
    description:
      'Experience with RESTful APIs, GraphQL, and backend integration',
    icon: Database,
  },
  {
    name: 'Performance Optimization',
    description:
      'Implementing best practices for optimal web application performance',
    icon: Rocket,
  },
];

export function AboutSection() {
  return (
    <section
      id='about'
      className='py-24 sm:py-32'
      aria-labelledby='about-heading'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className='mx-auto max-w-2xl text-center'>
          <h2
            id='about-heading'
            className='text-3xl font-bold tracking-tight sm:text-4xl'>
            About Me
          </h2>
          <p className='mt-6 text-lg leading-8 text-muted-foreground'>
            I'm a passionate frontend developer with expertise in modern web
            technologies. I love creating beautiful, responsive, and
            user-friendly web applications.
          </p>
        </motion.div>
        <div className='mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none'>
          <dl className='grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3'>
            {skills.map((skill) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className='flex flex-col'>
                <dt className='flex items-center gap-x-3 text-base font-semibold leading-7'>
                  <skill.icon
                    className='h-5 w-5 flex-none text-primary'
                    aria-hidden='true'
                  />
                  {skill.name}
                </dt>
                <dd className='mt-4 flex flex-auto flex-col text-base leading-7 text-muted-foreground'>
                  <p className='flex-auto'>{skill.description}</p>
                </dd>
              </motion.div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
