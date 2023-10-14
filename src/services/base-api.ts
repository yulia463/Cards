import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const baseApi = createApi({
  reducerPath: 'baseApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.flashcards.andrii.es',
    credentials: 'include',
    prepareHeaders: headers => {
      headers.append('x-auth-skip', 'true')
      headers.append('Authorization', `Bearer ${localStorage.getItem('token')}`)
    },
  }),
  endpoints: builder => {
    return {
      getDecks: builder.query<any, void>({
        query: () => `v1/decks`,
      }),
      getUserData: builder.query<any, void>({
        query: () => `/v1/auth/me`,
      }),
    }
  },
})

export const { useGetDecksQuery, useGetUserDataQuery } = baseApi
// import { createApi } from '@reduxjs/toolkit/query/react'
// import {customFetchBase} from "src/services/base-api-refetch.ts";
//
// export const baseApi = createApi({
//   reducerPath: 'baseApi',
//   tagTypes: ['Decks', 'Cards', 'Me'],
//   baseQuery: customFetchBase,
//   endpoints: () => ({}),
// })
