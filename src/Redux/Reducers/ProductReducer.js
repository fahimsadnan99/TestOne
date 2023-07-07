import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

export const ProductApi = createApi({
    reducerPath : "products",
    baseQuery : fetchBaseQuery({baseUrl : "https://api.hiring.masterkey.tech/api/v1/"}),
    endpoints : (base)=>({
        getAllHotDilsApi : base.query({
            query : ()=> "products",
        }),

       
    })
})


export const {useGetAllHotDilsApiQuery} = ProductApi