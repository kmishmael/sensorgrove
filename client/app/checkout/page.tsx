/* eslint-disable @next/next/no-img-element */
import CategoriesButtons from "@/components/categories-buttons";
import NavBar from "@/components/navbar";
import { Edit } from "iconsax-react";
import axios from "@/lib/axios/public";
import Checkout from "@/components/checkout";

export default async function Page() {
  const categories = await (await axios.get("/product-categories")).data;

  return (
    <>
      <div className="px-20">
        <NavBar />
        <CategoriesButtons categories={categories} />
      </div>
      <div className="bg-gray-50">
        <div className="px-20 py-20 gap-6 grid grid-cols-12">
          <div className="h-fit col-span-8">
            <div className="p-4 border border-gray-200 rounded-md">
              <div className="flex flex-col gap-2">
                <h3 className="font-semibold text-lg text-neutral-700">
                  Shipping address
                </h3>
                <div className="flex justify-between p-4 rounded-md items-center bg-neutral-200">
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
                <div className="flex flex-col gap-5">
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
            </div>
            <div className="w-full text-left p-4">
              <a
                href="#"
                className="font-normal text-blue-600 hover:underline underline-offset-4"
              >
                Return to cart
              </a>
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
            <div className="py-2 grid grid-cols-12 flex-row gap-3 justify-between">
              <div className="col-span-8">
                <input
                  className="p-2 w-full outline-none focus:outline-none rounded-md border border-gray-500"
                  placeholder="discount code"
                />
              </div>
              <button className="py-2 col-span-4 px-8 text-sm text-primary border rounded-md border-primary outline-none hover:text-white hover:bg-primary duration-150 ease-in transition-colors">
                Apply
              </button>
            </div>
            <div className="rounded-lg bg-white p-4 border border-neutral-300">
              <div className="flex flex-row py-1 justify-between text-neutral-600">
                <span>Subtotal:</span>
                <span>KSH 1403.97</span>
              </div>
              <div className="flex flex-row py-1 justify-between text-neutral-600">
                <span>Discount:</span>
                <span>KSH 60.00</span>
              </div>
              <div className="flex flex-row py-1 justify-between text-neutral-600">
                <span>Shipment cost:</span>
                <span>KSH 14.00</span>
              </div>
              <div className="h-[1px] bg-gray-300 my-2"></div>
              <div className="py-2 font-bold flex justify-between text-lg">
                <span>Grand Total:</span>
                <span>KSH 1357.97</span>
              </div>

              <div className="py-4">
                <Checkout amount={10} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
