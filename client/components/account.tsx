import { RxAvatar } from "react-icons/rx";

export default function Account() {
  return (
    <>
      <div className="flex flex-row gap-2 items-center">
        <RxAvatar className="h-5 w-5 font-semibold text-primary" />
        <p className="text-gray-600 font-semibold text-sm">Sign Up/Sign in</p>
      </div>
    </>
  );
}
