export default function ProductGallery() {
  return (
    <>
      <div className="flex flex-col gap-8">
        <div className="h-80 p-2 border rounded-md">
          <img
            className="w-full h-full object-contain rounded-md"
            src="./laptop.png"
            alt=""
          />
        </div>
        {/* <div className="grid grid-cols-4 gap-6 h-12 border border-blue-800">
          {[1, 2, 3, 4].map((c) => (
            <div
              key={c}
              className="rounded-md h-full border-primary border-2 p-1"
            >
              <img src="./laptop.png" className=" h-12 object-contain" alt="" />
            </div>
          ))}
        </div> */}
        <div className="flex gap-6 h-20">
          {[1, 2, 3, 4].map((c) => (
            <div
              key={c}
              className="rounded-md h-20 w-20 border-primary border-2 p-1"
            >
              <img
                src="./laptop.png"
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
