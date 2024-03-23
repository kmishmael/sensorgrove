import { RxAvatar } from "react-icons/rx";

export default function Account() {
  return (
    <>
      <div className="flex flex-row gap-3 items-center">
        <RxAvatar className="h-4 w-4 bg-primary" />
        <p className="text-gray-700 font-bold">Sign Up/Sign in</p>
      </div>
    </>
  );
}
