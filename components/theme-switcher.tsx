'use client';

import * as React from 'react';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import { Check, Palette, Moon, Sun } from 'lucide-react';
import { motion } from 'framer-motion';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

type ColorTheme = {
  name: string;
  value: string;
  primaryColor: string;
  accentColor: string;
};

const colorThemes: ColorTheme[] = [
  {
    name: 'Blue',
    value: 'blue',
    primaryColor: 'hsl(210, 100%, 50%)',
    accentColor: 'hsl(35, 100%, 60%)',
  },
  {
    name: 'Purple',
    value: 'purple',
    primaryColor: 'hsl(270, 70%, 60%)',
    accentColor: 'hsl(330, 80%, 70%)',
  },
  {
    name: 'Green',
    value: 'green',
    primaryColor: 'hsl(150, 60%, 40%)',
    accentColor: 'hsl(180, 70%, 50%)',
  },
  {
    name: 'Red',
    value: 'red',
    primaryColor: 'hsl(0, 70%, 50%)',
    accentColor: 'hsl(30, 80%, 60%)',
  },
  {
    name: 'Amber',
    value: 'amber',
    primaryColor: 'hsl(45, 100%, 50%)',
    accentColor: 'hsl(30, 100%, 60%)',
  },
];

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [colorTheme, setColorTheme] = React.useState<string>('green');
  const [isOpen, setIsOpen] = React.useState(false);

  // Apply the color theme by updating CSS variables
  React.useEffect(() => {
    const root = document.documentElement;
    const selectedTheme = colorThemes.find((t) => t.value === colorTheme);

    if (selectedTheme) {
      // Update CSS variables for light mode
      root.style.setProperty('--primary-light', selectedTheme.primaryColor);
      root.style.setProperty('--accent-light', selectedTheme.accentColor);

      // Update CSS variables for dark mode
      // Adjust the HSL values for dark mode (typically darker/more saturated)
      const primaryHsl = selectedTheme.primaryColor.match(/\d+/g);
      const accentHsl = selectedTheme.accentColor.match(/\d+/g);

      if (primaryHsl && accentHsl) {
        const h1 = primaryHsl[0];
        const s1 = Math.min(100, parseInt(primaryHsl[1]) + 10);
        const l1 = Math.max(30, parseInt(primaryHsl[2]) - 10);

        const h2 = accentHsl[0];
        const s2 = Math.min(100, parseInt(accentHsl[1]) + 10);
        const l2 = Math.max(30, parseInt(accentHsl[2]) - 5);

        root.style.setProperty('--primary-dark', `hsl(${h1}, ${s1}%, ${l1}%)`);
        root.style.setProperty('--accent-dark', `hsl(${h2}, ${s2}%, ${l2}%)`);
      }

      // Apply the current theme colors based on light/dark mode
      const isDark = theme === 'dark';
      if (primaryHsl && accentHsl) {
        // For light mode, use the primary/accent light values
        // For dark mode, use the calculated dark values
        if (!isDark) {
          root.style.setProperty(
            '--primary',
            `${primaryHsl[0]} ${primaryHsl[1]}% ${primaryHsl[2]}%`
          );
          root.style.setProperty(
            '--accent',
            `${accentHsl[0]} ${accentHsl[1]}% ${accentHsl[2]}%`
          );
        } else {
          const h1 = primaryHsl[0];
          const s1 = Math.min(100, parseInt(primaryHsl[1]) + 10);
          const l1 = Math.max(30, parseInt(primaryHsl[2]) - 10);

          const h2 = accentHsl[0];
          const s2 = Math.min(100, parseInt(accentHsl[1]) + 10);
          const l2 = Math.max(30, parseInt(accentHsl[2]) - 5);

          root.style.setProperty('--primary', `${h1} ${s1}% ${l1}%`);
          root.style.setProperty('--accent', `${h2} ${s2}% ${l2}%`);
        }
      }
    }
  }, [colorTheme, theme]);

  return (
    <DropdownMenu onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <Button
          variant='ghost'
          size='icon'
          className='relative transition-all duration-200 hover:bg-accent/20 '
          aria-label='Theme settings'>
          <motion.div
            initial={{ scale: 1 }}
            animate={{
              scale: [1, 1.15, 1],
              boxShadow: [
                '0 0 0px 0px var(--accent-light, #fbbf24)',
                '0 0 12px 4px var(--accent-light, #fbbf24)',
                '0 0 0px 0px var(--accent-light, #fbbf24)',
              ],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: 'loop',
            }}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Palette className='h-[1.5rem] w-[1.5rem] ' />
          </motion.div>
          <span className='sr-only text-red'>Appearance settings</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end' className='w-56'>
        <DropdownMenuLabel>Appearance</DropdownMenuLabel>
        <DropdownMenuSeparator />

        <div className='flex justify-between px-2 py-2'>
          <Button
            variant={theme === 'light' ? 'default' : 'outline'}
            size='sm'
            className='flex-1 mr-1'
            onClick={() => setTheme('light')}>
            <Sun className='h-4 w-4 mr-1' /> Light
          </Button>
          <Button
            variant={theme === 'dark' ? 'default' : 'outline'}
            size='sm'
            className='flex-1 ml-1 text-white'
            onClick={() => setTheme('dark')}>
            <Moon className='h-4 w-4 mr-1' /> Dark
          </Button>
        </div>

        <DropdownMenuSeparator />
        <DropdownMenuLabel>Color Themes</DropdownMenuLabel>

        <div className='p-2 '>
          <div className='grid grid-cols-5 gap-2 mb-2 '>
            {colorThemes.map((item) => (
              <button
                key={item.value}
                onClick={() => setColorTheme(item.value)}
                className={`
                  h-8 w-full rounded-md transition-all
                  ${
                    colorTheme === item.value
                      ? 'ring-2 ring-primary ring-offset-2'
                      : 'hover:scale-110'
                  }
                `}
                style={{
                  background: `linear-gradient(135deg, ${item.primaryColor}, ${item.accentColor})`,
                  transform:
                    colorTheme === item.value ? 'scale(1.05)' : 'scale(1)',
                }}
                aria-label={`${item.name} theme`}>
                {colorTheme === item.value && (
                  <Check className='h-4 w-4 mx-auto text-white drop-shadow-md' />
                )}
              </button>
            ))}
          </div>

          <div className='flex flex-col space-y-1 mt-2'>
            {colorThemes.map((item) => (
              <DropdownMenuItem
                key={item.value}
                onClick={() => setColorTheme(item.value)}
                className='flex items-center gap-2 cursor-pointer h-8'>
                <motion.div
                  className='h-4 w-4 rounded-full flex-shrink-0'
                  style={{
                    background: `linear-gradient(135deg, ${item.primaryColor}, ${item.accentColor})`,
                  }}
                  animate={{
                    scale: colorTheme === item.value ? [1, 1.2, 1] : 1,
                  }}
                  transition={{ duration: 0.3 }}
                />
                <span className='text-sm'>{item.name}</span>
                {colorTheme === item.value && (
                  <Check className='h-4 w-4 ml-auto' />
                )}
              </DropdownMenuItem>
            ))}
          </div>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
