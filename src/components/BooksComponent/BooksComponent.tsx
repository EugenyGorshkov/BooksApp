import React, { useEffect, useState } from "react";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { generateQuerryUrl, getApiResource } from "../../utils/network";
import { booksAdd, newBooksQuerry } from "../../store/reducers/bookReducer";
import { useAppSelector } from "../../hooks/useAppSelector";
import { MyLoader } from "../../components/UI/MyLoader";
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
  const booksInState = useAppSelector((state) => state.bookReducer.books);
  const searchValue = useAppSelector((state) => state.searchReducer.search);
  const sortedType = useAppSelector((state) => state.searchReducer.sortedType);
  const categoryType = useAppSelector((state) => state.searchReducer.catehory);
  const dispatch = useAppDispatch();

  const [books, setBooks] = useState<null | BookItemApi[]>(booksInState);
  const [foundCounter, setFoundCounter] = useState(0);
  const [loading, setLoading] = useState(false);
  const [startIndexParam, setStartIndexParam] = useState(0);

  const getResource = async (url: string) => {
    setLoading(true);
    const res = await getApiResource(url);
    setLoading(false);
    setFoundCounter(res.totalItems);
    console.log("res:", res);
    return await res.items;
  };

  const handleClickLoadMore = () => {
    const newStartIndexParam = startIndexParam + 30
    setStartIndexParam(newStartIndexParam);
    getResource(
      generateQuerryUrl(searchValue, sortedType, categoryType ,newStartIndexParam)
    ).then((data) => {
      dispatch(booksAdd(data)); 
    });
    
  };
  console.log("startIndexParam", startIndexParam);

  // рендер при заргузке страницы и ререндер при изменении типа сортировки и строки поиска
  useEffect(() => {
    setStartIndexParam(0)
    getResource(
      generateQuerryUrl(searchValue, sortedType, categoryType ,0)
    ).then((data) => {
      dispatch(newBooksQuerry(data));
    });
  },[searchValue, sortedType,categoryType])
  
  useEffect(() => {
    setBooks(booksInState);
  }, [booksInState]);

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="mt-10 text-center">Found {foundCounter} results</div>
      <div className="container mx-auto flex flex-wrap gap-5 justify-center mt-10 pl-5 pr-5">
        {books &&
          books.map((el: any) => (
            <BookItem key={el.etag} el={el} />
          ))}
      </div>
      {loading && <MyLoader />}
      <div className="mt-10 mb-10 flex justify-center">
        <button onClick={handleClickLoadMore}>load more</button>
      </div>
    </div>
  );
};
