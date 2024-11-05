'use client'
import { PageHeader } from '@/app/components/page-header';
import { Title } from '@/app/components/title';
import Link from 'next/link';
import { useState } from 'react';

const contact: {
  method: string;
  link: string;
  label: string;
}[] = [
  {
    method: 'Email',
    link: 'mailto:parthmodi@dal.ca',
    label: 'parthmodi@dal.ca',
  },
  {
    method: 'GitHub',
    link: 'https://github.com/mparth14',
    label: 'git/mparth14',
  },
  {
    method: 'LinkedIn',
    link: 'https://www.linkedin.com/in/pmodi1080/',
    label: 'in/pmodi1080',
  },
];
export default function InfoPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const handleSubmit = async () => {
    try {
      const response = await fetch('https://formspree.io/f/xleqkyaz', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('Message sent successfully!');
      } else {
        setStatus('Failed to send message.');
      }
    } catch (error) {
      console.error('Error:', error);
      setStatus('Failed to send message.');
    }
  };

  return (
    <main className="px-4 md:px-0">
      <PageHeader title="Contact" />
      <section className="pb-8">
        <p className="text-lg mb-4">
          If you&apos;d like to get in touch, you can reach me using the
          following methods.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          {contact.map((contactMethod) => {
            return (
              <div className="flex flex-col" key={contactMethod.method}>
                <Title as="h2" variant="tertiary">
                  {contactMethod.method}
                </Title>
                <Link target='_blank' href={contactMethod.link} className="text-slate-700">
                  {contactMethod.label}
                </Link>
              </div>
            );
          })}
        </div>

        <Title as="h2" variant="tertiary">Or send me a message!</Title>
        <form onSubmit={handleSubmit} action="https://formspree.io/f/xleqkyaz" method="post" className="space-y-4 mt-4">
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="name">
              Name
            </label>
            <input
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-black-500 focus:border-black-500 sm:text-sm"
              id="name"
              name="name"
              placeholder="Enter your name"
              type="text"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="email">
              Email
            </label>
            <input
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-black-500 focus:border-black-500 sm:text-sm"
              id="email"
              name="email"
              placeholder="Enter your email"
              type="email"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="message">
              Message
            </label>
            <textarea
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-black-500 focus:border-black-500 sm:text-sm"
              id="message"
              name="message"
              placeholder="Enter your message"
              rows={4}
            />
          </div>
          <div>
            <button
              className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
              type="submit"
            >
              Submit
            </button>
          </div>
          {status && <p>{status}</p>}
        </form>
      </section>
    </main>
  );
}
