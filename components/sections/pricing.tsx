'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Check, Clock, Calendar, CalendarDays } from 'lucide-react';

const pricingPlans = [
  {
    title: 'Hourly',
    price: '11',
    icon: Clock,
    features: [
      'Perfect for small tasks',
      'Direct communication',
      'Quick turnaround',
      'Flexible scheduling',
      'Pay as you go',
    ],
    description: 'Best for quick tasks and consultations',
  },
  {
    title: 'Weekly',
    price: '175',
    icon: Calendar,
    features: [
      '40 hours of dedicated work',
      'Daily progress updates',
      'Priority support',
      'Code documentation',
      'Weekly review meetings',
    ],
    description: 'Ideal for short-term projects',
    popular: true,
  },
  {
    title: 'Monthly',
    price: '659',
    icon: CalendarDays,
    features: [
      '160 hours of dedicated work',
      'Full project management',
      'Architecture planning',
      'Comprehensive documentation',
      '24/7 priority support',
    ],
    description: 'Perfect for long-term projects',
  },
];

export function PricingSection() {
  return (
    <section id='pricing' className='py-24 sm:py-32'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className='mx-auto max-w-2xl text-center'>
          <h2 className='text-3xl font-bold tracking-tight sm:text-4xl'>
            Hire Me
          </h2>
          <p className='mt-6 text-lg leading-8 text-muted-foreground'>
            Choose the perfect plan that suits your project needs
          </p>
        </motion.div>

        <div className='mx-auto mt-16 grid max-w-lg gap-8 lg:max-w-none lg:grid-cols-3'>
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}>
              <Card
                className={`relative flex h-full flex-col ${
                  plan.popular ? 'border-primary shadow-lg' : ''
                }`}>
                {plan.popular && (
                  <div className='absolute -top-4 left-1/2 -translate-x-1/2'>
                    <span className='inline-block rounded-full bg-primary px-4 py-1 text-sm font-semibold text-primary-foreground'>
                      Most Popular
                    </span>
                  </div>
                )}
                <CardHeader>
                  <div className='flex items-center justify-center'>
                    <plan.icon className='h-8 w-8 text-primary' />
                  </div>
                  <CardTitle className='mt-4 text-center text-xl'>
                    {plan.title}
                  </CardTitle>
                  <div className='mt-4 text-center'>
                    <span className='text-4xl font-bold'>${plan.price}</span>
                    <span className='text-muted-foreground'>
                      /{plan.title.toLowerCase()}
                    </span>
                  </div>
                  <p className='mt-2 text-center text-sm text-muted-foreground'>
                    {plan.description}
                  </p>
                </CardHeader>
                <CardContent className='flex-1'>
                  <ul className='space-y-3'>
                    {plan.features.map((feature) => (
                      <li key={feature} className='flex items-center gap-2'>
                        <Check className='h-4 w-4 text-primary' />
                        <span className='text-sm text-muted-foreground'>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button
                    className='w-full'
                    variant={plan.popular ? 'default' : 'outline'}>
                    Get Started
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
