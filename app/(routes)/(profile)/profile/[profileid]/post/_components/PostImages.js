import Image from "next/image";

export default function PostImages({ images }) {
  return (
    <div
      className={`grid gap-2 ${
        images.length > 1 ? "grid-cols-2" : "grid-cols-1"
      }`}
    >
      {images.length > 0 &&
        images.map((img, index) => (
          <Image
            key={index}
            width={1260}
            height={750}
            className="w-full"
            src={img}
            alt={`Post image ${index + 1}`}
          />
        ))}
    </div>
  );
}
