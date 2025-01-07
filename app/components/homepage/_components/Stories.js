import getStories from "@/queries/getStories";
import NewStory from "./NewStory";
import StoryItem from "./StoryItem";
import Image from "next/image";
import profilePic from "@/assets/avatar/avatar.png";
import { getUser } from "@/actions";
export default async function Stories() {
  const stories = await getStories();
  const user = await getUser();
  return (
    <>
      <h2 className="text-xl font-medium">Stories</h2>
      <div className="flex">
        {/* Story Items Wrapper */}
        <div className="flex gap-4 p-2 overflow-x-hidden">
          <NewStory>
            <Image
              width={1260}
              height={750}
              className="absolute top-0 left-0 w-full h-full object-cover"
              src={user?.avatar ? user?.avatar : profilePic} // Replace with the user's profile or default image URL
              alt="profile-pic"
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
          {stories.length > 0 &&
            stories.map((story, index) => (
              <StoryItem storyId={story?._id} key={index}>
                <div
                  className="absolute flex justify-center items-center px-2 text-white top-0 left-0 w-full h-full object-cover "
                  style={{ backgroundColor: story?.background }}
                >
                  <div
                    className="text-center"
                    dangerouslySetInnerHTML={{
                      __html: story?.htmlContent,
                    }}
                  />
                </div>

                {/* User Info */}
                <div className="absolute bottom-2 left-2 flex items-center gap-2">
                  <Image
                    width={40}
                    height={40}
                    className="w-[40px] h-[40px] rounded-full border-2 border-white"
                    src={
                      story?.user?.avatar.length > 0
                        ? story?.user?.avatar
                        : profilePic
                    }
                    alt="profile-pic"
                  />
                  <p className="text-white text-sm font-semibold">
                    {story?.user?.firstName}
                  </p>
                </div>
              </StoryItem>
            ))}
        </div>
      </div>
    </>
  );
}
