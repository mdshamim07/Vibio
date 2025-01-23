import PostItem from "../(profile)/profile/[profileid]/post/_components/PostItem";

export default function page() {
  return (
    <main className="video-container mx-auto max-w-[95%] lg:max-w-[60%]">
      <div className="videos mt-4 mb-4">
        <PostItem mode="video" />
      </div>
    </main>
  );
}
