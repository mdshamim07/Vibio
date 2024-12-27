"use client";

import RichTextEditor from "@/app/components/RichTextEditor";
import useMedia from "@/app/hooks/useMedia";
import Link from "next/link";
import { useState } from "react";
export const storyColors = [
  {
    id: 1,
    color: "#3b82f6",
  },
  {
    id: 2,
    color: "#ec4899",
  },
  {
    id: 3,
    color: "#ef4444",
  },
  {
    id: 4,
    color: "#000000",
  },
  {
    id: 5,
    color: "#07beb8",
  },
];
export default function CreateStoryContent() {
  const [story, setStory] = useState({
    storyText: "",
    color: storyColors[4]?.color,
  });
  const { media } = useMedia();

  return (
    <>
      {/* left panel  */}
      <div className="w-full lg:w-1/3 bg-white p-6 flex flex-col">
        {/* Profile and Title */}
        <div className="flex items-center gap-4 mb-4">
          <div className="w-[50px] h-[50px]">
            <img
              className="w-full h-full rounded-full object-cover"
              src="https://pics.craiyon.com/2023-11-26/oMNPpACzTtO5OVERUZwh3Q.webp"
              alt="User Profile"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-medium">Md Shamim</span>
            <select className="text-left">
              <option value="public">Public</option>
              <option value="private">Private</option>
              <option value="friends">Friends</option>
            </select>
          </div>
        </div>
        {/* Text Input */}
        <RichTextEditor />
        {/* Background Options */}
        <div className="mb-6">
          <p className="text-sm font-medium mb-2">Backgrounds</p>
          <div className="flex space-x-2">
            {storyColors.map((storyColor) => (
              <button
                onClick={() =>
                  setStory({
                    ...story,
                    color: storyColor?.color,
                  })
                }
                style={{
                  backgroundColor: storyColor?.color,
                }}
                className={`w-8 h-8 ${
                  storyColor?.color === story?.color &&
                  "border-2 border-gray-500"
                } rounded-full  cursor-pointer`}
                key={storyColor?.id}
              />
            ))}
          </div>
        </div>
        {/* Buttons */}
        <div className="flex justify-between mt-auto">
          <Link
            href="/"
            className="px-4 py-2 bg-gray-200 text-gray-800 font-medium rounded-lg hover:bg-gray-300"
          >
            Discard
          </Link>
          <button className="px-4 py-2 bg-primary text-white font-medium rounded-lg hover:bg-hover">
            Share to Story
          </button>
        </div>
      </div>
      {/* right panel  */}
      <div className="w-full relative lg:w-2/3 bg-boxColor flex items-center justify-center">
        <p className="text-center top-2 text-white absolute lg:left-2 lg:top-2">
          Live Preview
        </p>
        <div
          style={{
            backgroundColor: story?.color,
          }}
          className="w-72 h-[500px] bg-gradient-to-b  rounded-lg flex items-center justify-center"
        >
          <p
            id="live-preview"
            className="text-white font-bold text-xl"
            dangerouslySetInnerHTML={{
              __html:
                media?.richTextContent.length > 0
                  ? media?.richTextContent
                  : "Write Something",
            }}
          ></p>
        </div>
      </div>
    </>
  );
}
