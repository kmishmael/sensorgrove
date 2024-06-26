import { BiMenuAltLeft } from "react-icons/bi";
import Search from "./search";
import Account from "./account";
import Cart from "./cart";
import { Suspense } from "react";
import Link from 'next/link'

export default function NavBar() {
  return (
    <>
      <div className="w-full py-4 flex justify-between">
        <Link href={'/'} className="flex gap-3 items-center">
          <div className="p-2 rounded-md bg-primary2">
            <BiMenuAltLeft className="h-6 w-6 text-primary" />
          </div>
          <h1 className="text-primary font-bold text-xl">SensorGrove</h1>
        </Link>
        <Search />
        <div className="flex gap-5 px-2 items-center">
          <Account />
          <div className="h-1/2 border-r border-2"></div>
          <Suspense>
            <Cart />
          </Suspense>
        </div>
      </div>
    </>
  );
}
