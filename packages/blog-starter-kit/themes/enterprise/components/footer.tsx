import Link from 'next/link';
import { Container } from './container';
import logoTypeLight from '../assets/images/logo_type_light.svg'
import Image from 'next/image';

export const Footer = () => {
  const FOOTER_LINKS = [
    {
      name: 'Courses',
      links: [
        {
          name: 'Data Structures & Algorithms',
          url: 'https://youtube.com/playlist?list=PL9gnSGHSqcnr_DxHsP7AW9ftq0AtAyYqJ&si=uLbn3WbjuzBAqmt8',
          openInNewPage: true,
        },
        {
          name: 'DevOps',
          url: 'https://youtube.com/playlist?list=PL9gnSGHSqcnoqBXdMwUTRod4Gi3eac2Ak&si=yjQNeFziZFkv9Ed2',
          openInNewPage: true,
        },
        {
          name: 'Git & GitHub',
          url: 'https://youtu.be/apGV9Kg7ics?si=5Fpqcpa_665QMtOl',
          openInNewPage: true,
        },
      ],
    },
    {
      name: 'Socials',
      links: [
        {
          name: 'YouTube',
          url: 'https://www.youtube.com/@kunalkushwaha',
          openInNewPage: true,
        },
        {
          name: 'Twitter',
          url: 'https://twitter.com/kunalstwt',
          openInNewPage: true,
        },
        {
          name: 'LinkedIn',
          url: 'https://www.linkedin.com/in/kunal-kushwaha/',
          openInNewPage: true,
        },
        {
          name: 'Instagram',
          url: 'https://www.instagram.com/kunalsig/',
          openInNewPage: true,
        },
      ],
    },
    {
      name: 'Resources',
      links: [
        {
          name: 'Home',
          url: 'https://techwithkunal.com',
          openInNewPage: true,
        },
        {
          name: 'Blog',
          url: 'https://techwithkunal.com/blog',
          openInNewPage: true,
        },
        {
          name: 'Sponsorships',
          url: 'https://techwithkunal.com#sponsorships',
          openInNewPage: true,
        },
        {
          name: 'Courses',
          url: 'https://techwithkunal.com#courses',
          openInNewPage: true,
        },
      ],
    },
  ]; return (
    <footer className="pt-10 md:pt-12 lg:pt-14 pb-6 md:pb-8 lg:pb-10 bg-slate-800 text-slate-200">
      <Container className="px-5">
        <div className="flex justify-between items-start gap-20 md:10 flex-col md:flex-row">
          <Image
            src={logoTypeLight}
            alt="Kunal Kushwaha"
            className="w-40 md:48 lg:w-52"
          />
          <div className="grid gap-5 grid-cols-2 md:grid-cols-3 w-full md:w-[70%] lg:w-[60%]">
            {FOOTER_LINKS.map((section, key) => (
              <div key={key} className="space-y-4">
                <h3 className="text-gray-400 font-semibold text-sm">
                  {section.name}
                </h3>
                <ul className="space-y-3">
                  {section.links.map((link, key) => (
                    <li key={key} className="font-medium text-base">
                      <Link
                        href={link.url}
                        className="relative z-0 before:absolute before:z-10 before:w-full before:h-[1px] before:bg-gray-200 before:bottom-0 before:left-0 before:scale-x-0 hover:before:scale-x-100 before:transition-transform before:origin-left"
                        target={link.openInNewPage ? '_blank' : ''}
                        rel={link.openInNewPage ? 'noreferrer noopener' : ''}
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="border-t border-gray-600 pt-8 mt-12">
          <p className="text-gray-400 text-center">
            © 2024 Kunal Kushwaha. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
};
