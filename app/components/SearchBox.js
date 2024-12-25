export default function SearchBox() {
  return (
    <div className="hidden sm:block sm:w-[80%] md:w-[50%] relative">
      <input
        type="text"
        placeholder="Search"
        className="w-full focus:border-black outline-none py-2 px-4 rounded-[30px] border"
      />
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
        className="absolute right-2 top-3 lucide lucide-search"
      >
        <circle cx={11} cy={11} r={8} />
        <path d="m21 21-4.3-4.3" />
      </svg>
    </div>
  );
}
