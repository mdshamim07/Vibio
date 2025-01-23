"use client";

import { updateProfileInfo } from "@/actions/profileActions";
import { useState } from "react";
import CommonErrorMessage from "../../(auth)/_components/CommonErrorMessage";

export default function AboutSection({ children, bio, userId, loggedUser }) {
  const [edit, setEdit] = useState({
    isActive: false,
    text: bio,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  async function handleSaveBio() {
    setLoading(true);
    try {
      const response = await updateProfileInfo("bio", edit?.text);
      if (response.ok) {
        setEdit({
          ...edit,
          isActive: false,
          text: "",
        });
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }
  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-4">
      <h2 className="text-lg font-semibold mb-2">Intro</h2>
      {error && <CommonErrorMessage>{error}</CommonErrorMessage>}
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
        {loggedUser === userId && (
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
                  text: bio,
                });
              }
            }}
            className="variable-btn bg-secondaryBg w-full  hover:bg-[#d6d9dd]"
          >
            {edit?.isActive ? "Cancel" : "Edit Bio"}
          </button>
        )}
        {edit?.isActive && (
          <button
            onClick={handleSaveBio}
            className="variable-btn bg-secondaryBg w-full  hover:bg-[#d6d9dd]"
          >
            {loading ? "Loading..." : "  Save"}
          </button>
        )}
      </div>
      {children}
    </div>
  );
}
