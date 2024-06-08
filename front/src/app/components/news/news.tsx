import { NewsCarousel } from "./news_carousel";
import type { NewsSchema } from "@/app/schemas/news";

type Props = {
  news: NewsSchema[];
};
export const News: React.FC<Props> = ({ news }) => {
  return (
    <div className="px-8 flex flex-col sm:gap-y-8 gap-y-6 bg-primary/90 py-10 sm:py-12 text-slate-100">
      <h2 className="text-3xl sm:text-5xl font-bold">News</h2>
      <NewsCarousel news={news} />
    </div>
  );
};
