import React, { KeyboardEvent } from "react";
import { MyInput } from "../UI/MyInput/MyInput";
import { MySelect } from "../UI/MySelect/MySelect";
import classNames from "classnames";

import styles from "./SearchComponent.module.scss";
import { useAppSelector } from "../../hooks/useAppSelector";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import {
  changeSearchQuerry,
  changeSortedQuerry,
  changeCategoryQuerry,
} from "../../store/reducers/searchReducer";

export const SearchComponent: React.FC = ({}) => {
  const booksInState = useAppSelector((state) => state.bookReducer.books);
  const dispatch = useAppDispatch();

  const categories = [
    { value: "all" },
    { value: "art" },
    { value: "biography" },
    { value: "computers" },
    { value: "history" },
    { value: "medical" },
    { value: "poetry" },
  ];
  const sort = [{ value: "relevance" }, { value: "newest" }];

  const handleKeyDownStartSearch = (
    e: KeyboardEvent<HTMLInputElement>,
    value: string
  ) => {
    if (e.key === "Enter") {
      dispatch(changeSearchQuerry(value));
    }
  };

  const handleOnClickStartSearch = (value: string) => {
    dispatch(changeSearchQuerry(value));
  };

  const handleOnChangeOptionSort = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    console.log(e.target.value);
    dispatch(changeSortedQuerry(e.target.value));
  };

  const handleOnChangeOptionCategory = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    console.log(e.target.value);
    dispatch(changeCategoryQuerry(e.target.value));
  };


  return (
    <div className={classNames("bg-cover bg-center", styles.ibg)}>
      <div className="flex flex-col container mx-auto items-center gap-10 pt-10 pb-10">
        <h1
          className={classNames(
            "text-4xl text-white font-sans font-extrabold text-center md:text-7xl",
            styles.title
          )}
        >
          Search for books
        </h1>
        <div className="sm:w-[600px] w-full sm:p-0 pr-10 pl-10 rounded-md">
          <MyInput
            handleKeyDownStartSearch={handleKeyDownStartSearch}
            handleOnClickStartSearch={handleOnClickStartSearch}
          />
        </div>
        <div className="flex gap-5 md:flex-row flex-col">
          <MySelect
            title="Categories"
            options={categories}
            handleOnChangeOption={handleOnChangeOptionCategory}
          />
          <MySelect
            title="Sorted by"
            options={sort}
            handleOnChangeOption={handleOnChangeOptionSort}
          />
        </div>
      </div>
    </div>
  );
};
