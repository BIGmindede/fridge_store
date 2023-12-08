import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import Cookies from 'universal-cookie'

export const detailsApi = createApi({
    reducerPath: 'detailsReducer',
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8080/detail" }),
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
        getById: builder.query({
            query: (id) => {
                const cookies = new Cookies()
                return ({
                    url: `/getById/${id}`,
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