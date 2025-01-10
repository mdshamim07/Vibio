"use client";
import { useState } from "react";
import { MediaContext } from "../context";

export default function MediaProvider({ children }) {
  const [media, setMedia] = useState({
    postThreeDot: false,
    notificationModal: false,
    friendListModal: false,
    chatListModal: false,
    postModal: false,
    commentSection: false,
    shareModal: false,
    storyModal: false,
    richTextContent: "",
    navContent: false,
    storyRichText: "",
    postId: "",
    isAlert: false,
    postModalContent: "",
  });

  return (
    <MediaContext.Provider value={{ media, setMedia }}>
      {children}
    </MediaContext.Provider>
  );
}
