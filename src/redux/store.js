import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice.js";
import productReducer from "./slices/productSlice.js";
import userReducer from "./slices/userSlice.js";


const store = configureStore({
  reducer: {
    cart: cartReducer,
    product: productReducer,
    user: userReducer,
  },
});

export { store };

//export type RootState = ReturnType<typeof store.getState>;
