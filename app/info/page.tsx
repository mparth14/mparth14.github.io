import { PageHeader } from '@/app/components/page-header';
import { Title } from '@/app/components/title';
import Image from 'next/image';
import Link from 'next/link';

const experience: {
  company: string;
  role: string;
  date: string;
  logo: string;
}[] = [
  {
    company: 'Thomson Reuters',
    role: 'Associate Software Engineer',
    date: 'December 2021 → August 2023',
    logo: '/thomson-reuters.png',
  },
  {
    company: 'Zealous System',
    role: 'Business Analyst',
    date: 'November 2020 → December 2021',
    logo: '/zealous-system.png',
  },
  {
    company: 'Streebo',
    role: 'Software Developer Intern',
    date: 'January 2020 → July 2020',
    logo: '/streebo.png',
  }
];

export default async function InfoPage() {
  return (
    <main className="px-4 md:px-0">
      <PageHeader title="Information" />
      <section className="pb-8 prose prose-lg">
      <p>
          I&apos;m currently pursuing Master of Applied Computer Science at Dalhousie University, where I am deepening my knowledge and skills in software development, cloud computing and architecture. Previously, I worked at Thomson Reuters as an Associate Software Engineer, where I contributed to developing a beta software solution called {' '}
          <Link href="https://onvio.us/#/">Onvio</Link> , which is used for filing taxes in the US. 
        </p>
        <p>
        Before that, I gained valuable experience at Zealous System as a Business Analyst. In this role, I bridged the gap between technical and business teams, ensuring that the solutions we developed met client needs and business objectives. I also interned at Streebo as a Software Developer, where I honed my skills in developing and implementing software applications.
        </p>
        <p>
        I enjoy working on personal projects to explore new technologies and push the boundaries of what is possible. I have developed projects like <Link href="https://github.com/mparth14/QuickHire">QuickHire</Link>, an intuitive hiring platform, and <Link href="https://github.com/mparth14/note9">Note9</Link>, a cloud-based note-taking application and, <Link href="https://github.com/mparth14/ParkSpaceFinder">ParkSpaceFinder</Link>, an Android application to help users find and book parking spaces near their location. Currently I am working on developing a serverless application for data processing and management.
        </p>
      </section>

      <section>
        <Title as="h2" variant="secondary" className="mb-4 mt-8 ">
          Experience
        </Title>

        <div className="divide-y divide-slate-200">
          {experience.map((exp) => {
            return (
              <div className="flex gap-4 py-6" key={exp.date}>
                <Image
                  width={56}
                  height={56}
                  src={exp.logo}
                  alt={`${exp.company} logo`}
                  className="w-14 h-14 rounded-xl"
                />
                <div className="flex flex-col col-span-9">
                  <span className="text-slate-800 text-xl font-semibold">
                    {exp.company}
                  </span>
                  <span className="text-slate-700 text-lg">{exp.role}</span>
                  <span className="block mt-4 text-slate-500 col-span-2 text-sm font-medium tracking-tighter font-mono">
                    {exp.date}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}
