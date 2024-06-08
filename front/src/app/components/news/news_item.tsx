import Image from "next/image";

import type { NewsSchema } from "@/app/schemas/news";

type Props = {
  news: NewsSchema;
  index: number;
  newsLength: number;
};
export const NewsItem: React.FC<Props> = ({ news, index, newsLength }) => {
  return (
    <div
      key={news.title}
      id={`slide${index}`}
      className="carousel-item relative w-full"
    >
      <Image
        alt="Image"
        fill
        src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg"
        className="w-full"
      />
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a
          href={index === 0 ? `#slide${newsLength - 1}` : `#slide${index - 1}`}
          className="btn btn-circle"
        >
          ❮
        </a>
        <div className="w-full">
          <h3 className="text-6xl font-bold">{news.title}</h3>
          <p className="text-2xl">{news.description}</p>
        </div>
        <a
          href={index === newsLength - 1 ? "#slide0" : `#slide${index + 1}`}
          className="btn btn-circle"
        >
          ❯
        </a>
      </div>
    </div>
  );
};
