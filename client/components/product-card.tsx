/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

export default function ProductCard({
  image,
  name,
  price,
  slug,
}: {
  image: string;
  name: string;
  price: number;
  slug: string;
}) {
  return (
    <>
      <Link
        href={`product/${slug}`}
        className="flex flex-col gap-2 border p-4 rounded-lg shadow-sm"
      >
        <div className="h-44 flex justify-center">
          <img className="object-contain" src={image} alt="" />
        </div>
        <hr className="h-[2px] w-full bg-gradient-to-r from-transparent via-gray-400 to-transparent" />
        <div>
          <h3>{name}</h3>
        </div>
        <div>
          <p>
            {" "}
            {new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
            }).format(price)}
          </p>
        </div>
      </Link>
    </>
  );
}
