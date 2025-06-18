import ClickSound from "@/components/ClickSound";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Toaster } from "@/components/ui/sonner";
import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default:
      "Mathis Zeghouani - Full Stack Developer | React, Next.js, TypeScript Expert",
    template: "%s | Mathis Zeghouani - Full Stack Developer",
  },
  description:
    "Mathis Zeghouani is an 18-year-old Full Stack Developer from France specializing in React, Next.js, TypeScript, Node.js, and Go. Discover my portfolio featuring modern web applications, e-commerce solutions, and innovative projects including Sendyb and Beatshub.",
  keywords: [
    "Mathis Zeghouani",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "Node.js Developer",
    "Go Developer",
    "Web Developer France",
    "Frontend Developer",
    "Backend Developer",
    "JavaScript Developer",
    "Portfolio",
    "Sendyb",
    "Beatshub",
    "42 School",
    "Web Applications",
    "E-commerce Development",
    "Modern Web Development",
    "Toulouse Developer",
  ],
  authors: [{ name: "Mathis Zeghouani" }],
  creator: "Mathis Zeghouani",
  publisher: "Mathis Zeghouani",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mathisdev.pro",
    siteName: "Mathis Zeghouani - Full Stack Developer",
    title:
      "Mathis Zeghouani - Full Stack Developer | React, Next.js, TypeScript Expert",
    description:
      "18-year-old Full Stack Developer from France specializing in React, Next.js, TypeScript, Node.js, and Go. Explore my portfolio of modern web applications and innovative projects.",
    images: [
      {
        url: "/me.jpeg",
        width: 1200,
        height: 630,
        alt: "Mathis Zeghouani - Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Mathis Zeghouani - Full Stack Developer | React, Next.js, TypeScript Expert",
    description:
      "18-year-old Full Stack Developer from France specializing in React, Next.js, TypeScript, Node.js, and Go. Explore my portfolio of modern web applications.",
    images: ["/me.jpeg"],
    creator: "@mathiszeghouani",
  },
  alternates: {
    canonical: "https://mathisdev.pro",
  },
  category: "Technology",
  classification: "Portfolio Website",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#000000" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="antialiased" suppressHydrationWarning>
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Analytics />
            <ClickSound />
            <div className="flex flex-col min-h-screen">
              <Header />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
            <Toaster />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
