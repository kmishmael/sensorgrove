"use client";
import { SessionProvider } from "next-auth/react";

export function AuthProviders({ children }: { children: React.ReactNode }) {
  return <SessionProvider>{children}</SessionProvider>;
}
