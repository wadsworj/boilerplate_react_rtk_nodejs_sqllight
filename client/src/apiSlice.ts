import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface ExampleResponse {
  message: string;
}

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }), // Adjust this URL as needed
  endpoints: (builder) => ({
    getExample: builder.query<ExampleResponse, void>({
      query: () => 'example', // This will hit /api/example
    }),
  }),
});

export const { useGetExampleQuery } = api; 