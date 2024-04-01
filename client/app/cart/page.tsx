import CategoriesButtons from "@/components/categories-buttons";
import NavBar from "@/components/navbar";
import { MdOutlineDeleteForever } from "react-icons/md";
import { CiBookmarkPlus } from "react-icons/ci";
import { IoMdAdd } from "react-icons/io";
import { FiMinus } from "react-icons/fi";
import { IoArrowBack } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";

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
                  className="py-4 border-b border-neutral-300 gap-2 grid grid-cols-12"
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
                    <div className="flex flex-row justify-between">
                      <div className="flex w-fit items-center gap-4 rounded-md">
                        <button className="font-bold text-xl bg-primary text-white p-2 rounded-md hover:bg-sky-700">
                          <FiMinus className="h-4 w-4" />
                        </button>
                        <span className="font-medium text-md text-primary">
                          0
                        </span>
                        <button className="font-bold text-xl bg-primary text-white p-2 rounded-md hover:bg-sky-700">
                          <IoMdAdd className="h-4 w-4" />
                        </button>
                      </div>
                      <div className="flex flex-row gap-4">
                        <button className="text-sm outline-none flex gap-2 items-center py-1 px-2 text-primary hover:bg-primary hover:text-white transition-colors ease-in duration-150 rounded-md border border-gray-200">
                          <CiBookmarkPlus className="h-5 w-5" />
                          <span>Save for later</span>
                        </button>
                        <button className="text-sm outline-none flex gap-2 items-center py-1 px-2 text-red-600 hover:bg-red-600 hover:text-white transition-colors ease-in duration-150 ring-0 rounded-md border border-gray-200">
                          <MdOutlineDeleteForever className="h-5 w-5" />
                          <span>Remove</span>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row justify-end items-center col-span-2">
                    <p className="font-bold text-xl">KSH 980</p>
                  </div>
                </div>
              ))}

              <div className="flex flex-row py-4 justify-between">
                <button className="py-1 px-4 gap-2 items-center outline-none rounded-md flex justify-between bg-primary text-white hover:bg-sky-800">
                  <IoArrowBack className="h-4 w-4" />
                  <span>Back to shop</span>
                </button>
                <button className="py-1 hover:bg-red-600 hover:text-white duration-150 transition-colors ease-in px-4 border items-center border-gray-200 outline-none rounded-md">
                  <span>Remove all</span>
                </button>
              </div>
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
                  <button className="text-primary px-6 outline-none py-1 border-l h-full">
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
          <div>
            <div className="p-4 bg-white border rounded-md border-sky-300">
              <div className="py-1 border-b border-sky-200 flex justify-between">
                <p className="font-bold text-lg text-sky-800 uppercase">
                  saved for later
                </p>
                <button className="uppercase text-primary py-1 px-3 rounded-md ease-in duration-150 transition-colors hover:bg-sky-100">
                  see all
                </button>
              </div>
              <div className="py-1 mt-2 grid grid-cols-4 gap-5">
                {[1, 2, 3, 4].map((d) => (
                  <div key={d} className="flex flex-col gap-2 p-4">
                    <div className="h-44 flex justify-center bg-sky-100 rounded-lg">
                      <img className="" src="/laptop-showcase.png" alt="" />
                    </div>
                    <hr className="h-[2px] w-full bg-gradient-to-r from-transparent via-gray-400 to-transparent" />
                    <div className="flex flex-col gap-2">
                      <p className="font-medium text-neutral-800 text-lg">
                        $930.90
                      </p>
                      <h3>Iphone 14 promax 256gb</h3>
                      <button className="py-1 w-fit px-4 flex flex-row items-center hover:bg-primary hover:text-white duration-150 ease-in transition-colors gap-2 font-semibold border border-neutral-400 text-primary rounded-md">
                        <IoCartOutline className="h-5 w-5" />
                        <span>Move to cart</span>
                      </button>
                    </div>
                    <div></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <br />
          <br />
        </div>
      </div>
    </>
  );
}
