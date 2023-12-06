import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const authApi = createApi({
    reducerPath: 'authReducer',
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8080" }),
    endpoints: (builder) => ({
        register: builder.mutation({
            query: (credentials) => ({
                url: '/register',
                method: "POST",
                body: credentials
            })
        }),
        authenticate: builder.mutation({
            query: (credentials) => ({
                url: '/authenticate',
                method: "POST",
                body: credentials
            })
        })
    })
})