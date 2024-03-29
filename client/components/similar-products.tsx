import ProductCard from "./product-card";

export default function SimilarProducts() {
  return (
    <>
      <div className="p-4 bg-white border rounded-md border-sky-300">
        <div className="py-1 border-b border-sky-200 flex justify-between">
          <p className="font-bold text-lg text-sky-800 uppercase">
            Related Products
          </p>
          <button className="uppercase text-primary py-1 px-3 rounded-md ease-in duration-150 transition-colors hover:bg-sky-100">
            see all
          </button>
        </div>
        <div className="py-1 mt-2 grid grid-cols-3 gap-5">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </>
  );
}
