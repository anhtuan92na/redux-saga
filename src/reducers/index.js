import { combineReducers } from "redux";
import products from "./products";
import itemEditing from "./itemEditing";

const myReducer = combineReducers({
    products: products,
    itemEditing: itemEditing
});

export default myReducer;