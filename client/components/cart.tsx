import { FiShoppingCart } from "react-icons/fi";

export default function Cart() {
  return (
    <>
      <div className="flex flex-row gap-2 items-center">
        <FiShoppingCart className="h-5 w-5 text-primary" />
        <p className="text-gray-600 font-semibold text-sm">Cart</p>
      </div>
    </>
  );
}
