export default function Gender() {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-1">
        Gender
      </label>
      <div className="flex items-center gap-4">
        <label className="flex items-center">
          <input
            type="radio"
            name="gender"
            defaultValue="Female"
            className="hidden peer"
          />
          <div className="w-4 h-4 border-2 border-primary rounded-full flex items-center justify-center peer-checked:bg-primary peer-checked:border-primary"></div>
          <span className="ml-2 text-gray-700">Female</span>
        </label>
        <label className="flex items-center">
          <input
            type="radio"
            name="gender"
            defaultValue="Male"
            className="hidden peer"
          />
          <div className="w-4 h-4 border-2 border-primary rounded-full flex items-center justify-center peer-checked:bg-primary peer-checked:border-primary"></div>
          <span className="ml-2 text-gray-700">Male</span>
        </label>
        <label className="flex items-center">
          <input
            type="radio"
            name="gender"
            defaultValue="Custom"
            className="hidden peer"
          />
          <div className="w-4 h-4 border-2 border-primary rounded-full flex items-center justify-center peer-checked:bg-primary peer-checked:border-primary"></div>
          <span className="ml-2 text-gray-700">Custom</span>
        </label>
      </div>
    </div>
  );
}
