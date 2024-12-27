import Link from "next/link";
export default function AuthFooter({ mode }) {
  return (
    <div className=" text-center text-gray-600 mt-4">
      {mode === "signup" ? (
        <>
          Already have an account?
          <Link href="/login" className="text-primary">
            Log in
          </Link>
        </>
      ) : (
        <>
          {" "}
          Don't have an account?
          <Link href="/signup" className="text-primary">
            Sign Up
          </Link>
        </>
      )}
    </div>
  );
}
