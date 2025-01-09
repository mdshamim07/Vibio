import PostItem from "@/app/(routes)/(profile)/profile/post/_components/PostItem";
import Stories from "./Stories";
import WhatsMindInput from "./WhatsMindInput";
import { getUser } from "@/actions";

export default async function MainContent() {
  const user = await getUser();
  return (
    <div className="middle col-span-12 lg:col-span-5">
      <Stories />
      <WhatsMindInput avatar={user?.avatar} />
      <h2 className="text-xl font-medium">Recent Posts</h2>
      <div className="pb-4">
        {/* <PostItem /> */}
      </div>
    </div>
  );
}
