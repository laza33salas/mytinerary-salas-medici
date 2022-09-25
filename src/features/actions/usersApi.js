import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

const usersApi = createApi({
    reducerPath: "usersApi",

    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:4000/",
    }),

    endpoints: (builder) => ({
        userSignUp: builder.mutation({
            query: (user) => ({
                url: "/users/signup",
                method: "POST",
                body: user
            }),
        }),

        getOneUser: builder.query({
            query: (id) => `/users/${id}`,
            transformResponse: res => res.response
        }),

        userSignIn: builder.mutation({
            query: (user) => ({
                url: "/users/signin",
                method: "POST",
                body: user
            }),
        }),

        userSignOut: builder.mutation({
            query: (user) => ({
                url: "/users/signout",
                method: "POST",
                body: user
            })
        })
    })
})


export default usersApi
export const { useUserSignUpMutation, useUserSignInMutation, useUserSignOutMutation, useGetOneUserQuery } = usersApi