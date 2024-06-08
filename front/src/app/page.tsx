import Image from "next/image";
import Link from "next/link";
import { getNews } from "@/services/redis/getNews";
import { getData } from "@/services/redis/getData";
import { use } from "react";
import { Header } from "./components/header";
import { Hero } from "./components/hero";

export default function Home() {
  const response = use(getNews());
  const data = use(getData());

  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
    </main>
  );
}
