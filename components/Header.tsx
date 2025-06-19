"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";
import LanguageSwitcher from "./LanguageSwitcher";
import ThemeSwitcher from "./ThemeSwitcher";

export default function Header() {
  const t = useTranslations();
  const pathname = usePathname();

  const isActive = (path: string) => {
    if (path === "/") {
      return (
        pathname === "/" ||
        pathname === "/en" ||
        pathname === "/fr" ||
        pathname === "/de" ||
        pathname === "/es" ||
        pathname === "/it"
      );
    }
    return pathname.includes(path);
  };

  return (
    <header className="tracking-tight mt-2 w-full max-w-4xl mx-auto">
      <div className="mx-4 md:px-0 lg:mx-auto">
        <nav
          className="fade relative scroll-pr-6 px-0 pb-0 md:relative md:overflow-auto"
          id="nav"
        >
          <div className="flex w-full flex-row justify-between items-center py-5">
            <div className="flex flex-row justify-between gap-4">
              <Link
                className={`flex align-middle transition-all hover:text-primary hover:underline hover:cursor-pointer ${
                  isActive("/")
                    ? "text-primary font-bold"
                    : "text-secondary hover:text-foreground"
                }`}
                href="/"
              >
                <span className="relative py-1">{t("navigation.home")}</span>
              </Link>
              <Link
                className={`flex align-middle transition-all hover:text-primary hover:underline hover:cursor-pointer ${
                  isActive("/projects")
                    ? "text-primary font-bold"
                    : "text-secondary hover:text-foreground"
                }`}
                href="/projects"
              >
                <span className="relative py-1">
                  {t("navigation.projects")}
                </span>
              </Link>
              <Link
                className={`flex align-middle transition-all hover:text-primary hover:underline hover:cursor-pointer ${
                  isActive("/contact")
                    ? "text-primary font-bold"
                    : "text-secondary hover:text-foreground"
                }`}
                href="/contact"
              >
                <span className="relative py-1">{t("navigation.contact")}</span>
              </Link>
            </div>
            <div className="flex items-center gap-2">
              <ThemeSwitcher />
              <LanguageSwitcher />
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
