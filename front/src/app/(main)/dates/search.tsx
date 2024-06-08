import { DatesCategoryFilter } from "./dates_category_filter";
import { SearchForm } from "./search_form";

export const Search: React.FC = () => {
  return (
    <div className="pb-6 flex justify-between">
      <DatesCategoryFilter />
      <SearchForm />
    </div>
  );
};
