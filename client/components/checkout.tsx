"use client";
import Axios from "axios";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Checkout({ amount }: { amount: number }) {
  const session = useSession();

  const router = useRouter();

  function proceedToPay() {
    Axios.post("https://sandbox.intasend.com/api/v1/checkout/", {
      public_key: "ISPubKey_test_0fe947fb-4035-49bf-8fa3-e9f7bf90c85b",
      email: session.data?.user.email,
      first_name: session.data?.user.name?.split(" ")[0],
      last_name: session.data?.user.name?.split(" ")[1],
      amount: amount,
      currency: "USD",
    })
      .then((res) => {
        router.push(res.data.url);
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <>
      <button
        onClick={() => proceedToPay()}
        className="text-center font-semibold text-sm w-full py-2 px-4 rounded-md bg-primary hover:bg-sky-800 text-white"
      >
        Continue to pay
      </button>
    </>
  );
}
