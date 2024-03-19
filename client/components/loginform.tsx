"use client";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
interface Props {
  callbackUrl: string;
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
    console.log(data);
    const res = await signIn("credentials", {
      ...data,
      callbackUrl: getLoginSuccessRedirectUrl(),
      redirect: false,
    });

    if (res) {
      if (res.ok) {
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
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
    >
      <div className="mb-3">
        <label className="form-label">Email</label>
        <input
          type="email"
          className="form-control form-control-sm"
          placeholder="Your Email"
          name="email"
          required
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Password</label>
        <input
          type="password"
          className="form-control form-control-sm"
          placeholder="Password"
          name="password"
          required
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <div className="d-grid gap-2">
        <button
          className="btn btn-info"
          type="submit"
          onSubmit={(e) => e.preventDefault()}
        >
          Login
        </button>
      </div>
    </form>
  );
};
