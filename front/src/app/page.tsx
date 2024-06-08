import Image from "next/image";
import Link from "next/link";
import { getNews } from "@/services/redis/getNews";
import { getData } from "@/services/redis/getData";
import { use } from "react";
import { Header } from "./components/header";

export default function Home() {
  const news = use(getNews());
  const data = use(getData());
  return <div>
    <Header/>
  </div>;
}
