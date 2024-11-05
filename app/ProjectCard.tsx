'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import clsx from 'clsx';

type Project = {
  href?: string;
  title: string;
  description: string;
  image: string;
  alt: string;
  fallbackImage: string;
};

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  const [imgSrc, setImgSrc] = useState(project.image);
  const isLink = !!project.href;
  const WrappingComponent = isLink ? Link : 'div';

  return (
    <WrappingComponent
      href={project.href ?? '/'}
      target='_blank'
      className={clsx(
        'flex flex-col justify-center bg-slate-100 hover:bg-slate-200/70 transition-colors rounded-xl p-8'
      )}
    >
      <div className="relative rounded-xl mb-4 shadow-project">
        <Image
          width={450}
          height={240}
          quality={90}
          src={imgSrc}
          alt={project.alt}
          className="rounded-xl bg-cover"
          onError={() => setImgSrc(project.fallbackImage)}
        />
      </div>
      <h3 className="text-slate-700 font-semibold tracking-tight text-xl">
        {project.title}
      </h3>
      <p className="text-slate-500 text-base">
        {project.description}
      </p>
    </WrappingComponent>
  );
};
