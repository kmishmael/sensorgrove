import { Direct, Truck, Sms, Story } from "iconsax-react";
export default function Page() {
  return (
    <>
      <div className="p-2">
        <h2 className="font-semibold text-xl">Notification</h2>
        <h4 className="font-normal text-sm py-2 text-neutral-600">
          Manage your notification settings
        </h4>
        <br />

        <div className="grid grid-cols-2 gap-5">
          <div className="flex flex-row gap-2 justify-between">
            <div className="flex flex-col gap-2">
              <div className="flex font-semibold items-center flex-row gap-5">
                <Direct className="h-5 w-5 font-bold" />
                <p>Emails</p>
              </div>
              <p className="text-xs text-neutral-500">
                We write emails to let you know what is important, like: new
                order, confirmations
              </p>
            </div>
            <div className="">
              <label className="inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  value=""
                  className="sr-only peer"
                  checked
                />
                <div className="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                <span className="ms-3 hidden text-sm font-medium text-gray-900 dark:text-gray-300">
                  Checked toggle
                </span>
              </label>
            </div>
          </div>
          <div className="flex flex-row gap-2 justify-between">
            <div className="flex flex-col gap-2">
              <div className="flex font-semibold items-center flex-row gap-5">
                <Truck className="h-5 w-5 font-bold" />
                <p>Order Delivered</p>
              </div>
              <p className="text-xs text-neutral-500">
                You will be notified once the order is delivered
              </p>
            </div>
            <div className="">
              <label className="inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  value=""
                  className="sr-only peer"
                  checked
                />
                <div className="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                <span className="ms-3 hidden text-sm font-medium text-gray-900 dark:text-gray-300">
                  Checked toggle
                </span>
              </label>
            </div>
          </div>

          <div className="flex flex-row gap-2 justify-between">
            <div className="flex flex-col gap-2">
              <div className="flex font-semibold items-center flex-row gap-5">
                <Sms className="h-5 w-5 font-bold" />
                <p>Push to your Device</p>
              </div>
              <p className="text-xs text-neutral-500">
                Receive notifications about your order status, promotions and
                other updates
              </p>
            </div>
            <div className="">
              <label className="inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  value=""
                  className="sr-only peer"
                  checked
                />
                <div className="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                <span className="ms-3 hidden text-sm font-medium text-gray-900 dark:text-gray-300">
                  Checked toggle
                </span>
              </label>
            </div>
          </div>

          <div className="flex flex-row gap-2 justify-between">
            <div className="flex flex-col gap-2">
              <div className="flex font-semibold items-center flex-row gap-5">
                <Story className="h-5 w-5 font-bold" />
                <p>Product&apos;s availability</p>
              </div>
              <p className="text-xs text-neutral-500">
                You will be notified when product
               gets available</p>
            </div>
            <div className="">
              <label className="inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  value=""
                  className="sr-only peer"
                  checked
                />
                <div className="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                <span className="ms-3 hidden text-sm font-medium text-gray-900 dark:text-gray-300">
                  Checked toggle
                </span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
