import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

const usersApi = createApi({
    reducerPath: "usersApi",

    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:4000/",
    }),

    endpoints: (builder) =>({
        userSignOut: builder.mutation({
            query: (user) => ({
                url: "/users/logout",
                method: "POST",
                body: "user"
            })
        })
    })
})

export default usersApi
export const {useUserSignOutMutation} = usersApi