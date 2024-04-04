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
import axios from "@/lib/axios/public";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Suspense } from "react";

export default async function Page({ params }: { params: { slug: string } }) {
  const categories = await (await axios.get("/product-categories")).data;
  const product = await (await axios.get(`/products/${params.slug}`)).data;

  if (!product) {
    return notFound();
  }

  return (
    <>
      <div className="px-20">
        <NavBar />
        <CategoriesButtons categories={categories} />
      </div>
      <div className="bg-gray-50">
        <div className="px-20">
          <div className="flex flex-row items-center gap-2 py-4 text-neutral-400">
            <Link href={`/`} className="hover:text-primary hover:underline">
              Home
            </Link>
            <RiArrowRightSLine className="h-4 w-4" />
            <Link
              href={`/category/${product.category.slug}`}
              className="hover:text-primary hover:underline"
            >
              {product.category.name}
            </Link>
            <RiArrowRightSLine className="h-4 w-4" />
            <p>{product.slug}</p>
          </div>
        </div>
        <div className="px-20">
          <div className="h-full p-4 rounded-md border border-sky-300 bg-white grid grid-cols-2 gap-8">
            <ProductGallery images={product.images} />
           <Suspense>
           <ProductTitle product={product} category={product.category} name={product.name} price={product.price} id={product.id} />
           </Suspense>
          </div>
        </div>

        <div className="px-20 mt-6 grid grid-cols-12 gap-2 bg-gray-50">
          <div className="col-span-9 flex flex-col gap-5">
            <ProductDescription content={product.description} />
            <ProductReviews id={product.id} />
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
