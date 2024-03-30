import { User, Edit, Direct, Call, Key, Home2 } from "iconsax-react";
import { PersonalDataDialog } from "@/components/dialog/personal-data/personal-data";
import { Suspense } from "react";

export default function Page() {
  return (
    <>
      <div className="p-2">
        <h2 className="font-medium text-xl">Identification</h2>
        <br />
        {/* <Suspense>
          <PersonalDataDialog />
        </Suspense> */}

        <div className="grid grid-cols-2 gap-5">
          <div className="flex flex-col gap-2">
            <p className="text-neutral-500">Full Name</p>
            <button className="flex flex-row py-4 px-4 items-center justify-between rounded-md bg-gray-100">
              <div className="flex flex-row gap-3 items-center text-neutral-700">
                <User size={20} variant="Outline" />
                <p className="">Jimmy Smith</p>
              </div>
              <Edit className="text-primary" size="24" variant="Outline" />
            </button>
          </div>
          <div className="flex flex-col gap-2">
            <p>E-mail Address</p>
            <button className="flex flex-row py-4 px-4 items-center justify-between rounded-md bg-gray-100">
              <div className="flex flex-row gap-3 items-center text-neutral-700">
                <Direct size={20} variant="Outline" />
                <p className="">jimmysmith97@gmail.com</p>
              </div>
              <Edit className="text-primary" size="24" variant="Outline" />
            </button>
          </div>

          <div className="flex flex-col gap-2">
            <p>Phone Number</p>
            <button className="flex flex-row py-4 px-4 items-center justify-between rounded-md bg-gray-100">
              <div className="flex flex-row gap-4 items-center text-neutral-700">
                <Call size={20} variant="Outline" />
                <p className="">+254708357271</p>
              </div>
              <Edit className="text-primary" size="24" variant="Outline" />
            </button>
          </div>

          <div className="flex flex-col gap-2">
            <p>Password</p>
            <button className="flex flex-row py-4 px-4 items-center justify-between rounded-md bg-gray-100">
              <div className="flex flex-row gap-4 items-center text-neutral-700">
                <Key size={20} variant="Outline" />
                <p className="">************</p>
              </div>
              <Edit className="text-primary" size="24" variant="Outline" />
            </button>
          </div>

          <div className="flex flex-col gap-2">
            <p>Address</p>
            <button className="flex flex-row py-4 px-4 items-center justify-between rounded-md bg-gray-100">
              <div className="flex flex-row gap-4 items-center text-neutral-700">
                <Home2 size={20} variant="Outline" />
                <p className="">Hubspot, 25 First street</p>
              </div>
              <Edit className="text-primary" size="24" variant="Outline" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
