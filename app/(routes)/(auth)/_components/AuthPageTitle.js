export default function AuthPageTitle({ title, children }) {
  return (
    <>
      <h1 className="text-2xl font-bold text-center mb-2">{title}</h1>
      <p className="text-center text-gray-600 mb-2">{children}</p>
    </>
  );
}
