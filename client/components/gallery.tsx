/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";

export default function ProductGallery({ images }: { images: any[] }) {
  const [currentImage, SetCurrentImage] = useState(images[0].url);
  return (
    <>
      <div className="flex flex-col gap-8">
        <div className="h-80 p-2 border rounded-md">
          <img
            className="w-full h-full object-contain rounded-md"
            src={currentImage}
            alt=""
          />
        </div>
        <div className="flex gap-6 h-20">
          {images.map((c) => (
            <div
              key={c.url}
              className="rounded-md h-20 w-20 border-primary border-2 p-1"
              onClick={() => SetCurrentImage(c.url)}
            >
              <img
                src={c.url}
                className="h-full w-full object-contain"
                alt=""
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
