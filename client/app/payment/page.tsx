import CategoriesButtons from "@/components/categories-buttons";
import NavBar from "@/components/navbar";
import { Edit, Add } from "iconsax-react";

export default function Page() {
  return (
    <>
      <div className="px-20">
        <NavBar />
        <CategoriesButtons />
      </div>
      <div className="bg-gray-50">
        <div className="px-20 py-20 gap-6 grid grid-cols-12">
          <div className="h-fit col-span-8">
            <div className="p-4 border border-gray-200 rounded-md">
              <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-3">
                  <h3 className="font-semibold text-lg text-neutral-700">
                    Payment
                  </h3>
                  <div className="flex flex-col gap-5">
                    <div className="gap-3 flex flex-row">
                      <button className="flex flex-1 justify-between p-2 gap-4 font-light rounded-md items-center border border-blue-500 bg-blue-100">
                        <div className="h-full py-1 px-2 flex items-center justify-center">
                          <div className="h-5 w-5 border-2 rounded-full flex flex-row border-blue-600 items-center justify-center">
                            <div className="h-3 w-3 rounded-full bg-blue-600"></div>
                          </div>
                        </div>
                        <div className="flex flex-col flex-1 items-start justify-start">
                          <p className="font-light">Credit/Debit Cards</p>
                        </div>
                        <div className="flex flex-col items-end text-xs h-full justify-end">
                          <Edit className="h-6 w-6 text-blue-600" />
                        </div>
                      </button>
                      <button className="text-blue-600 py-2 px-3 bg-blue-100 rounded-md transition-colors duration-150 ease-in hover:text-white hover:bg-blue-600">
                        <Add className="h-6 w-6" />
                      </button>
                    </div>
                    <div className="gap-3 flex flex-row">
                      <button className="flex flex-1 justify-between p-2 gap-4 font-light rounded-md items-center border border-blue-500 bg-blue-100">
                        <div className="h-full py-1 px-2 flex items-center justify-center">
                          <div className="h-5 w-5 border-2 rounded-full flex flex-row border-blue-600 items-center justify-center">
                            <div className="h-3 w-3 rounded-full bg-blue-600"></div>
                          </div>
                        </div>
                        <div className="flex flex-col flex-1 items-start justify-start">
                          <p className="font-light">Paypal</p>
                        </div>
                        <div className="flex flex-col items-end text-xs h-full justify-end">
                          <Edit className="h-6 w-6 text-blue-600" />
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="font-semibold text-lg text-neutral-700">
                    Billing Address
                  </h3>
                  <div className="flex justify-between p-4 rounded-md items-center bg-neutral-200">
                    <p className="text-sm">Same as shipping address</p>
                    <Edit className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full text-left p-4">
              <a
                href="#"
                className="font-normal text-blue-600 hover:underline underline-offset-4"
              >
                Return to checkout
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
                <button className="text-center font-semibold text-sm w-full py-2 px-4 rounded-md bg-primary hover:bg-sky-800 text-white">
                  Place order
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
