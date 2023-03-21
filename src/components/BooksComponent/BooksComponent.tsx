import React, { useEffect, useState } from 'react';
import { test } from '../../constants/api';
import { MyLoader } from '../../components/UI/MyLoader';
import { getApiResource } from '../../utils/network';
import { BookItem } from '../BookItem';

export interface BookItemApi {
    id: string
    selfLink: string
    volumeInfo: {
        authors?: string[]
        categories: string[]
        imageLinks: {
            thumbnail: string
        }
        title: string
    }
}

export const BooksComponent: React.FC = () => {
    const [books, setBooks] = useState<null | BookItemApi[]>(null); // type from api doc
    const [loading, setLoading] = useState(false);

    const getResource = async (url: string) => {
        setLoading(true)
        const res = await getApiResource(url)
        setLoading(false)
        console.log(res);
        setBooks(res.items)  
    }
    const onClickHandler = () => {
        console.log('onClickHandler')
    }

    useEffect(() => {
        getResource(test);
        
    }, [])


    return (
        <div className='container mx-auto flex flex-wrap gap-5 justify-center mt-10'>
            {books && books.map((el: any) => (<BookItem onClickHandler={onClickHandler} key={el.id} el={el}/>))}
            {loading && <MyLoader/>} 
        </div>
    )
}

