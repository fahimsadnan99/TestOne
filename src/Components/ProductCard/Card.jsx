import React from 'react'
import {TbCurrencyTaka} from "react-icons/tb" 

const Card = ({item}) => {

  return (
    <div className='space-y-5'>
      <img src={item?.product_img} className='w-[200px] h-[200px]'/>
       <p className='font-semibold text-black'>{item?.product_name}</p>
       <div className='flex justify-between font-semibold'>
        <p className='flex'><TbCurrencyTaka></TbCurrencyTaka>{item?.product_price}</p>
        <p className='text-red-600'>{item?.product_discount} % off</p>
       </div>
    </div>
  )
}

export default Card