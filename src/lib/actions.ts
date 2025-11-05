"use server";

import { cookies } from "next/headers";

export async function setLocale(locale: "en" | "ar") {
  const cookieStore = await cookies();
  cookieStore.set("locale", locale, { path: "/" });
}

