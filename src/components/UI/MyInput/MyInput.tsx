import React, { KeyboardEvent, useEffect, useState } from "react";

import searchIcon from "../../../assets/search.svg";

interface MyInputProps {
  handleKeyDownStartSearch: (e: KeyboardEvent<HTMLInputElement>,value: string) => void;
  handleOnClickStartSearch: (value: string) => void
}

export const MyInput: React.FC<MyInputProps> = ({
  handleKeyDownStartSearch,
  handleOnClickStartSearch
}) => {
  const [inputValue, setInputValue] = useState("");

//   useEffect(() => {
//     console.log(inputValue)
//   },[inputValue])

  return (
    <div className="flex bg-white relative rounded-md">
      <input
        type="text"
        className="w-full p-2 rounded-md pr-10"
        value={inputValue}
        onKeyDown={(e) => handleKeyDownStartSearch(e, inputValue)}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      />
      <img
        src={searchIcon}
        alt=""
        className="h-[30px] absolute top-[50%] right-[5px] translate-y-[-50%] p-1 border rounded-full border-gray-200 cursor-pointer  hover:border-gray-400"
        onClick={() => handleOnClickStartSearch(inputValue)}
      />
    </div>
  );
};
