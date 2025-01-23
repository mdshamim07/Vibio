import AboutSection from "../../_components/AboutSection";
import Image from "next/image";
import profilePic from "@/assets/avatar/avatar.png";
import ProfilePostInput from "../_components/ProfilePostInput";
import getPostById from "@/queries/getPostById";
import PostItem from "./post/_components/PostItem";
import getUserById from "@/queries/getUserById";
import { redirect } from "next/navigation";
import { getUser } from "@/actions";
export default async function page({ params }) {
  const par = await params;
  const user = await getUserById(par?.profileid);

  if (user.error) {
    redirect("/not-found");
  }

  const posts = await getPostById(user?._id);
  const loggedUser = await getUser();
  return (
    <div className=" flex flex-col lg:flex-row gap-6 px-4 lg:px-16 py-6">
      {/* Left Column: About and Friends */}
      <div className="w-full lg:w-1/3">
        {/* About Section */}
        <AboutSection
          loggedUser={loggedUser?._id}
          userId={user?._id}
          bio={user?.about?.bio}
        >
          <ul className="mt-4">
            {user?.about?.work.length > 0 && (
              <li className="text-gray-600 mt-2 flex items-center gap-2">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={22}
                  height={22}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-briefcase-business"
                >
                  <path d="M12 12h.01" />
                  <path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
                  <path d="M22 13a18.15 18.15 0 0 1-20 0" />
                  <rect width={20} height={14} x={2} y={6} rx={2} />
                </svg>
                {user?.about?.work}
              </li>
            )}
            {user?.about?.education && (
              <li className="text-gray-600 mt-2 flex items-center gap-2">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-graduation-cap"
                >
                  <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" />
                  <path d="M22 10v6" />
                  <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" />
                </svg>
                {user?.about?.education}
              </li>
            )}
            {user?.about?.location && (
              <li className="text-gray-600 mt-2 flex items-center gap-2">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-book-user"
                >
                  <path d="M15 13a3 3 0 1 0-6 0" />
                  <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" />
                  <circle cx={12} cy={8} r={2} />
                </svg>
                Lives In {user?.about?.location}
              </li>
            )}
          </ul>
        </AboutSection>
        {/* Friends Section */}
        <div className="bg-white rounded-lg shadow-md p-4">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold mb-2">Friends</h2>
            <a
              href="friends.html"
              className="text-sm text-blue-500 cursor-pointer"
            >
              See All
            </a>
          </div>
          <p className="text-gray-600 text-sm text-center">No Friends Found!</p>
          <div className="grid grid-cols-3 gap-2">
            <div>
              <img
                src="https://pics.craiyon.com/2023-11-26/oMNPpACzTtO5OVERUZwh3Q.webp"
                alt="Friend 1"
                className="rounded-lg"
              />
              <p className="text-xs text-center mt-1">Friend 1</p>
            </div>
            <div>
              <img
                src="https://pics.craiyon.com/2023-11-26/oMNPpACzTtO5OVERUZwh3Q.webp"
                alt="Friend 2"
                className="rounded-lg"
              />
              <p className="text-xs text-center mt-1">Friend 2</p>
            </div>
            <div>
              <img
                src="https://pics.craiyon.com/2023-11-26/oMNPpACzTtO5OVERUZwh3Q.webp"
                alt="Friend 3"
                className="rounded-lg"
              />
              <p className="text-xs text-center mt-1">Friend 3</p>
            </div>
          </div>
        </div>
      </div>
      {/* Right Column: Posts */}
      <div className="w-full lg:w-2/3">
        {posts.length === 0 ? (
          <div className="bg-white rounded-lg shadow-md p-4 mb-4">
            {/* Create Post */}
            <div className="flex items-center gap-4">
              <Image
                width={48}
                height={48}
                src={user?.avatar ? user?.avatar : profilePic}
                alt="Profile Picture"
                className="rounded-full w-12 h-12 object-cover"
              />
              <ProfilePostInput firstName={user?.firstName} />
            </div>
          </div>
        ) : (
          posts.map((post) => (
            <PostItem
              postId={post?._id}
              audience={post?.audience}
              htmlContent={post?.htmlContent}
              time={post?.createdAt}
              postUser={post?.user}
              user={user?.user}
              images={post?.postImages}
              key={post?._id}
            />
          ))
        )}
        {/* Example Post */}
      </div>
    </div>
  );
}
