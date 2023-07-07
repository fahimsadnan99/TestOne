import React, { useEffect, useState } from 'react'
import {CiLocationOn} from "react-icons/ci"
import { useGetAllHotDilsApiQuery } from '../../Redux/Reducers/ProductReducer'
import Card from '../ProductCard/Card'

const Search = () => {
  const [item,setImte] = useState()
  const {data,isLoading} = useGetAllHotDilsApiQuery()
  const [inputBox,setInputBox] = useState("")
  const [hotDeal,setHotDeal] = useState([])
  useEffect(()=>{
    let hotDeal =  data?.products[0]?.productData?.filter(product => product?.product_name.includes(inputBox));

   
     setHotDeal(hotDeal)
   
   },[data,inputBox])
  



  console.log(hotDeal);
  return (
    <div className='mx-[100px] grid grid-cols-2 my-3'>
    <div>
     <button className='bg-[#FFAE5D] flex space-x-2 rounded-lg px-1 font-medium'><CiLocationOn className='text-lg font-medium mt-1'></CiLocationOn> <span>Dhaka,1212</span></button>
    </div>

    <div className='ml-auto'>
     <input className='w-[300px] rounded-lg px-4 ring-1 ring-black/25 text-lg ' placeholder='search' onChange={(e)=> setInputBox(e.target.value)}></input>
    </div>

  {
    inputBox?.length && (
      <div className='mx-[100px] grid grid-cols-5'>
        {
          hotDeal?.map((item,ind)=>{
            return <Card item={item} key={ind}></Card>
          })
        }
    </div>
    )
  }
    
   </div>
  )
}

export default Search