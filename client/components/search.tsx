import { FiSearch } from "react-icons/fi";
import { TfiMenuAlt } from "react-icons/tfi";

export default function Search() {
  return (
    <div className="rounded w-[40%] bg-primary2 p-3 flex flex-row gap-3">
      <div>
        <FiSearch className="text-primary h-6 w-6" />
      </div>
      <div className="flex-1">
        <input
          type="text"
          className="bg-transparent w-full outline-none text-sm placeholder:text-gray-400"
          placeholder="Search laptops, iot devices and more..."
        />
      </div>
      <div>
        <TfiMenuAlt className="text-primary h-6 w-6" />
      </div>
    </div>
  );
}
