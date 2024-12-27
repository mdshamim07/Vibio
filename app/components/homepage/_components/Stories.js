import NewStory from "./NewStory";
import StoryItem from "./StoryItem";

export const stories = ["", "", "", "", "", "", ""];
export default function Stories() {
  return (
    <>
      <h2 className="text-xl font-medium">Stories</h2>
      <div className="flex justify-center">
        {/* Story Items Wrapper */}
        <div className="flex gap-4 p-2 overflow-x-hidden">
          <NewStory>
            <img
              className="absolute top-0 left-0 w-full h-full object-cover"
              src="https://images.pexels.com/photos/29734216/pexels-photo-29734216/free-photo-of-cozy-winter-embrace-of-mother-and-child.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" // Replace with the user's profile or default image URL
              alt="User background"
            />

            {/* Overlay */}
            <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40"></div>

            {/* Add Button */}
            <div className="absolute top-[45%] left-[50%] transform -translate-x-[50%] -translate-y-[50%]">
              <div className="flex items-center justify-center w-10 h-10 bg-primary hover:bg-hover rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
              </div>
            </div>

            {/* Text */}
            <div className="absolute bottom-2 left-0 w-full text-center text-white font-semibold text-sm">
              Create story
            </div>
          </NewStory>
          {/* Individual Story Item */}
          {stories.map((story, index) => (
            <StoryItem key={index}>
              <img
                className="absolute top-0 left-0 w-full h-full object-cover"
                src="https://images.pexels.com/photos/29321623/pexels-photo-29321623/free-photo-of-picturesque-street-view-of-dresden-s-historic-architecture.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
              {/* Live Badge */}
              <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                LIVE
              </div>
              {/* User Info */}
              <div className="absolute bottom-2 left-2 flex items-center gap-2">
                <img
                  className="w-[40px] h-[40px] rounded-full border-2 border-white"
                  src="https://scontent.fdac138-2.fna.fbcdn.net/v/t39.30808-1/461136347_122106364766528083_4458622693417908386_n.jpg?stp=c0.0.1533.1533a_dst-jpg_s160x160_tt6&_nc_cat=102&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=fq08-htin-gQ7kNvgGsQax2&_nc_zt=24&_nc_ht=scontent.fdac138-2.fna&_nc_gid=AFu51xhZMdpGNLBTJidRBS4&oh=00_AYCvlvd-0FLTJSwPZzSqTtvX2RfUYawgC32ieAnt_6TBOQ&oe=67533D6B"
                  alt=""
                />
                <p className="text-white text-sm font-semibold">Md Shamim</p>
              </div>
            </StoryItem>
          ))}
        </div>
      </div>
    </>
  );
}
