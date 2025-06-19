import { useTranslations } from "next-intl";
import Link from "next/link";

export default function Footer() {
  const t = useTranslations();

  return (
    <footer className="flex flex-col items-center pt-10 pb-5 space-y-2 text-center">
      <Link
        href="https://github.com/mathisdev7/my-portfolio"
        target="_blank"
        rel="noopener noreferrer"
        className="text-xs text-muted-foreground underline hover:text-foreground transition-colors"
      >
        {t("footer.source")}
      </Link>
    </footer>
  );
}
