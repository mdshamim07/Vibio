"use client";

import { useState } from "react";

export default function BioInputField({ bio }) {
  const [isEdit, setIsEdit] = useState(false);
  const [value, setValue] = useState(bio ? bio : "");
  let isSaveButton = false;
  if (value.length === 0 || isEdit === true) {
    isSaveButton = true;
  }

  return (
    <div>
      <h3 className="font-semibold text-lg">Bio</h3>

      <p className="text-gray-600 leading-relaxed">
        {isEdit || value.length === 0 ? (
          <textarea
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Write something about yourself..."
            className="w-full md:w-1/2 outline-none border variable-btn bg-boxColor"
            rows={4}
          />
        ) : (
          <span>{value}</span>
        )}
      </p>

      {isEdit || value.length === 0 ? (
        <button
          className="mt-2 variable-btn bg-secondaryBg hover:bg-[#d6d9dd]"
          onClick={() => setIsEdit(false)}
        >
          Save
        </button>
      ) : (
        <svg
          onClick={() => setIsEdit(true)}
          xmlns="http://www.w3.org/2000/svg"
          width={20}
          height={20}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="cursor-pointer lucide lucide-file-pen-line"
        >
          <path d="m18 5-2.414-2.414A2 2 0 0 0 14.172 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2" />
          <path d="M21.378 12.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z" />
          <path d="M8 18h1" />
        </svg>
      )}
    </div>
  );
}
