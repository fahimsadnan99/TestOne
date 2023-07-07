import React from 'react'


const btnLvl = ["Fresh","Today’s Deals","Mobiles","Gift Cards","Women Clothing","Men Clothing","Kids Clothing","Health","Pet corner","Books","Beauty","Kitchen","Bed Room","Sport","Bags"]

const SearchByBtn = () => {
  return (
    <div className='mx-[100px] color-[#606060] space-x-1 font-medium'>

        {
           
            btnLvl.map((item,index)=>{
                return <button key={index}>{item}</button>
            })
        }
    </div>
  )
}

export default SearchByBtn