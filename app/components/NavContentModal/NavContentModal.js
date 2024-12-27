export default function NavContentModal() {
  return (
    <div className="nav-actions bg-white shadow-xl w-[300px] p-6 right-2 fixed top-[70px]">
      <ul>
        <li className="hover:bg-[#e0e0e0] p-2 cursor-pointer">
          <a
            href="profile/profile.html"
            className="flex items-center gap-2 w-full"
          >
            <img
              className="w-[40px] h-[40px] rounded-full"
              src="https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
            <h2 className="text-xl font-medium">Md Shamim</h2>
          </a>
        </li>
        <hr />
      </ul>
      <ul className="lg:hidden">
        <li className="mt-2 hover:bg-[#e0e0e0] p-[2px]">
          <a
            href="pages/feed.html"
            className="flex items-center gap-4 text-gray-600 cursor-pointer"
          >
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
            <span>Feed</span>
          </a>
        </li>
        <li className="mt-2 hover:bg-[#e0e0e0] p-[2px]">
          <a
            className="flex items-center gap-4 text-gray-600 cursor-pointer"
            href="pages/watch-video.html"
          >
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
            <span>Friends</span>
          </a>
        </li>
        <li className="mt-2 hover:bg-[#e0e0e0] p-[2px]">
          <a
            className="flex items-center gap-4 text-gray-600 cursor-pointer"
            href="pages/watch-video.html"
          >
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
            <span>Watch Videos</span>
          </a>
        </li>
      </ul>
      <button className="flex w-full p-[2px] items-center gap-3 mt-2 hover:bg-[#e0e0e0]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={20}
          height={20}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-log-out"
        >
          <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
          <polyline points="16 17 21 12 16 7" />
          <line x1={21} x2={9} y1={12} y2={12} />
        </svg>
        Log Out
      </button>
    </div>
  );
}
