export default function PostText({ htmlContent }) {
  return (
    <div className="mb-2" dangerouslySetInnerHTML={{ __html: htmlContent }} />
  );
}
