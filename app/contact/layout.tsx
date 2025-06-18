import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact - Get In Touch",
  description:
    "Contact Mathis Zeghouani for web development projects, collaborations, or job opportunities. Specializing in React, Next.js, TypeScript, Node.js, and Go development. Available for freelance and full-time positions.",
  keywords: [
    "Contact Mathis Zeghouani",
    "Hire React developer",
    "Freelance developer",
    "Web development services",
    "Next.js developer for hire",
    "TypeScript developer contact",
    "Full stack developer France",
    "React developer Toulouse",
    "Web development collaboration",
  ],
  openGraph: {
    title: "Contact - Mathis Zeghouani",
    description:
      "Get in touch for web development projects, collaborations, or job opportunities. Expert in React, Next.js, TypeScript, and modern web technologies.",
    url: "https://mathisdev.pro/contact",
    type: "website",
  },
  twitter: {
    title: "Contact - Mathis Zeghouani",
    description:
      "Get in touch for web development projects, collaborations, or job opportunities. Expert in React, Next.js, TypeScript, and modern web technologies.",
  },
  alternates: {
    canonical: "https://mathisdev.pro/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
