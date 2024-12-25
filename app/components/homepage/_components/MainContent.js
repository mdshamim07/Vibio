import PostItem from "@/app/(routes)/(profile)/profile/post/_components/PostItem";
import Stories from "./Stories";
import WhatsMindInput from "./WhatsMindInput";

export default function MainContent() {
  return (
    <div className="middle col-span-12 lg:col-span-5">
      <Stories />
      <WhatsMindInput />
      <h2 className="text-xl font-medium">Recent Posts</h2>
      <div className="pb-4">
        <PostItem />
      </div>
    </div>
  );
}
