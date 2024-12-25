import PhotoItem from "./_components/PhotoItem";

export default function page() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-6">Photos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {/* Photo Items */}

          <PhotoItem />
        </div>
      </div>
    </div>
  );
}
