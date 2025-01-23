import getPhotos from "@/queries/getPhotos";
import PhotoItem from "./_components/PhotoItem";

export default async function page({ params }) {
  const par = await params;
  const photos = await getPhotos(par?.profileid);
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-6">Photos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Photo Items */}
          {photos.length > 0 ? (
            photos.map((photo) => (
              <PhotoItem
                photos={photo?.postImages}
                id={photo?._id}
                key={photo?._id}
              />
            ))
          ) : (
            <h1>No Photos Found</h1>
          )}
        </div>
      </div>
    </div>
  );
}
