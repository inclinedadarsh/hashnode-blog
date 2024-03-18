import Link from 'next/link';
import { Container } from './container';
import { useAppContext } from './contexts/appContext';
import { SocialLinks } from './social-links';

export const Footer = () => {
  const { publication } = useAppContext();
  const PUBLICATION_LOGO = publication.preferences.logo;
  return (
    <footer className="border-t py-20 dark:border-neutral-800 ">
      <Container className="px-5">
        {PUBLICATION_LOGO ? (
          <div className="mb-20 flex w-full flex-row justify-center">
            <Link
              href={'/'}
              aria-label={`${publication.title} home page`}
              className="flex flex-row items-center gap-5"
            >
              <img className="block w-40 md:w-44 lg:w-56" src={PUBLICATION_LOGO} alt={publication.title} />
            </Link>
          </div>
        ) : (
          <p className="mb-20 text-center text-xl font-semibold text-slate-900 dark:text-slate-50 md:text-4xl">
            {publication.title}
          </p>
        )}
        <div className="grid w-full grid-cols-3 gap-5 md:grid-cols-6 lg:grid-cols-5">
          <div className="col-span-1 grid grid-cols-4 gap-5 md:col-span-4 lg:col-span-3">
            <div className="col-span-full md:col-span-2 lg:col-span-1">
              <p className="mb-2 font-semibold text-slate-600 dark:text-neutral-200">
                Courses
              </p>
              <ul className="flex flex-col gap-1 text-slate-700 dark:text-neutral-300">
                <li>
                  <a href="#" className="hover:underline">
                    Data Structures
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    DevOps 101
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Git & GitHub
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Computer Networks
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-span-full md:col-span-2 lg:col-span-1">
              <p className="mb-2 font-semibold text-slate-600 dark:text-neutral-200">Contact</p>
              <ul className="flex flex-col gap-1 text-slate-700 dark:text-neutral-300">
                <li>
                  <a href="https://www.youtube.com/@kunalkushwaha" className="hover:underline">
                    YouTube
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/kunalstwt" className="hover:underline">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/kunal-kushwaha/" className="hover:underline">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/kunalsig/" className="hover:underline">Instagram</a>
                </li>
              </ul>
            </div>
            <div className="col-span-full md:col-span-2 lg:col-span-1">
              <p className="mb-2 font-semibold text-slate-600 dark:text-neutral-200">Resources</p>
              <ul className="flex flex-col gap-1 text-slate-700 dark:text-neutral-300">
                <li>
                  <a href="#" className="hover:underline">
                    Newsletter
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Sponsorships
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Courses
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Discord Server
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-span-2 flex flex-col items-end gap-5 text-right text-slate-600 dark:text-neutral-300 md:text-left">
            <SocialLinks />
            <p>&copy; 2024 Kunal Kushwaha</p>
          </div>
        </div>
      </Container>
    </footer>
  );
};
