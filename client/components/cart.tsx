import { FiShoppingCart } from "react-icons/fi";

export default function Cart() {
  return (
    <>
      <div className="flex flex-row gap-3 items-center">
        <FiShoppingCart className="h-4 w-4 bg-primary" />
        <p className="text-gray-700 font-bold">Cart</p>
      </div>
    </>
  );
}
