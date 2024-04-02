"use client";

import { User } from "iconsax-react";
import { useSession } from "next-auth/react";
import PopOver from "./popover";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";

export default function Account() {
  const { data: session, status } = useSession();

  return (
    <>
      <div className="flex flex-row gap-2 items-center">
        {status == "loading" ? (
          <></>
        ) : status == "authenticated" ? (
          <>
            <PopOver
              className={`inline-flex mx-auto items-center outline-transparent`}
            >
              <div className="border-4 rounded-full border-transparent hover:border-gray-200 transition-[border] duration-200 ease-in">
                <Avatar>
                  <AvatarImage src={session.user.image || ""} />
                  <AvatarFallback>KI</AvatarFallback>
                </Avatar>
              </div>
            </PopOver>
          </>
        ) : (
          <>
            <User
              className="h-5 w-5 font-semibold text-primary"
              variant="Outline"
            />
            <p className="text-gray-600 font-semibold text-sm">
              Sign Up/Sign in
            </p>
          </>
        )}
      </div>
    </>
  );
}
