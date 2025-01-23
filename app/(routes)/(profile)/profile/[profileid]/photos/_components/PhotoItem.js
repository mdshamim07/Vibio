import Image from "next/image";
import Link from "next/link";

export default function PhotoItem({ photos, id }) {
  return (
    <Link
      href={`/feed/${id}`}
      className="relative overflow-hidden rounded-lg shadow-md"
    >
      {photos.map((photo, index) => (
        <Image
          key={index}
          width={1260}
          height={750}
          src={photo}
          alt={`photo ${index}`}
          className="w-full h-[300px] object-cover hover:scale-110 transition-transform"
        />
      ))}
    </Link>
  );
}
