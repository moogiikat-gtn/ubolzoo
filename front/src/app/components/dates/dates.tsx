import type { DataSchema } from "@/app/schemas/data";

import { Locations } from "./locations";

type Props = {
  data: DataSchema[];
};
export const Dates: React.FC<Props> = ({ data }) => {
  return (
    <div className="px-8 flex flex-col sm:gap-y-8 gap-y-6 text-slate-700 py-6">
      <div>
        <p className="text-[#15aabf]">Need a date idea?</p>
        <h2 className="text-3xl sm:text-5xl font-bold">Locations</h2>
      </div>
      <Locations locations={data} />
    </div>
  );
};
