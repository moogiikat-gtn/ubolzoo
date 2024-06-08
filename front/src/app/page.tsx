import Image from "next/image";
import Link from "next/link";
// import { getNews } from "@/services/redis/getNews";
import { use } from "react";
import { Header } from "./components/header";

export default function Home() {
  // const response = use(getNews());

  return <div>
    <Header/>
  </div>;
}
