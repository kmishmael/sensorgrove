import { RiMapPinLine } from "react-icons/ri";
import { TbTruckDelivery } from "react-icons/tb";
import { TbDiscount2 } from "react-icons/tb";

export default function Header() {
  return (
    <div className="h-8 bg-secondary py-2 px-20 flex items-center justify-between">
      <p className="text-gray-400">Get the best deals</p>
      <div className="flex flex-row gap-4">
        <div className="flex flex-row justify-center items-center gap-2 p-2 text-sm text-gray-600">
          <RiMapPinLine className="text-primary h-4 w-4" />
          <p className="">
            Delivering only to{" "}
            <span className="text-gray-800 font-semibold">Kenya</span>
          </p>
        </div>
        <div className="flex flex-row justify-center items-center gap-2 p-2 text-sm text-gray-600">
          <TbTruckDelivery className="text-primary h-4 w-4 text-sm" />
          <p className="text-gray-600">Track Your Order</p>
        </div>
        <div className="flex flex-row justify-center items-center gap-2 p-2 text-sm text-gray-600">
          <TbDiscount2 className="text-primary h-4 w-4" />
          <p className="text-gray-600">All offers</p>
        </div>
      </div>
    </div>
  );
}
