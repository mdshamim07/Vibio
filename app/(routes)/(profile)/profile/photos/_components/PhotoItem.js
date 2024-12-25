export default function PhotoItem() {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-md">
      <img
        src="https://images.pexels.com/photos/28861054/pexels-photo-28861054/free-photo-of-mother-and-child-in-catrina-costumes-in-mexico-city.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="Photo 1"
        className="w-full h-[200px] object-cover hover:scale-110 transition-transform"
      />
    </div>
  );
}
