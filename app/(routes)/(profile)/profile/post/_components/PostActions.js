import CommentButton from "./CommentButton";
import LikeButton from "./LikeButton";
import ShareButton from "./ShareButton";

export default function PostActions() {
  return (
    <div className="flex justify-between items-center">
      <LikeButton />
      <CommentButton />
      <ShareButton />
    </div>
  );
}
