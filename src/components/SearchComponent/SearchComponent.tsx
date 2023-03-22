import React, { KeyboardEvent } from "react";
import { MyInput } from "../UI/MyInput/MyInput";
import { MySelect } from "../UI/MySelect/MySelect";
import classNames from "classnames";

import styles from './SearchComponent.module.scss'
import { useAppSelector } from "../../hooks/useAppSelector";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { changeSearchQuerry } from "../../store/reducers/bookReducer";

export const SearchComponent: React.FC = ({

}) => {
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
  const sort = [{ value: "relevance " }, { value: "newest" }];

  const handleKeyDownStartSearch = (e:KeyboardEvent<HTMLInputElement>,value:string) => {
    // console.log('event',e)
    if(e.key === 'Enter') {
      console.log('enter press')
      console.log('value',value)
      if(value === '') {
        return
      }
      dispatch(changeSearchQuerry(value))
      
    }
  } 

  const handleOnClickStartSearch = (value: string) => {
    console.log('value',value)
      if(value === '') {
        return
      }
      dispatch(changeSearchQuerry(value))
  }

  return (
    <div className="bg-mainBg bg-cover bg-center">
      <div className="flex flex-col container mx-auto items-center gap-10 pt-10 pb-10">
        <h1 className={classNames("text-4xl text-white font-sans font-extrabold text-center md:text-7xl", styles.title)}>Search for books</h1>
        <div className="sm:w-[600px] w-full sm:p-0 pr-10 pl-10 rounded-md">
          <MyInput handleKeyDownStartSearch={handleKeyDownStartSearch} handleOnClickStartSearch={handleOnClickStartSearch}/>
        </div>
        <div className="flex gap-5 md:flex-row flex-col">
          <MySelect title="Categories" options={categories} />
          <MySelect title="Sorted by" options={sort} />
        </div>
      </div>
    </div>
  );
};
