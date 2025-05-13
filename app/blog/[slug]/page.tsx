import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Define blog posts (you might want to move this to a shared location later)
const blogPosts = [
  {
    title: '🚀 Why I Chose Next.js for My Portfolio (And Why You Might, Too)',
    description: 'Discover the benefits of using Next.js for building modern, performant web applications and why it was the perfect choice for my portfolio.',
    date: 'April 15, 2023',
    slug: 'why-nextjs',
    content: `
      In the ever-growing landscape of JavaScript frameworks, Next.js stands out for frontend developers
      who want both performance and productivity. When I rebuilt my portfolio, I made the conscious
      switch from plain React to Next.js—and here's why that decision paid off.

      🔥 1. Blazing Fast Performance
      Next.js comes with server-side rendering (SSR) and static site generation (SSG) out of the box.
      My portfolio loads in milliseconds because the pages are pre-rendered and optimized automatically.

      📦 2. File-Based Routing Is a Time-Saver
      No more setting up react-router-dom manually. In Next.js, every file in the pages/ directory
      becomes a route. It saves setup time and keeps routing intuitive.

      🧠 3. SEO Without Hacks
      Since pages are rendered on the server, search engines can easily index my content.
      This is crucial for developers looking to be discovered by recruiters or clients via Google.

      🎨 4. Built-in Image Optimization
      Next.js has its own <Image /> component that automatically optimizes and lazy-loads images.
      Perfect for a visually rich portfolio like mine.

      🧰 5. API Routes for Fullstack Capabilities
      You don't need a separate backend to handle contact forms or newsletter subscriptions.
      I've added custom API endpoints directly inside my Next.js app using /pages/api.

      🏁 Final Thoughts
      If you're a frontend developer aiming to build a fast, SEO-friendly, and scalable portfolio,
      I highly recommend trying out Next.js. It's developer-friendly and gives you all the
      production-level perks out of the box.
    `
  },
  {
    title: '💻 5 Essential Tools Every Frontend Developer Should Know',
    description: 'A curated list of must-have tools and extensions that will boost your productivity as a frontend developer.',
    date: 'March 22, 2023',
    slug: 'essential-frontend-tools',
    content: 'Coming soon'
  },
  {
    title: '🎨 Creating Beautiful UI with Tailwind CSS',
    description: 'Learn how to leverage Tailwind CSS to create stunning user interfaces without writing a single line of custom CSS.',
    date: 'February 10, 2023',
    slug: 'beautiful-ui-with-tailwind',
    content: 'Coming soon'
  },
  {
    title: '⚡ Optimizing React Applications for Performance',
    description: 'Practical tips and techniques to make your React applications faster and more efficient.',
    date: 'January 5, 2023',
    slug: 'optimizing-react-apps',
    content: 'Coming soon'
  },
];

// This function is required for Next.js static export
export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

interface PageProps {
  params: {
    slug: string;
  };
}

const BlogPostPage = ({ params }: PageProps) => {
  const post = blogPosts.find((post) => post.slug === params.slug);

  if (!post) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-8">
        <Link href="/blog">
          <Button variant="ghost" className="group mb-6 -ml-2">
            <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Back to Blog
          </Button>
        </Link>
        <h1 className="text-3xl font-bold mb-6">Post not found</h1>
        <p>The blog post you're looking for doesn't exist.</p>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <Link href="/blog">
        <Button variant="ghost" className="group mb-6 -ml-2">
          <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
          Back to Blog
        </Button>
      </Link>

      <div className="mb-8">
        <div className="text-sm text-muted-foreground mb-2">{post.date}</div>
        <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
        <p className="text-xl text-muted-foreground">{post.description}</p>
      </div>

      <div className="prose prose-lg max-w-none">
        {post.content.split('\n\n').map((paragraph, index) => (
          <p key={index} className="mb-6">
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
};

export default BlogPostPage;
