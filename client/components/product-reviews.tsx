import RatingDistribution from "./rating-distribution";
import StarRating from "./star-rating";

const ratingData = {
  5: 31,
  4: 11,
  3: 11,
  2: 7,
  1: 22,
};

export type RatingData = {
  [key: number]: number;
};

export default function ProductReviews() {
  function calculateTotalRatings(data: RatingData) {
    let sum = 0;
    for (let key of Object.keys(data)) {
      sum += data[Number(key)];
    }
    return sum;
  }
  let totalRatings = calculateTotalRatings(ratingData);

  return (
    <>
      <div className="p-4 bg-white border rounded-md border-sky-300">
        <div className="py-1 border-b border-sky-200 flex justify-between">
          <p className="font-bold text-lg text-sky-800 uppercase">
            Customer Feedback
          </p>
          <button className="uppercase text-primary py-1 px-3 rounded-md ease-in duration-150 transition-colors hover:bg-sky-100">
            see all
          </button>
        </div>
        <div className="py-1 mt-2 grid grid-cols-12 gap-5">
          <div className="col-span-3">
            <p className="uppercase font-medium text-sm">
              verified ratings (82)
            </p>
            <div className="flex mt-2 flex-col text-center gap-2 p-2 rounded-md bg-sky-100">
              <p className="text-xl text-primary">
                <span className="font-bold text-xl">3.3</span>
                <span className="font-medium text-xl"> / 5</span>
              </p>
              <StarRating className="gap-2 text-xl" rating={3.3} />
              <p>82 verified ratings</p>
            </div>
            <div className="mt-2">
              <RatingDistribution
                totalRatings={totalRatings}
                ratingData={ratingData}
              />
            </div>
          </div>
          <div className="col-span-9">
            <p className="uppercase font-medium text-sm">
              product reviews (12)
            </p>
            <div className="flex mt-2 flex-col gap-2 ">
              <div className="flex flex-col gap-2 border-b border-sky-200 py-2">
                <StarRating className="gap-2 w-fit text-lg" rating={3.3} />
                <h3 className="font-semibold">I don&apos;t like it</h3>
                <p className="text-neutral-800">
                  Didn&apos;t live up to its expectations
                </p>
                <div className="flex flex-row gap-2 text-neutral-500">
                  <span>29-03-2024</span>
                  <span>By</span>
                  <span>Tryxdna</span>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <StarRating
                  className="gap-2 w-fit border text-lg"
                  rating={3.3}
                />
                <h3 className="font-semibold">I don&apos;t like it</h3>
                <p className="text-neutral-800">
                  Didn&apos;t live up to its expectations
                </p>
                <div className="flex flex-row gap-2 text-neutral-500">
                  <span>29-03-2024</span>
                  <span>By</span>
                  <span>Tryxdna</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
