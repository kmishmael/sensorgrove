"use client";
import Axios from "axios";
import { useSession } from "next-auth/react";
import { useRouter } from 'next/navigation'

export default function Checkout({ amount }: { amount: number }) {
  const session = useSession();

  const router = useRouter();

  Axios.post("ISPubKey_live_59238a95-d19c-478c-9ee6-3c8615e8240b", {
    public_key: "ISPubKey_test_146fe58b-5b1c-46aa-8af8-1d4b308569f8",
    first_name: session.data?.user.name?.split(" ")[0],
    last_name: session.data?.user.name?.split(" ")[1],
    email: session.data?.user.email,
    phone_number: amount,
    host: "https://civrot.com",
    amount,
    currency: "USD",
  })
    .then((res) => {
      router.push(res.data.url);
      console.log(res);
    })
    .catch((error) => {
      console.log(error);
    });

  return (
    <>
      <button className="text-center font-semibold text-sm w-full py-2 px-4 rounded-md bg-primary hover:bg-sky-800 text-white">
        Continue to pay
      </button>
    </>
  );
}
