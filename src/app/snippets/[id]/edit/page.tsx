import { Snippet } from "next/font/google";
import React from "react";
import { db } from "@/db/index";
import { notFound } from "next/navigation";
import SnippetEditForm from "@/components/SnippetEditForm";
import Link from "next/link";
interface SnippetEditPageProps {
  params: {
    id: string;
  };
}
async function SnippetEditPage(props: SnippetEditPageProps) {
  const id = parseInt(props.params.id);
  const snippet = await db.snippet.findFirst({
    where: { id },
  });

  if (!snippet) {
    return notFound();
  }
  return (
    <div>
      editing page with id {id}
      <SnippetEditForm snippet={snippet} />
    </div>
  );
}

export default SnippetEditPage;
