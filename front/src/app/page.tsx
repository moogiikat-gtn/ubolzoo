import Image from "next/image";
import Link from "next/link";
import { use } from "react";

import { getNews } from "@/services/redis/getNews";
import { getData } from "@/services/redis/getData";

import { Dates } from "./components/dates/dates";
import { Header } from "./components/header";
import { Hero } from "./components/hero";
import { News } from "./components/news/news";
import { Login } from "./components/login";
import { Footer } from "./components/footer";

export default function Home() {
  const news = use(getNews());
  const data = use(getData());

  return (
    <main className="min-h-screen">
      <Hero />
      <News news={news} />
      {/* <Login /> */}
      <Dates data={data.slice(0, 6)} />
      <Footer />
    </main>
  );
}
