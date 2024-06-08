import type { DataSchema } from "@/app/schemas/data";

import { LocationItem } from "./location_item";

type Props = {
  locations: DataSchema[];
};
export const Locations: React.FC<Props> = ({ locations }) => {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-x-6 gap-y-8">
      {locations.map((location) => (
        <LocationItem key={location.title} data={location} />
      ))}
    </div>
  );
};
