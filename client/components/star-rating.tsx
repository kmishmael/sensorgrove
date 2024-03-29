import clsx from "clsx";
import React from "react";
import { FaStar } from "react-icons/fa";

const StarRating = ({
  rating,
  className,
}: {
  rating: number;
  className?: string;
}) => {
  const starsTotal = 5;
  const filledStars = Math.floor(rating);
  const fraction = rating - filledStars;
  const emptyStars = starsTotal - filledStars - (fraction > 0 ? 1 : 0);

  return (
    <div className={clsx(`flex items-center justify-center`, className)}>
      {[...Array(filledStars)].map((_, index) => (
        <FaStar key={index} className="text-primary" />
      ))}
      {fraction > 0 && (
        <div className="relative">
          <FaStar className="text-primary" />
          <div
            className="absolute top-0 left-0 overflow-hidden"
            style={{ width: `${fraction * 100}%` }}
          >
            <FaStar className="text-primary" />
          </div>
        </div>
      )}
      {[...Array(emptyStars)].map((_, index) => (
        <FaStar key={index} className="text-gray-300" />
      ))}
    </div>
  );
};

export default StarRating;
