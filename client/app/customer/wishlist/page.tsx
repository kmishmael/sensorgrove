import { IoCartOutline } from "react-icons/io5";
import { Trash } from "iconsax-react";

export default function Page() {
  return (
    <>
      <div className="p-2">
        <h2 className="font-semibold text-xl">Wish list</h2>
        <h4 className="font-normal text-sm py-2 text-neutral-600">
          See your favorites list here
        </h4>
        <br />
        <div className="grid grid-cols-3 gap-5">
          {[1, 2, 3, 4, 5, 6, 7].map((d) => (
            
              <div key={d} className="flex flex-col gap-2 p-4">
                <div className="h-44 flex justify-center bg-sky-100 rounded-lg">
                  <img className="" src="/laptop-showcase.png" alt="" />
                </div>
                <hr className="h-[2px] w-full bg-gradient-to-r from-transparent via-gray-400 to-transparent" />
                <div className="flex flex-col gap-2">
                  <p className="font-medium text-sm text-neutral-800">
                    $930.90
                  </p>
                  <h3 className="text-sm">Iphone 14 promax 256gb</h3>
                  <div className="flex flex-row justify-between">
                    <button className="py-1 w-fit px-4 flex flex-row items-center hover:bg-primary hover:text-white duration-150 ease-in transition-colors gap-2 font-medium border border-neutral-400 text-primary rounded-md">
                      <IoCartOutline className="h-5 w-5" />
                      <span>Move to cart</span>
                    </button>
                    <button className="py-1 px-2 rounded-md text-red-600 border border-red-400 transition-colors duration-150 ease-in hover:bg-red-600 hover:text-white">
                      <Trash className="h-4 w-4" />
                    </button>
                  </div>
                </div>
                <div></div>
              </div>
            
          ))}
        </div>
      </div>
    </>
  );
}
