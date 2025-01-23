"use client";

import Image from "next/image";
import { useState } from "react";

export default function PhotoUploadOption() {
  const [images, setImages] = useState([]);

  function handleImageChange(e) {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setImages((prevImages) => [...prevImages, reader.result]);
      };
      reader.readAsDataURL(file); // Start reading the file as a data URL
    } else {
      console.log("No file selected or something went wrong");
    }
  }

  return (
  
  );
}
