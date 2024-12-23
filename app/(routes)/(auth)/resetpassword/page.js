import Link from "next/link";
import ResetForm from "./_components/ResetForm";

export default function page() {
  return (
    <div className="bg-white relative p-8 rounded-lg shadow-lg max-w-sm w-full">
      <ResetForm />
      {/* Back to Login */}
      <div className="text-center mt-6">
        <Link href="/login" className="text-sm text-primary hover:underline">
          Back to Login
        </Link>
      </div>
    </div>
  );
}
