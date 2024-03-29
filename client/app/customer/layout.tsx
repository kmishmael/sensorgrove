/* eslint-disable @next/next/no-sync-scripts */
import CategoriesButtons from "@/components/categories-buttons";
import CustomerNavBar from "@/components/customer-navbar";
import NavBar from "@/components/navbar";
import { headers } from "next/headers";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // @ts-expect-error
  const pathname = headers.get('x-pathname');

  return (
    <>
      <div className="px-20">
        <NavBar />
        <CategoriesButtons />
      </div>
      <div className="px-20 py-2 gap-4 grid grid-cols-12">
        <CustomerNavBar className="col-span-3" />
        <div className="col-span-9 p-2">
          {pathname}
          {children}
        </div>
      </div>
    </>
  );
}
