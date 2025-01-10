import getPostById from "@/queries/getPostById";
import PostItem from "./_components/PostItem";
import { getUser } from "@/actions";

export default async function page() {
  const user = await getUser();
  const posts = await getPostById(user?._id);
  return (
    <div className="container mx-auto flex justify-center items-center">
      <div className="pb-4 w-full lg:w-[50%]">
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
