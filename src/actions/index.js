import * as types from './../constants/ActionTypes';
import callApi from "../utils/apiCaller";

export const actFetchProductsApi = () => {
    return (dispatch) => {
        return callApi('products', 'GET', null).then(res => {
            if(typeof res !== 'undefined' && res.status === 200){
                dispatch(actFetchProducts(res.data));
            }else{
                alert('Lỗi không tải được dữ liệu!');
            }
        });
    }
};

export const actFetchProducts = (products) => {
    return {
        type: types.FTECH_PRODUCTS,
        products: products
    }
};

export const actDeleteProductApi = (id) => {
    return (dispatch) => {
        return callApi(`products/${id}`, 'DELETE', null).then(res => {
            if(typeof res !== 'undefined' && res.status === 200){
                dispatch(actDeleteProduct(id));
            }else{
                alert('Lỗi không xóa được sản phẩm!');
            }
        });
    }
};

export const actDeleteProduct = (id) => {
    return {
        type: types.DELETE_PRODUCT,
        id: id
    }
};

export const actAddProductApi = (product, history) => {
    return (dispatch) => {
        return callApi('products', 'POST', product).then(res => {
            if(typeof res !== 'undefined' && res.status === 201){
                dispatch(actAddProduct(res.data));
                history.goBack();
            }else{
                alert('Tạo mới sản phẩm không thành công!');
            }
        });
    }
};

export const actAddProduct = (product) => {
    return {
        type: types.ADD_PRODUCT,
        product: product
    }
};

export const actGetProductApi = (id) => {
    return (dispatch) => {
        return callApi(`products/${id}`, 'GET', null).then(res => {
            if(typeof res !== 'undefined' && res.status === 200){
                dispatch(actGetProduct(res.data));
            }else{
                alert('Sản phẩm không tồn tại!');
            }
        });
    }
};

export const actGetProduct = (product) => {
    return {
        type: types.EDIT_PRODUCT,
        product: product
    }
};

export const actUpdateProductApi = (product, history) => {
    return (dispatch) => {
        return callApi(`products/${product.id}`, 'PUT', product).then(res => {
            if(typeof res !== 'undefined' && res.status === 200){
                dispatch(actUpdateProduct(product));
                history.goBack();
            }else{
                alert('Cập nhật sản phẩm không thành công!');
            }
        });
    }
};

export const actUpdateProduct = (product) => {
    return {
        type: types.UPDATE_PRODUCT,
        product: product
    }
};

export const actUpdateStatusProductApi = (id, status) => {
    return (dispatch) => {
        return callApi(`products/${id}`, 'PUT', {status: !status}).then(res => {
            if(typeof res !== 'undefined' && res.status === 200){
                dispatch(actUpdateStatusProduct(id, status));
            }else{
                alert('Cập nhật trạng thái sản phẩm không thành công!');
            }
        });
    }
};

export const actUpdateStatusProduct = (id, status) => {
    return {
        type: types.UPDATE_STATUS_PRODUCT,
        id: id,
        status: status
    }
};