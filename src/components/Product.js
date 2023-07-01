import React, { Component } from "react";
import * as Message from "../constains/Message";
class Product extends Component {
  render() {
    let { product } = this.props;
    return (
      <div className="col-lg-4 col-md-6 mb-r">
        <div className="card text-center card-cascade narrower">
          <div className="view overlay hm-white-slight z-depth-1">
            <img src={product.image} className="img-fluid" alt={product.name} />
            <a href="true">
              <div className="mask waves-light waves-effect waves-light" />
            </a>
          </div>
          <div className="card-body">
            <h4 className="card-title">
              <strong>
                <a href="true">{product.name}</a>
              </strong>
            </h4>
            <ul className="rating">
              <li>{this.showRatings(product.rating)}</li>
            </ul>
            <p className="card-text">{product.desciption}</p>
            <div className="card-footer">
              <span className="left">{product.price}$</span>
              <span className="right">
                <a
                  href
                  className="btn-floating blue-gradient"
                  data-toggle="tooltip"
                  data-placement="top"
                  title=""
                  onClick={() => this.onAddToCart(product)}
                  data-original-title="Add to Cart"
                >
                  <i className="fa fa-shopping-cart" />
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
  onAddToCart = (product) => {
    this.props.onAddToCart(product);
    this.props.onChangeMessage(Message.MSG_ADD_TO_CART_SUCCESS);
  };
  showRatings(rating) {
    let result = [];
    for (let i = 1; i <= rating; i++) {
      result.push(<i key={i} className="fa fa-star" />);
    }
    for (let i = 1; i <= 5 - rating; i++) {
      result.push(<i key={i + 6} className="fa fa-star-o" />);
    }
    return result;
  }
}

export default Product;
