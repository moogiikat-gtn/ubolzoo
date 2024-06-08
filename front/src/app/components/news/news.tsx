import { NewsCarousel } from "./news_carousel";
import type { NewsSchema } from "../../schemas/news";

type Props = {
  news: NewsSchema[];
};
export const News: React.FC<Props> = ({ news }) => {
  return (
    <div className="px-8 flex flex-col gap-y-8 bg-primary/90 py-12 text-slate-100">
      <h2 className="text-2xl sm:text-5xl font-bold">News</h2>
      <NewsCarousel news={news} />
    </div>
  );
};
