import { getPosts } from "@/actions/postActions";
import PostItem from "../(profile)/profile/[profileid]/post/_components/PostItem";
import { getUser } from "@/actions";

export default async function page() {
  const feeds = await getPosts();
  const data = feeds?.data;
  const user = await getUser();
  return (
    <main className="container mx-auto flex justify-center items-center">
      <div className="pb-4 w-full lg:w-[50%]">
        {data &&
          data.map((post) => (
            <PostItem
              postUserId={post?.user}
              postId={post?._id}
              audience={post?.audience}
              htmlContent={post?.htmlContent}
              time={post?.createdAt}
              postUser={post?.user}
              user={user?.user}
              images={post?.postImages}
              key={post?._id}
            />
          ))}
      </div>
    </main>
  );
}
