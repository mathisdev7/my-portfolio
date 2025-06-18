"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useLocale, type Locale } from "@/hooks/useLocale";
import { IconChevronDown } from "@tabler/icons-react";
import { Loader2 } from "lucide-react";

const languages = [
  { code: "en" as Locale, name: "English", flag: "🇺🇸" },
  { code: "fr" as Locale, name: "Français", flag: "🇫🇷" },
  { code: "de" as Locale, name: "Deutsch", flag: "🇩🇪" },
  { code: "it" as Locale, name: "Italiano", flag: "🇮🇹" },
  { code: "es" as Locale, name: "Español", flag: "🇪🇸" },
];

export default function LanguageSwitcher() {
  const { locale, setLocale, isPending } = useLocale();

  const currentLanguage =
    languages.find((lang) => lang.code === locale) || languages[0];

  const handleLanguageChange = (languageCode: Locale) => {
    if (!isPending) {
      setLocale(languageCode);
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" disabled={isPending}>
          {isPending ? (
            <Loader2 className="h-3 w-3 animate-spin" />
          ) : (
            <>
              <span className="text-base">{currentLanguage.flag}</span>
              <span className="text-xs font-medium">
                {currentLanguage.code.toUpperCase()}
              </span>
              <IconChevronDown className="h-3 w-3" />
            </>
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-[150px]">
        {languages.map((language) => (
          <DropdownMenuItem
            key={language.code}
            onClick={() => handleLanguageChange(language.code)}
            disabled={isPending}
            className={
              language.code === locale ? "bg-accent text-accent-foreground" : ""
            }
          >
            <span className="text-base mr-3">{language.flag}</span>
            <span className="text-sm">{language.name}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
