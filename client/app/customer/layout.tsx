/* eslint-disable @next/next/no-sync-scripts */
import CategoriesButtons from "@/components/categories-buttons";
import CustomerNavBar from "@/components/customer-navbar";
import CustomerShortNav from "@/components/customer-shornav";
import NavBar from "@/components/navbar";
import { headers } from "next/headers";
import axios from "@/lib/axios/public";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const categories = await (await axios.get("/product-categories")).data;

  const headersList = headers();

  const pathname = headersList.get("x-pathname")?.split("/")[2] || "";

  return (
    <>
      <div className="px-20">
        <NavBar />
        <CategoriesButtons categories={categories} />
      </div>
      <CustomerShortNav />
      <div className="px-20 py-2 gap-4 grid grid-cols-12">
        <CustomerNavBar className="col-span-3" />
        <div className="col-span-9 p-2">{children}</div>
      </div>
    </>
  );
}
