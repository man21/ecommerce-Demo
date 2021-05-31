import { combineReducers } from "redux";


import productsReducer from "../thunk/Product/reducer";
import cartReducer from "../thunk/Cart/reducer";
import wishListReducer from "../thunk/WishList/reducer";


const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
  wishList: wishListReducer,
});

export default rootReducer;