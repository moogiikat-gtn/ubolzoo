import Image from "next/image";
import Link from "next/link";
import { getNews } from "@/services/redis/getNews";
import { use } from "react";
import { Header } from "./components/header";

export default function Home() {
  const response = use(getNews());

  return (
    <main className="min-h-screen bg-white">
      <Header />
      <div className="h-[calc(100vh-128px)] bg-red-500 bg-center bg-cover bg-[linear-gradient(to_right,rgba(0,0,0,0.6),rgba(0,0,0,0.6)),url(/background.jpeg)] rounded-2xl mx-6 my-8 relative flex flex-col gap-y-8 justify-center px-16 items-start">
        <h1 className="text-white text-6xl tracking-wider font-semibold w-1/2 leading-tight">
          Discover the Heart of Ulaanbaatar.
        </h1>
        <button className="btn btn-primary font-bold text-slate-50">
          See plans for your next date
        </button>
      </div>
    </main>
  );
}
