import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

// Ensure the upload directory exists
const UPLOAD_DIR = path.join(process.cwd(), "public/uploads");

async function ensureUploadDirExists() {
  try {
    await fs.mkdir(UPLOAD_DIR, { recursive: true });
  } catch (error) {
    console.error("Error creating upload directory:", error);
  }
}

// POST route to handle multiple image uploads
export async function POST(request) {
  try {
    // Ensure the upload directory exists
    await ensureUploadDirExists();

    // Parse JSON from the request body
    const body = await request.json();
    const { images } = body;

    if (!images || !Array.isArray(images) || images.length === 0) {
      return NextResponse.json(
        { error: "No images provided or invalid format" },
        { status: 400 }
      );
    }

    // Save each image to the filesystem
    const savedImages = [];
    for (const [index, image] of images.entries()) {
      // Validate base64 format
      const match = image.match(/^data:image\/(png|jpeg|jpg|gif);base64,(.+)$/);
      if (!match) {
        return NextResponse.json(
          { error: `Invalid image format at index ${index}` },
          { status: 400 }
        );
      }

      const ext = match[1];
      const base64Data = match[2];
      const fileName = `${Date.now()}-${index}.${ext}`;
      const filePath = path.join(UPLOAD_DIR, fileName);

      // Write the file to the filesystem
      await fs.writeFile(filePath, base64Data, "base64");

      // Save the file URL for the response
      savedImages.push(`/uploads/${fileName}`);
    }

    // Respond with the file URLs
    return NextResponse.json({
      message: "Images uploaded successfully",
      files: savedImages,
    });
  } catch (error) {
    console.error("Error uploading images:", error);
    return NextResponse.json(
      { error: "Failed to upload images" },
      { status: 500 }
    );
  }
}
