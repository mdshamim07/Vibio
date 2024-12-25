"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavigatorItem({ href, children }) {
  const pathname = usePathname();
  const isActive = pathname === href;
  return (
    <Link
      href={href}
      className={`${isActive && "text-primary"} font-semibold hover:underline`}
    >
      {children}
    </Link>
  );
}
