import getCommentByPostId from "@/queries/getCommentByPostId";
import CommentButton from "./CommentButton";
import LikeButton from "./LikeButton";
import ShareButton from "./ShareButton";
import { getLikes } from "@/actions/postActions";

export default async function PostActions({ postId }) {
  const comments = await getCommentByPostId(postId);
  const likeObject = await getLikes(postId);

  return (
    <div className="flex justify-between items-center">
      <LikeButton likeObject={likeObject} postId={postId} />
      <CommentButton comments={comments.length} />
      <ShareButton />
    </div>
  );
}
