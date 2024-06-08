"use client";
import { useState } from "react";

import { useSearchQuery } from "@/utils/use_search_query";

export const SearchForm: React.FC = () => {
  const { setSearchQuery, searchQuery } = useSearchQuery();

  const [title, setTitle] = useState<string | undefined>("");

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    setSearchQuery({
      ...searchQuery,
      title: title,
    });
  };
  return (
    <form onSubmit={onSubmit} className="flex gap-6">
      <label className="input flex items-center gap-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
        <input
          id="search"
          name="title"
          type="text"
          placeholder="Search..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="w-4 h-4 opacity-70"
        >
          <path
            fillRule="evenodd"
            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
            clipRule="evenodd"
          />
        </svg>
      </label>

      <button className="btn btn-primary text-slate-50">Search</button>
    </form>
  );
};
