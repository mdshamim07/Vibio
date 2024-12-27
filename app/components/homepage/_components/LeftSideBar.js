import Link from "next/link";
export const sidebarContents = [
  {
    id: 1,
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={16}
        height={16}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-layout-dashboard"
      >
        <rect width={7} height={9} x={3} y={3} rx={1} />
        <rect width={7} height={5} x={14} y={3} rx={1} />
        <rect width={7} height={9} x={14} y={12} rx={1} />
        <rect width={7} height={5} x={3} y={16} rx={1} />
      </svg>
    ),
    title: "Feed",
    link: "/feed",
  },
  {
    id: 2,
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={16}
        height={16}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-users"
      >
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx={9} cy={7} r={4} />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "Friends",
    link: "/friends",
  },
  {
    id: 3,
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={16}
        height={16}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-tv-minimal-play"
      >
        <path d="M10 7.75a.75.75 0 0 1 1.142-.638l3.664 2.249a.75.75 0 0 1 0 1.278l-3.664 2.25a.75.75 0 0 1-1.142-.64z" />
        <path d="M7 21h10" />
        <rect width={20} height={14} x={2} y={3} rx={2} />
      </svg>
    ),
    link: "/watchvideo",
    title: "Watch Videos",
  },
];
export default function LeftSideBar() {
  return (
    <div className="left col-span-3 hidden lg:block">
      <ul>
        {sidebarContents.map((item) => (
          <li key={item?.id} className="mt-2">
            <Link
              href={item?.link}
              className="flex items-center gap-4 text-gray-600 cursor-pointer"
            >
              {item?.svg}
              <span>{item?.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
