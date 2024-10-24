import emojiRegex from 'emoji-regex';
import { log } from 'next-axiom';

import type { GitHubRepos, Project } from '~/types';

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

	const projects: Array<Project> = json
		.map((repo) => {
			if (!repo.topics.includes('portfolio')) return null;

			if (repo.archived) return null;

			return {
				description: repo.description,
				icon: ((): string => {
					if (!repo.description) return undefined;

					const char = repo.description.split(' ')[0];

					return emojiRegex().test(char) ? char : undefined;
				})(),
				homepage: repo.homepage ?? undefined,
				name: repo.name,
				template: false,
				url: repo.html_url.toLowerCase(),
			} as Project;
		})
		.filter((project) => project !== null);

	return projects;
}
