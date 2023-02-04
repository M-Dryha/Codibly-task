import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://reqres.in/api/',
  }),
  tagTypes: ['products'],
  endpoints(build) {
    return {
      getProductsByPagination: build.query({
        query: (pages = 1) => `products?per_page=5&page=${pages}`,
        providesTags: ['products'],
      }),
      getProducts: build.query({
        query: () => ({
          url: 'products?per_page=12',
          method: 'get',
        }),
        providesTags: ['products'],
      }),
    };
  },
});

export const { useGetProductsQuery, useGetProductsByPaginationQuery } =
  productApi;
