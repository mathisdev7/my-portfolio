import ExperienceSection from "@/components/ExperienceSection";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home - Full Stack Developer Portfolio",
  description:
    "Welcome to Mathis Zeghouani's portfolio. 19-year-old Full Stack Developer from France specializing in React, Next.js, TypeScript, Node.js, and Go. Discover my latest projects and get in touch for collaborations.",
  keywords: [
    "Mathis Zeghouani",
    "Full Stack Developer France",
    "React developer portfolio",
    "Next.js expert",
    "TypeScript developer",
    "Young developer",
    "Web developer Toulouse",
    "JavaScript expert",
    "Modern web development",
    "Portfolio website",
  ],
  openGraph: {
    title: "Mathis Zeghouani - Full Stack Developer Portfolio",
    description:
      "19-year-old Full Stack Developer from France. Expert in React, Next.js, TypeScript, Node.js, and Go. Discover my projects and expertise.",
    url: "https://mathisdev.pro",
    type: "website",
  },
  twitter: {
    title: "Mathis Zeghouani - Full Stack Developer Portfolio",
    description:
      "19-year-old Full Stack Developer from France. Expert in React, Next.js, TypeScript, Node.js, and Go.",
  },
  alternates: {
    canonical: "https://mathisdev.pro",
  },
};

function JsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Mathis Zeghouani",
    jobTitle: "Full Stack Developer",
    description:
      "19-year-old Full Stack Developer from France specializing in React, Next.js, TypeScript, Node.js, and Go",
    url: "https://mathisdev.pro",
    sameAs: [
      "https://github.com/mathisdev7",
      "https://linkedin.com/in/mathis-zeghouani",
      "https://twitter.com/frostwrld7",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Toulouse",
      addressCountry: "France",
    },
    knowsAbout: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Node.js",
      "Go",
      "Full Stack Development",
      "Web Development",
      "Frontend Development",
      "Backend Development",
    ],
    alumniOf: {
      "@type": "Organization",
      name: "42 School",
    },
    hasCredential: [
      {
        "@type": "EducationalOccupationalCredential",
        name: "42 School Student",
        educationalLevel: "Professional Training",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export default function Home() {
  return (
    <>
      <JsonLd />
      <div className="mx-auto max-w-4xl antialiased">
        <div className="mx-4 px-2 md:px-0 lg:mx-auto py-5">
          <HeroSection />
          <div className="my-8 w-full border-t border-border"></div>
          <ExperienceSection />
          <div className="my-8 w-full border-t border-border"></div>
          <ProjectsSection />
        </div>
      </div>
    </>
  );
}
