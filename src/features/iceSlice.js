import { createAsyncThunk, createSlice, isPending } from "@reduxjs/toolkit";
import getIce from "./iceService";

const iceSlice = createSlice({
  name: "ice",
  initialState: {
    products: [],
    cart: [],
    // qty: [],
    isLoading: false,
    isError: false,
    message: "",
  },
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.cart.find((item) =>
        item._id === action.payload._id
      );

      if (existingItem) {
        state.cart === state.cart.map((item) =>
          item._id === action.payload._id ? { ...item, qty: +item.qty++ } : item
        )
      } else {
        state.cart = [action.payload, ...state.cart]
      }
      console.log(existingItem)
    } ,

    deleteCart: (state, action) => {
      return {
        ...state,
        cart: state.cart.filter((sunny) => sunny._id !== action.payload),
      };
    },

    handleIncrement: (state, action) => {
      state.cart = state.cart.map((item) =>
        item._id === action.payload ? { ...item, qty: +item.qty + 1 } : item
      );
    },

    handleDecrement: (state, action) => {
      state.cart = state.cart.map((item) =>
        item._id === action.payload ? { ...item, qty: +item.qty - 1 } : item
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchIce.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.products = [];
      })
      .addCase(fetchIce.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.message = "";
        state.products = action.payload.data;
      })
      .addCase(fetchIce.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.error.message;
        state.products = [];
      });
  },
});

export const { addToCart, deleteCart, handleIncrement, handleDecrement } =
  iceSlice.actions;

export const fetchIce = createAsyncThunk("FETCH/ICE", async () => {
  try {
    return getIce();
  } catch (error) {
    throw new Error();
  }
});

export default iceSlice.reducer;
