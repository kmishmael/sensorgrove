/* eslint-disable @next/next/no-img-element */
import { RiArrowRightSLine } from "react-icons/ri";

export default function LandingSnippet({
  href = "#",
  title,
  children,
}: {
    href?: string,
    title: string
  children?: React.ReactNode;
}) {
  return (
    <>
      <div className="flex flex-col gap-4">
        <div className="flex flex-row justify-between items-center">
          <h2>{title}</h2>
          <a href={href} className="flex flex-row items-center gap-1 p-2 outline-none">
            <p>View all</p>
            <RiArrowRightSLine className="h-4 w-4" />
          </a>
        </div>
        <hr className="h-[2px] bg-gray-200 w-full" />

        <div className="flex flex-row justify-between items-center">
          {children}
        </div>
      </div>
    </>
  );
}
