import { Edit, Key, Call } from "iconsax-react";

export default function Page() {
  return (
    <>
      <div className="p-2">
        <h2 className="font-semibold text-xl">Security settings</h2>
        <h4 className="font-normal text-sm py-2 text-neutral-600">
          Change password and phone number
        </h4>
        <br />
        {/* <Suspense>
          <PersonalDataDialog />
        </Suspense> */}

        <div className="grid grid-cols-2 gap-5">
          <div className="flex flex-col gap-2">
            <button className="flex flex-row py-4 px-4 items-center justify-between rounded-md bg-gray-100">
              <div className="flex flex-row gap-3 items-center text-neutral-700">
                <Key size={20} variant="Outline" />
                <p className="">Password</p>
              </div>
              <Edit className="text-primary" size="24" variant="Outline" />
            </button>
          </div>
          <div className="flex flex-col gap-2">
            <button className="flex flex-row py-4 px-4 items-center justify-between rounded-md bg-gray-100">
              <div className="flex flex-row gap-3 items-center text-neutral-700">
                <Call size={20} variant="Outline" />
                <p className="">Phone number</p>
              </div>
              <Edit className="text-primary" size="24" variant="Outline" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
