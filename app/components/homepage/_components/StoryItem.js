export default function StoryItem() {
  return (
    <div className="cursor-pointer relative w-[150px] h-[250px] border rounded-lg overflow-hidden shadow-lg flex-shrink-0">
      {/* Background Image */}
      <img
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="https://images.pexels.com/photos/29321623/pexels-photo-29321623/free-photo-of-picturesque-street-view-of-dresden-s-historic-architecture.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt=""
      />
      {/* Live Badge */}
      <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
        LIVE
      </div>
      {/* User Info */}
      <div className="absolute bottom-2 left-2 flex items-center gap-2">
        <img
          className="w-[40px] h-[40px] rounded-full border-2 border-white"
          src="https://scontent.fdac138-2.fna.fbcdn.net/v/t39.30808-1/461136347_122106364766528083_4458622693417908386_n.jpg?stp=c0.0.1533.1533a_dst-jpg_s160x160_tt6&_nc_cat=102&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=fq08-htin-gQ7kNvgGsQax2&_nc_zt=24&_nc_ht=scontent.fdac138-2.fna&_nc_gid=AFu51xhZMdpGNLBTJidRBS4&oh=00_AYCvlvd-0FLTJSwPZzSqTtvX2RfUYawgC32ieAnt_6TBOQ&oe=67533D6B"
          alt=""
        />
        <p className="text-white text-sm font-semibold">Md Shamim</p>
      </div>
    </div>
  );
}
