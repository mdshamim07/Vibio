export default function StoryNextButton() {
  return (
    <div className="w-[50px] bg-secondaryBg flex justify-center items-center cursor-pointer h-[50px] rounded-full absolute right-5 top-[50%]">
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
          className="lucide lucide-chevron-right"
        >
          <path d="m9 18 6-6-6-6" />
        </svg>
      </div>
    
  );
}
