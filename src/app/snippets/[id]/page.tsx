import React from "react";
import { db } from "@/db/index";
import { notFound } from "next/navigation";
import Link from "next/link";
import * as actions from "@/actions/actions";
import { Button } from "@/components/ui/button";
import Image from "next/image";
interface SnippetShowPageProps {
  params: {
    id: string;
  };
}

async function SnippetShowPage(props: SnippetShowPageProps) {
  const snippet = await db.snippet.findFirst({
    where: { id: parseInt(props.params.id) },
  });
  if (!snippet) {
    notFound();
  }
  console.log(props);
  const deleteSnippet = actions.deleteSnippet.bind(null, snippet.id);
  return (
    <div>
      <div className="flex justify-between">
        <div className="flex gap-4">
          <h1 className=" text-3xl font-bold">{snippet.title}</h1>
          <div className="border rounded p-2">{snippet.language}</div>
        </div>
        <div className="flex gap-4">
          <Link href={`/snippets/${snippet.id}/edit`}>
            <Button>Edit</Button>
          </Link>

          <form action={deleteSnippet}>
            <Button className=" bg-red-700 text-white">Delete</Button>
          </form>
        </div>
      </div>
      <pre className="p-3 border rounded bg-gray-200 border-gray-200 overflow-auto mt-10">
        <code>{snippet.code}</code>
      </pre>

      <Link href={`/`}>
        <Button className="mt-5">Back</Button>
      </Link>
    </div>
  );
}

export default SnippetShowPage;
