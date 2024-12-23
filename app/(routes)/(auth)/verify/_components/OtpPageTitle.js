export default function OtpPageTitle({ title, children }) {
  return (
    <>
      <h1 className="text-2xl font-bold text-center mb-4">{title}</h1>
      <p className="text-center text-gray-600 mb-6">{children}</p>
    </>
  );
}
