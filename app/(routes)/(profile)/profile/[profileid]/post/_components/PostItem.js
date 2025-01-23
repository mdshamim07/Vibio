import VideoPlayer from "@/app/(routes)/watchvideo/_components/VideoPlayer";
import CommentContainer from "./CommentContainer";
import Comments from "./Comments";
import PostActions from "./PostActions";
import PostAuthor from "./PostAuthor";
import PostImages from "./PostImages";
import PostText from "./PostText";
import Image from "next/image";
import profilePic from "@/assets/avatar/avatar.png";
import { getUser } from "@/actions";

export default async function PostItem({
  mode,
  time,
  htmlContent,
  images,
  audience,
  postUser,
  postUserId,
  postId,
}) {
  const loggedUser = await getUser();
  return (
    <div className="shadow-xl bg-white relative p-2 mt-2 border post-item">
      <PostAuthor
        postId={postId}
        isSameUser={loggedUser?._id === postUser?._id ? true : false}
        audience={audience}
        time={time}
        user={postUser}
      />
      {htmlContent && <PostText htmlContent={htmlContent} />}

      {mode == "video" ? (
        <VideoPlayer />
      ) : (
        images.length > 0 && <PostImages images={images} />
      )}
      <hr className="mt-2 mb-2" />
      <PostActions postId={postId} postUserId={postUserId} />
      {/* comment hidden  */}
      <CommentContainer postId={postId}>
        <Image
          width={40}
          height={40}
          className="w-[40px] h-[40px] rounded-full object-cover"
          src={loggedUser?.avatar ? loggedUser?.avatar : profilePic}
          alt="profile pic"
        />
      </CommentContainer>
      {/* comments  */}
      <Comments postId={postId} />
    </div>
  );
}
