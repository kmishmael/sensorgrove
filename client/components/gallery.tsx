export default function ProductGallery() {
  return (
    <>
      <div className="flex flex-col gap-4">
        <div className="h-80 p-2 border rounded-md">
          <img
            className="w-full h-full object-contain rounded-md"
            src="./laptop.png"
            alt=""
          />
        </div>
        <div className="grid grid-cols-4 gap-3 h-12">
          {[1, 2, 3, 4].map((c) => (
            <>
              <div className="rounded-md">
                {" "}
                <img src="./laptop.png" alt="" />
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
}
