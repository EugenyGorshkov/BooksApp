import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FULL_DATA, INFO_BOOK } from "../../constants/api";
import { changeHTTP, getApiResource } from "../../utils/network";

import arrow from '../../assets/chevron-left.png'

export const BookComponent: React.FC = () => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState([]);
  const [authors, setAuthors] = useState([]);
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  const { id } = useParams();

  useEffect(() => {
    (async () => {
      const res = await getApiResource(INFO_BOOK + id + FULL_DATA);
      setTitle(res.volumeInfo.title);
      setCategory(res.volumeInfo.categories);
      setAuthors(res.volumeInfo.authors);
      setDescription(res.volumeInfo.description);
      setImage(changeHTTP(res.volumeInfo.imageLinks.thumbnail));
    })();
  }, []);

  return (
    <div className="container mx-auto pl-5 pr-5 mb-5">
      <Link to={'/'} className='flex max-w-[150px] border border-solid border-black p-2 uppercase gap-2 items-center mt-5 mb-5 font-semibold'><img src={arrow} className='max-h-[20px]'/>to search</Link>
      <div className="flex flex-col md:flex-row gap-5">
        <div className="md:min-w-[18%] flex justify-center md:justify-start mt-10 md:mt-5">
          <img
            src={image}
            alt=""
            className="max-w-full object-contain object-left-top"
          />
        </div>
        <div className="mt-5 flex flex-col gap-3">
          <p className="text-gray-500 underline">{category && category.filter((el: string, index: number) => {
          if (index < 3) return el;
        })}</p>
          <h2 className="font-bold font-sans text-lg">{title}</h2>
          <p className="text-gray-800 font-medium">
            {authors && authors.join(" / ")}
          </p>
          { description &&
            <p
            className="border border-solid border-black p-5"
            dangerouslySetInnerHTML={{ __html: description }}
          ></p>
          }
          
        </div>
      </div>
    </div>
  );
};
