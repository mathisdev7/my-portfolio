"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export type Locale = "en" | "fr" | "de" | "it" | "es";

export async function setLocaleCookie(locale: Locale) {
  const cookieStore = await cookies();

  cookieStore.set("locale", locale, {
    path: "/",
    maxAge: 60 * 60 * 24 * 365,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
  });

  redirect("/");
}
