import * as types from './../constants/ActionTypes';
import {findIndex} from "lodash";

let initialState = [];

const products = (state = initialState, action) => {
    let index = -1;
    switch (action.type) {
        case types.FTECH_PRODUCTS:
            state = action.products;
            return [...state];
        case types.DELETE_PRODUCT:
            index = findIndex(state, function(t) {
                return t.id === action.id;
            });
            if(index !== -1){
                state.splice(index, 1);
            }
            return [...state];
        case types.ADD_PRODUCT:
            state.push(action.product);
            return [...state];
        case types.UPDATE_PRODUCT:
            index = findIndex(state, function(t) {
                return t.id === action.product.id;
            });
            if(index !== -1){
                state[index] = action.product;
            }
            return [...state];
        case types.UPDATE_STATUS_PRODUCT:
            index = findIndex(state, function(t) {
                return t.id === action.id;
            });
            if(index !== -1){
                state[index] = {
                    ...state[index],
                    status: !action.status
                };
            }
            return [...state];
        default:
            return [...state];
    }
};

export default products;