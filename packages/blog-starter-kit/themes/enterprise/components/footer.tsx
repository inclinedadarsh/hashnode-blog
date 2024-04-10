import Image from 'next/image';
import Link from 'next/link';
import logoTypeLight from '../assets/images/logo_type_light.svg';
import { Container } from './container';

export const Footer = () => {
	const FOOTER_LINKS = [
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
			name: 'Other',
			links: [
				{
					name: 'GitHub',
					url: 'https://github.com/kunal-kushwaha',
					openInNewPage: true,
				},
				{
					name: 'Reddit',
					url: 'https://www.reddit.com/user/KunalsReddit/',
					openInNewPage: true,
				},
				{
					name: 'YouTube Hindi',
					url: 'https://www.youtube.com/@KunalHindi',
					openInNewPage: true,
				},
				{
					name: 'Credly',
					url: 'https://www.credly.com/users/kunalkushwaha/badges',
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
					url: '/',
					openInNewPage: true,
				},
				{
					name: 'Sponsorships',
					url: 'https://techwithkunal.com#sponsorships',
					openInNewPage: true,
				},
				{
					name: 'Courses',
					url: 'https://techwithkunal.com/courses',
					openInNewPage: true,
				},
			],
		},
	];
	return (
		<footer className="bg-slate-800 pb-6 pt-10 text-slate-200 md:pb-8 md:pt-12 lg:pb-10 lg:pt-14">
			<Container className="px-5">
				<div className="md:10 flex flex-col items-start justify-between gap-20 md:flex-row">
					<Image src={logoTypeLight} alt="Kunal Kushwaha" className="md:48 w-40 lg:w-52" />
					<div className="grid w-full grid-cols-2 gap-5 md:w-[70%] md:grid-cols-3 lg:w-[60%]">
						{FOOTER_LINKS.map((section, key) => (
							<div key={key} className="space-y-4">
								<h3 className="text-sm font-semibold text-gray-400">{section.name}</h3>
								<ul className="space-y-3">
									{section.links.map((link, key) => (
										<li key={key} className="text-base font-medium">
											<Link
												href={link.url}
												className="relative z-0 before:absolute before:bottom-0 before:left-0 before:z-10 before:h-[1px] before:w-full before:origin-left before:scale-x-0 before:bg-gray-200 before:transition-transform hover:before:scale-x-100"
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
				<div className="mt-12 border-t border-gray-600 pt-8">
					<p className="text-center text-gray-400">© 2024 Kunal Kushwaha. All rights reserved.</p>
				</div>
			</Container>
		</footer>
	);
};
