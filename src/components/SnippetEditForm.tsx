"use client";
import React, { startTransition } from "react";
import Editor from "@monaco-editor/react";
import type { Snippet } from "@prisma/client";
import * as actions from "@/actions/actions";
import { Button } from "@/components/ui/button";
interface SnippetEditFormProps {
  snippet: Snippet;
}
import { useState } from "react";
import { redirect } from "next/navigation";

function SnippetEditForm({ snippet }: SnippetEditFormProps) {
  const [value, setValue] = useState(snippet.code);
  const handleEditorChange = (value: string = "") => {
    console.log(value);
    setValue(value);
  };
  const handleEditorSubmit = () => {
    const editSnippet = actions.editSnippet.bind(null, snippet.id, value);
    editSnippet();
  };
  return (
    <div>
      <div className="flex justify-between">
        <h1 className=" text-3xl font-bold">{snippet.title}</h1>
        <div className=" border rounded p-2 mb-5">{snippet.language} </div>
      </div>
      <Editor
        height="40vh"
        defaultLanguage={snippet.language}
        theme="vs-dark"
        defaultValue={snippet.code}
        options={{ minimap: { enabled: false } }}
        onChange={handleEditorChange}
      />
      <form action={handleEditorSubmit}>
        <Button type="submit" className="mt-5">
          Confirm Changes
        </Button>
      </form>
    </div>
  );
}

export default SnippetEditForm;
