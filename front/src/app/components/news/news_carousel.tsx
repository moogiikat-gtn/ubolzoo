import Image from "next/image";
import type { NewsSchema } from "../../schemas/news";
import { NewsItem } from "./news_item";

type Props = {
  news: NewsSchema[];
};
export const NewsCarousel: React.FC<Props> = ({ news }) => {
  return (
    <div className="carousel w-full h-[400px] rounded-lg">
      {news.map((item, index) => (
        <NewsItem
          key={index}
          news={item}
          index={index}
          newsLength={news.length}
        />
      ))}
    </div>
  );
};
