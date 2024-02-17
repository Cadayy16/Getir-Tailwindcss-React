import React from 'react'
import { AiOutlinePlus } from 'react-icons/ai'

export default function ProductsItem({ product }) {
    return (
        <div className='bg-white flex flex-col relative gap-y-1 items-center text-center text-sm font-semibold p-3'>
            <button className='absolute top-3 right-3 bg-white w-8 h-8 flex items-center justify-center border border-gray-200 rounded-lg text-brand-color shadow-md hover:bg-brand-color hover:text-brand-yellow hover:border-brand-color'>
                <AiOutlinePlus size={19} />
            </button>
            <img src={product.image} alt={product.title}></img>
            <div className='text-brand-color'>{product.price}</div>
            <div className='text-gray-900'>{product.title}</div>
            <div className='text-gray-500'>{product.alt}</div>
        </div>
    )
}
