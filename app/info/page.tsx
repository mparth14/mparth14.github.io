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
    company: 'CGI',
    role: 'Digital Technological Consultant - Coop',
    date: 'September 2024 → December 2024',
    logo: '/cgi2.svg',
  },
  {
    company: 'Thomson Reuters',
    role: 'Associate Software Engineer',
    date: 'December 2021 → August 2023',
    logo: '/tr.svg',
  },
  {
    company: 'Zealous System',
    role: 'Business Analyst',
    date: 'November 2020 → December 2021',
    logo: '/zealous-system.png',
  },
  {
    company: 'Streebo',
    role: 'Software Developer',
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
         I completed my Master of Applied Computer Science at Dalhousie University in December 2024, where I specialized in software development, cloud computing, and architecture. As part of my studies, I interned at <b>CGI</b> as a <b>Digital Technology Consultant Coop</b>, contributing to innovative digital solutions that helped the First Nations businesses optimize their operations and drive growth.
        </p>
        <p>
          Earlier in my career, I worked at <b>Thomson Reuters</b> as an <b>Associate Software Engineer</b>, where I contributed to the development of <Link href="https://onvio.us/#/">Onvio</Link>, a software solution for filing taxes in the US. My role involved implementing new features, improving performance, and ensuring regulatory compliance. Prior to this, I gained experience as a <b>Business Analyst</b> at <b>Zealous System</b>, where I served as a bridge between technical and business teams, ensuring that developed solutions met client needs and business goals. I also worked as a <b>Software Developer</b> at <b>Streebo</b>, honing my skills in software application design, development, and implementation.
        </p>
        <p>

          In addition to my professional work, I am passionate about exploring new technologies through personal projects. I've developed <Link href="https://github.com/mparth14/QuickHire"><b>QuickHire</b></Link>, an intuitive hiring platform, <Link href="https://github.com/mparth14/note9"><b>Note9</b></Link>, a cloud-based note-taking app, and <Link href="https://github.com/mparth14/ParkSpaceFinder"><b>ParkSpaceFinder</b></Link>, an Android app for finding and booking parking spaces. Recently, I have also been working on a serverless application for receiving anonymous feedbacks from friends and family called <Link href="https://github.com/mparth14/GenuineFeedback"><b>GenuineFeedback</b></Link>.
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
