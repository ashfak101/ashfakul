'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';
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
    description: 'Discover the benefits of using Next.js for building modern, performant web applications.',
    date: 'April 15, 2023',
    slug: '/blog/why-nextjs'
  },
  {
    title: '💻 5 Essential Tools Every Frontend Developer Should Know',
    description: 'A curated list of must-have tools and extensions that will boost your productivity.',
    date: 'March 22, 2023',
    slug: '#'
  },
  {
    title: '🎨 Creating Beautiful UI with Tailwind CSS',
    description: 'Learn how to leverage Tailwind CSS to create stunning user interfaces without custom CSS.',
    date: 'February 10, 2023',
    slug: '#'
  },
];

export function BlogSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Latest Blog Posts</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mt-4">
              Thoughts, insights, and tutorials on web development and design.  
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center text-sm text-muted-foreground mb-2">
                    <Calendar className="mr-2 h-4 w-4" />
                    {post.date}
                  </div>
                  <CardTitle className="text-xl">{post.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground text-base">
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

        <div className="flex justify-center">
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