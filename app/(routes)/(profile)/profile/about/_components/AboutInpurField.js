"use client";

import { updateProfileInfo } from "@/actions/profileActions";
import CommonErrorMessage from "@/app/(routes)/(auth)/_components/CommonErrorMessage";
import { useState } from "react";

export default function AboutInpurField({
  inputValue,
  placeHolder,
  title,
  mode,
  typeOfChanges,
}) {
  const [isEdit, setIsEdit] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState(inputValue ? inputValue : "");
  let isSaveButton = false;
  if (inputValue.length === 0 || isEdit === true) {
    isSaveButton = true;
  }
  async function handleUpdateProfile(e) {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      const response = await updateProfileInfo(typeOfChanges, value);
      if (response?.ok) {
        setError(null);
        setIsEdit(false);
      } else {
        setError(response.message);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }
  return (
    <form onSubmit={handleUpdateProfile}>
      <h3 className="font-semibold text-lg">{title}</h3>
      {error && <CommonErrorMessage>{error}</CommonErrorMessage>}
      <p className="text-gray-600 flex items-center gap-2">
        {isEdit || inputValue.length === 0 ? (
          <>
            {mode === "bio" ? (
              <textarea
                value={value}
                onChange={(e) => setValue(e.target.value)}
                type="text"
                placeholder={placeHolder}
                className={`w-full md:w-1/2 outline-none border variable-btn ${
                  loading ? "opacity-50" : "opacity-100"
                } bg-boxColor`}
              ></textarea>
            ) : (
              <input
                value={value}
                onChange={(e) => setValue(e.target.value)}
                type="text"
                placeholder={placeHolder}
                className={`w-full md:w-1/2 outline-none border variable-btn ${
                  loading ? "opacity-50" : "opacity-100"
                } bg-boxColor`}
              />
            )}
          </>
        ) : (
          <span> {inputValue}</span>
        )}
        {isEdit || (
          <>
            {inputValue.length > 0 && (
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
          </>
        )}
      </p>
      {isSaveButton && (
        <button className="mt-2 variable-btn bg-secondaryBg hover:bg-[#d6d9dd]">
          {loading ? (
            <div className="flex items-center gap-2">
              <div
                className="w-[15px] h-[15px] border-2 border-primary border-t-transparent rounded-full animate-spin"
                aria-label="Loading"
              ></div>
              <p>Loading...</p>
            </div>
          ) : (
            "Save Changes"
          )}
        </button>
      )}
    </form>
  );
}
