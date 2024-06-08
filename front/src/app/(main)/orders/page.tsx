import Image from "next/image";
import { Invitation } from "./invitation";

const OrdersPage: React.FC = () => {
  return (
    <main className="p-12 flex flex-col gap-y-4">
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure className="relative h-[250px] w-1/3">
          <Image
            fill
            src="https://www.toursmongolia.com/uploads/Choijin%20Lama%20Temple%20Ulaanbaatar%20Mongolia.jpg"
            alt="Album"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Order #12345678</h2>
          <h3 className="text-xl font-semibold">Bogd Khan Palace Museum</h3>
          <p>
            A historic site featuring the winter palace of the last Mongolian
            emperor. Offers cultural insights and a beautiful setting.
          </p>
          <div className="card-actions justify-end">
            <Invitation />
            <button className="btn btn-primary text-white">Purchase</button>
          </div>
        </div>
      </div>
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure className="relative h-[250px] w-1/3">
          <Image
            fill
            src="https://www.toursmongolia.com/uploads/Choijin%20Lama%20Temple%20Ulaanbaatar%20Mongolia.jpg"
            alt="Album"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Order #12345679</h2>
          <h3 className="text-xl font-semibold">Bogd Khan</h3>
          <p>
            A historic site featuring the winter palace of the last Mongolian
            emperor. Offers cultural insights and a beautiful setting.
          </p>
          <div className="card-actions justify-end">
            <button  className="btn bg-gray-500 text-white">Accepted</button>
            <button className="btn btn-primary text-white">Purchase</button>
          </div>
        </div>
      </div>
    </main>
  );
};
export default OrdersPage;
