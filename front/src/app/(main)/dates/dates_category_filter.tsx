"use client";
import { ChangeEvent } from "react";

import { useSearchQuery } from "@/utils/use_search_query";

export const DatesCategoryFilter: React.FC = () => {
  const { setSearchQuery, searchQuery } = useSearchQuery();

  const options = [
    { label: "All", value: "all" },
    { label: "Historical sites", value: "historical_sites" },
    { label: "Scenic spots", value: "scenic_spots" },
    { label: "Lounges", value: "lounges_restaurants" },
    { label: "Shopping", value: "shopping" },
    { label: "Restaurants", value: "restaurant" },
    { label: "Entertainment", value: "entertainment" },
    { label: "Cinemas", value: "cinemas" },
    { label: "Libraries", value: "libraries" },
    { label: "National parks", value: "national_parks" },
    { label: "Plan", value: "set" },
  ];

  const onChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSearchQuery({
      ...searchQuery,
      category: event.target.value === "all" ? undefined : event.target.value,
    });
  };

  return (
    <select
      className="select w-full max-w-xs"
      onChange={onChange}
      defaultValue={
        searchQuery?.category ? (searchQuery.category as string) : undefined
      }
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};
