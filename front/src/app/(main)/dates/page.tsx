import { getData } from "@/services/redis/getData";
import Image from "next/image";
import { use } from "react";
import { DateItem } from "./date_item";
import { Dates } from "./dates";
import { Search } from "./search";

const DatesPage: React.FC = () => {
  const data = use(getData());

  return (
    <main className="px-6 py-8">
      <Search />
      <Dates data={data} />
    </main>
  );
};

export default DatesPage;
