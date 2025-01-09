import VideoPlayer from "@/app/(routes)/watchvideo/_components/VideoPlayer";
import CommentContainer from "./CommentContainer";
import Comments from "./Comments";
import PostActions from "./PostActions";
import PostAuthor from "./PostAuthor";
import PostImages from "./PostImages";
import PostText from "./PostText";
import PostThreeDots from "./PostThreeDots";

export default function PostItem({
  mode,
  user,
  time,
  htmlContent,
  images,
  audience,
}) {
  return (
    <div className="shadow-xl bg-boxColor relative p-2 mt-2 border post-item">
      <PostThreeDots />
      <PostAuthor audience={audience} time={time} user={user} />
      {htmlContent && <PostText htmlContent={htmlContent} />}

      {mode == "video" ? <VideoPlayer /> : images.length > 0 && <PostImages />}
      <hr className="mt-2 mb-2" />
      <PostActions />
      {/* comment hidden  */}
      <CommentContainer>
        <img
          className="w-[40px] h-[40px] rounded-full object-cover"
          src="https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
        <input
          type="text"
          placeholder="Write a comment..."
          className="bg-bgColor py-2 px-2 rounded-sm focus:border-black w-[80%] border outline-none"
        />
        <button className="btn">Send</button>
      </CommentContainer>
      {/* comments  */}
      <Comments />
    </div>
  );
}
