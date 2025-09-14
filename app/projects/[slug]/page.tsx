import { Badge } from "@/components/ui/badge";
import { getAllProjects, getProjectBySlug } from "@/lib/projects";
import { IconBrandGithub, IconExternalLink } from "@tabler/icons-react";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import Link from "next/link";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const projects = getAllProjects();
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  const t = await getTranslations();

  if (!project) return {};

  const title = `${project.name} – ${t("projects.title")}`;
  const description = t(project.description);

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: project.image ? [{ url: project.image }] : undefined,
      url: `https://sitham.dev/projects/${project.slug}`,
      type: "article",
    },
    alternates: { canonical: `https://sitham.dev/projects/${project.slug}` },
    twitter: {
      title,
      description,
      images: project.image ? [project.image] : [],
    },
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  const t = await getTranslations();

  if (!project) {
    return null;
  }

  return (
    <div className="mx-auto max-w-3xl antialiased">
      <div className="mx-4 px-2 md:px-0 lg:mx-auto py-8">
        <header className="mb-6">
          <div className="flex items-center justify-between gap-3 mb-2">
            <h1 className="text-3xl font-bold">{project.name}</h1>
            {project.featured && (
              <Badge variant="default" className="text-xs">
                {t("projects.featured")}
              </Badge>
            )}
          </div>
          <p className="text-secondary">{t(project.description)}</p>
        </header>

        {project.image && (
          <div className="relative w-full h-64 mb-6 rounded-lg overflow-hidden">
            <Image
              src={project.image}
              alt={project.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 800px"
            />
          </div>
        )}

        <section className="prose prose-invert max-w-none mb-8">
          <h2 className="text-xl font-semibold mb-2">
            {t("projects.viewProject")}
          </h2>
          <p className="text-secondary leading-relaxed">
            {t(project.adventure)}
          </p>
        </section>

        <section className="mb-6">
          <h3 className="text-lg font-semibold mb-3">Tech</h3>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, idx) => (
              <Badge key={idx} variant="outline" className="text-xs">
                {tech}
              </Badge>
            ))}
          </div>
        </section>

        <div className="flex gap-2 mt-6">
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
  );
}
