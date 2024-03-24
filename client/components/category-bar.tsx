"use client";
import { Dropdown } from "flowbite-react";
import { MdOutlineGridView } from "react-icons/md";
import { MdOutlineViewHeadline } from "react-icons/md";

export default function CategoryBar() {
  return (
    <div className="p-2 bg-white flex flex-row justify-between items-center">
      <p>
        12,911 items in <span className="font-bold">Laptops</span>
      </p>

      <div className="flex gap-5 border text-black">
        <Dropdown
          label="Dropdown button"
          className="text-black"
          dismissOnClick={false}
        >
          <Dropdown.Item>Dashboard</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Earnings</Dropdown.Item>
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>

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
