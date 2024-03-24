import CategoriesButtons from "@/components/categories-buttons";
import NavBar from "@/components/navbar";
import { RiArrowRightSLine } from "react-icons/ri";
import CategoryBar from "@/components/category-bar";
import SideCategory from "@/components/category-side";
import SidePrice from "@/components/side-price";

export default async function Page() {
  return (
    <div className="">
      <div className="px-20">
        <NavBar />
        <CategoriesButtons />
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
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
    </div>
  );
}
