import React, {Component} from 'react';
import {Link} from "react-router-dom";
import ProductList from "../../components/ProductList/ProductList";
import ProductItem from "../../components/ProductItem/ProductItem";
import {connect} from 'react-redux';
import {actDeleteProductApi, actFetchProductsApi, actUpdateStatusProductApi} from "../../actions";

class ProductListPage extends Component{
    componentDidMount() {
        this.props.fetchAllProducts();
    }

    onDelete = (id) => {
        this.props.onDeleteProduct(id);
    };

    onUpdateStatus = (id, status) => {
        this.props.onUpdateStatusProduct(id, status);
    };

    render() {
        let { products } = this.props;
        return (
            <div className="container">
                <h2 className="text-center mt-5">Quản lý sản phẩm</h2>
                <br/>
                <Link to="/products/add" className="btn btn-primary">
                    Thêm sản phẩm
                </Link>
                <br/>
                <br/>

                <ProductList>
                    { this.showProductItems(products) }
                </ProductList>
            </div>
        );
    }

    showProductItems = (products) => {
        let result = null;
        if(products.length > 0){
            result = products.map((product, index) => {
                return (
                    <ProductItem
                        key={index}
                        product={product}
                        index={index}
                        onDelete={this.onDelete}
                        onUpdateStatus={this.onUpdateStatus}
                    />
                );
            });
        }
        return result;
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.products,
    }
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchAllProducts : () =>{
            dispatch(actFetchProductsApi());
        },
        onDeleteProduct : (id) =>{
            dispatch(actDeleteProductApi(id));
        },
        onUpdateStatusProduct : (id, status) =>{
            dispatch(actUpdateStatusProductApi(id, status));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductListPage);