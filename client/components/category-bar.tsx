"use client";
import { MdOutlineGridView } from "react-icons/md";
import { MdOutlineViewHeadline } from "react-icons/md";
import { Listbox, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { HiChevronDown } from "react-icons/hi";
import { HiCheck } from "react-icons/hi";
import { useState } from "react";

const filters = [
  { name: "All" },
  { name: "Popular" },
  { name: "Most rated" },
  { name: "High to Low" },
  { name: "Low to high" },
];
export default function CategoryBar() {
  const [selected, setSelected] = useState(filters[0]);

  return (
    <div className="p-2 bg-white flex flex-row justify-between items-center">
      <p>
        12,911 items in <span className="font-bold">Laptops</span>
      </p>

      <div className="flex gap-5 text-black">
        <Listbox value={selected} onChange={setSelected}>
          <div className="relative border w-40 mt-1">
            <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
              <span className="block truncate">{selected.name}</span>
              <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                <HiChevronDown
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </span>
            </Listbox.Button>
            <Transition
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                {filters.map((filter, filterIdx) => (
                  <Listbox.Option
                    key={filter.name}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-10 pr-4 ${
                        active ? "bg-sky-100 text-primary" : "text-gray-900"
                      }`
                    }
                    value={filter}
                  >
                    {({ selected }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? "font-medium" : "font-normal"
                          }`}
                        >
                          {filter.name}
                        </span>
                        {selected ? (
                          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-primary">
                            <HiCheck className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </Listbox>
        <div className="flex flex-row gap-4">
          <button className="p-2 outline-none rounded-md bg-primary2 hover:bg-primary hover:text-white">
            <MdOutlineGridView className="h-6 w-6" />
          </button>
          <button className="p-2 outline-none rounded-md bg-primary2 hover:bg-primary hover:text-white">
            <MdOutlineViewHeadline className="h-6 w-6" />
          </button>
        </div>
      </div>
    </div>
  );
}
