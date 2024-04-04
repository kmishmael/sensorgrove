"use client";

import Link from "next/link";
import { useDispatch } from "react-redux";
import {
  addToCart,
  increaseQuantity,
  decreaseQuantity,
  removeItem,
} from "@/lib/store/slice/cart-slice";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store/store";

export default function ProductTitle({
  product,
  category,
  name,
  price,
  id,
}: {
  product: any;
  category: any;
  name: string;
  price: number;
  id: string;
}) {
  const dispatch = useDispatch();

  const onAddToCart = (product: any) => {
    let productData = {
      id: product.id,
      name: product.name,
      slug: product.slug,
      price: product.price,
      image: product.images[0].url,
      inventory: product.inventory.quantity,
      categoryName: product.category.name,
      categorySlug: product.category.slug,
    };
    dispatch(addToCart(productData));
  };

  const cartItems = useSelector((state: RootState) =>
    state.cart.filter((p: any) => p.id == id)
  );

  const itemInCart = useSelector((state: RootState) =>
    state.cart.filter((p: any) => p.id == id)
  );

  const onIncreaseQuantity = (productId: string) => {
    dispatch(increaseQuantity({ id: productId }));
  };

  const onDecreaseQuantity = (productId: string) => {
    if (cartItems[0].quantity == 1) {
      dispatch(removeItem({ id: productId }));
    } else {
      dispatch(decreaseQuantity({ id: productId }));
    }
  };

  return (
    <div className="flex flex-col gap-6 py-3">
      <div className="flex justify-start">
        <Link
          href={`category/${category.slug}`}
          className="font-medium text-sm text-primary"
        >
          {category.name}
        </Link>
      </div>
      <div className="flex justify-start font-bold text-3xl">
        <p>{name}</p>
      </div>
      {/* <div className="text-normal text-neutral-500">
        <p>
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they&quot;ll withstand we{" "}
          withstand everything the weather can offer.
        </p>
      </div> */}
      <div className="flex font-bold text-primary text-2xl">
        <p>${price}</p>
      </div>

      {itemInCart.length > 0 ? (
        <>
          <div className="flex w-fit items-center gap-8 rounded-md py-1 px-3 bg-sky-100">
            <button
              onClick={() => onDecreaseQuantity(product.id)}
              className="font-bold text-2xl text-primary"
            >
              -
            </button>
            <span className="font-bold text-xl">
              {cartItems.length ? cartItems[0].quantity : 0}
            </span>
            <button
              onClick={() => onIncreaseQuantity(product.id)}
              className="font-bold text-2xl text-primary"
            >
              +
            </button>
          </div>
        </>
      ) : (
        <>
          <div className="flex flex-row gap-4">
            <button
              onClick={() => onAddToCart(product)}
              className="outline-none w-full rounded-md font-semibold text-xl px-4 py-2 bg-primary text-white"
            >
              Add to Cart
            </button>
            {/* <button className="outline-none rounded-md font-semibold text-xl px-4 py-1 bg-primary text-white">
          Buy Now
        </button> */}
          </div>
        </>
      )}
    </div>
  );
}
