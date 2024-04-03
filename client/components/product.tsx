"use client";

import Link from "next/link";

export default function ProductTitle({
  category,
  name,
  price,
  id,
}: {
  category: any;
  name: string;
  price: number;
  id: string;
}) {
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
      <div className="flex w-fit items-center gap-8 rounded-md py-1 px-3 bg-sky-100">
        <button className="font-bold text-2xl text-primary">-</button>
        <span className="font-bold text-xl">0</span>
        <button className="font-bold text-2xl text-primary">+</button>
      </div>
      <div className="flex flex-row gap-4">
        <button className="outline-none rounded-md font-semibold text-xl px-4 py-1 bg-primary text-white">
          Add to Cart
        </button>
        <button className="outline-none rounded-md font-semibold text-xl px-4 py-1 bg-primary text-white">
          Buy Now
        </button>
      </div>
    </div>
  );
}
