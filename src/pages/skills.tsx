import { Icon } from '@iconify/react';
import { Icons } from '~/components/Icons/Icons';
import { Layout } from '~/layouts';

interface Skill {
	title: string;
	icon: string | JSX.Element;
	level: string;
	description: string;
}

const skills: Array<Skill> = [
	{
		title: 'JavaScript',
		icon: 'logos:javascript',
		level: 'Advanced',
		description:
			'2 years of experience building web applications, Discord bots, and CLI apps using JavaScript and frameworks.',
	},
	{
		title: 'TypeScript',
		icon: 'logos:typescript-icon',
		level: 'Intermediate',
		description:
			'7 months of experience writing scalable and type-safe code for various projects.',
	},
	{
		title: 'C',
		icon: 'logos:c',
		level: 'Intermediate',

		description: 'Proficient in C, gained through an intensive 1-month Piscine at 42 School.',
	},
	{
		title: 'Next.js',
		icon: <Icons.nextjs className="size-6 dark:text-white" />,
		level: 'Advanced',
		description:
			'Expert in building full-stack applications with server-side rendering and static site generation.',
	},
	{
		title: 'React',
		icon: 'logos:react',
		level: 'Advanced',
		description:
			'Experience creating dynamic and interactive user interfaces using React.js for modern web apps.',
	},
	{
		title: 'Express.js',
		icon: <Icons.expressjs className="size-6 dark:text-white text-black" />,
		level: 'Intermediate',
		description:
			'Experience with Express.js for building RESTful APIs and server-side rendering.',
	},
	{
		title: 'Tailwind CSS',
		icon: 'logos:tailwindcss-icon',
		level: 'Intermediate',
		description: 'Skilled in crafting responsive designs and customizing UI with Tailwind CSS.',
	},
	{
		title: 'Prisma',
		icon: 'logos:prisma',
		level: 'Intermediate',
		description:
			'Experience with Prisma as an ORM for managing database schemas in full-stack projects.',
	},
	{
		title: 'PostgreSQL',
		icon: 'logos:postgresql',
		level: 'Intermediate',
		description: 'Familiar with creating and querying relational databases using PostgreSQL.',
	},
	{
		title: 'Git & GitHub',
		icon: 'feather:git-branch',
		level: 'Advanced',
		description:
			'Proficient in version control, managing branches, and collaborating on GitHub.',
	},
];

export default function SkillsPage(): JSX.Element {
	return (
		<Layout.Default seo={{ title: 'mathis ─ skills' }}>
			<div className="flex flex-grow min-h-screen pt-16 pb-12">
				<div className="flex-grow flex flex-col justify-center max-w-sm sm:max-w-2xl w-full mx-auto px-0 sm:px-16">
					<h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-8">
						Skills
					</h1>
					<ul className="-mb-8" role="list">
						{skills.map((skill, index) => (
							<li className="my-1" key={skill.title}>
								<div className="relative pb-8">
									{index !== skills.length - 1 && (
										<span
											aria-hidden="true"
											className="absolute top-1 left-1/2 w-0.5 h-full -ml-px bg-gray-200 dark:bg-gray-600"
										/>
									)}

									<div className="relative flex items-center space-x-3 bg-gray-50 bg-opacity-75 dark:bg-gray-900 dark:bg-opacity-75 backdrop-filter backdrop-blur-sm px-2 py-3 border-2 border-gray-200 dark:border-gray-600 rounded-lg">
										<div className="relative flex items-center justify-center w-12 h-12 bg-primary-500 bg-opacity-15 backdrop-filter backdrop-blur-sm saturate-200 mx-2 px-1 rounded-full">
											{typeof skill.icon !== 'string' ? (
												skill.icon
											) : (
												<Icon
													aria-hidden="true"
													className="w-6 h-6 text-primary-500"
													icon={skill.icon}
												/>
											)}
										</div>

										<div className="min-w-0 flex-1">
											<h1 className="flex justify-between mb-2 text-gray-500 dark:text-white text-lg tracking-tight font-bold">
												<span>{skill.title}</span>
												<span className="text-sm text-primary-500">
													{skill.level}
												</span>
											</h1>
											<p className="my-2 text-gray-300 text-base">
												{skill.description}
											</p>
										</div>
									</div>
								</div>
							</li>
						))}
					</ul>
				</div>
			</div>
		</Layout.Default>
	);
}
