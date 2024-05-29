import Link from 'next/link';
import { ReactElement } from 'react';
import Image from 'next/image';

import clsx from 'clsx';
import { Title } from '@/app/components/title';

const projects: {
  href?: string;
  title: string;
  description: string;
  image: string;
  alt: string;
}[] = [
  {
    title: 'QuickHire',
    href: 'https://github.com/mparth14/QuickHire',
    description:
      'An intuitive hiring platform designed to connect job seekers with those in need of services.',
    image: 'https://opengraph.githubassets.com/1/mparth14/quickhire',
    alt: "QuickHire GitHub Repo"
  },
  {
    title: 'Note9',
    href: 'https://github.com/mparth14/Note9',
    description:
      'A personal project to simplify note taking built with a serverless architecture using AWS services only.',
    image: 'https://opengraph.githubassets.com/1/mparth14/note9',
    alt: "Note9 GitHub Repo"

  },
  {
    href: 'https://github.com/mparth14/TradeCards',
    title: 'TradeCards',
    description: 'A portal where users can sign up and exchange coupons, made using React and Spring Boot.',
    image: 'https://opengraph.githubassets.com/1/mparth14/tradecards',
    alt: "TradeCards GitHub Repo"
  },
  {
    href: 'https://github.com/mparth14/ParkSpaceFinder',
    title: 'ParkSpaceFinder',
    description: 'An Android application that allows users to find and book available parking spaces near their location.',
    image: 'https://opengraph.githubassets.com/1/mparth14/ParkSpaceFinder',
    alt: "ParkSpaceFinder GitHub Repo"
  },
];

export default async function Home() {
  return (
    <main className="px-4 md:px-0">
      <section className="pb-14 border-b border-slate-300 mb-5">
        <h1 className="font-semibold text-4xl mb-4 text-slate-950">
          Ciao, I’m Parth.
          <span className="block text-slate-500 font-normal text-2xl">
            A software engineer from India currently in Canada.
          </span>
        </h1>
        <p className="text-slate-700 text-lg md:text-xl leading-normal">

        I am a dedicated self-taught developer and a Computer Science master&apos;s student at Dalhousie University. With a talent for crafting captivating user experiences and optimizing system performance, I thrive on developing products and tackling intricate technical challenges. I am passionate about experimenting with emerging technologies, always eager to push the boundaries of what`&apos;s possible.


        </p>
        <Link
          href="/info"
          className="group bg-slate-950 hover:bg-slate-800 transition-colors inline-block mt-8 font-mono text-xs font-semibold rounded-full px-8 py-3 text-white"
        >
          More Information{' '}
          <span className="inline-block group-hover:translate-x-2 transition-transform">
            →
          </span>
        </Link>
      </section>

      <section className=" mb-5">
        <Title as="h2" variant="secondary" className="mb-8">
          Recent Experience
        </Title>
        <div className="flex space-x-4">
          <img src="/thomson-reuters.png" alt="Thomson Reuters Logo" width="90" height="90" className="hover:opacity-70 hover:shadow-lg transition duration-300" />
          <img src="/zealous-system.png" alt="Zealous System Logo" width="90" height="90" className="hover:opacity-70 hover:shadow-lg transition duration-300" />
          <img src="/streebo.png" alt="Streebo Logo" width="90" height="90" className="hover:opacity-70 hover:shadow-lg transition duration-300" />
        </div>
        <div className="divide-y"></div>
      </section>




      <section className="pb-16">
        <Title as="h2" variant="secondary" className="">
          Personal Projects
        </Title>

        <p className="text-slate-700 text-lg">
          Below is a selection of recent projects that I&apos;ve worked on.
        </p>
        <div className="lg:w-[170%] lg:-ml-[35%] grid grid-cols-1 md:grid-cols-2 grid-flow-dense gap-8 mt-16">
          {projects.map((project) => {
            const isLink = !!project.href;
            const WrappingComponent = isLink ? Link : 'div';

            return (
              <WrappingComponent
                href={project.href ?? '/'}
                target='_blank'
                key={project.title}
                className={clsx(
                  'flex flex-col justify-center bg-slate-100 hover:bg-slate-200/70 transition-colors rounded-xl p-8'
                )}
              >
                <div className="relative rounded-xl mb-4 shadow-project">
                  <Image
                    width={450}
                    height={240}
                    quality={90}
                    src={project.image}
                    alt={project.alt}
                    className="rounded-xl bg-cover"
                  />
                </div>
                <h3 className="text-slate-700 font-semibold tracking-tight text-xl">
                  {project.title}
                </h3>
                <h3 className="text-slate-500 text-base">
                  {project.description}
                </h3>
              </WrappingComponent>
            );
          })}
        </div>
      </section>

      
    </main>
  );
}
