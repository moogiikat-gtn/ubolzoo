import Image from "next/image";
import Link from "next/link";
import { use } from "react";

import { getNews } from "@/services/redis/getNews";
import { getData } from "@/services/redis/getData";

import { Header } from "./components/header";
import { Hero } from "./components/hero";
import { News } from "./components/news/news";
import { Login } from "./components/login";

export default function Home() {
  const news = use(getNews());
  const data = use(getData());

  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <News news={news} />
      {/* <Login /> */}
    </main>
  );
}
