"use client";

import { useClick } from "@/hooks/useClick";
import { useEvent } from "react-use";

export default function ClickSound() {
  const [play] = useClick();

  useEvent("mousedown", () => play());
  useEvent("mouseup", () => play());

  return null;
}
