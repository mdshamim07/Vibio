"use client";
import { useContext, useState } from "react";
import { CommentContext } from "../context";

export default function CommentProvider({ children }) {
  const [commentSection, setCommentSection] = useState({});
  const toggleCommentSection = (postId) => {
    setCommentSection((prev) => ({
      ...prev,
      [postId]: !prev[postId],
    }));
  };
  return (
    <CommentContext.Provider value={{ commentSection, toggleCommentSection }}>
      {children}
    </CommentContext.Provider>
  );
}

export const useCommentContext = () => useContext(CommentContext);
