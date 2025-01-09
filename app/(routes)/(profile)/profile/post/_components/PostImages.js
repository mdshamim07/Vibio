import Image from "next/image";

export default function PostImages({ images }) {
  return (
    <div>
      <Image
        width={1260}
        height={750}
        className="w-full"
        src={images[0]}
        alt="post-image"
      />
    </div>
  );
}
