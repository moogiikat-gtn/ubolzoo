import { use } from "react";

import { getData } from "@/services/redis/getData";

import { Locations } from "../../components/dates/locations";

export const Dates: React.FC = () => {
  const data = use(getData());
  return (
    <div className="px-8 flex flex-col sm:gap-y-8 gap-y-6 text-slate-700 py-6">
      <div>
        <p className="text-[#15aabf]">Need a date idea?</p>
        <h2 className="text-3xl sm:text-5xl font-bold">Your order</h2>
      </div>
      <Locations locations={data.filter((item) => item.category === "order")} />
      <div className="flex justify-end">
        <button className="btn btn-primary text-white">Payment</button>
      </div>
    </div>
  );
};

export default Dates;
