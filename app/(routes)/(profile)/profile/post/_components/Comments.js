import getCommentByPostId from "@/queries/getCommentByPostId";
import CommentItem from "./CommentItem";

export default async function Comments({ postId }) {
  const comments = await getCommentByPostId(postId);
  return (
    <>
      <div className={`${comments.length > 0 && "flex flex-col gap-4 mt-4"}`}>
        {comments.map((comment) => (
          <CommentItem
            avatar={comment?.user?.avatar}
            name={`${comment?.user?.firstName} ${comment?.user?.lastName}`}
            key={comment?._id}
            title={comment?.title}
            time={comment?.createdAt}
          />
        ))}
      </div>
    </>
  );
}
