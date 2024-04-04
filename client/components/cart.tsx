"use client";
import { FiShoppingCart } from "react-icons/fi";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store/store";
import Link from  'next/link'

export default function Cart() {
  const cartItems = useSelector((state: RootState) => state.cart);

  const getQuantity = () => {
    let quantity = 0;
    cartItems.forEach((item: any) => (quantity += item.quantity));
    return quantity;
  };

  const cartCount = getQuantity();

  return (
    <>
      <Link href={'/cart'} className="flex flex-row gap-2 items-center">
        <div className="relative">
          <FiShoppingCart className="h-5 w-5 text-primary" />
          {cartCount > 0 ? (
            <>
              <div className="text-[12px] w-[18px] h-[18px] flex flex-col justify-between items-center absolute -right-2 -top-2 rounded-full bg-primary text-white">
                <p className="h-full flex items-center">{cartCount}</p>
              </div>
            </>
          ) : null}
        </div>
        <p className="text-gray-600 font-semibold text-sm">Cart</p>
      </Link>
    </>
  );
}
