import React, { Component } from "react";
import { connect } from "react-redux";
import Products from "../components/Products";
import Product from "../components/Product";

import PropTypes from "prop-types";
import { actAddToCart, actChangeMessage } from "./../actions/index";
class ProductContainer extends Component {
  render() {
    let { products } = this.props;

    return <Products>{this.showProducts(products)}</Products>;
  }
  showProducts(products) {
    let { onAddToCart, onChangeMessage } = this.props;

    let result = null;
    if (products.length > 0) {
      result = products.map((product, index) => {
        return (
          <Product
            key={index}
            product={product}
            onAddToCart={onAddToCart}
            onChangeMessage={onChangeMessage}
          />
        );
      });
    }
    return result;
  }
}
ProductContainer.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      inventory: PropTypes.number.isRequired,
      rating: PropTypes.number.isRequired,
    })
  ).isRequired,
  onChangeMessage: PropTypes.func.isRequired,
  onAddToCart: PropTypes.func.isRequired,
};

const mapSateToProps = (state) => {
  return {
    products: state.products,
  };
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    onAddToCart: (product) => {
      dispatch(actAddToCart(product, 1));
    },
    onChangeMessage: (message) => {
      dispatch(actChangeMessage(message));
    },
  };
};

export default connect(mapSateToProps, mapDispatchToProps)(ProductContainer);
