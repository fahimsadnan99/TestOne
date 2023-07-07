import { configureStore } from '@reduxjs/toolkit'
import {ProductApi} from "./Reducers/ProductReducer"




const store = configureStore({
  reducer: {
          [ProductApi.reducerPath] : ProductApi.reducer
  },

  middleware :(gdm)=> 
   gdm().concat(ProductApi.middleware),
  
})

export default store