import PostItem from "@/app/(routes)/(profile)/profile/[profileid]/post/_components/PostItem";
// import Stories from "./Stories";
import WhatsMindInput from "./WhatsMindInput";
import { getUser } from "@/actions";
import { getPosts } from "@/actions/postActions";

export default async function MainContent() {
  const feeds = await getPosts();
  const data = feeds?.data;
  const user = await getUser();

  return (
    <div className="middle col-span-12 lg:col-span-5">
      {/* <Stories /> */}
      <WhatsMindInput avatar={user?.avatar} />
      {data.length > 0 ? (
        <>
          <h2 className="text-xl font-medium">Recent Posts</h2>
          <div className="pb-4">
            {data.map((post) => (
              <PostItem
                postId={post?._id}
                postUserId={post?.user?._id}
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
        </>
      ) : (
        <h2 className="text-center mt-2">No Posts Found</h2>
      )}
    </div>
  );
}
