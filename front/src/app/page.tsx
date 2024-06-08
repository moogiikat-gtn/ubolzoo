import Image from "next/image";
import Link from "next/link";
import { getNews } from "@/services/redis/getNews";
import { use } from "react";
import { Header } from "./components/header";
import { Hero } from "./components/hero";

export default function Home() {
  const response = use(getNews());

  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
    </main>
  );
}
