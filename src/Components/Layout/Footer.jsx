import React from 'react'
import FooterImg from "../../assets/footerImg.svg"
const btn = ["About", "Contact", "Help"]

const Footer = () => {
  return (
    <div className='bg-[#404040] py-24'>
 <div className='mx-[100px] grid grid-cols-3 text-center'>
     <img src={FooterImg} alt="logo"/>

<div className='space-x-4'>
     {
      btn?.map((item,ind)=>{
        return <button className='text-white' key={ind}>{item}</button>
      })
     }
     </div>

     <p className='text-white'>English</p>
 </div>

    </div>
  )
}

export default Footer