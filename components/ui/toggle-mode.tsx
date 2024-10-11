"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export function ModeToggle() {
  const { setTheme } = useTheme();

  return (
    <Button
      size="icon"
      className="bg-transparent hover:bg-transparent relative bottom-1.5 left-1.5"
    >
      <Sun
        onClick={() => setTheme("dark")}
        className="h-[1.8rem] w-[1.8rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-[#9744ea]"
      />
      <Moon
        onClick={() => setTheme("light")}
        className="absolute h-[1.8rem] w-[1.8rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-[#9744ea]"
      />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
