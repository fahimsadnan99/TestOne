import React from 'react'
import { useSelector,useDispatch } from "react-redux"
import { Outlet } from 'react-router-dom'
import Header from './Components/Layout/Header'
import Footer from './Components/Layout/Footer'
const App = () => {
 
  return (
    <>
    <Header></Header>
    <Outlet></Outlet>
    <Footer></Footer>
    </>
  )
}

export default App