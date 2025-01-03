"use server";
export default async function uploadImage(formData) {
  const apiKey = process.env.PHOTO_UPLOAD_API; // Replace with your actual API key
  const url = `https://api.imgbb.com/1/upload?key=${apiKey}`;

  try {
    const response = await fetch(url, {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    if (data.success) {
      console.log("Image URL:", data.data.url); // Log the image URL
      return data.data.url; // Return the image URL
    } else {
      console.error("Upload failed:", data.error.message);
    }
  } catch (error) {
    console.error("Error:", error);
  }
}
