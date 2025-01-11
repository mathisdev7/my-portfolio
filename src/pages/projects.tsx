import { Animate, List } from '~/components';
import { Layout } from '~/layouts';
import { fetchProjects } from '~/lib/projects';
import { ListActionType } from '~/types';

import type { GetStaticProps } from 'next';

import Image from 'next/image';
import type { ListAction, Project } from '~/types';

interface ProjectProps {
	stringifiedProjects: string;
}

export const getStaticProps: GetStaticProps<ProjectProps> = async () => {
	const projects = await fetchProjects();

	return {
		props: {
			stringifiedProjects: JSON.stringify(projects),
		},
		revalidate: 3600,
	};
};

export default function ProjectsPage({ stringifiedProjects }: ProjectProps): JSX.Element {
	const projects = JSON.parse(stringifiedProjects) as Array<Project>;

	return (
		<Layout.Default seo={{ title: 'mathis ─ projects' }}>
			<div className="my-24 mx-2 sm:mx-6 lg:mb-28 lg:mx-8">
				<div className="relative max-w-7xl mx-auto">
					<List.Container>
						{projects.map((project, index) => (
							<Animate
								animation={{ y: [50, 0], opacity: [0, 1] }}
								key={index}
								transition={{
									delay: 0.1 * index,
								}}>
								<List.Item
									actions={[
										...(project.post
											? [
													{
														type: ListActionType.LINK,
														external: false,
														href: project.post,
														icon: 'feather:edit-3',
													} as ListAction,
											  ]
											: []),
										...(project.homepage
											? [
													{
														type: ListActionType.LINK,
														href: project.homepage,
														icon: 'feather:home',
														label: `${project.name} homepage`,
													} as ListAction,
											  ]
											: []),
										{
											type: ListActionType.LINK,
											href: project.url,
											icon: 'feather:github',
											label: 'GitHub Repository',
										},
									]}
									description={project.description}
									icon={<span className="text-xl">{project.icon}</span>}
									title={project.name}
									image={
										<div className="relative w-full h-48 mb-4 overflow-hidden">
											<Image
												width={800}
												height={400}
												unoptimized
												src={project.image}
												alt={`${project.name} preview`}
												className="w-full h-full object-contain bg-gray-100 dark:bg-gray-800"
												style={{
													objectFit: project.name.startsWith('42-')
														? 'contain'
														: 'cover',
													backgroundColor: project.name.startsWith('42-')
														? 'white'
														: 'transparent',
												}}
											/>
										</div>
									}
								/>
							</Animate>
						))}
					</List.Container>
				</div>
			</div>
		</Layout.Default>
	);
}
