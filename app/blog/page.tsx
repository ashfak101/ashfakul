import React from 'react';
import Link from 'next/link';
import { ArrowRight, Calendar } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';

type BlogPost = {
  title: string;
  description: string;
  date: string;
  slug: string;
  content?: React.ReactNode;
};

const blogPosts: BlogPost[] = [
  {
    title: '🚀 Why I Chose Next.js for My Portfolio (And Why You Might, Too)',
    description:
      'Discover the benefits of using Next.js for building modern, performant web applications and why it was the perfect choice for my portfolio.',
    date: 'April 15, 2023',
    slug: '/blog/why-nextjs',
  },
  {
    title: '💻 5 Essential Tools Every Frontend Developer Should Know',
    description:
      'A curated list of must-have tools and extensions that will boost your productivity as a frontend developer.',
    date: 'June 01, 2025',
    slug: '/blog/essential-frontend-tools',
  },
  {
    title: '🎨 Creating Beautiful UI with Tailwind CSS',
    description:
      'Learn how to leverage Tailwind CSS to create stunning user interfaces without writing a single line of custom CSS.',
    date: 'February 10, 2023',
    slug: '#',
  },
  {
    title: '⚡ Optimizing React Applications for Performance',
    description:
      'Practical tips and techniques to make your React applications faster and more efficient.',
    date: 'January 5, 2023',
    slug: '#',
  },
];

export default function BlogPage() {
  return (
    <div className='max-w-5xl mx-auto'>
      <h1 className='text-4xl font-bold mb-8'>Blog</h1>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mb-16'>
        {blogPosts.map((post) => (
          <Card
            key={post.title}
            className='h-full flex flex-col hover:shadow-lg transition-shadow duration-300'>
            <CardHeader>
              <div className='flex items-center text-sm text-muted-foreground mb-2'>
                <Calendar className='mr-2 h-4 w-4' />
                {post.date}
              </div>
              <CardTitle className='text-2xl'>{post.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className='text-muted-foreground text-base'>
                {post.description}
              </CardDescription>
            </CardContent>
            <CardFooter className='mt-auto'>
              <Button asChild variant='ghost' className='group'>
                <Link href={post.slug}>
                  Read more
                  <ArrowRight className='ml-2 h-4 w-4 transition-transform group-hover:translate-x-1' />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
