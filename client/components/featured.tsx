import { RiArrowLeftSLine } from "react-icons/ri";
import { RiArrowRightSLine } from "react-icons/ri";

export default function FeaturedProducts() {
  return (
    <div className="p-6 bg-neutral-100 rounded-md flex flex-row gap-10">
      <div className="flex w-1/5 flex-col justify-center items-center gap-3">
        <p className="font-semibold text-neutral-600 text-lg text-center">
          Top 10 Selected Products On the Week
        </p>
        <div className="flex gap-3">
          <button className="outline-none p-2 rounded-full border border-neutral-300 hover:border-primary">
            <RiArrowLeftSLine className="h-6 w-6" />
          </button>

          <button className="outline-none p-2 rounded-full border border-neutral-300 hover:border-primary">
            <RiArrowRightSLine className="h-6 w-6" />
          </button>
        </div>
      </div>
      <div className="flex border w-full gap-5 flex-row">
        {[1, 2, 3, 4].map((d) => (
          <>
            <div className="flex border bg-white rounded-md w-1/4  flex-col">
              <img
                src="./smartphone.png"
                className="object-contain h-52 border"
                alt=""
              />
              <div className="p-2">
                <h3 className="font-medium text-lg">Pixel 4a</h3>
                <div>
                  <p className="font-bold text-primary">$100</p>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}
