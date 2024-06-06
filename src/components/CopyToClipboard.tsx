"use client";
import { useState } from "react";
import copy from "clipboard-copy";
import type { Snippet } from "@prisma/client";

interface CopyToClipboardButtonProps {
  snippet: Snippet;
}
const CopyToClipboardButton = ({ snippet }: CopyToClipboardButtonProps) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyClick = async () => {
    try {
      await copy(snippet.code);
      setIsCopied(true);
    } catch (error) {
      console.error("Failed to copy text to clipboard", error);
    }
  };

  return (
    <div>
      <button onClick={handleCopyClick} className="mb-5 text-xs">
        {isCopied ? "Copied!" : "Copy to Clipboard"}
      </button>
    </div>
  );
};

export default CopyToClipboardButton;
