import type { DataSchema } from "@/app/schemas/data";
import { DateItem } from "./date_item";

type Props = {
  data: DataSchema[];
};
export const Dates: React.FC<Props> = ({ data }) => {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(650px,1fr))] gap-x-6 gap-y-4">
      {data.map((item) => (
        <DateItem key={item.title} data={item} />
      ))}
    </div>
  );
};
