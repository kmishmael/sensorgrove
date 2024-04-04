/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth/auth";
import NavBar from "@/components/navbar";
import CategoriesButtons from "@/components/categories-buttons";
import Carousel from "@/components/carousel";
import LandingSnippet from "@/components/layouts/landing-snippet";
import { RiAppleFill } from "react-icons/ri";
import FeaturedProducts from "@/components/featured";
import axios from "@/lib/axios/public";
import Link from "next/link";
// import { useSession } from 'next-auth/react';
//   const { data: session, status } = useSession();

const categories = [
  { name: "Accessories", image: "/accessories.png" },
  { name: "Cameras", image: "/cameras.png" },
  { name: "Laptops", image: "/laptop.png" },
  { name: "Smartphones", image: "/smartphone.png" },
  { name: "Gaming", image: "/gaming.png" },
  { name: "Wearables", image: "/wearables.png" },
];

export default async function Home() {
  const session = await getServerSession(authOptions);
  const categories = await (await axios.get("/product-categories")).data;

  return (
    <main className="min-h-screen px-20">
      <NavBar />
      <CategoriesButtons categories={categories} />
      <Carousel data={[] as any} />
      <br />
      <LandingSnippet title="New Products" href="#">
        {[1, 2, 3, 4].map((d) => (
          <div
            key={d}
            className="flex flex-col gap-2 w-[23%] border p-4 rounded-lg shadow-md"
          >
            <div className="h-44 flex justify-center">
              <img className="" src="/iphone.png" alt="" />
            </div>
            <hr className="h-[2px] w-full bg-gradient-to-r from-transparent via-gray-400 to-transparent" />
            <div>
              <h3>Iphone 14 promax 256gb</h3>
            </div>
            <div>
              <p>$930.90</p>
            </div>
          </div>
        ))}
      </LandingSnippet>
      <br />
      <LandingSnippet title="Top Categories" href="#">
        {categories.map((d: any) => (
          <Link
            href={`/category/${d.slug}`}
            key={d.slug}
            className="flex flex-col gap-2 w-[15%] p-4"
          >
            <div className="h-32 hover:border-primary border-2 border-transparent rounded-full p-2 bg-secondary w-32 flex justify-center items-center">
              <img
                className="w-full h-full object-contain"
                src={d.imageUrl}
                alt=""
              />
            </div>
            <div className="w-full text-sm text-gray-600 font-medium flex justify-center">
              <h3>{d.name}</h3>
            </div>
          </Link>
        ))}
      </LandingSnippet>
      <br />
      <br />
      <LandingSnippet title="Top Brands" href="#">
        {[1, 2, 3].map((d) => (
          <div
            key={d}
            className="flex relative justify-between bg-neutral-900 rounded-lg flex-row gap-2 w-[30%] p-4"
          >
            <div className="border flex flex-col gap-6 border-transparent p-1 w-32">
              <div className="py-1 px-2 w-fit rounded-md bg-neutral-600 uppercase text-xs text-white">
                IPHONE
              </div>
              <div className="rounded-lg p-2 bg-white w-fit  flex justify-center">
                <RiAppleFill className="h-6 w-6 rounded-lg text-black" />
              </div>
            </div>
            <div className="flex justify-center">
              <img src="/iphone-lineup.png" alt="" />
            </div>
          </div>
        ))}
      </LandingSnippet>
      <br />
      <br />
      <FeaturedProducts />
      <br />
    </main>
  );
}
