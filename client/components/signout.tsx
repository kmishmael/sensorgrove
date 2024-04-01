"use client";
import { signOut } from "next-auth/react";

export default function SignOut() {
  return (
    <button
      className="bg-primary text-white p-2 rounded-md"
      onClick={() => signOut()}
    >
      SIGN OUT
    </button>
  );
}
