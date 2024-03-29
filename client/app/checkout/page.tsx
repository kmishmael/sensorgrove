import CategoriesButtons from "@/components/categories-buttons";
import NavBar from "@/components/navbar";

export default function Page() {
  return (
    <>
      <div className="px-20">
        <NavBar />
        <CategoriesButtons />
      </div>
      <div className="bg-gray-50">
        <div className="px-20">
          <h2 className="font-semibold text-lg text-neutral-900 uppercase py-2">
            Checkout
          </h2>
        </div>
      </div>
    </>
  );
}
