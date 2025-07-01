import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import parse from 'html-react-parser';
// Define blog posts (you might want to move this to a shared location later)
const blogPosts = [
  {
    title: '🚀 Why I Chose Next.js for My Portfolio (And Why You Might, Too)',
    description:
      'Discover the benefits of using Next.js for building modern, performant web applications and why it was the perfect choice for my portfolio.',
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
    `,
  },
  {
    title: '💻 5 Essential Tools Every Frontend Developer Should Know',
    description:
      'Discover the 5 must-know tools for frontend developers in 2025 to boost productivity, write cleaner code, and deliver responsive web applications.',
    date: 'June 01, 2025',
    slug: 'essential-frontend-tools',
    content: `<article>
    <header>
      <h2>5 Essential Tools Every Frontend Developer Should Know (2025 Edition)</h2>
    </header>

    <section>
      <p>In the ever-evolving world of web development, staying ahead means knowing which tools can streamline your workflow and improve your code quality. Whether you’re just starting out or already deep into your frontend journey, mastering these essential tools can set you apart as a modern developer.</p>

      <p>Here are <strong>5 essential tools every frontend developer should know</strong> in 2025:</p>
    </section>

    <section>
      <h2>1. Visual Studio Code (VS Code)</h2>
      <p><strong>Why it’s essential:</strong><br />
        VS Code remains the most popular code editor for frontend developers—and for good reason. With built-in Git support, IntelliSense, terminal access, and a rich library of extensions, it’s a powerhouse IDE tailored for productivity.
      </p>
      <p><strong>Top extensions to consider:</strong></p>
      <ul>
        <li>Prettier (for consistent formatting)</li>
        <li>ESLint (for catching errors early)</li>
        <li>Live Server (for real-time preview)</li>
        <li>Tailwind CSS IntelliSense (if you're using Tailwind)</li>
      </ul>
    </section>

    <section>
      <h2>2. Chrome DevTools</h2>
      <p><strong>Why it’s essential:</strong><br />
        Chrome DevTools is the go-to suite for debugging, inspecting, and optimizing websites. From analyzing performance bottlenecks to testing responsive designs, it helps developers understand exactly what’s going on in the browser.
      </p>
      <p><strong>Key features:</strong></p>
      <ul>
        <li>Inspect and edit HTML/CSS in real time</li>
        <li>Debug JavaScript with breakpoints</li>
        <li>Monitor network requests and load times</li>
        <li>Simulate mobile devices</li>
      </ul>
    </section>

    <section>
      <h2>3. Git & GitHub</h2>
      <p><strong>Why it’s essential:</strong><br />
        Version control is a must for modern development. Git lets you track changes and collaborate with others, while GitHub serves as your portfolio, collaboration hub, and even CI/CD platform.
      </p>
      <p><strong>Use it for:</strong></p>
      <ul>
        <li>Code collaboration and pull requests</li>
        <li>Issue tracking and project boards</li>
        <li>Hosting open-source contributions</li>
      </ul>
    </section>

    <section>
      <h2>4. NPM (Node Package Manager)</h2>
      <p><strong>Why it’s essential:</strong><br />
        Almost every frontend project now involves a build step or uses JavaScript libraries. NPM allows you to manage dependencies, run scripts, and integrate tools like Webpack, Vite, or React.
      </p>
      <p><strong>Examples of packages you’ll likely use:</strong></p>
      <ul>
        <li>React / Vue / Next.js</li>
        <li>Tailwind CSS</li>
        <li>Axios or Fetch for APIs</li>
        <li>ESLint, Prettier for code quality</li>
      </ul>
    </section>

    <section>
      <h2>5. Figma</h2>
      <p><strong>Why it’s essential:</strong><br />
        Frontend developers don’t just code—they bring designs to life. Figma is a powerful design tool that bridges the gap between designers and developers. It allows you to inspect design specs, grab CSS values, and export assets directly.
      </p>
      <p><strong>Why developers love Figma:</strong></p>
      <ul>
        <li>Real-time collaboration with designers</li>
        <li>Access to measurements, typography, and colors</li>
        <li>Ability to leave comments or clarify design decisions</li>
      </ul>
    </section>

    <section>
      <h2>Final Thoughts</h2>
      <p>Mastering these tools won’t just make your workflow smoother—it will make you more efficient, confident, and ready to take on any frontend challenge. In 2025, the line between design, code, and deployment is thinner than ever. These five tools are the foundation of a modern, productive frontend stack.</p>

      <p>🔧 <strong>Want to level up?</strong> Make sure you’re also exploring modern frameworks like React or Next.js, and get familiar with CSS tools like Tailwind or SCSS.</p>
    </section>

    <footer>
      <p><strong>Tags:</strong> #frontenddevelopment #webdevelopment #javascript #toolsfordevelopers #2025devtools #portfolio</p>
    </footer>
  </article>
`,
  },
  {
    title: '🎨 Creating Beautiful UI with Tailwind CSS',
    description:
      'Learn how to leverage Tailwind CSS to create stunning user interfaces without writing a single line of custom CSS.',
    date: 'February 10, 2023',
    slug: 'beautiful-ui-with-tailwind',
    content: 'Coming soon',
  },
  {
    title: '⚡ Optimizing React Applications for Performance',
    description:
      'Practical tips and techniques to make your React applications faster and more efficient.',
    date: 'January 5, 2023',
    slug: 'optimizing-react-apps',
    content: 'Coming soon',
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
      <div className='max-w-3xl mx-auto px-4 py-8'>
        <Link href='/blog'>
          <Button variant='ghost' className='group mb-6 -ml-2'>
            <ArrowLeft className='mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1' />
            Back to Blog
          </Button>
        </Link>
        <h1 className='text-3xl font-bold mb-6'>Post not found</h1>
        <p>The blog post you're looking for doesn't exist.</p>
      </div>
    );
  }

  return (
    <div className='max-w-3xl mx-auto px-4 py-8'>
      <Link href='/blog'>
        <Button variant='ghost' className='group mb-6 -ml-2'>
          <ArrowLeft className='mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1' />
          Back to Blog
        </Button>
      </Link>

      <div className='mb-8'>
        <div className='text-sm text-muted-foreground mb-2'>{post.date}</div>
        <h1 className='text-5xl font-bold mb-4'>{post.title}</h1>
        <p className='text-xl text-muted-foreground'>{post.description}</p>
      </div>

      <div className='prose prose-lg max-w-none'>
        {post.content.split('\n\n').map((paragraph, index) => (
          <p key={index} className='mb-6'>
            {parse(paragraph) /* Use html-react-parser to render HTML content */}
          </p>
        ))}
      </div>
    </div>
  );
};

export default BlogPostPage;
