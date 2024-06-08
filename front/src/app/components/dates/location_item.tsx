import Image from "next/image";

import type { DataSchema } from "@/app/schemas/data";

type Props = {
  data: DataSchema;
};
export const LocationItem: React.FC<Props> = ({ data }) => {
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure className="relative h-[250px]">
        <Image
          src={data.img ?? "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"}
          alt="Shoes"
          fill
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {data.title}
          {data.isNew && <div className="badge badge-secondary">NEW</div>}
        </h2>
        <p>{data.description}</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">{data.category}</div>
        </div>
      </div>
    </div>
  );
};
