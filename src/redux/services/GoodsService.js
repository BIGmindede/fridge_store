import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import Cookies from 'universal-cookie'

export const goodsApi = createApi({
    reducerPath: 'goodsReducer',
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8080/item" }),
    endpoints: (builder) => ({
        getAll: builder.query({
            query: () => {
                const cookies = new Cookies()
                return ({
                    url: `/getAll`,
                    method: "POST",
                    headers: {
                        "Authorization": "Bearer " + cookies.get("jwt")
                    }
                })
            }
        }),
        getAll: builder.query({
            query: (sort) => {
                const cookies = new Cookies()
                return ({
                    url: `/getAll${sort}`,
                    method: "POST",
                    headers: {
                        "Authorization": "Bearer " + cookies.get("jwt")
                    }
                })
            }
        }),

        // authenticate: builder.mutation({
        //     query: (credentials) => ({
        //         url: '/authenticate',
        //         method: "POST",
        //         body: credentials
        //     })
        // })
    })
})