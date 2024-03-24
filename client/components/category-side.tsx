"use client";
import { Disclosure } from "@headlessui/react";
import { HiChevronDown } from "react-icons/hi";

export default function SideCategory() {
  return (
    <div className="w-full px-4 py-2">
      <div className="mx-auto w-full max-w-md p-2">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-2 text-left text-sm font-medium">
                <span className="font-bold">Category</span>
                <HiChevronDown
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-purple-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pb-2 pt-2 text-gray-500">
                <div className="text-gray-600">
                  <ul className="flex flex-col gap-1">
                    <li>Laptops</li>
                    <li>Smartphone</li>
                    <li>Gaming</li>
                    <li>Wearables</li>
                    <li>Accessories</li>
                  </ul>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  );
}
