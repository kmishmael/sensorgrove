import { MdEdit } from "react-icons/md";
import { MdDeleteOutline } from "react-icons/md";

export default function Page() {
  return (
    <>
      <div className="p-2 border">
        <div className="flex flex-row justify-between px-2 py-2 border-b border-neutral-300">
          <h2 className="font-bold text-neutral-600 text-xl">Addresses (3)</h2>
          <button className="uppercase px-4 py-2 rounded-md bg-primary text-sm text-white">
            add new address
          </button>
        </div>
        <div className="grid grid-cols-2 gap-4 py-4">
          <div className="rounded-md border">
            <div className="flex flex-col gap-3 p-3 text-sm bg-sky-50">
              <p>Kibet Ishmael</p>
              <div>
                <p>00100</p>
                <p>CBD - UON/Globe/Koja/River Road, Nairobi</p>
              </div>
              <p>+254 775868856</p>

              <p>Default Address</p>
            </div>
            <div className="p-3 border-t border-gray-300 flex flex-row justify-between">
              <button className="uppercase text-primary rounded px-3 hover:bg-sky-100 text-sm font-semibold">
                set as default
              </button>
              <div className="flex flex-row gap-2">
                <button className="p-2 rounded-full hover:bg-sky-200">
                  <MdEdit className="h-6 w-6 rounded-full text-primary" />
                </button>
                <button className="p-2 rounded-full hover:bg-sky-200">
                  <MdDeleteOutline className="h-6 w-6 rounded-full text-primary" />
                </button>
              </div>
            </div>
          </div>
          <div className="rounded-md border">
            <div className="flex flex-col gap-3 p-3 text-sm bg-sky-50">
              <p>Kibet Ishmael</p>
              <div>
                <p>00100</p>
                <p>CBD - UON/Globe/Koja/River Road, Nairobi</p>
              </div>
              <p>+254 775868856</p>

              <p>Default Address</p>
            </div>
            <div className="p-3 border-t border-gray-300 flex flex-row justify-between">
              <button className="uppercase text-primary rounded px-3 hover:bg-sky-100 text-sm font-semibold">
                set as default
              </button>
              <div className="flex flex-row gap-2">
                <button className="p-2 rounded-full hover:bg-sky-200">
                  <MdEdit className="h-6 w-6 rounded-full text-primary" />
                </button>
                <button className="p-2 rounded-full hover:bg-sky-200">
                  <MdDeleteOutline className="h-6 w-6 rounded-full text-primary" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
