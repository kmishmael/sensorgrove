import { Edit } from "iconsax-react";

export default function Page() {
  return (
    <>
      <div className="p-2">
        <h2 className="font-semibold text-xl">Cards</h2>
        <h4 className="font-normal text-sm py-2 text-neutral-600">manage payment methods</h4>
        <br />
        {/* <Suspense>
          <PersonalDataDialog />
        </Suspense> */}
        <div className="flex flex-col gap-8">
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <button className="flex flex-row py-4 px-4 items-center justify-between rounded-md bg-gray-100">
                <div className="flex flex-row gap-3 items-center text-neutral-700">
                  <p className="">Credit or Debit Cards</p>
                </div>
                <Edit className="text-primary" size="24" variant="Outline" />
              </button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <button className="flex flex-row py-4 px-4 items-center justify-between rounded-md bg-gray-100">
                <div className="flex flex-row gap-3 items-center text-neutral-700">
                  <p className="">Paypal</p>
                </div>
                <Edit className="text-primary" size="24" variant="Outline" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
