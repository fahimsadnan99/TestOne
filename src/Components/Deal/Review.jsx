import React from 'react'
import M1 from "../../assets/M1.svg"
import M2 from "../../assets/M2.svg"
import Rating from "../../assets/RatingImg.svg"

const Review = () => {
  return (
    <div className='mx-[100px]'>
    <div className='heroRightWrapper'>
     <p className='textHotDeal'>Review your purchase</p>
 <div className='grid grid-cols-2 space-x-10'>


<div className='flex justify-around items-center ring-1 shadow-sm rounded-2xl p-5 my-10'>
  <img src={M1} alt='mobile'></img>
  <div className='space-y-4'>
    <p className='text-black font-bold'>2021 Apple iPad Pro with Apple M1 chip (12.9-inch/32.77 cm, Wi-Fi, 128GB)</p>

    <p className='text-black font-semibold'>you bought it at the best price </p>
    
    <p className='text-black font-bold text-lg'>₹99,900.00</p>
    <img src={Rating}></img>

  </div>
</div>



<div className='flex justify-around items-center ring-1 shadow-sm rounded-2xl p-5 my-10'>
  <img src={M2} alt='mobile'></img>
  <div className='space-y-4'>
    <p className='text-black font-bold'>iPhone 14 Pro Max with Apple M1 chip (6.7-inch/17.0 cm, 128GB)</p>

    <p className='text-black font-semibold'>you bought it at the best price </p>
    
    <p className='text-black font-bold text-lg'> ₹1,39,900.00
</p>
    <img src={Rating}></img>

  </div>
</div>

 </div>
     </div>
     </div>
  )
}

export default Review