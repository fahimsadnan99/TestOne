import React, { useEffect, useState } from 'react'
import "./Style/HeroRight.css"
import { useGetAllHotDilsApiQuery } from '../../Redux/Reducers/ProductReducer'
import Card from "../ProductCard/Card"


export const HeroRight = () => {
  const {data,isLoading} = useGetAllHotDilsApiQuery()

  const [hotDeal,setHotDeal] = useState([])

 
useEffect(()=>{
 let hotDeal =  data?.products[0]?.productData?.filter(product => product.product_type === "hot deals for you");


  setHotDeal(hotDeal)

},[data])
  return (
    <div>

      <div className='heroRightWrapper'>
        <p className='textHotDeal'>hot deals for you</p>
        {isLoading &&  (<p className='font-bold'>Loading...</p>) }
        <div className='grid grid-cols-3 space-x-2 mt-10'>

        
        {
          hotDeal?.map((item,index)=>{
            return <Card item={item} key={index}></Card>
          })


        }
        </div>
      </div>

    </div>
  )
}
