import React, { useEffect, useState } from 'react';
import { test } from '../../constants/api';
import { getApiResource } from '../../utils/network';
import { BookItem } from '../BookItem';

export const BooksComponent: React.FC = () => {
    const [books, setBooks] = useState<null | any>(null); // type from api doc

    const getResource = async (url: string) => {
        const res = await getApiResource(url)
        console.log(res);
        setBooks(res.items)
        console.log(books);
        
    }
    

    useEffect(() => {
        getResource(test);
    }, [])
    
    return (
        <>
            {books && books.map((el: any) => (<BookItem key={el.id}/>))}
        </>
    )
}

