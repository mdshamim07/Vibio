"use server";

import postData from "@/utils/postData";

export default async function uploadImages(images) {
  try {
    const result = await postData(process.env.PHOTO_UPLOAD, {
      images: [images],
    });

  
    

    if (result.ok) {
      return {
        ok: true,
        files: result?.files,
        message: "Images Uploaded!",
      };
    } else {
      return {
        ok: false,
        message: "Something went wrong!",
        error: true,
      };
    }
  } catch (err) {
    return {
      ok: false,
      message: err.message,
      error: true,
    };
  }
}
