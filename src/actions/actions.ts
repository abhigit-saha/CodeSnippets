"use server";

import { z } from "zod";

import { db } from "@/db";
import { redirect } from "next/navigation";
import { formSchema } from "@/components/SnippetForm";
export async function createSnippet(form: z.infer<typeof formSchema>) {
  //server action

  const { title, code, language } = form;
  const snippet = await db.snippet.create({
    data: {
      title,
      code,
      language,
    },
  });

  console.log(snippet);
  //create a new record in the database

  //redirect the user to the homepage
  redirect("/");
}

export async function editSnippet(id: number, code: string) {
  //server action
  const snippet = await db.snippet.update({
    where: { id },
    data: {
      code,
    },
  });

  redirect(`/snippets/${snippet.id}`);

  //update the record in the database
  return snippet;
}

export async function deleteSnippet(id: number) {
  await db.snippet.delete({
    where: { id },
  });

  redirect("/");
}
