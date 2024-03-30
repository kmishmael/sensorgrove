"use client";
import { usePathname } from "next/navigation";
import { LINKS } from "./customer-navbar";
import { RiArrowRightSLine } from "react-icons/ri";
import Link from "next/link";

export default function CustomerShortNav() {
  const activeLink = usePathname().split("/")[2];

  let name = LINKS.filter((c) => c.slug === activeLink)[0];
  return (
    <>
      <div className="flex px-20 text-sm flex-row items-center gap-2 py-4 text-neutral-400">
        <Link
          href="/"
          className="hover:text-primary underline-offset-4 hover:underline"
        >
          Home
        </Link>
        <RiArrowRightSLine className="h-4 w-4" />
        <p>Account</p>
        <RiArrowRightSLine className="h-4 w-4" />
        <Link
          href={`/customer/${name.slug}`}
          className="text-primary underline underline-offset-4"
        >
          {name.name}
        </Link>
      </div>
    </>
  );
}
