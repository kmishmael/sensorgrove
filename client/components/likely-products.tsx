import ProductCard from "./product-card";

export default function LikelyProducts() {
  return (
    <>
      <div className="p-4 bg-white border rounded-md border-sky-300">
        <div className="py-1 border-b border-sky-200 flex justify-between items-center">
          <p className="font-bold text-sm text-sky-800 uppercase">
            You may also like
          </p>
          <button className="uppercase text-primary text-sm py-1 px-3 rounded-md ease-in duration-150 transition-colors hover:bg-sky-100">
            see all
          </button>
        </div>
        <div className="py-1 mt-2 grid grid-rows-4 gap-3">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </>
  );
}
