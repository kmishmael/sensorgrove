"use client";
import Axios from "axios";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
const IntaSend = require("intasend-inlinejs-sdk");

export default function Checkout({ amount }: { amount: number }) {
  const session = useSession();

  const router = useRouter();

  // Axios.post("https://sandbox.intasend.com/api/v1/checkout/", {
  //   public_key: "ISPubKey_live_59238a95-d19c-478c-9ee6-3c8615e8240b",
  //   first_name: session.data?.user.name?.split(" ")[0],
  //   last_name: session.data?.user.name?.split(" ")[1],
  //   email: session.data?.user.email,
  //   phone_number: amount,
  //   amount,
  //   currency: "USD",
  // })
  //   .then((res) => {
  //     router.push(res.data.url);
  //     console.log(res);
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });

    new IntaSend({
      publicAPIKey: "ISPubKey_live_59238a95-d19c-478c-9ee6-3c8615e8240b",
      live: true //or true for live environment
    })
    .on("COMPLETE", (response: any) => { console.log("COMPLETE:", response) })
    .on("FAILED", (response: any) => { console.log("FAILED", response) })
    .on("IN-PROGRESS", () => { console.log("INPROGRESS ...") })

  return (
    <>
      <button data-amount="10" data-currency="USD" className="intaSendPayButton text-center font-semibold text-sm w-full py-2 px-4 rounded-md bg-primary hover:bg-sky-800 text-white">
        Continue to pay
      </button>
    </>
  );
}
