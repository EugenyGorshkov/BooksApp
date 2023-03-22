import React from 'react';
import classNames from "classnames";

import styles from './MySelect.module.scss'

interface MySelectProps {
    title: string
    options: {value: string}[]
}

export const MySelect: React.FC<MySelectProps> = ({
    title,
    options
}) => {
    return (
        <div className='flex gap-5'>
            <p className={classNames('text-white font-sans font-medium',styles.title)}>{title}</p>
            <select name="" id="">
                {options.map((el) => (
                    <option value={el.value}>{el.value}</option>
                ))}
                
            </select>
        </div>
    )
}

