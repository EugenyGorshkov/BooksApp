import React from 'react';
import loader from '../../../assets/loader.svg'

export const MyLoader: React.FC = () => {
    return (
        <div>
            <img src={loader} alt="loader" />
            <h2 className='text-center font-bold text-3xl'>Loading...</h2>
        </div>

    )
}

