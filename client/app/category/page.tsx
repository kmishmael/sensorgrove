import CategoriesButtons from "@/components/categories-buttons";
import NavBar from "@/components/navbar";
import { RiArrowRightSLine } from "react-icons/ri";
import CategoryBar from "@/components/category-bar";

export default async function Page() {
  return (
    <div className="">
      <div className="px-20">
        <NavBar />
        <CategoriesButtons />
      </div>
      <div className="bg-primary2">
        <div className="px-20">
          <div className="flex flex-row items-center gap-2 py-2 text-neutral-400">
            <p>Home</p>
            <RiArrowRightSLine className="h-4 w-4" />
            <p>Laptops</p>
          </div>
          <CategoryBar />
        </div>
      </div>
    </div>
  );
}
