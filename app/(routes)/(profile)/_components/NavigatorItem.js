import Link from "next/link";

export default function NavigatorItem({ href, children }) {
  return (
    <Link href={href} className="text-primary font-semibold hover:underline">
      {children}
    </Link>
  );
}
