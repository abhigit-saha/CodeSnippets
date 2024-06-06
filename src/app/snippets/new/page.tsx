import React from "react";
import SnippetForm from "@/components/SnippetForm";
import Link from "next/link";

function SnippetCreatePage() {
  return (
    <div>
      <h1 className="text-3xl font-bold pb-5">Create a Snippet</h1>
      <SnippetForm />
    </div>
  );
}

export default SnippetCreatePage;
