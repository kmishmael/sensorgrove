import Image from "next/image";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth/auth";
import NavBar from "@/components/navbar";
import CategoriesButtons from "@/components/categories-buttons";
import Carousel from "@/components/carousel";
import LandingSnippet from "@/components/layouts/landing-snippet";
// import { useSession } from 'next-auth/react';
//   const { data: session, status } = useSession();

export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <main className="min-h-screen px-20">
      <NavBar />
      <CategoriesButtons />
      <Carousel data={[] as any} />
      <br />
      <LandingSnippet title="New Products" href="#">
        {[1, 2, 3, 4].map((d) => (
          <div
            key={d}
            className="flex flex-col gap-2 w-[23%] border p-4 rounded-lg shadow-md"
          >
            <div className="h-44 flex justify-center">
              <img className="" src="/iphone.png" alt="" />
            </div>
            <hr className="h-[2px] w-full bg-gradient-to-r from-transparent via-gray-400 to-transparent" />
            <div>
              <h3>Iphone 14 promax 256gb</h3>
            </div>
            <div>
              <p>$930.90</p>
            </div>
          </div>
        ))}
      </LandingSnippet>
      <br />

      <LandingSnippet title="New Products" href="#">
        {[1, 2, 3, 4].map((d) => (
          <div
            key={d}
            className="flex flex-col gap-2 w-[23%] border p-4 rounded-lg shadow-md"
          >
            <div className="h-44 flex justify-center">
              <img className="" src="/iphone.png" alt="" />
            </div>
            <hr className="h-[2px] w-full bg-gradient-to-r from-transparent via-gray-400 to-transparent" />
            <div>
              <h3>Iphone 14 promax 256gb</h3>
            </div>
            <div>
              <p>$930.90</p>
            </div>
          </div>
        ))}
      </LandingSnippet>
      <div className="h-32"></div>
      {/* {session ? <>{JSON.stringify(session.accessToken)}</> : <> Not logged in</>} */}
    </main>
  );
}
