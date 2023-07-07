import React from 'react'
import Search from '../Components/Search/Search'
import SearchByBtn from '../Components/Search/SearchByBtn'
import HeroSection from "../Components/Hero/index"
import Banner from "../Components/ImgGarrary/ImgGallary"
import Banner1 from "../Components/ImgGarrary/ImgGallary1"
import Deal from "../Components/Deal/Deal"
import YourSrc from "../Components/Deal/YourSrc"
import DealFuntiture from '../Components/Deal/DealFurniture'
import Review from '../Components/Deal/Review'


const Home = () => {
  return (
    <div>
    <hr className='bg-black mx-[100px]'></hr>
     <Search></Search>
     <SearchByBtn></SearchByBtn>
     <HeroSection></HeroSection>
     <Banner></Banner>
     <Deal></Deal>
     <YourSrc></YourSrc>
     <Banner1></Banner1>
     <DealFuntiture></DealFuntiture>
     <Review></Review>

    </div>
  )
}

export default Home