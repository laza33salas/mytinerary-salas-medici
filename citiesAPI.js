import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const eventsAPI = createApi({
    reducerPath : "eventsAPI",

    baseQueary : fetchBaseQuery({
        baseUrl : "http://localhost:4000/"
    }),

    endpoint: (builder) => {
        getAllCities : builder.query({
            query: "/cities"
        })

    }
})

export default eventsAPI
export const {getAllCitiesQuery} = eventsAPI