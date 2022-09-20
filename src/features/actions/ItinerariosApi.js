import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const itiApi = createApi({
   
    reducerPath: "itiApi",

    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:4000/'
    }),

    endpoints: (builder) =>({
        getItineraries: builder.query({
            query: (id) => `itineraries/?city=${id}`,
            transformResponse: res => res.response
            
        }),

        //llamar en mytitneraries
        getUsersItineruis: builder.query({
            query: (id) => `itineraries/?users=${id}`,
            transformResponse: res => res.response
            
        })
        }),

      
        
    })
    

export default itiApi
export const {useGetItinerariesQuery} = itiApi