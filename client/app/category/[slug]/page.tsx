/* eslint-disable @next/next/no-img-element */
import CategoriesButtons from "@/components/categories-buttons";
import NavBar from "@/components/navbar";
import { RiArrowRightSLine } from "react-icons/ri";
import CategoryBar from "@/components/category-bar";
import SideCategory from "@/components/category-side";
import SidePrice from "@/components/side-price";
import axios from "@/lib/axios/public";
import Link from "next/link";

export default async function Page({ params }: { params: { slug: string } }) {
  const categories = await (await axios.get("/product-categories")).data;
  const products = await (await axios.get("/products")).data;
  console.log(products);
  return (
    <div className="">
      <div className="px-20">
        <NavBar />
        <CategoriesButtons categories={categories} />
      </div>
      <div className="bg-primary2">
        <div className="px-20">
          <div className="flex flex-row items-center gap-2 py-4 text-neutral-400">
            <p>Home</p>
            <RiArrowRightSLine className="h-4 w-4" />
            <p>Laptops</p>
          </div>
          <div className="flex w-full gap-3 ">
            <div className="w-1/4">
              <div className="border-t border-gray-300">
                <SideCategory />
              </div>
              <div className="border-t border-gray-300">
                <SidePrice />
              </div>
            </div>
            <div className="flex-1">
              <CategoryBar />

              <div className="p-4 grid grid-cols-3 gap-4">
                {products.products.map((d: any) => (
                  <Link
                    key={d.slug}
                    href={`/product/${d.slug}`}
                    className="flex flex-col gap-2 w-full border p-4 rounded-lg shadow-md"
                  >
                    <div className="h-44 flex justify-center">
                      <img
                        className="object-contain"
                        src={d.images[0].url}
                        alt=""
                      />
                    </div>
                    <hr className="h-[2px] w-full bg-gradient-to-r from-transparent via-gray-400 to-transparent" />
                    <div>
                      <h3>{d.name}</h3>
                    </div>
                    <div>
                      <p>${d.price}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <br />
      <br />
    </div>
  );
}
