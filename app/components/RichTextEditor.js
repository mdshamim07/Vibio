"use client";
import React, { useRef } from "react";
import useMedia from "../hooks/useMedia";

export default function RichTextEditor() {
  const editorRef = useRef(null);
  const { media, setMedia } = useMedia();
  const handleCommand = (command) => {
    document.execCommand(command, false, null);
  };
  const updateContent = () => {
    if (editorRef.current) {
      setMedia({
        ...media,
        richTextContent: editorRef.current.innerHTML,
      }); // Update the state with the editor's content
    }
  };
  return (
    <div className="border rounded-md shadow-md w-full max-w-lg mx-auto">
      {/* Toolbar */}
      <div className="flex items-center gap-2 bg-gray-100 p-2 border-b">
        <button
          onClick={() => handleCommand("bold")}
          className="p-2 hover:bg-gray-200 rounded"
          title="Bold"
        >
          <strong>B</strong>
        </button>
        <button
          onClick={() => handleCommand("italic")}
          className="p-2 hover:bg-gray-200 rounded"
          title="Italic"
        >
          <em>I</em>
        </button>
        <button
          onClick={() => handleCommand("underline")}
          className="p-2 hover:bg-gray-200 rounded"
          title="Underline"
        >
          <u>U</u>
        </button>
        <button
          onClick={() => handleCommand("strikeThrough")}
          className="p-2 hover:bg-gray-200 rounded"
          title="Strikethrough"
        >
          <strike>S</strike>
        </button>
        <button
          onClick={() => handleCommand("insertUnorderedList")}
          className="p-2 hover:bg-gray-200 rounded"
          title="Bullet List"
        >
          •
        </button>
        <button
          onClick={() => handleCommand("insertOrderedList")}
          className="p-2 hover:bg-gray-200 rounded"
          title="Numbered List"
        >
          1.
        </button>
      </div>

      {/* Content Area */}
      <div
        ref={editorRef}
        contentEditable="true"
        className="p-4 h-[150px] bg-white outline-none overflow-y-auto placeholder-gray-400"
        placeholder="What's on your mind?"
        onInput={updateContent}
      />

      {/* Log Button */}
    </div>
  );
}
