import Link from "next/link";

export default function NotFound() {
  return (
    <div className="text-center flex justify-center items-center flex-col min-h-[80vh]">
      {/* 404 Heading */}
      <h1 className="text-9xl font-extrabold text-primary">404</h1>
      <h2 className="text-2xl font-semibold text-gray-800 mt-4">
        Oops! Page Not Found
      </h2>
      <p className="text-gray-600 mt-2">
        The page you’re looking for doesn’t exist. It might have been moved or
        deleted.
      </p>
      {/* Back to Homepage Button */}
      <Link
        href="/"
        className="inline-block bg-primary text-white px-6 py-2 rounded-md text-lg font-medium mt-6 hover:bg-hover transition"
      >
        Go Back Home
      </Link>
      {/* Illustration Placeholder */}
    </div>
  );
}
