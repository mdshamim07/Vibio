import { getUser } from "@/actions";
import { getPosts } from "@/actions/postActions";
import PostItem from "@/app/(routes)/(profile)/profile/[profileid]/post/_components/PostItem";
import WhatsMindInput from "./WhatsMindInput";

export default async function MainContent() {
  const feeds = await getPosts();
  const data = feeds?.data;
  const user = await getUser();
  return (
    <div className="middle col-span-12 lg:col-span-5">
      <WhatsMindInput avatar={user?.avatar} />
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
  );
}
