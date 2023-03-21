import React from "react";
import { MyInput } from "../UI/MyInput/MyInput";
import { MySelect } from "../UI/MySelect/MySelect";

export const SearchComponent: React.FC = () => {
  const categories = [
    { value: "all" },
    { value: "art" },
    { value: "biography" },
    { value: "computers" },
    { value: "history" },
    { value: "medical" },
    { value: "poetry" },
  ];
  const sort = [{ value: "relevance " }, { value: "newest" }];

  return (
    <div className="bg-mainBg bg-cover bg-center">
      <div className="flex flex-col container mx-auto items-center gap-10 pt-10 pb-10">
        <h1 className="text-7xl text-white">Search for books</h1>
        <MyInput />
        <div className="flex gap-5">
          <MySelect title="Categories" options={categories} />
          <MySelect title="Sorted by" options={sort} />
        </div>
      </div>
    </div>
  );
};
