import { getPostById } from "@/actions/postActions";
import PostItem from "../../(profile)/profile/post/_components/PostItem";
import { getUser } from "@/actions";

export default async function page({ params }) {
  const par = await params;
  const postid = par.postid;
  const post = await getPostById(postid);
  const user = await getUser();
  return (
    <main className="container mx-auto flex justify-center items-center">
      <div className="pb-4 w-full lg:w-[50%]">
        {post ? (
          <PostItem
            postId={post?._id}
            audience={post?.audience}
            htmlContent={post?.htmlContent}
            time={post?.createdAt}
            postUser={post?.user}
            user={user?.user}
            images={post?.postImages}
          />
        ) : (
          <h1 className="text-center mt-4">No Post Found!</h1>
        )}
      </div>
    </main>
  );
}
