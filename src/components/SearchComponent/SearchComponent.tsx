import React from "react";
import { MyInput } from "../UI/MyInput/MyInput";
import { MySelect } from "../UI/MySelect/MySelect";

export const SearchComponent: React.FC = () => {
    const categories = [
        {value: 'all'},
        {value: 'art'},
        {value: 'biography'},
        {value: 'computers'},
        {value: 'history'},
        {value: 'medical'},
        {value: 'poetry'},
    ]
    const sort = [
        {value: 'relevance '},
        {value: 'newest'},
    ]

  return (
    <div className="flex flex-col">
      <h1>Search for books</h1>
      <MyInput />
      <div>
        <MySelect title='Categories' options={categories}/>
        <MySelect title='Sorted by' options={sort}/>
      </div>
    </div>
  );
};
