"use client";
import type { DataSchema } from "@/app/schemas/data";
import { DateItem } from "./date_item";
import { useSearchQuery } from "@/utils/use_search_query";

type Props = {
  data: DataSchema[];
};
export const Dates: React.FC<Props> = ({ data }) => {
  const { searchQuery } = useSearchQuery();
  let filteredData = data;

  if (searchQuery?.category)
    filteredData = data.filter(
      (item) => item.category === searchQuery.category
    );

  if (searchQuery?.title)
    filteredData = data.filter((item) =>
      item.title.includes(searchQuery.title as string)
    );

  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(650px,1fr))] gap-x-6 gap-y-4">
      {filteredData.map((item) => (
        <DateItem key={item.title} data={item} />
      ))}
    </div>
  );
};
