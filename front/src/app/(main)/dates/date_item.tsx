import Image from "next/image";

import { DataSchema } from "@/app/schemas/data";

type Props = {
  data: DataSchema;
};
export const DateItem: React.FC<Props> = ({ data }) => {
  return (
    <div key={data.title} className="card card-side bg-base-100 shadow-xl">
      <figure className="relative w-[250px]">
        <Image
          fill
          src="https://www.toursmongolia.com/uploads/Choijin%20Lama%20Temple%20Mongolia.jpg"
          alt="Movie"
        />
      </figure>
      <div className="card-body w-full">
        <h2 className="card-title">{data.title}</h2>
        <p>{data.description}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary text-slate-50">See details</button>
        </div>
      </div>
    </div>
  );
};
