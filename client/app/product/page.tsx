import CategoriesButtons from "@/components/categories-buttons";
import ProductGallery from "@/components/gallery";
import NavBar from "@/components/navbar";
import ProductTitle from "@/components/product";
import ProductDescription from "@/components/product-description";
import { RiArrowRightSLine } from "react-icons/ri";
import { Tab } from "@headlessui/react";

export default function Page() {
  return (
    <>
      <NavBar />
      <CategoriesButtons />
      <div className="bg-gray-50">
        <div className="px-20">
          <div className="flex flex-row items-center gap-2 py-4 text-neutral-400">
            <p>Home</p>
            <RiArrowRightSLine className="h-4 w-4" />
            <p>Laptops</p>
          </div>
        </div>
        <div className="px-20">
          <div className="h-full p-4 rounded-md border border-sky-300 bg-white grid grid-cols-2 gap-4">
            <ProductGallery />
            <ProductTitle />
          </div>
        </div>

        <div className="px-20 mt-6 bg-gray-50">
          <Tab.Group>
            <Tab.List>
              <Tab>Tab 1</Tab>
              <Tab>Tab 2</Tab>
              <Tab>Tab 3</Tab>
            </Tab.List>
            <Tab.Panels>
              <Tab.Panel>Content 1</Tab.Panel>
              <Tab.Panel>Content 2</Tab.Panel>
              <Tab.Panel>Content 3</Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
          <ProductDescription />
        </div>
      </div>

      <br />
      <br />
    </>
  );
}
