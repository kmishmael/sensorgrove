export default function ProductTitle() {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex justify-start">
        <p className="font-medium text-lg">SNEAKERS COMPANY</p>
      </div>
      <div className="flex justify-start font-bold text-3xl">
        <p>Fall Limited Edition Sneakers</p>
      </div>
      <div className="text-normal text-neutral-500">
        <p>
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they&quot;ll withstand we{" "}
          withstand everything the weather can offer.
        </p>
      </div>
      <div className="flex font-bold text-primary text-2xl">
        <p>$125</p>
      </div>

      <div className="flex flex-row gap-4">
        <div className="flex items-center gap-8 rounded-md py-1 px-3 bg-sky-100">
          <button className="font-bold text-2xl text-primary">-</button>
          <span className="font-bold text-xl">0</span>
          <button className="font-bold text-2xl text-primary">+</button>
        </div>
        <button className="outline-none rounded-md font-semibold text-xl px-4 py-1 bg-primary text-white">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
