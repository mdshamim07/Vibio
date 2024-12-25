import ThreeDots from "./ThreeDots";

export default function PostAuthor() {
  return (
    <div className="flex justify-between items-center mb-4">
      <div className="flex items-center gap-2">
        <img
          className="w-[50px] h-[50px] rounded-full object-cover"
          src="https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
        <div>
          <p>Md Shamim Mia</p>
          <span className="text-sm text-gray-500">1h Ago</span>
        </div>
      </div>
      <ThreeDots />
    </div>
  );
}
