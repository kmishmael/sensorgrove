import { cn } from "@/lib/utils";
import { MdKeyboardArrowDown } from "react-icons/md";

export default function ButtonDrop({
  text,
  className,
}: {
  text: string;
  className: string;
}) {
  return (
    <>
      <button
        className={cn(
          "rounded-full flex flex-row gap-2 justify-center items-center bg-primary2 hover:bg-primary text-gray-700 hover:text-white",
          className
        )}
      >
        {text}
        <MdKeyboardArrowDown className="h-3 w-3 text-primary" />
      </button>
    </>
  );
}
