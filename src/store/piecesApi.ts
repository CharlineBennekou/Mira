import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Piece } from '../../types/Piece';

export const piecesApi = createApi({
  reducerPath: 'piecesApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/' }),
  endpoints: (builder) => ({
    fetchPieces: builder.query<Piece[], void>({
      query: () => 'pieces'
    }),
  }),
});

export const { useFetchPiecesQuery } = piecesApi;
