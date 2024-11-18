import { Github, Linkedin, Mail, Twitter } from 'lucide-react';
import { Button } from './ui/button';

export function Footer() {
  return (
    <footer className='border-t '>
      <div className='mx-auto max-w-7xl flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0'>
        <div className='text-center text-sm leading-loose text-muted-foreground md:text-left'>
          Built with Next.js and Tailwind CSS. Deployed on Vercel.
        </div>
        <div className='flex items-center space-x-4'>
          <Button variant='ghost' size='icon' asChild>
            <a
              href='https://github.com/ashfak101'
              target='_blank'
              rel='noopener noreferrer'>
              <Github className='h-4 w-4' />
            </a>
          </Button>
          <Button variant='ghost' size='icon' asChild>
            <a
              href='https://www.linkedin.com/in/md-ashfakul-karim-rahi-3a0b62211/'
              target='_blank'
              rel='noopener noreferrer'>
              <Linkedin className='h-4 w-4' />
            </a>
          </Button>
          <Button variant='ghost' size='icon' asChild>
            <a href='/' target='_blank' rel='noopener noreferrer'>
              <Twitter className='h-4 w-4' />
            </a>
          </Button>
          <Button variant='ghost' size='icon' asChild>
            <a href='mailto:your@email.com'>
              <Mail className='h-4 w-4' />
            </a>
          </Button>
        </div>
      </div>
    </footer>
  );
}
