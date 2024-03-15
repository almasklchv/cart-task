import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Product } from "../../../types/product.interface";

export interface CartState {
  products: Product[];
  totalPrice: number;
}

const initialState = {
  products: [] as Product[],
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<Product>) => {
      state.products.push(action.payload);
      state.totalPrice += action.payload.price * action.payload.quantity;
    },
    removeProduct: (state, action: PayloadAction<Product>) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload.id
      );
      state.totalPrice -= action.payload.price * action.payload.quantity;
    },
    incrementTotalPrice: (state, action: PayloadAction<number>) => {
      state.totalPrice += action.payload;
    },
    decrementTotalPrice: (state, action: PayloadAction<number>) => {
      state.totalPrice -= action.payload;
    },
  },
});

export const {
  addProduct,
  removeProduct,
  incrementTotalPrice,
  decrementTotalPrice,
} = cartSlice.actions;

export default cartSlice.reducer;
