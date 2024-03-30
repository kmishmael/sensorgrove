import { FaInbox } from "react-icons/fa6";

export default function Page() {
  return (
    <>
      <div className="p-2">
        <h2 className="font-semibold text-xl">Inbox Messages</h2>

        <div className="flex flex-col items-center p-6 justify-center h-full w-full gap-8">
          <FaInbox className="h-8 w-8" />
          <div className="font-semibold">
            <p>You don&apos; have any messages</p>
          </div>
          <div className="text-sm">
            <p>
              Here you will be able to see all the messages that we send you.
              Stay tuned
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
