import { IconBrandGithub, IconBrandX } from "@tabler/icons-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "./ui/badge";

export default function HeroSection() {
  const t = useTranslations();

  const highlightTechnologies = (text: string) => {
    const technologies = ["React", "Next.js", "TypeScript", "Go"];
    const parts = text.split(new RegExp(`(${technologies.join("|")})`, "gi"));

    return parts.map((part, index) => {
      if (
        technologies.some((tech) => tech.toLowerCase() === part.toLowerCase())
      ) {
        return (
          <Badge key={index} className="text-sm" variant="outline">
            <span className="text-primary underline filter brightness-125 font-bold">
              {part}
            </span>
          </Badge>
        );
      }
      return part;
    });
  };

  return (
    <section className="mb-8">
      <Image
        alt="avatar"
        width={100}
        height={100}
        className="rounded-full cursor-pointer hover:grayscale mb-5"
        src="/me.jpeg"
        priority
      />
      <h1 className="text-2xl font-bold">{t("hero.name")}</h1>
      <div className="text-secondary">
        <p className="mt-4">{highlightTechnologies(t("hero.description1"))}</p>
        <p className="mt-4 mb-4">{t("hero.description2")}</p>
        <p className="mb-4">
          {t("hero.contact")}{" "}
          <Link
            target="_blank"
            href="mailto:mathisdev7@gmail.com"
            className="border-b inline-block border-border hover:border-foreground transition-colors"
          >
            mathisdev7@gmail.com
          </Link>{" "}
          {t("hero.socialChannels")}
        </p>
      </div>

      <div className="flex space-x-4 mb-2 mt-4">
        <div className="text-primary hover:text-foreground transition-colors flex filter brightness-125">
          <Link
            target="_blank"
            className="group flex text-sm font-medium transition"
            href="https://github.com/mathisdev7"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <IconBrandGithub className="text-primary group-hover:text-foreground transition-colors" />
          </Link>
        </div>
        <div className="text-primary hover:text-foreground transition-colors flex filter brightness-125">
          <Link
            target="_blank"
            className="text-primary group flex text-sm font-medium transition"
            href="https://x.com/frostwrld7"
            rel="noopener noreferrer"
            aria-label="X"
          >
            <IconBrandX className="text-primary group-hover:text-foreground transition-colors" />
          </Link>
        </div>
        <div className="text-primary hover:text-foreground transition-colors flex filter brightness-125">
          <Link
            target="_blank"
            className="group flex text-sm font-medium transition"
            href="https://www.linkedin.com/in/mathis-zeghouani/"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <svg
              viewBox="0 0 24 24"
              className="group-hover:fill-primary h-6 w-6 flex-none fill-primary hover:fill-foreground transition"
            >
              <path d="M18.335 18.339H15.67v-4.177c0-.996-.02-2.278-1.39-2.278-1.389 0-1.601 1.084-1.601 2.205v4.25h-2.666V9.75h2.56v1.17h.035c.358-.674 1.228-1.387 2.528-1.387 2.7 0 3.2 1.778 3.2 4.091v4.715zM7.003 8.575a1.546 1.546 0 01-1.548-1.549 1.548 1.548 0 111.547 1.549zm1.336 9.764H5.666V9.75H8.34v8.589zM19.67 3H4.329C3.593 3 3 3.58 3 4.297v15.406C3 20.42 3.594 21 4.328 21h15.338C20.4 21 21 20.42 21 19.703V4.297C21 3.58 20.4 3 19.666 3h.003z" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
