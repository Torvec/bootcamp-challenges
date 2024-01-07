import { configureStore } from "@reduxjs/toolkit";
import cartReducer from '../components/Cart/cartSlice'
import cartItemReducer from '../components/CartItem/cartItemSlice'
import categoryMenuReducer from "../components/CategoryMenu/categoryMenuSlice";
import productListReducer from "../components/ProductList/productListSlice"
import productItemReducer from "../components/ProductItem/productItemSlice";


const reduxStore = configureStore({
    reducer: {
        cart: cartReducer,
        cartItem: cartItemReducer,
        categoryMenu: categoryMenuReducer,
        productList: productListReducer,
        productItem: productItemReducer,
    }
});

export default reduxStore;
