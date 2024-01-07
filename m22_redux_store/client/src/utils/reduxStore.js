import { configureStore } from "@reduxjs/toolkit";
import cartReducer from '../components/Cart/cartSlice'
import cartItemReducer from '../components/CartItem/cartItemSlice'
import categoryMenuReducer from "../components/CategoryMenu/categoryMenuSlice";

const reduxStore = configureStore({
    reducer: {
        cart: cartReducer,
        cartItem: cartItemReducer,
        categoryMenu: categoryMenuReducer,
    }
});

export default reduxStore;
