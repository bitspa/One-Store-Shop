import { combineReducers } from "redux";
import { productReducer,selectedProductsReducer } from "./reducers";
 export const reducers=combineReducers({
  allProducts:productReducer,
  product: selectedProductsReducer,
})