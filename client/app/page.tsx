import Image from "next/image";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth/auth";
// import { useSession } from 'next-auth/react';
//   const { data: session, status } = useSession();

export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {session ? <>{JSON.stringify(session)}</> : <> Not logged in</>}
    </main>
  );
}
