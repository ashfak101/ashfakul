'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

type BlogPost = {
  title: string;
  description: string;
  date: string;
  slug: string;
};

const blogPosts: BlogPost[] = [
  {
    title: '🚀 Why I Chose Next.js for My Portfolio',
    description: 'Discover the benefits of using Next.js for building modern, performant web applications and why it was the perfect choice for my portfolio.',
    date: 'April 15, 2023',
    slug: '/blog/why-nextjs'
  },
  {
    title: '💻 5 Essential Tools Every Frontend Developer Should Know',
    description: 'A curated list of must-have tools and extensions that will boost your productivity as a frontend developer.',
    date: 'June 01, 2025',
    slug: '/blog/essential-frontend-tools'
  },
  {
    title: '🎨 Creating Beautiful UI with Tailwind CSS',
    description: 'Learn how to leverage Tailwind CSS to create stunning user interfaces without writing a single line of custom CSS.',
    date: 'February 10, 2023',
    slug: '#'
  },
];

export function BlogSection() {
  return (
    <section id="blog" className="py-24 sm:py-32" aria-labelledby="blog-heading">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center">
          <h2
            id="blog-heading"
            className="text-3xl font-bold tracking-tight sm:text-4xl">
            Latest Blog Posts
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Thoughts, insights, and tutorials on web development and design.
          </p>
        </motion.div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}>
              <Card className="h-full flex flex-col hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="text-sm text-muted-foreground">{post.date}</div>
                  <CardTitle className="mt-2">{post.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">
                    {post.description}
                  </CardDescription>
                </CardContent>
                <CardFooter className="mt-auto">
                  <Button asChild variant="ghost" className="group">
                    <Link href={post.slug}>
                      Read more
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Button asChild variant="outline" className="group">
            <Link href="/blog">
              View all posts
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}