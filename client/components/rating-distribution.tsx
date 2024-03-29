import { FaStar } from "react-icons/fa";
import { RatingData } from "./product-reviews";

export default function RatingDistribution({
  ratingData,
  totalRatings,
}: {
  ratingData: RatingData;
  totalRatings: number;
}) {
  return (
    <>
      <div className="flex flex-col gap-2">
        {[5, 4, 3, 2, 1].map((d) => (
          <>
            <div key={d} className="flex items-center gap-3">
              <a
                href="#"
                className="text-normal flex items-center gap-2 font-medium text-blue-600 dark:text-blue-500 hover:underline"
              >
                {d} <FaStar className="h-4 w-4" />
                <span className=" w-8">({ratingData[d]})</span>
              </a>
              <div className="w-2/4 h-3 mx-4 bg-sky-100 rounded-full">
                <div
                  className="h-3 bg-primary rounded-full"
                  style={{ width: `${(ratingData[d] / totalRatings) * 100}%` }}
                ></div>
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  );
}
