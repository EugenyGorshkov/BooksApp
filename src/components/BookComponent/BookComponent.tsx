import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FULL_DATA, INFO_BOOK } from "../../constants/api";
import { getApiResource } from "../../utils/network";
import styles from "./BookComponent.module.scss";

export const BookComponent: React.FC = () => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [authors, setAuthors] = useState([]);
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  const { id } = useParams();

  useEffect(() => {
    (async () => {
      const res = await getApiResource(INFO_BOOK + id + FULL_DATA);
      console.log(res);
      setTitle(res.volumeInfo.title);
      setCategory(res.volumeInfo.categories);
      setAuthors(res.volumeInfo.authors);
      setDescription(res.volumeInfo.description);
      setImage(res.volumeInfo.imageLinks.thumbnail);
    })();
  }, []);

  return (
    <div className="container mx-auto flex">
      <div className="min-w-[25%]">
        <img src={image} alt="" />
      </div>
      <div>
        <p>{category}</p>
        <h2>{title}</h2>
        <p>{authors && authors.join(" / ")}</p>
        <p dangerouslySetInnerHTML={{ __html: description }}></p>
      </div>
    </div>
  );
};
