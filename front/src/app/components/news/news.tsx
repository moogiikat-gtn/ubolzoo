import { NewsCarousel } from "./news_carousel";
import type { NewsSchema } from "@/app/schemas/news";

type Props = {
  news: NewsSchema[];
};
export const News: React.FC<Props> = ({ news }) => {
  return (
    <div className="px-8 flex flex-col sm:gap-y-8 gap-y-6 bg-[linear-gradient(to_bottom,rgba(7,202,215,0.3),rgb(250,245,255))] py-10 sm:py-12 text-slate-700">
      <div>
        <p className="text-[#15aabf]">What&#39;s new?</p>
        <h2 className="text-3xl sm:text-5xl font-bold">News</h2>
      </div>
      <NewsCarousel news={news} />
    </div>
  );
};
