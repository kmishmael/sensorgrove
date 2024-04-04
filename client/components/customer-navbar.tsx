"use client";
import { RxAvatar } from "react-icons/rx";
import Link from "next/link";
import clsx from "clsx";
import { PiBagThin } from "react-icons/pi";
import { IoIosHeartEmpty } from "react-icons/io";
import { CiInboxIn } from "react-icons/ci";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { IoIosNotificationsOutline } from "react-icons/io";
import { MdOutlineSecurity } from "react-icons/md";
import { CiLogout } from "react-icons/ci";
import { usePathname } from "next/navigation";
import { PiAddressBook } from "react-icons/pi";

export const LINKS = [
  { slug: "personal-data", name: "Personal Data", icon: RxAvatar },
  { slug: "orders", name: "Orders", icon: PiBagThin },
  { slug: "wishlist", name: "Wish list", icon: IoIosHeartEmpty },
  { slug: "inbox", name: "Inbox", icon: CiInboxIn },
  { slug: "payment", name: "Payments", icon: RiMoneyDollarCircleLine },
  {
    slug: "notification",
    name: "Notification",
    icon: IoIosNotificationsOutline,
  },
  {
    slug: "address",
    name: "Address Book",
    icon: PiAddressBook,
  },
  {
    slug: "security-access",
    name: "Security & Access",
    icon: MdOutlineSecurity,
  },
];
export default function CustomerNavBar({ className }: { className?: string }) {
  const activeLink = usePathname().split("/")[2];

  return (
    <div className={clsx("bg-neutral-50 rounded p-2", className)}>
      <div className="flex flex-row gap-5 p-2 items-center">
        <RxAvatar className="h-12 w-12" />
        <p className="font-bold text-lg">Jimmy smith</p>
      </div>
      <div className="p-2">
        {LINKS.map((link) => (
          <Link
            key={link.slug}
            className={`flex flex-row items-center hover:text-primary gap-5 rounded-md p-2 text-sm text-neutral-900 font-normal ${
              link.slug == activeLink ? "bg-sky-100 text-primary" : ""
            }`}
            href={`/customer/${link.slug}`}
          >
            {<link.icon className="h-5 w-5" />}
            <p className="text-sm font-medium">{link.name}</p>
          </Link>
        ))}
        <Link
          className={`flex flex-row items-center hover:text-primary gap-3 rounded-md p-3 text-neutral-900 font-normal`}
          href={`/logout`}
        >
          <CiLogout className="h-5 w-5" />
          <p className="text-sm font-medium">Logout</p>
        </Link>
      </div>
    </div>
  );
}
