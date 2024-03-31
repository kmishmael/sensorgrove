import CategoriesButtons from "@/components/categories-buttons";
import NavBar from "@/components/navbar";
import { Edit } from "iconsax-react";

export default function Page() {
  return (
    <>
      <div className="px-20">
        <NavBar />
        <CategoriesButtons />
      </div>
      <div className="bg-gray-50">
        <div className="px-20 py-20 gap-6 grid grid-cols-12">
          <div className="border border-gray-200 rounded-md p-4 flex flex-col gap-4 col-span-8">
            <div className="flex flex-col gap-2">
              <h3 className="font-semibold text-lg text-neutral-700">
                Shipping address
              </h3>
              <div className="flex justify-between p-2 rounded-md items-center bg-gray-100">
                <p className="text-xs">
                  HubSpot, 25 First Street, Cambridge MA 02141, United States
                </p>
                <Edit className="h-6 w-6 text-blue-600" />
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="font-semibold text-lg text-neutral-700">
                Shipping Method
              </h3>
              <button className="flex justify-between p-2 gap-4 font-light rounded-md items-center bg-neutral-200">
                <div className="h-full py-1 flex items-start">
                  <div className="h-5 w-5 border-2 rounded-full flex flex-row border-gray-500 items-center justify-center">
                    <div className="h-3 w-3 rounded-full bg-transparent"></div>
                  </div>
                </div>
                <div className="flex flex-col flex-1 items-start justify-start">
                  <p className="font-light">Free Shipping</p>
                  <p className="text-neutral-600">7-30 business days</p>
                </div>
                <div className="flex flex-col items-end text-xs h-full justify-end">
                  <p>KSH 750</p>
                </div>
              </button>
              <button className="flex justify-between p-2 gap-4 font-light rounded-md items-center bg-neutral-200">
                <div className="h-full py-1 flex items-start">
                  <div className="h-5 w-5 border-2 rounded-full flex flex-row border-gray-500 items-center justify-center">
                    <div className="h-3 w-3 rounded-full bg-transparent"></div>
                  </div>
                </div>
                <div className="flex flex-col flex-1 items-start justify-start">
                  <p className="font-light">Free Shipping</p>
                  <p className="text-neutral-600">7-30 business days</p>
                </div>
                <div className="flex flex-col items-end text-xs h-full justify-end">
                  <p>KSH 750</p>
                </div>
              </button>
              <button className="flex justify-between p-2 gap-4 font-light rounded-md items-center border border-blue-500 bg-blue-100">
                <div className="h-full py-1 flex items-start">
                  <div className="h-5 w-5 border-2 rounded-full flex flex-row border-blue-600 items-center justify-center">
                    <div className="h-3 w-3 rounded-full bg-blue-600"></div>
                  </div>
                </div>
                <div className="flex flex-col flex-1 items-start justify-start">
                  <p className="font-light">Free Shipping</p>
                  <p className="text-neutral-600">7-30 business days</p>
                </div>
                <div className="flex flex-col items-end text-xs h-full justify-end">
                  <p>KSH 750</p>
                </div>
              </button>
            </div>
          </div>
          <div className="border border-gray-200 rounded-md p-4 flex flex-col gap-4 col-span-4">
            <h3 className="font-semibold text-lg text-neutral-700">
              Your Order
            </h3>
            <div className="flex flex-col gap-2">
              {[1, 2, 3, 4].map((d) => (
                <div
                  key={d}
                  className="flex flex-row gap-3 p-2 w-full border-b border-gray-300 last:border-b-0"
                >
                  <div>
                    <img src="/monitor-order.png" alt="" />
                  </div>
                  <div className="flex flex-1 p-1 text-sm font-normal flex-col justify-between">
                    <div>
                      <h3>MacBook Pro M2 MNEJ3 2022 LLA 13.3 inch</h3>
                      <p>x1</p>
                    </div>
                    <div className="flex text-xs justify-end">
                      <p>KSH 120000</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="py-2 flex flex-row grid-cols-12 gap-3 justify-between">
              <input
                className="p-2 outline-none col-span-8 focus:outline-none rounded-md border border-gray-500"
                placeholder="discount code"
              />
              <button className="py-2 px-4 text-sm col-span-4 text-primary border rounded-md border-primary outline-none hover:text-white hover:bg-primary duration-150 ease-in transition-colors">
                Apply
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
