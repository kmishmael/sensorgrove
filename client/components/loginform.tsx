"use client";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
interface Props {
  callbackUrl: string;
  error: string | undefined;
}

export const LoginForm = (props: Props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();
  const getLoginSuccessRedirectUrl = () => {
    if (props.callbackUrl && typeof props.callbackUrl === "string") {
      return props.callbackUrl;
    }
    return "/";
  };

  const handleCredentialLogin = async (data: any) => {
    //console.log(data);

    const res = await signIn("credentials", {
      ...data,
      callbackUrl: getLoginSuccessRedirectUrl(),
      redirect: false,
    });

    if (res) {
      if (res.ok) {
        console.log(res);
        router.push(res.url!);
      } else {
        router.push(`/auth/login?error=${res.error}`);
      }
    }
  };

  const handleSubmit = () => {
    const data = {
      email,
      password,
    };

    handleCredentialLogin(data);
  };

  return (
    <div className="flex justify-center">
      <div className="border border-gray-600 rounded m-2 w-full sm:w-1/2 lg:w-1/3 px-4 py-6">
        <h6 className="text-center">Login</h6>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          <div>
            <div className="mb-2 flex flex-col gap-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="p-2 rounded-lg text-black"
                placeholder="Your Email"
                name="email"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="mb-2 flex flex-col gap-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="p-2 rounded-lg text-black"
                placeholder="Password"
                name="password"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            {props.error && (
              <div className="text-red-600 text-sm" role="alert">
                Invalid details
              </div>
            )}

            <div className="gap-2">
              <button
                className="btn w-full p-2 mt-4 rounded bg-red-600 hover:bg-red-800 btn-info"
                type="submit"
                onSubmit={(e) => e.preventDefault()}
              >
                Login
              </button>
            </div>
          </div>
        </form>
        <div className="flex p-2 text-sm justify-end">
          <p>
            No account?
            <Link href="/auth/login" className="text-blue-600 hover:underline">
              Signup
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};
