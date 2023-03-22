import React from 'react';
import classNames from "classnames";

import styles from './MySelect.module.scss'

interface MySelectProps {
    title: string
    options: {value: string}[]
    handleOnChangeOption: (e:React.ChangeEvent<HTMLSelectElement>) => void
}

export const MySelect: React.FC<MySelectProps> = ({
    title,
    options,
    handleOnChangeOption
}) => {
    return (
        <div className='flex gap-5'>
            <p className={classNames('text-white font-sans font-medium',styles.title)}>{title}</p>
            <select name="" id="" onChange={(e) => {handleOnChangeOption(e)}}>
                {options.map((el) => (
                    <option key={el.value} value={el.value}>{el.value}</option>
                ))} 
            </select>
        </div>
    )
}

