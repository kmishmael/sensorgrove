import { User } from "iconsax-react";

export default function Account() {
  return (
    <>
      <div className="flex flex-row gap-2 items-center">
        <User
          className="h-5 w-5 font-semibold text-primary"
          variant="Outline"
        />
        <p className="text-gray-600 font-semibold text-sm">Sign Up/Sign in</p>
      </div>
    </>
  );
}
