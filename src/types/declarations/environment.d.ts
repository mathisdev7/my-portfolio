// eslint-disable-next-line @typescript-eslint/no-unused-vars
namespace NodeJS {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	interface ProcessEnv extends NodeJS.ProcessEnv {

		/**
		 * GitHub Personal Access Token (PAT)
		 *
		 * @description Token used for fetching repositories
		 */
		GITHUB_PAT: string;
	}
}
