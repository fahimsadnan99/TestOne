import React, { useEffect, useState } from 'react'
import { useGetAllHotDilsApiQuery } from '../../Redux/Reducers/ProductReducer';
import Card from '../ProductCard/Card';

const Deal = () => {
  const {data,isLoading} = useGetAllHotDilsApiQuery()
  const [hotDeal,setHotDeal] = useState([])
  useEffect(()=>{
    let hotDeal =  data?.products[0]?.productData?.filter(product => product.product_type === "Your searched items");
   
   
     setHotDeal(hotDeal)
   
   },[data])

  return (
    <div className='mx-[100px]'>
       <div className='heroRightWrapper'>
        <p className='textHotDeal'>Your searched items</p>
        {isLoading &&  (<p className='font-bold'>Loading...</p>) }
        <div className='grid grid-cols-5 space-x-2 mt-10'>

        
        {
          hotDeal?.slice(0,5).map((item,index)=>{
            return <Card item={item} key={index}></Card>
          })


        }
        </div>
      </div>
        
    </div>
  )
}

export default Deal