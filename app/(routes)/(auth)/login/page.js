import InputField from "@/app/components/InputField";

import AuthPageTitle from "../_components/AuthPageTitle";
import Button from "@/app/components/Button";
import AuthFooter from "../_components/AuthFooter";
import Link from "next/link";

export default function loginPage() {
  return (
    <div className="bg-white  mt-2 p-8 rounded-lg shadow-lg max-w-md w-full">
      <div id="create-account-section">
        <AuthPageTitle title="Welcome Back">
          Login to your account to continue.
        </AuthPageTitle>
        <form method="POST">
          <div className="mb-4">
            <InputField
              label="Email Or Phone Number"
              placeholder="Email Or Phone Number"
              type="email"
              error={false}
              name="mobileOrEmail"
            />
          </div>
          <div className="mb-4">
            {" "}
            <InputField
              label="Password"
              placeholder="Password"
              type="password"
              error={false}
              name="password"
            />
          </div>

          <Button loading={false}>Login</Button>
        </form>
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
