/* eslint-disable @next/next/no-sync-scripts */
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";
import Header from "@/components/header";
import Footer from "@/components/footer";
import NextTopLoader from "nextjs-toploader";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SensorGrove: Ecommerce",
  description: "an eccomerce platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <Providers>
          <NextTopLoader color="#008ecc" height={3} easing="ease" />
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
