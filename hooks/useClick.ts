"use client";
import { useSound } from "use-sound";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function useClick(): any {
  const result = useSound("/sounds/click.ogg", {
    volume: 0.05,
  });

  return result;
}
