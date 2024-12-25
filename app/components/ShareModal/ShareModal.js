import CloseModalButton from "../NotificationModal/CloseModalButton";

export default function ShareModal() {
  return (
    <div className="w-full flex justify-center items-center h-screen z-50 fixed left-0 top-0 bg-[rgba(0,0,0,0.5)]">
      <div className="bg-white overflow-y-auto rounded-lg w-[90%] h-[70vh] sm:w-[500px]">
        {/* Modal Header */}
        <div className="flex justify-between items-center border-b p-4">
          <h2 className="text-lg font-semibold">Share Post</h2>
          <CloseModalButton mode="shareModal" />
        </div>
        {/* Modal Body */}
        <div className="p-4">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-[50px] h-[50px]">
              <img
                className="w-full h-full rounded-full object-cover"
                src="https://scontent.fdac138-2.fna.fbcdn.net/v/t39.30808-6/461136347_122106364766528083_4458622693417908386_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeHhDJcUZm7yJ-xQMP1icyjQa1rng-gwNi9rWueD6DA2L0_UjcK64_2YDr7_6z8HfXwiSu669os-jNj_dRezX0CQ&_nc_ohc=4BSiNOqAsIkQ7kNvgGZydiI&_nc_zt=23&_nc_ht=scontent.fdac138-2.fna&_nc_gid=A5GnbDLLJTJaBe4U9a6wMN5&oh=00_AYAYAu1b3vM-GVT3k3-HCBAIhvelLM4kjlSv6Nk5xehW1g&oe=6765B210"
                alt="User Profile"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-medium">Md Shamim</span>
              <select className="text-left">
                <option value="public">Public</option>
                <option value="private">Private</option>
                <option value="friends">Friends</option>
              </select>
            </div>
          </div>
          <textarea
            className="w-full border rounded-md p-2 focus:outline-none focus:ring focus:ring-gray-200"
            rows={4}
            placeholder="What do you want to share?"
            defaultValue={""}
          />
        </div>
        <div className="border-t p-4 flex justify-end">
          <button className="bg-primary text-white px-4 py-2 rounded-md hover:bg-blue-700">
            Share
          </button>
        </div>
        <div className="flex justify-between items-center border-b px-4 pb-2">
          <h2 className="text-lg font-semibold">Share to</h2>
        </div>
        <div className="px-4 mt-2 flex items-center gap-3 pb-2">
          <div className="w-[50px] bg-gray-300 cursor-pointer h-[50px] rounded-full flex justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20px"
              height="20px"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-facebook"
            >
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>
          </div>
          <div className="w-[50px] bg-gray-300 cursor-pointer h-[50px] rounded-full flex justify-center items-center">
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
              className="lucide lucide-instagram"
            >
              <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
            </svg>
          </div>
        </div>
        {/* Modal Footer */}
      </div>
    </div>
  );
}
