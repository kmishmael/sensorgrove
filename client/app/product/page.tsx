import CategoriesButtons from "@/components/categories-buttons";
import ProductGallery from "@/components/gallery";
import NavBar from "@/components/navbar";
import ProductTitle from "@/components/product";
import ProductDescription from "@/components/product-description";
import ProductReviews from "@/components/product-reviews";
import { RiArrowRightSLine } from "react-icons/ri";
import SimilarProducts from "@/components/similar-products";
import LikelyProducts from "@/components/likely-products";
import RecentlyViewedProducts from "@/components/recently-viewed";

export default function Page() {
  return (
    <>
      <NavBar />
      <CategoriesButtons />
      <div className="bg-gray-50">
        <div className="px-20">
          <div className="flex flex-row items-center gap-2 py-4 text-neutral-400">
            <p>Home</p>
            <RiArrowRightSLine className="h-4 w-4" />
            <p>Laptops</p>
          </div>
        </div>
        <div className="px-20">
          <div className="h-full p-4 rounded-md border border-sky-300 bg-white grid grid-cols-2 gap-4">
            <ProductGallery />
            <ProductTitle />
          </div>
        </div>

        <div className="px-20 mt-6 grid grid-cols-12 gap-2 bg-gray-50">
          <div className="col-span-9 flex flex-col gap-5">
            <ProductDescription />
            <ProductReviews />
            <SimilarProducts />
            <RecentlyViewedProducts />
          </div>
          <div className="col-span-3">
            <LikelyProducts />
          </div>
        </div>
      </div>

      <br />
      <br />
    </>
  );
}
