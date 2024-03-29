export default function ProductCard() {
  return (
    <>
      <div className="flex flex-col gap-2 border p-4 rounded-lg shadow-sm">
        <div className="h-44 flex justify-center">
          <img className="" src="/iphone.png" alt="" />
        </div>
        <hr className="h-[2px] w-full bg-gradient-to-r from-transparent via-gray-400 to-transparent" />
        <div>
          <h3>Iphone 14 promax 256gb</h3>
        </div>
        <div>
          <p>$930.90</p>
        </div>
      </div>
    </>
  );
}
