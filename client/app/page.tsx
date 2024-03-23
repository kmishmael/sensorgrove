import Image from "next/image";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth/auth";
import NavBar from "@/components/navbar";
// import { useSession } from 'next-auth/react';
//   const { data: session, status } = useSession();

export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <main className="min-h-screen">
      <NavBar />
      {/* {session ? <>{JSON.stringify(session.accessToken)}</> : <> Not logged in</>} */}
    </main>
  );
}
