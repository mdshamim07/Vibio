import AuthFooter from "../_components/AuthFooter";
import AuthPageTitle from "../_components/AuthPageTitle";
import SignupForm from "./_components/SignupForm";

export default function SignupPage() {
  return (
    <div className="bg-white mt-2 p-8 rounded-lg shadow-lg max-w-md w-full">
      <div id="create-account-section">
        <AuthPageTitle title="Create a new account">
          Easy to join, fun to explore.
        </AuthPageTitle>
        <SignupForm />
        <AuthFooter mode="signup" />
      </div>
    </div>
  );
}
