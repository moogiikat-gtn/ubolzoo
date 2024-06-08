import { getData } from "@/services/redis/getData";
import { use } from "react";

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
