import React from 'react';

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
            <p>{title}</p>
            <select name="" id="">
                {options.map((el) => (
                    <option value={el.value}>{el.value}</option>
                ))}
                
            </select>
        </div>
    )
}

