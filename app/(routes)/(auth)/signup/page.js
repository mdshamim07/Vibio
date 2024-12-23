import InputField from "@/app/components/InputField";

import DateOfBirthOptions from "./_components/DateOfBirthOptions";
import AuthPageTitle from "../_components/AuthPageTitle";
import Button from "@/app/components/Button";
import AuthFooter from "../_components/AuthFooter";
import Gender from "./_components/Gender";

export default function singupPage() {
  return (
    <div className="bg-white mt-2 p-8 rounded-lg shadow-lg max-w-md w-full">
      <div id="create-account-section">
        <AuthPageTitle title="Create a new account">
          Easy to join, fun to explore.
        </AuthPageTitle>
        <form method="POST">
          <div className="grid grid-cols-2 gap-4 mb-4">
            <InputField
              label="First Name"
              placeholder="First Name"
              type="text"
              error={false}
              name="fName"
            />
            <InputField
              label="Last Name"
              placeholder="Last Name"
              type="text"
              error={false}
              name="lName"
            />
          </div>

          <DateOfBirthOptions />
          <Gender />
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
              label="New Password"
              placeholder="New Password"
              type="password"
              error={false}
              name="password"
              mode="password"
            />
          </div>

          <Button loading={false}>Sign Up</Button>
        </form>
        <AuthFooter mode="signup" />
      </div>
    </div>
  );
}
