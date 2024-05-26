import './assets/globals.css';

import { Metadata } from 'next';
import Link from 'next/link';
import { Analytics } from '@vercel/analytics/react';
import localFont from 'next/font/local';
import { JetBrains_Mono } from 'next/font/google';

import clsx from 'clsx';

const SaansFont = localFont({
  src: './saans-font.woff2',
  display: 'swap',
});

const JetBrainsMonoFont = JetBrains_Mono({
  display: 'swap',
  variable: '--font-monospace',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Parth Modi',
  description:
    'Parth Modi is a software engineer based in Canada, currently pursuing Master of Applied Computer Science at Dalhousie University. Working somewhere on the boundary between software development and cloud architecture',
  twitter: {
    card: 'summary_large_image',
    creator: '@theparthmodi',
    images: ['/og.png'],
    title: 'Parth Modi - Software Engineer',
  },
  openGraph: {
    title: 'Parth Modi - Software Engineer',
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: 'Parth Modi - Software Engineer',
      },
    ],
    siteName: 'Parth Modi - Software Engineer',
  },
  metadataBase: new URL('https://mparth14.github.io/'),
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Parth Modi',
  image: 'https://alexjpate.com/avatar.jpeg',
  url: 'https://mparth14.github.io/',
  jobTitle: 'Software Engineer',
  sameAs: [
    'https://www.github.com/mparth14',
    'https://www.linkedin.com/in/pmodi1080/',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={clsx(
          SaansFont.className,
          JetBrainsMonoFont.variable,
          'bg-slate-50'
        )}
      >
        <div className="max-w-2xl lg:max-w-xl mx-auto">
          <header className="pt-8 md:pt-16 pb-16 px-4 md:px-0 flex justify-between">
            <Link href="/">
              <h1 className="text-base font-mono font-semibold text-slate-950">
                pm
              </h1>
            </Link>
            <nav className="flex gap-4">
              <Link
                href="/Parth_Modi_Resume.pdf"
                download="Parth_Modi_Resume.pdf"
                target="_blank"
                className="text-950 text-sm tracking-tighter font-mono font-semibold"
              >
                Download resume
              </Link>

              <Link
                className="text-950 text-sm tracking-tighter font-mono font-semibold"
                href="/contact"
              >
                Contact
              </Link>
            </nav>
          </header>
          {children}
          <footer className="px-4 md:px-0 border-t border-slate-200 py-8 text-slate-700 font-mono text-xs tracking-tight flex justify-between">
            <p>
              &copy; {new Date().getFullYear()} {'/'} Parth Modi
            </p>
            <p>
              <Link href="https://github.com/mparth14/mparth14.github.io">View Source</Link>
            </p>
          </footer>
        </div>
        <Analytics />
      </body>
    </html>
  );
}
