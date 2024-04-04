import CategoriesButtons from "@/components/categories-buttons";
import NavBar from "@/components/navbar";

import axios from "@/lib/axios/public";
import CartPage from "@/components/cart-page";

export default async function Page() {
  const categories = await (await axios.get("/product-categories")).data;
  return (
    <>
      <div className="px-20">
        <NavBar />
        <CategoriesButtons categories={categories} />
      </div>
      <div className="bg-gray-50">
        <CartPage />
      </div>
    </>
  );
}
