// app/actions.ts
"use server";

import { db } from "@/lib/db";
import { projects } from "@/db/schema";
import { revalidatePath } from "next/cache";

export async function createProject(formData: FormData) {
  const name = formData.get("name")?.toString();
  const description = formData.get("description")?.toString();

  if (!name) return;

  await db.insert(projects).values({ name, description });
  revalidatePath("/");
}
