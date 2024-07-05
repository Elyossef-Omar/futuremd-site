import { Inter } from "next/font/google";
import Navbar from "@/components/navbar";
import { HoverEffect } from "@/components/ui/card";
import {team} from '@/lib/team';
const inter = Inter({ subsets: ["latin"] });

export default function About() {
  return (
    <main className={`min-h-screen items-center justify-between py-8 ${inter.className} dark:bg-dark-bg bg-light-bg`}>
      <Navbar />
      <header className="pt-8 pd-3 px-4 w-full max-w-9xl">
        <h1 className="text-4xl md:text-6xl font-bold my-8 mb-4 text-center dark:text-white text-black"> About Us</h1>
        <p className="text-center mb-4 text-lg md:text-2xl font-semibold dark:text-dark-text text-gray-600">
          Discover The purpose, passion and team behind FutureMD!
        </p>
        </header>
        <h2 className="text-3xl md:text-5xl font-bold my-8 mb-4 text-center dark:text-white text-black"> Our Team</h2>
        <div className="max-w-5xl mx-auto px-8">
             <HoverEffect items={team} />
        </div>
    </main>
  );
}

