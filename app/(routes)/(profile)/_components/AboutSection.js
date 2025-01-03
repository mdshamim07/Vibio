"use client";

import { useState } from "react";

export default function AboutSection({ children, bio }) {
  const [edit, setEdit] = useState({
    isActive: false,
    text: bio,
  });
  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-4">
      <h2 className="text-lg font-semibold mb-2">Intro</h2>
      {edit?.isActive ? (
        <textarea
          placeholder="Write your bio..."
          className="w-full outline-none border p-2"
          rows={4}
          value={edit?.text}
          onChange={(e) =>
            setEdit({
              ...edit,
              text: e.target.value,
            })
          }
        >
          {edit?.text}
        </textarea>
      ) : (
        <p className="text-sm text-gray-600 text-center px-6">{bio}</p>
      )}

      <div
        className={`mt-2 flex justify-end ${
          edit?.isActive ? "w-[50%]" : "w-full"
        } gap-2`}
      >
        <button
          onClick={() => {
            if (edit?.isActive) {
              setEdit({
                ...edit,
                isActive: false,
                text: bio,
              });
            } else {
              setEdit({
                ...edit,
                isActive: true,
              });
            }
          }}
          className="variable-btn bg-secondaryBg w-full  hover:bg-[#d6d9dd]"
        >
          {edit?.isActive ? "Cancel" : "Edit Bio"}
        </button>
        {edit?.isActive && (
          <button className="variable-btn bg-secondaryBg w-full  hover:bg-[#d6d9dd]">
            Save
          </button>
        )}
      </div>
      {children}
    </div>
  );
}
