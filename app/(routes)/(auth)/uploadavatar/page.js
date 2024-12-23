import AvatarPreview from "./_components/AvatarPreview";

export default function page() {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
      <h1 className="text-2xl font-bold text-center mb-4">
        Upload Profile Photo
      </h1>
      <p className="text-center text-gray-600 mb-6">
        Choose a photo to personalize your profile.
      </p>
      <div className="flex flex-col items-center space-y-4">
        {/* Profile Photo Preview */}
        <AvatarPreview />
      </div>
    </div>
  );
}
