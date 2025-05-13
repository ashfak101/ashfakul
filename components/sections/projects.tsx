'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';
import Image from 'next/image';

const projects = [
  {
    title: 'Apex Learning',
    description:
      'Apex Learning is a UK-based e-learning marketplace platform similar to Udemy, offering a wide range of courses from various instructors. The platform enables course creators to upload and sell their educational content while providing students with an interactive learning experience. I contributed to developing the frontend system, implementing features like course browsing, user authentication, and video playback functionality.',
    image: '/images/apexlearning.png',
    technologies: ['Next.js', 'Redux', 'Tailwind CSS', 'Stripe', 'PayPal'],
    liveUrl: '/',
    // liveUrl: 'https://apex-learning-v2-dev.vercel.app/',
    githubUrl: '#',
  },
  {
    title: 'One Education Business',
    description:
      'One Education Business is a leading provider of online education services B2B clients. I worked on the One Education Business website, where I was responsible for developing and maintaining the websites frontend system',
    image: '/images/one_edu.png',
    technologies: [
      'React',
      'Next Js',
      'TypeScript',
      'RTQ Query',
      'Tailwind CSS',
      'Stripe',
      'PayPal',
    ],
    liveUrl: 'https://business.oneeducation.org.uk/',
    githubUrl: '#',
  },
  {
    title: 'Booking System',
    description:
      'Booking System is a custom-built application designed for managing bookings and appointments for a doctor. This project features a bespoke event calendar created from scratch to meet specific design requirements. The system allows for seamless booking management, ensuring the doctor can efficiently manage their schedule.',
    image: '/images/booking.png',
    technologies: ['Next.js', 'TailwindCSS', 'REST API'],
    liveUrl: 'https://appointment-wip.vercel.app/',
    githubUrl: '#',
  },
];

export function ProjectsSection() {
  return (
    <section
      id='projects'
      className='py-24 sm:py-32'
      aria-labelledby='projects-heading'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className='mx-auto max-w-2xl text-center'>
          <h2
            id='projects-heading'
            className='text-3xl font-bold tracking-tight sm:text-4xl'>
            Featured Projects
          </h2>
          <p className='mt-6 text-lg leading-8 text-muted-foreground'>
            Here are some of my recent projects that showcase my skills and
            expertise in frontend development.
          </p>
        </motion.div>

        <div className='mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3'>
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}>
              <Card className='h-full'>
                <CardHeader>
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={500}
                    height={300}
                    quality={90}
                    className='aspect-video w-full rounded-lg object-cover'
                    placeholder='blur'
                    blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII='
                    priority={index < 3} // Prioritize loading for the first three images
                  />
                  <CardTitle className='mt-4'>{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className='text-muted-foreground text-sm'>
                    {project.description}
                  </p>
                  <div className='mt-4 flex flex-wrap gap-2'>
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant='secondary'>
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className='mt-6 flex gap-4'>
                    <Button asChild variant='outline' size='sm'>
                      <a
                        href={project.liveUrl}
                        target='_blank'
                        rel='noopener noreferrer'>
                        <ExternalLink className='mr-2 h-4 w-4' />
                        Live Demo
                      </a>
                    </Button>
                    <Button asChild variant='outline' size='sm'>
                      <a
                        href={project.githubUrl}
                        target='_blank'
                        rel='noopener noreferrer'>
                        <Github className='mr-2 h-4 w-4' />
                        Code
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
