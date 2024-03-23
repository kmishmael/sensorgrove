import { FiSearch } from "react-icons/fi";
import { TfiMenuAlt } from "react-icons/tfi";

export default function Search() {
  return (
    <div className="rounded bg-primary2 p-3 flex flex-row gap-2">
      <div>
        <FiSearch className="text-primary h-6 w-6" />
      </div>
      <div>
        <input
          type="text"
          className="bg-transparent outline-none w-full placeholder:text-gray-400"
          placeholder="Search laptops, iot devices and more..."
        />
      </div>
      <div>
        <TfiMenuAlt className="text-primary h-6 w-6" />
      </div>
    </div>
  );
}
