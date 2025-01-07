import Link from "next/link";

export default function StoryItem({ children, storyId }) {
  return (
    <Link
      href={`/story/${storyId}`}
      className="cursor-pointer relative w-[150px] h-[250px] border rounded-lg overflow-hidden shadow-lg flex-shrink-0"
    >
      {/* Background Image */}
      {children}
    </Link>
  );
}
