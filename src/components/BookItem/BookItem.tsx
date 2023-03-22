import React from "react";
import { BookItemApi } from "../BooksComponent";
import { Link } from 'react-router-dom'

interface BookItemProps {
  el: BookItemApi;
}

export const BookItem: React.FC<BookItemProps> = ({ el }) => {
  return (
    <div
      className="bg-gray-200 hover:bg-gray-300 lg:w-[20%] md:w-[30%] sm:w-[40%] w-[100%] rounded-md border-solid border border-gray-500"
    ><Link to={`/${el.id}`}>
      <div className="p-5 flex flex-col h-full">
        <div className="flex items-center justify-center">
          <img
            className="block shadow-lg"
            src={el.volumeInfo?.imageLinks?.thumbnail}
            alt={el.volumeInfo?.title}
          />
        </div>
        <div className="flex flex-col mt-10 flex-initial">
          <p className="text-gray-500 underline">
            {el.volumeInfo?.categories ? el.volumeInfo.categories[0] : ''}
          </p>
          <p className="text-base font-sans font-semibold">
            {el.volumeInfo?.title}
          </p>
          <p className="text-gray-500">
            {el.volumeInfo?.authors ? el.volumeInfo.authors.join(", ") : ""}
          </p>
        </div>
      </div>
      </Link>
    </div>
  );
};
