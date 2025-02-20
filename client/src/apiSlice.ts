import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface ExampleResponse {
  message: string;
}

// Get the API URL from environment variables, fallback to a default if not set
const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: apiUrl }),
  endpoints: (builder) => ({
    getExample: builder.query<ExampleResponse, void>({
      query: () => 'example', // This will hit /api/example
    }),
  }),
});

export const { useGetExampleQuery } = api; 