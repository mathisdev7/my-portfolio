import emojiRegex from 'emoji-regex';
import { log } from 'next-axiom';

import type { GitHubRepos, Project } from '~/types';
import projectImages from '../data/project_images.json';

/**
 * Fetch Projects
 *
 * Make a GET request to the GitHub API to gather all repositories
 * under my `mathisdev7` username & then filter them down to only
 * include those that contain the `portfolio` topic
 *
 */
export async function fetchProjects(): Promise<Array<Project> | null> {
	const response = await fetch('https://api.github.com/users/mathisdev7/repos', {
		headers: {
			...(process.env.GITHUB_PAT && {
				authorization: `token ${process.env.GITHUB_PAT}`,
			}),
		},
	});
	if (response.status !== 200) {
		const json = (await response.json()) as {
			documentation_url: string;
			message: string;
		};

		console.error({ error: json });
		log.error('Failed to fetch projects', {
			error: json,
		});

		return null;
	}

	const json = (await response.json()) as GitHubRepos;

	// Filter out null projects first and sort by pushed_at
	const validRepos = json
		.filter((repo) => repo.topics.includes('portfolio') && !repo.archived)
		.sort((a, b) => {
			const dateA = new Date(a.pushed_at).getTime();
			const dateB = new Date(b.pushed_at).getTime();
			return dateB - dateA;
		});

	// Then map and fetch images for valid repos
	const projects: Array<Project> = await Promise.all(
		validRepos.map(async (repo) => {
			const projectImage = projectImages[repo.name] || null;

			return {
				description: repo.description?.replace(/!\[.*?\]\(.*?\)/, '').trim(),
				icon: ((): string => {
					if (!repo.description) return undefined;
					const char = repo.description.split(' ')[0];
					return emojiRegex().test(char) ? char : undefined;
				})(),
				homepage: repo.homepage ?? undefined,
				image: projectImage,
				name: repo.name,
				template: false,
				url: repo.html_url.toLowerCase(),
				updatedAt: repo.pushed_at.toString(),
			} as Project;
		}),
	);

	return projects;
}
