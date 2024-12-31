import { Button, buttonVariants } from '@/components/ui/button'
import { siteConfig } from '@/config/site'
import { ChevronRightIcon } from 'lucide-react'
import Link from 'next/link'

export default function IndexPage() {
  return (
    <>
      {/* Hero */}
      <section className='container relative overflow-hidden py-24 lg:py-32'>
        {/* Gradients */}
        <div aria-hidden='true' className='absolute -top-96 start-1/2 flex -translate-x-1/2'>
          <div className='h-[44rem] w-[25rem] -translate-x-40 rotate-[-60deg] bg-gradient-to-r from-background/50 to-background blur-3xl' />
          <div className='h-[50rem] w-[90rem] origin-top-left -translate-x-60 -rotate-12 rounded-full bg-gradient-to-tl from-primary-foreground via-primary-foreground to-background blur-3xl' />
        </div>
        {/* End Gradients */}
        <div className='relative z-10 '>
          {/* Announcement Banner */}
          <div className='flex justify-center'>
            <a
              className='inline-flex items-center gap-x-2 rounded-full border p-1 ps-3 text-sm transition'
              href='#'
            >
              2024년 올해의 책
              <span className='inline-flex items-center justify-center gap-x-2 rounded-full bg-muted-foreground/15 px-2.5 py-1.5 text-sm font-semibold'>
                <svg
                  className='size-4 shrink-0'
                  xmlns='http://www.w3.org/2000/svg'
                  width={24}
                  height={24}
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth={2}
                  strokeLinecap='round'
                  strokeLinejoin='round'
                >
                  <path d='m9 18 6-6-6-6' />
                </svg>
              </span>
            </a>
          </div>
          {/* End Announcement Banner */}
          {/* Title */}
          <div className='mx-auto mt-5 max-w-2xl text-center'>
            <h1 className='scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl'>
              어서오세요
            </h1>
          </div>
          {/* End Title */}
          <div className='mx-auto mt-5 max-w-3xl text-center'>
            <p className='text-xl text-muted-foreground'>
              Over 10+ fully responsive, UI blocks you can drop into your Shadcn UI projects and
              customize to your heart&apos;s content.
            </p>
          </div>
          {/* Buttons */}
          <div className='mt-8 flex justify-center gap-3'>
            <Button size={'lg'}>Get started</Button>
            <Button size={'lg'} variant={'outline'}>
              Learn more
            </Button>
          </div>
          {/* End Buttons */}
          <div className='mt-5 flex items-center justify-center gap-x-1 sm:gap-x-3'>
            <span className='text-sm text-muted-foreground'>Package Manager:</span>
            <span className='text-sm font-bold'>npm </span>
            <svg
              className='size-5 text-muted-foreground'
              width={16}
              height={16}
              viewBox='0 0 16 16'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              aria-hidden='true'
            >
              <path d='M6 13L10 3' stroke='currentColor' strokeLinecap='round' />
            </svg>
            <a
              className='inline-flex items-center gap-x-1 text-sm font-medium decoration-2 hover:underline'
              href='#'
            >
              Installation Guide
              <ChevronRightIcon className='size-4 shrink-0' />
            </a>
          </div>
        </div>
      </section>
      {/* End Hero */}

      <section className='container grid items-center gap-6 pb-8 pt-6 md:py-10'>
        <div className='flex max-w-[980px] flex-col items-start gap-2'>
          <h1 className='text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl'>
            Beautifully designed components <br className='hidden sm:inline' />
            built with Radix UI and Tailwind CSS.
          </h1>
          <p className='max-w-[700px] text-lg text-muted-foreground'>
            Accessible and customizable components that you can copy and paste into your apps. Free.
            Open Source. And Next.js 13 Ready.
          </p>
        </div>
        <div className='flex gap-4'>
          <Link
            href={siteConfig.links.docs}
            target='_blank'
            rel='noreferrer'
            className={buttonVariants()}
          >
            Documentation
          </Link>
          <Link
            target='_blank'
            rel='noreferrer'
            href={siteConfig.links.github}
            className={buttonVariants({ variant: 'outline' })}
          >
            GitHub
          </Link>
        </div>
      </section>
    </>
  )
}
