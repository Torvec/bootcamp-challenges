import { configureStore } from "@reduxjs/toolkit";
import cartReducer from '../components/Cart/cartSlice'

const reduxStore = configureStore({
    reducer: {
        cart: cartReducer,
    }
});

export default reduxStore;
