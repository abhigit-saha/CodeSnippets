// "use client";
import Image from "next/image";
import Link from "next/link";

import { db } from "@/db";
import { Input } from "@/components/ui/input";
export default async function Home() {
  const snippets = await db.snippet.findMany();
  const renderedSnippets = snippets.map((snippet) => (
    <Link
      key={snippet.id}
      href={`/snippets/${snippet.id}`}
      className="flex justify-between items-center border p-4 my-2 rounded-md shadow-md"
    >
      <div>
        <h2 className="text-xl font-bold">{snippet.title}</h2>
        <p className="text-sm text-gray-600">{snippet.language}</p>
      </div>
      <div>
        <p>View</p>
      </div>
    </Link>
  ));
  return (
    <div>
      <div className="flex justify-between">
        <h1 className="text-4xl font-bold mb-6">Snippets</h1>
        <Link
          href={"/snippets/new"}
          className="flex items-center justify-center text-2xl rounded-md p-2 px-4 shadow-md bg-emerald-700 text-white"
        >
          New
        </Link>
      </div>
      <div className="flex flex-col gap-2">{renderedSnippets}</div>
    </div>
  );
}
