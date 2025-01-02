
import AuthPageTitle from "../_components/AuthPageTitle";

import AuthFooter from "../_components/AuthFooter";
import Link from "next/link";
import LoginForm from "./_components/LoginForm";

export default function loginPage() {
  return (
    <div className="bg-white  mt-2 p-8 rounded-lg shadow-lg max-w-md w-full">
      <div id="create-account-section">
        <AuthPageTitle title="Welcome Back">
          Login to your account to continue.
        </AuthPageTitle>
        <LoginForm />
        <div className="flex items-center justify-between mt-2 mb-6">
          <Link
            href="/resetpassword"
            className="text-sm text-primary hover:underline"
          >
            Forgot password?
          </Link>
        </div>
        <AuthFooter mode="login" />
      </div>
    </div>
  );
}
