import { Badge } from "@/components/ui/badge";
import { getAllProjects } from "@/lib/projects";
import { IconBrandGithub, IconExternalLink } from "@tabler/icons-react";
import { Metadata } from "next";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Projects - Portfolio Showcase",
  description:
    "Explore Mathis Zeghouani's portfolio of modern web applications including Sendyb, Beatshub, 42 school projects, and innovative React/Next.js solutions. Full stack development with TypeScript, Node.js, and Go.",
  keywords: [
    "Mathis Zeghouani projects",
    "React projects",
    "Next.js applications",
    "TypeScript projects",
    "Full stack portfolio",
    "Sendyb",
    "Beatshub",
    "42 school projects",
    "Web development portfolio",
    "JavaScript applications",
  ],
  openGraph: {
    title: "Projects - Mathis Zeghouani Portfolio",
    description:
      "Discover innovative web applications and projects built with React, Next.js, TypeScript, and modern technologies.",
    url: "https://mathisdev.pro/projects",
    type: "website",
  },
  twitter: {
    title: "Projects - Mathis Zeghouani Portfolio",
    description:
      "Discover innovative web applications and projects built with React, Next.js, TypeScript, and modern technologies.",
  },
  alternates: {
    canonical: "https://mathisdev.pro/projects",
  },
};

export default function ProjectsPage() {
  const t = useTranslations();
  const projects = getAllProjects();

  return (
    <div className="mx-auto max-w-4xl antialiased">
      <div className="mx-4 px-2 md:px-0 lg:mx-auto py-5">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">
            {t("projects.allProjectsTitle")}
          </h1>
          <p className="text-secondary text-lg">
            {t("projects.allProjectsDescription")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow bg-card text-card-foreground flex flex-col"
            >
              {project.image && (
                <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              )}

              <div className="flex-1 flex flex-col">
                <div className="flex flex-row items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold">{project.name}</h3>
                  {project.featured && (
                    <Badge variant="default" className="text-xs">
                      {t("projects.featured")}
                    </Badge>
                  )}
                </div>

                <p className="text-secondary mb-4 flex-1">
                  {t(project.description)}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="outline"
                      className="text-xs"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-2 mt-auto">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="flex-1 inline-flex items-center justify-center px-3 py-2 text-sm font-medium border border-input bg-background hover:bg-accent hover:text-accent-foreground rounded-md transition-colors"
                  >
                    {t("projects.viewProject")}
                  </Link>
                  <Link
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center px-3 py-2 text-sm font-medium bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
                  >
                    <IconExternalLink size={16} className="mr-2" />
                    {project.link.includes("github.com")
                      ? t("projects.viewCode")
                      : t("projects.demo")}
                  </Link>

                  {project.githubUrl && (
                    <Link
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-3 py-2 text-sm font-medium border border-input bg-background hover:bg-accent hover:text-accent-foreground rounded-md transition-colors"
                    >
                      <IconBrandGithub size={16} />
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
