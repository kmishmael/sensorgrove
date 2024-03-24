import { RiArrowLeftSLine } from "react-icons/ri";
import { RiArrowRightSLine } from "react-icons/ri";
import Image from "next/image";

type CarouselData = {
  title: string;
  slogan: string;
  discount: string;
  imageUrl: string;
};
export default function Carousel({ data }: { data: CarouselData }) {
  return (
    <>
      <div className="w-full h-64 relative bg-gray-800 rounded-md">
        <button className="absolute -translate-x-6 flex justify-center items-center m-auto bottom-0 top-0 rounded-full h-12 w-12 bg-primary2 text-primary hover:bg-primary hover:text-white">
          <RiArrowLeftSLine className="h-6 w-6" />
        </button>
        <button className="absolute translate-x-6 flex justify-center items-center m-auto bottom-0 top-0 right-0 rounded-full h-12 w-12 bg-primary2 text-primary hover:bg-primary hover:text-white">
          <RiArrowRightSLine className="h-6 w-6" />
        </button>
        <div className="flex flex-row justify-between items-center border h-full py-3 px-16">
          <div className="w-1/3">
            <h2 className="font-semibold text-white text-4xl">
              Fill your desk full of technology
            </h2>
            <div className="mt-4">
              <p className="font-normal text-white text-[8px] uppercase">
                Starting from
              </p>
              <p className="font-semibold text-lg text-white">KSH 2000</p>
            </div>
            <button className="outline-none mt-3 rounded-md uppercase bg-primary hover:bg-blue-500 font-medium text-white px-3 py-2">
              SHOP NOW
            </button>
          </div>
          <div className="w-1/3 mr-10">
            <Image
              src="/laptop-showcase.png"
              width={700}
              height={450}
              alt="image of a laptop"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </>
  );
}
