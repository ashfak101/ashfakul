import React from 'react';

export const WorkSection = () => {
  return (
    <section id='work' className='py-12 '>
      <div className='container mx-auto px-4'>
        <h2 className='text-3xl font-bold text-center mb-8'>
          Where I’ve Worked
        </h2>
        <div className='space-y-8 max-w-3xl m-auto'>
          <div className='p-6 text-center'>
            <dt className='flex justify-center items-center gap-x-3 text-base font-semibold leading-7'>
              Staff Asia
            </dt>
            <dt className='flex justify-center items-center gap-x-3 text-base font-semibold leading-7'>
              Role: Frontend Developer
            </dt>
            <dt className='flex justify-center items-center gap-x-3 text-base font-semibold leading-7'>
              Duration: Jan 2022 - Present
            </dt>
            <dd className='mt-4 flex flex-auto flex-col text-base leading-7 text-muted-foreground'>
              <ul className='text-left list-disc ml-4'>
                <li>
                  Deliver high-quality, robust production code for a diverse
                  array of projects for clients including Apex Learning, One
                  Education Business, and more
                </li>
                <li>
                  Collaborate with a team of 10+ engineers to develop and
                  maintain scalable, secure, and efficient software solutions
                </li>
                <li>
                  Implement best practices for code quality, performance, and security
                </li>
                <li>
                  Participate in code reviews and provide constructive feedback
                  to peers
                </li>
                <li>
                  Stay updated with emerging technologies and industry trends to
                  enhance team capabilities and project outcomes
                </li>
              </ul>
            </dd>
          </div>
        </div>
      </div>
    </section>
  );
};
