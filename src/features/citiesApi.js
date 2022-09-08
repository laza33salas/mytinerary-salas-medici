import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

//CreateApi es solo una configuracion
const citiesApi = createApi({
    //Este es el nombre q le ponemos
    reducerPath: "citiesApi",
    
    //url
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:4000/",
    }),
        
//Aca vamos a definir todos los endpoints
    endpoints: (builder) =>({
        getAllCities: builder.query({
            query: (search) => `/cities/?city=${search}`
        })
        })
    })

    export default citiesApi
    export const {useGetAllCitiesQuery} = citiesApi