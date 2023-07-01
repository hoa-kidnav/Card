import React, { Component } from "react";
import * as Message from "../constains/Message";

class Cartitem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 1,
    };
  }

  render() {
    let { item } = this.props;

    let { quantity } = item;
    return (
      <tr>
        <th scope="row">
          <img
            src={item.product.image}
            alt={item.product.name}
            className="img-fluid z-depth-0"
          />
        </th>
        <td>
          <h5>
            <strong>{item.product.name}</strong>
          </h5>
        </td>
        <td>{item.product.price}$</td>
        <td className="center-on-small-only">
          <span className="qty">{quantity} </span>
          <div className="btn-group radio-group" data-toggle="buttons">
            <label
              className="btn btn-sm btn-primary
                                      btn-rounded waves-effect waves-light"
              onClick={() => {
                this.onUpdateQuantity(item.product, item.quantity - 1);
              }}
            >
              <a href="true">—</a>
            </label>
            <label
              className="btn btn-sm btn-primary
                                      btn-rounded waves-effect waves-light"
              onClick={() => {
                this.onUpdateQuantity(item.product, item.quantity + 1);
              }}
            >
              <a href="true">+</a>
            </label>
          </div>
        </td>
        <td>{this.showSubTotal(item.product.price, item.quantity)}$</td>
        <td>
          <button
            type="button"
            className="btn btn-sm btn-primary waves-effect waves-light"
            data-toggle="tooltip"
            data-placement="top"
            title=""
            data-original-title="Remove item"
            onClick={() => {
              this.onDelete(item.product);
            }}
          >
            X
          </button>
        </td>
      </tr>
    );
  }
  onUpdateQuantity = (product, quantity) => {
    let { onUpdateProductInCart, onChangeMessage } = this.props;
    if (quantity > 0) {
      onChangeMessage(Message.MSG_UPDATE_CART_SUCCESS);

      onUpdateProductInCart(product, quantity);
    }
  };
  onDelete(porduct) {
    let { onRemoveProductInCart, onChangeMessage } = this.props;
    onRemoveProductInCart(porduct);
    onChangeMessage(Message.MSG_DELETE_PRODUCT_IN_CART_SUCCESS);
  }
  showSubTotal = (price, quantity) => {
    return price * quantity;
  };
}

export default Cartitem;
