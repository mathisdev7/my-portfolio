import { Icon } from '@iconify/react';
import dynamic from 'next/dynamic';

import { Animate, Button, Pill } from '~/components';
import { Layout } from '~/layouts';
import { EventType, NavigationItemType } from '~/types';

import type { EventProps } from '~/components/Event.component';
import type { NavigationItem } from '~/types';

const Event = dynamic<EventProps>(
	() => import('~/components/Event.component').then(({ Event }) => Event),
	{
		ssr: false,
	},
);

const ACTIONS: Array<NavigationItem> = [
	{
		type: NavigationItemType.LINK,
		href: '/projects',
		icon: <Icon className="mr-3 text-black dark:text-white" icon="feather:copy" />,
		text: 'Projects',
	},
	{
		type: NavigationItemType.LINK,
		external: true,
		href: 'https://github.com/mathisdev7',
		icon: <Icon className="mr-3 text-black dark:text-white" icon="feather:github" />,
		text: 'GitHub',
	},
	{
		type: NavigationItemType.LINK,
		href: '/skills',
		icon: <Icon className="mr-3 text-black dark:text-white" icon="feather:code" />,
		text: 'Skills',
	},
	{
		type: NavigationItemType.LINK,
		href: '/contact',
		icon: <Icon className="mr-3 text-black dark:text-white" icon="feather:edit-3" />,
		text: 'Contact',
	},
];

export default function HomePage(): JSX.Element {
	const today = new Date();
	const birthday = new Date('2006-08-05');
	const isBirthday =
		today.getDate() === birthday.getDate() && today.getMonth() === birthday.getMonth();

	const description = 'Full-Stack web developer | React, Next.js, Go';

	return (
		<Layout.Default>
			{isBirthday && <Event event={EventType.BIRTHDAY} />}
			<div className="min-h-screen flex items-center justify-center py-12">
				<div
					className="max-w-sm sm:max-w-lg md:sm:max-w-2xl lg:sm:max-w-3xl w-full space-y-8 text-center"
					style={{ opacity: 1, animation: 'fadeIn 0.5s ease-in forwards' }}>
					<Animate
						as="h1"
						animation={{
							opacity: [0, 1],
							scale: [0.75, 1],
						}}
						transition={{
							delay: 0.5,
						}}
						className="text-gray-500 dark:text-white text-5xl sm:text-6xl md:text-6xl lg:text-7xl tracking-tight font-extrabold">
						Hey <span className="inline-block origin-70 hover:(animate-wave)">👋</span>{' '}
						I&apos;m Mathis, <br className="hidden sm:block" />a{' '}
						<Pill.Standard className="mt-4">developer</Pill.Standard>
					</Animate>

					<Animate
						as="p"
						animation={{
							opacity: [0, 1],
							scale: [0.75, 1],
						}}
						className="max-w-xs mt-4 md:mt-8 mx-auto text-base text-gray-400 sm:text-lg md:text-xl md:max-w-3xl"
						transition={{
							delay: 0.75,
						}}>
						{description}
					</Animate>

					<Animate
						animation={{
							opacity: [0, 1],
							y: [20, 0],
						}}
						transition={{
							delay: 2,
						}}
						className="flex justify-center mt-6">
						<a
							href="https://github.com/mathisdev7"
							target="_blank"
							rel="noopener noreferrer"
							className="group relative inline-flex items-center px-6 py-3 bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 dark:from-gray-700 dark:to-gray-800 dark:hover:from-gray-600 dark:hover:to-gray-700 text-white text-sm font-semibold rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg shadow-md border border-gray-600 dark:border-gray-500">
							<Icon
								className="mr-2 text-lg group-hover:animate-pulse"
								icon="feather:github"
							/>
							<span className="relative">
								Follow me on GitHub
								<span className="absolute inset-x-0 -bottom-1 h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
							</span>
							<div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
						</a>
					</Animate>

					<div className="flex flex-col sm:flex-row items-center justify-center sm:space-x-4 space-y-4 sm:space-y-0 w-full mt-8 sm:mt-4">
						{ACTIONS.map((action, index) => {
							if (action.type !== NavigationItemType.LINK) return null;

							return (
								<Animate
									animation={{
										y: [50, 0],
										opacity: [0, 1],
									}}
									className="w-full sm:w-auto"
									key={index}
									transition={{
										delay: 0.1 * (index + 2) + 0.75,
									}}>
									<Button.Outline href={action.href}>
										{action.icon}
										<span className="dark:text-white text-black">
											{action.text}
										</span>
									</Button.Outline>
								</Animate>
							);
						})}
					</div>
				</div>
			</div>
		</Layout.Default>
	);
}
