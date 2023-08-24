import { configureStore } from '@reduxjs/toolkit'
export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

import { baseApi } from './base-api'

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(baseApi.middleware),
})
