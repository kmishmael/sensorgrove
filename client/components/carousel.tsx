import { RiArrowLeftSLine } from "react-icons/ri";
import { RiArrowRightSLine } from "react-icons/ri";

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
        <div>
          <h2>Fill your desk full of technology</h2>
          <div>
            <p>Starting from</p>
            <p>KSH 2000</p>
          </div>
          <button>SHOP NOW</button>
        </div>
        <div>
            <img src=""></img>
        </div>
      </div>
    </>
  );
}
