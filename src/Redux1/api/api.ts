// src/commonApi.ts

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl = 'http://192.168.0.244:4000';


const user_id = localStorage.getItem("user_id");


export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl }),
  tagTypes: ['Post', 'User'],
  endpoints: (builder) => ({
    getInitialToken: builder.query<any, void>({
      query: () => ({
        url: `/api/v1/configuration/user/all/${user_id}`,
      }),
    }),
  }),
});


export const {useGetInitialTokenQuery} = api;