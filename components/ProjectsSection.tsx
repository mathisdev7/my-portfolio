import { Badge } from "@/components/ui/badge";
import { getAllProjects } from "@/lib/projects";
import { IconExternalLink } from "@tabler/icons-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

export default function ProjectsSection() {
  const t = useTranslations();
  const projects = getAllProjects();

  return (
    <section id="projects" className="flex flex-col space-y-5 py-5">
      <h2 className="text-2xl font-bold">{t("projects.title")}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.slice(0, 2).map((project) => (
          <div
            key={project.id}
            className="border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow bg-card text-card-foreground"
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
            <div className="flex flex-row items-center space-x-2 mb-3">
              <h3 className="text-xl font-semibold">{project.name}</h3>
              <Link
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 transition-colors"
              >
                <IconExternalLink size={20} />
              </Link>
            </div>
            <p className="text-muted-foreground mb-4">
              {t(project.description)}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech, techIndex) => (
                <Badge key={techIndex} variant="secondary">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center pt-6">
        <Link
          href="/projects"
          className="inline-flex items-center px-6 py-3 text-sm font-medium bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background transition-colors"
        >
          {t("projects.viewMore")}
          <IconExternalLink size={16} className="ml-2" />
        </Link>
      </div>
    </section>
  );
}
