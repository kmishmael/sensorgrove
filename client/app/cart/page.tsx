import CategoriesButtons from "@/components/categories-buttons";
import NavBar from "@/components/navbar";
import { RiArrowRightSLine } from "react-icons/ri";

export default function Page() {
  return (
    <>
      <div className="px-20">
        <NavBar />
        <CategoriesButtons />
      </div>
      <div className="bg-gray-50">
        <div className="px-20">
          <h2 className="font-semibold text-lg text-neutral-900 uppercase py-2">
            My cart (3)
          </h2>

          <div className="grid gap-4 grid-cols-12">
            <div className="col-span-8 rounded-lg border border-neutral-300 p-3 bg-white">
              {[1, 2, 3, 4, 5].map((d) => (
                <div
                  key={d}
                  className="py-4  border-b last:border-none border-neutral-300 gap-2 grid grid-cols-12"
                >
                  <div className="p-1 col-span-2">
                    <div className="h-24">
                      <img
                        className="h-full object-contain"
                        src="./laptop.png"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="flex flex-col w-full gap-2 justify-between col-span-8">
                    <h3 className="font-semibold text-sm text-neutral-500">
                      T-shirts with multiple colors, for men and lady
                    </h3>
                    <div className="flex w-fit items-center gap-8 rounded-md py-1 px-3 bg-sky-100">
                      <button className="font-bold text-xl text-primary">
                        -
                      </button>
                      <span className="font-semibold text-xl">0</span>
                      <button className="font-bold text-xl text-primary">
                        +
                      </button>
                    </div>
                    <div className="flex flex-row gap-4">
                      <button className="outline-none py-1 px-2 text-red-600 ring-0 rounded-md border border-gray-200">
                        Remove
                      </button>
                      <button className="outline-none py-1 px-2 text-primary rounded-md border border-gray-200">
                        Save for later
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-row justify-end items-center col-span-2">
                    <p className="font-bold text-xl">KSH 980</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="col-span-4 gap-3 rounded-lg">
              <div className="rounded-lg flex flex-col gap-2 bg-white p-4 border border-neutral-300">
                <p>Have a coupon?</p>
                <div className="flex items-center border overflow-hidden rounded-md border-gray-300">
                  <input
                    type="text"
                    className="p-1 flex-1 outline-none outline-transparent"
                    placeholder="Add coupon"
                  />
                  <button className="text-blue-600 px-6 outline-none py-1 border-l h-full">
                    Apply
                  </button>
                </div>
              </div>
              <br />
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
                  <span>Tax:</span>
                  <span>KSH 14.00</span>
                </div>
                <div className="h-[1px] bg-gray-300 my-2"></div>
                <div className="py-2 font-bold flex justify-between text-lg">
                  <span>Total:</span>
                  <span>KSH 1357.97</span>
                </div>
                <div className="text-xs text-neutral-600">
                  <p>Delivery fees not included yet.</p>
                </div>

                <div className="py-2">
                  <button className="text-center font-bold w-full py-2 px-4 rounded-md bg-primary hover:bg-sky-800 text-white text-lg">
                    Checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
          <br />
          <br />
          <br />
        </div>
      </div>
    </>
  );
}
