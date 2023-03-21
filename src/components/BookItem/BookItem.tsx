import React from "react";
import { BookItemApi } from "components/BooksComponent/BooksComponent";

interface BookItemProps {
  el: BookItemApi;
  onClickHandler: () => void
}

export const BookItem: React.FC<BookItemProps> = ({ 
    el,
    onClickHandler,
}) => {
  return (
    <div onClick={onClickHandler} className="bg-gray-300 w-[20%] rounded-md border-solid border border-gray-500">
      <div className="p-5 flex flex-col h-full">
        <div className="flex items-center justify-center">
          <img
            className="block shadow-lg"
            src={el.volumeInfo.imageLinks.thumbnail}
            alt={el.volumeInfo.title}
          />
        </div>
        <div className="flex flex-col mt-10 flex-initial">
          <p>{el.volumeInfo.categories[0]}</p>
          <p className="uppercase">{el.volumeInfo.title}</p>
          <p>{el.volumeInfo.authors ? el.volumeInfo.authors.join(", ") : ""}</p>
        </div>
      </div>
    </div>
  );
};
