import { apiInstance } from "../../api/apiInstance";

const productEndpoints = apiInstance.injectEndpoints({
  endpoints: (builder) => ({
    products: builder.query({
      query: () => "/products",
      transformResponse: (res) => {
        return res.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );
      },
      providesTags: ["Products"],
    }),
    addProduct: builder.mutation({
      query: (data) => ({
        url: "/product/new",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Products"],
    }),
  }),
  overrideExisting: false,
});

export const {
  useProductsQuery,
  useAddProductMutation,
  useLazyProductImageQuery,
} = productEndpoints;
