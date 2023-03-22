import React from 'react';

import searchIcon from '../../../assets/search.svg'

export const MyInput: React.FC = ({

}) => {
    return (
        <div className='flex bg-white relative rounded-md'>
            <input type="text" className='w-full p-2 rounded-md pr-10'/>
            <img src={searchIcon} alt="" className='h-[30px] absolute top-[50%] right-[5px] translate-y-[-50%] p-1 border rounded-full border-gray-200 cursor-pointer  hover:border-gray-400'/>
        </div>
    )
}

