import { cn } from "@/lib/utils";
import { MdKeyboardArrowDown } from "react-icons/md";

export default function ButtonDrop({
  title,
  className,
}: {
  title: string;
  className?: string;
}) {
  return (
    <>
      <button
        className={cn(
          "rounded-full flex flex-row gap-2 py-2 px-3 text-sm justify-center items-center bg-primary2 hover:bg-primary text-gray-700 hover:text-white",
          className
        )}
      >
        {title}
        <MdKeyboardArrowDown className="h-3 w-3" />
      </button>
    </>
  );
}
