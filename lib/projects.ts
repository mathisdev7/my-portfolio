export interface Project {
  id: number;
  name: string;
  description: string;
  image: string;
  technologies: string[];
  link: string;
  githubUrl: string | null;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: 1,
    name: "Sendyb",
    description: "projects.sendyb.description",
    image: "https://i.postimg.cc/2SMsjPLy/image.png",
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Prisma",
      "Chrome Extension",
      "Go",
      "Fiber",
    ],
    link: "https://sendyb.com",
    githubUrl: null,
    featured: true,
  },
  {
    id: 2,
    name: "Beatshub",
    description: "projects.beatshub.description",
    image: "https://pbs.twimg.com/media/Gpt_X4LXIAAt6ik?format=jpg&name=large",
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "Stripe",
      "Bunny CDN",
      "DevOps",
      "Cloud",
    ],
    link: "https://beatshub.app",
    githubUrl: null,
    featured: true,
  },
  {
    id: 3,
    name: "42-Titles-Explorer",
    description: "projects.42-titles-explorer.description",
    image: "https://i.ibb.co/vxRfysWn/Capture.png",
    technologies: [
      "Next.js",
      "TypeScript",
      "Shadcn UI",
      "Tailwind CSS",
      "42 API",
    ],
    link: "https://42-titles.help",
    githubUrl: "https://github.com/mathisdev7/42-Titles-Explorer",
    featured: false,
  },
  {
    id: 4,
    name: "frost.js",
    description: "projects.frost-js.description",
    image:
      "https://images.squarespace-cdn.com/content/v1/638f10c47f505a72c6c86073/742d280c-683c-41b0-ac08-c70ee193dbe9/reactJS.jpg",
    technologies: ["TypeScript", "React", "Virtual DOM", "Library"],
    link: "https://frost-js.vercel.app",
    githubUrl: "https://github.com/mathisdev7/frost.js",
    featured: false,
  },
  {
    id: 5,
    name: "M'Astral",
    description: "projects.mastral.description",
    image:
      "https://www.entrepreneur-facile.com/wp-content/uploads/2024/01/the-social-network-facebook-le-film.jpg",
    technologies: ["TypeScript", "React", "Next.js", "Prisma"],
    link: "https://github.com/mathisdev7/M-Astral",
    githubUrl: "https://github.com/mathisdev7/M-Astral",
    featured: false,
  },
  {
    id: 6,
    name: "Techvox",
    description: "projects.techvox.description",
    image: "https://i.ibb.co/MydjrNsj/image.png",
    technologies: ["TypeScript", "React", "Next.js", "Web App"],
    link: "https://github.com/mathisdev7/techvox",
    githubUrl: "https://github.com/mathisdev7/techvox",
    featured: false,
  },
  {
    id: 7,
    name: "42-Minishell",
    description: "projects.42-minishell.description",
    image: "https://i.ibb.co/gPtZ3MV/image.png",
    technologies: ["C", "Unix", "Shell", "Team Project"],
    link: "https://github.com/mathisdev7/42-Minishell",
    githubUrl: "https://github.com/mathisdev7/42-Minishell",
    featured: false,
  },
  {
    id: 8,
    name: "42-Cub3D",
    description: "projects.42-cub3d.description",
    image: "https://i.ibb.co/xt2JFCJZ/image.png",
    technologies: ["C", "Raycasting", "Graphics", "Team Project", "Parsing"],
    link: "https://github.com/mathisdev7/42-Cub3D",
    githubUrl: "https://github.com/mathisdev7/42-Cub3D",
    featured: false,
  },
  {
    id: 9,
    name: "ecom-elysia-api",
    description: "projects.ecom-elysia-api.description",
    image:
      "https://www.salesforce.com/fr/blog/wp-content/uploads/sites/15/2023/11/SF_Blog_Image_Ecommerce_Changing_Everything.png",
    technologies: ["TypeScript", "Elysia.js", "REST API", "E-commerce"],
    link: "https://github.com/mathisdev7/ecom-elysia-api",
    githubUrl: "https://github.com/mathisdev7/ecom-elysia-api",
    featured: false,
  },
  {
    id: 10,
    name: "42-fast-api",
    description: "projects.42-fast-api.description",
    image: "https://42.fr/wp-content/uploads/2021/08/42.jpg",
    technologies: ["TypeScript", "OAuth2", "API Client", "42 School"],
    link: "https://github.com/mathisdev7/42-fast-api",
    githubUrl: "https://github.com/mathisdev7/42-fast-api",
    featured: false,
  },
  {
    id: 11,
    name: "deezer-extractor",
    description: "projects.deezer-extractor.description",
    image:
      "https://i0.wp.com/argraphic.fr/wp-content/uploads/2023/11/nouveau-logo-deezer.jpg?fit=2048%2C1152&ssl=1",
    technologies: ["TypeScript", "Discord", "Music", "Library", "Node.js"],
    link: "https://discord-player.js.org",
    githubUrl: "https://github.com/mathisdev7/deezer-extractor",
    featured: false,
  },
  {
    id: 12,
    name: "auth-example",
    description: "projects.auth-example.description",
    image: "https://firebase.google.com/static/images/products/auth/auth-3.png",
    technologies: [
      "TypeScript",
      "Node.js",
      "Express",
      "MongoDB",
      "Unit Tests",
      "JWT",
    ],
    link: "https://github.com/mathisdev7/auth-example",
    githubUrl: "https://github.com/mathisdev7/auth-example",
    featured: false,
  },
];

export const getFeaturedProjects = () =>
  projects.filter((project) => project.featured);
export const getAllProjects = () => projects;
export const getProjectsByTechnology = (tech: string) =>
  projects.filter((project) =>
    project.technologies.some((t) =>
      t.toLowerCase().includes(tech.toLowerCase())
    )
  );
