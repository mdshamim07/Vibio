import getPostById from "@/queries/getPostById";
import PostItem from "./_components/PostItem";
import { getUser } from "@/actions";
import getUserById from "@/queries/getUserById";

export default async function page({ params }) {
  const par = await params;
  const loggedUser = await getUser();
  const user = await getUserById(par?.profileid);
  const posts = await getPostById(user?._id);
  return (
    <div className="w-full  flex justify-center items-center">
      {posts.length > 0 ? (
        <div className="w-full md:w-1/2">

          <div className="pb-4">
            {posts.map((post) => (
              <PostItem
                postId={post?._id}
                audience={post?.audience}
                htmlContent={post?.htmlContent}
                time={post?.createdAt}
                postUser={post?.user}
                images={post?.postImages}
                key={post?._id}
              />
            ))}
          </div>
        </div>
      ) : (
        <h2 className="text-center mt-2">No Posts Found</h2>
      )}
    </div>
  );
}
