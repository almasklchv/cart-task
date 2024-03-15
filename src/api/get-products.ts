import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Products } from "../types/product.interface";

const BASE_URL = "https://dummyjson.com/";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: (build) => ({
    getProductsByCartId: build.query<Products, number>({
      query: (id) => `carts/${id}`,
    }),
  }),
});

export const { useGetProductsByCartIdQuery } = productsApi;
