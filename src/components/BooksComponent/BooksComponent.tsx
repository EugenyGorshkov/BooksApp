import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { MyLoader } from "../../components/UI/MyLoader";
import { generateQuerryUrl, getApiResource } from "../../utils/network";
import { BookItem } from "../BookItem";
import { booksAdd, newBooksQuerry } from "../../store/reducers/bookReducer";
import { useAppSelector } from "../../hooks/useAppSelector";

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
  const searchValue = useAppSelector((state) => state.bookReducer.search);
  const sortedType = useAppSelector((state) => state.bookReducer.sortedType);
  const dispatch = useAppDispatch();

  const [books, setBooks] = useState<null | BookItemApi[]>(booksInState);
  const [foundCounter, setFoundCounter] = useState(0);
  const [loading, setLoading] = useState(false);
  const [startIndexParam, setStartIndexParam] = useState(0);

  const getResource = async (url: string) => {
    setLoading(true);
    const res = await getApiResource(url);
    setLoading(false);
    console.log("res:", res);
    setFoundCounter(res.totalItems);
    return await res.items;
  };

  const onClickHandler = () => {
    console.log("onClickHandler");
  };

  const handleClickLoadMore = () => {
    setStartIndexParam(startIndexParam + 40);
    // console.log("startIndexParam", startIndexParam);

    // const LOAD_MORE_QUERRY = LOAD_MORE + startIndexParam + KEY;
    // console.log("LOAD_MORE_QUERRY", LOAD_MORE_QUERRY);

    getResource(
      generateQuerryUrl(searchValue, sortedType, startIndexParam)
    ).then((data) => {
      dispatch(booksAdd(data));
    });
  };

  // рендер призаргузке страницы
  useEffect(() => {
    getResource(
      generateQuerryUrl(searchValue, sortedType, startIndexParam)
    ).then((data) => {
      dispatch(booksAdd(data));
    });
    setStartIndexParam(startIndexParam + 40);
  }, []);

  // ререндер при изменении строки поиска и типа сортировки
  useEffect(() => {
    setStartIndexParam(0);
    getResource(
      generateQuerryUrl(searchValue, sortedType, startIndexParam)
    ).then((data) => {
      dispatch(newBooksQuerry(data));
      setStartIndexParam(startIndexParam + 40);
    });
    console.log("searchValue", searchValue);
  }, [searchValue, sortedType]);


  // useEffect для console.log()
//   useEffect(() => {
//     console.log("books", books);
//   }, [books]);

//   useEffect(() => {
//     console.log("startIndexParam", startIndexParam);
//   }, [startIndexParam]);

  // изменение стейта компонета при изменении редакс стейта
  useEffect(() => {
    setBooks(booksInState);
  }, [booksInState]);

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
      <div className="mt-10 mb-10 flex justify-center">
        <button onClick={handleClickLoadMore}>load more</button>
      </div>
    </div>
  );
};
