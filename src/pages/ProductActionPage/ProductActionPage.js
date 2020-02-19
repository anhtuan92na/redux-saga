import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {actAddProductApi, actGetProductApi, actUpdateProductApi} from "../../actions";

class ProductActionPage extends Component{
    constructor(props){
        super(props);
        this.state = {
            id: '',
            txtCode: '',
            txtName: '',
            txtPrice: '0',
            chkStatus: true
        }
    }

    // Hàm chạy duy nhất khi chạy component này
    componentDidMount() {
        let { match } = this.props;
        if(match) {
            let id = match.params.id;
            this.props.onEditProduct(id);
        }
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        if(nextProps && nextProps.itemEditing) {
            let { itemEditing } = nextProps;
            this.setState({
                id: itemEditing.id,
                txtName: itemEditing.name,
                txtCode: itemEditing.code,
                txtPrice: itemEditing.price,
                chkStatus: itemEditing.status
            });
        }
    }

    onHandleChange = (event) => {
        let target = event.target;
        let name = target.name;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name] : value
        });
    };

    onHandleSubmit = (event) => {
        let form = document.getElementById('frmRegister');
        if (form.checkValidity() === false) {
            alert('Vui lòng nhập đầy đủ thông tin!');
        }else{
            let { history } = this.props;
            let product = {
                code: this.state.txtCode,
                name: this.state.txtName,
                price: this.state.txtPrice,
                status: this.state.chkStatus
            };
            if(this.state.id !== '') {
                product.id = this.state.id;
                this.props.onUpdateProduct(product, history);
            }else{
                this.props.onAddProduct(product, history);
            }
        }
        event.preventDefault();
        event.stopPropagation();
        form.classList.add('was-validated');
    };

    render() {
        return (
            <section className="contact-form mt-5 mb-5">
                <div className="container">
                    <div className="card">
                        <div className="card-header bg-primary text-white">Thêm sản phẩm</div>
                        <div className="card-body">
                            <form id="frmRegister" className="needs-validation" noValidate onSubmit={ this.onHandleSubmit }>
                                <div className="form-group">
                                    <label htmlFor="txtCode">Mã sản phẩm:</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="txtCode"
                                        name="txtCode"
                                        required
                                        onChange={ this.onHandleChange }
                                        value={ this.state.txtCode }
                                    />
                                    <div className="invalid-feedback">Mã sản phẩm không được để trống.</div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="txtName">Tên sản phẩm:</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="txtName"
                                        name="txtName"
                                        required
                                        minLength="6"
                                        maxLength="32"
                                        onChange={ this.onHandleChange }
                                        value={ this.state.txtName }
                                    />
                                    <div className="invalid-feedback">Tên sản phẩm phải từ 6 - 32 ký tự.</div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="txtPrice">Giá sản phẩm:</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="txtPrice"
                                        name="txtPrice"
                                        required
                                        onChange={ this.onHandleChange }
                                        value={ this.state.txtPrice }
                                    />
                                    <div className="invalid-feedback">Giá sản phẩm không được để trống.</div>
                                </div>
                                <div className="form-group">
                                    <div className="custom-control custom-checkbox">
                                        <input
                                            className="custom-control-input"
                                            type="checkbox"
                                            name="chkStatus"
                                            onChange={ this.onHandleChange }
                                            checked={ this.state.chkStatus }
                                            id="chkStatus"
                                        />
                                        <label className="custom-control-label" htmlFor="chkStatus">Kích hoạt.</label>
                                    </div>
                                </div>
                                <br/>
                                <button type="submit" className="btn btn-primary">Lưu lại</button>&nbsp;
                                <Link to="/products" className="btn btn-danger">
                                    Quay lại
                                </Link>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        itemEditing: state.itemEditing
    }
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddProduct : (product, history) =>{
            dispatch(actAddProductApi(product, history));
        },
        onEditProduct : (id) =>{
            dispatch(actGetProductApi(id));
        },
        onUpdateProduct : (product, history) =>{
            dispatch(actUpdateProductApi(product, history));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductActionPage);