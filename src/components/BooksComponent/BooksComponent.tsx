import React, { useEffect, useState } from "react";
import { BASE_SEARCH, KEY, LOAD_MORE } from "../../constants/api";
import { MyLoader } from "../../components/UI/MyLoader";
import { getApiResource } from "../../utils/network";
import { BookItem } from "../BookItem";

export interface BookItemApi {
  id: string;
  selfLink: string;
  volumeInfo: {
    authors?: string[];
    categories: string[];
    imageLinks: {
      thumbnail: string;
    };
    title: string;
  };
}

export const BooksComponent: React.FC = () => {
  const [books, setBooks] = useState<null | BookItemApi[]>(null);
  const [foundCounter, setFoundCounter] = useState(0);
  const [loading, setLoading] = useState(false);
  const [startIndexParam, setStartIndexParam] = useState(0)

  const getResource = async (url: string) => {
    setLoading(true);
    const res = await getApiResource(url);
    setLoading(false);
    console.log(res);
    setFoundCounter(res.totalItems)
    setBooks(res.items);
    if(books != null) {
        setBooks([...books, ...res.items])
    }
  };
  const onClickHandler = () => {
    console.log("onClickHandler");
  };

  const handleClickLoadMore = () => {
    setStartIndexParam(startIndexParam + 40)
    console.log('startIndexParam',startIndexParam)
    const LOAD_MORE_QUERRY = LOAD_MORE + startIndexParam + KEY
    console.log('LOAD_MORE_QUERRY',LOAD_MORE_QUERRY)
    getResource(LOAD_MORE_QUERRY)
  }

  useEffect(() => {
    getResource(BASE_SEARCH);
    setStartIndexParam(startIndexParam + 40)
  }, []);
  
//   useEffect(() => {
//     console.log('books',books)
//   }, [books]);

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="mt-10 text-center">Found {foundCounter} results</div>
      <div className="container mx-auto flex flex-wrap gap-5 justify-center mt-10 pl-5 pr-5">
        {books &&
          books.map((el: any) => (
            <BookItem onClickHandler={onClickHandler} key={el.id} el={el} />
          ))}
      </div>
      {loading && <MyLoader />}
      <div className="mt-10 mb-10 flex justify-center"><button onClick={handleClickLoadMore}>load more</button></div>
    </div>
  );
};
