import VideoPlayer from "@/app/(routes)/watchvideo/_components/VideoPlayer";
import CommentContainer from "./CommentContainer";
import Comments from "./Comments";
import PostActions from "./PostActions";
import PostAuthor from "./PostAuthor";
import PostImages from "./PostImages";
import PostText from "./PostText";
import PostThreeDots from "./PostThreeDots";
import Image from "next/image";
import profilePic from "@/assets/avatar/avatar.png";
export default function PostItem({
  mode,
  user,
  time,
  htmlContent,
  images,
  audience,
  postUser,
  postId,
}) {
  return (
    <div className="shadow-xl bg-boxColor relative p-2 mt-2 border post-item">
      <PostThreeDots />
      <PostAuthor audience={audience} time={time} user={postUser} />
      {htmlContent && <PostText htmlContent={htmlContent} />}

      {mode == "video" ? (
        <VideoPlayer />
      ) : (
        images.length > 0 && <PostImages images={images} />
      )}
      <hr className="mt-2 mb-2" />
      <PostActions postId={postId} />
      {/* comment hidden  */}
      <CommentContainer postId={postId}>
        <Image
          width={40}
          height={40}
          className="w-[40px] h-[40px] rounded-full object-cover"
          src={user?.avatar ? user?.avatar : profilePic}
          alt="profile pic"
        />
      </CommentContainer>
      {/* comments  */}
      <Comments postId={postId} />
    </div>
  );
}
