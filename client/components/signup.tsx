"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import Link from "next/link";

interface Props {
  error: string | undefined;
}

export const SignupForm = (props: Props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleCredentialSignup = async (data: any) => {
    const res = await signIn("credentials-signup", {
      ...data,
      callbackUrl: "/profile",
      redirect: false,
    });

    if (res) {
      if (res.ok) {
        router.push(res.url!);
      } else {
        router.push(`/auth/signup?error=${res.error}`, undefined);
      }
    }
  };

  const handleSubmit = () => {
    const data = {
      name,
      email,
      phone,
      password,
    };
    handleCredentialSignup(data);
  };

  return (
    <>
      <div className="flex justify-center">
        <div className="border border-gray-600 rounded m-2 w-full sm:w-1/2 lg:w-1/3 px-4 py-6">
          <h6 className="text-center">Registration</h6>
          {props.error && (
            <div className="alert alert-danger" role="alert">
              {props.error}
            </div>
          )}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit();
            }}
          >
            <div>
              <div className="mb-2 flex flex-col gap-3">
                <label className="form-label">Name</label>
                <input
                  className="p-2 rounded-lg text-black"
                  type="text"
                  placeholder="John K."
                  name="name"
                  required
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className="mb-2 flex flex-col gap-3">
                <label className="form-label">Email</label>
                <input
                  className="p-2 rounded-lg text-black"
                  type="email"
                  placeholder="example@mail.com"
                  name="email"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-2 flex flex-col gap-3">
                <label className="form-label">Password</label>
                <input
                  className="p-2 rounded-lg text-black"
                  type="password"
                  placeholder="Password"
                  name="password"
                  required
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div className="gap-2">
                <button
                  className="btn w-full p-2 mt-4 rounded bg-red-600 hover:bg-red-800 btn-info"
                  type="submit"
                  onSubmit={(e) => e.preventDefault()}
                >
                  Signup
                </button>
              </div>
            </div>
          </form>
          <div className="flex p-2 text-sm justify-end">
            <p>
              Already have account?
              <Link
                href="/auth/login"
                className="text-blue-600 hover:underline"
              >
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
