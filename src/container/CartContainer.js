import React, { Component } from "react";
import { connect } from "react-redux";
import Cart from "./../components/Cart";
import Cartitem from "../components/Cartitem";
import CartResult from "../components/CartResult";
import PropTypes from "prop-types";
import * as Message from "../constains/Message";
import {
  actRemoveProductInCart,
  actChangeMessage,
  actUpdateProductInCart,
} from "./../actions/index";

class CartContainer extends Component {
  render() {
    let { cart } = this.props;

    return (
      <Cart>
        {this.showCartItem(cart)}
        {this.showTotalAmount(cart)}
      </Cart>
    );
  }
  showCartItem = (cart) => {
    let { onRemoveProductInCart, onChangeMessage, onUpdateProductInCart } =
      this.props;
    let result = (
      <tr>
        <td>{Message.MSG_CART_EMPTY}</td>
      </tr>
    );
    if (cart.length >= 0) {
      result = cart.map((item, index) => {
        return (
          <Cartitem
            key={index}
            item={item}
            index={index}
            onRemoveProductInCart={onRemoveProductInCart}
            onChangeMessage={onChangeMessage}
            onUpdateProductInCart={onUpdateProductInCart}
          />
        );
      });
    }
    return result;
  };
  showTotalAmount = (cart) => {
    let result = null;
    if (cart.length > 0) {
      result = <CartResult cart={cart} />;
    }
    return result;
  };
}

CartContainer.propTypes = {
  cart: PropTypes.arrayOf(
    PropTypes.shape({
      product: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        inventory: PropTypes.number.isRequired,
        rating: PropTypes.number.isRequired,
      }).isRequired,
      quantity: PropTypes.number.isRequired,
    })
  ).isRequired,
  onRemoveProductInCart: PropTypes.func.isRequired,
  onChangeMessage: PropTypes.func.isRequired,
  onUpdateProductInCart: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    onRemoveProductInCart: (product) => {
      dispatch(actRemoveProductInCart(product));
    },
    onChangeMessage: (message) => {
      dispatch(actChangeMessage(message));
    },
    onUpdateProductInCart: (product, quantity) => {
      dispatch(actUpdateProductInCart(product, quantity));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
