import ProductGallery from "@/components/gallery";
import NavBar from "@/components/navbar";
import ProductTitle from "@/components/product";

export default function Page() {
  return (
    <>
      <NavBar />
      <div className="px-20 py-20 flex flex-row gap-4">
        <div className="w-1/2">
          <ProductGallery />
        </div>
        <div className="p-2 w-1/2">
          <ProductTitle />
        </div>
      </div>

      <br />
      <br />
    </>
  );
}
