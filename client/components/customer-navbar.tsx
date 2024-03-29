import { RxAvatar } from "react-icons/rx";
import Link from "next/link";
import clsx from "clsx";

const LINKS = [
  { slug: "personal-data", name: "Personal Data", icon: RxAvatar },
  { slug: "orders", name: "Orders", icon: RxAvatar },
  { slug: "wishlist", name: "Wish list", icon: RxAvatar },
  { slug: "inbox", name: "Inbox", icon: RxAvatar },
  { slug: "payment", name: "Payments", icon: RxAvatar },
  { slug: "notification", name: "Notification", icon: RxAvatar },
  { slug: "security-access", name: "Security & Access", icon: RxAvatar },
];
export default function CustomerNavBar({className}: {className?: string}) {
  return (
    <div className={clsx("bg-neutral-50 rounded p-2", className)}>
      <div className="flex flex-col">
        <RxAvatar className="h-8 w-8" />
        <p className="font-bold text-lg">Jimmy smith</p>
      </div>
      <div className="p-2">
        {LINKS.map((link) => (
          <>
            <Link href={`/customers/${link.slug}`}>
              {<link.icon />}
              <p className="font-bold text-lg">{link.name}</p>
            </Link>
          </>
        ))}
      </div>
    </div>
  );
}
