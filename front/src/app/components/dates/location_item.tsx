"use client";
import Image from "next/image";

import type { DataSchema } from "@/app/schemas/data";
import { CommentSchema } from "@/app/schemas/comment";

import { Comment } from "./comment";
import { useRouter } from "next/navigation";

type Props = {
  data: DataSchema;
  comments: CommentSchema[];
};
export const LocationItem: React.FC<Props> = ({ data, comments }) => {
  const router = useRouter();

  const onClick = () => {
    if (data.category === "order") {
      router.push("/orders");
    } else return;
  };

  return (
    <div
      className={`card bg-base-100 shadow-xl ${
        data.category === "order" ? "cursor-pointer" : ""
      }`}
      onClick={onClick}
    >
      <figure className="relative h-[250px]">
        <Image
          src={
            data.img ??
            "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
          }
          alt="Shoes"
          fill
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {data.title}
          {data.isNew && <div className="badge badge-secondary">NEW</div>}
        </h2>
        <div className="flex justify-between">
          <span className="text-gray-600">{data.price}$</span>
          <span className="text-gray-600">{data.date.toDateString()}</span>
        </div>
        <p>{data.description}</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">{data.category}</div>
        </div>
      </div>
      {comments.length > 0 && (
        <div className="card-body -mt-8">
          <h3>Comments:</h3>
          {comments.map((comment) => (
            <Comment key={comment.author} data={comment} />
          ))}
        </div>
      )}
    </div>
  );
};
