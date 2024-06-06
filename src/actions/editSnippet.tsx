"use server";
import React from "react";
import { db } from "@/db";

export async function editSnippet(id: number, code: string) {
  //server action
  const snippet = await db.snippet.update({
    where: { id },
    data: {
      code,
    },
  });

  console.log(snippet);
  //update the record in the database
  return snippet;
}
