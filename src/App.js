import React, { Component } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductContainer from "./container/ProductContainer";
import CartContainer from "./container/CartContainer";
import MessageContainer from "./container/MessageContainer";
class App extends Component {
  render() {
    return (
      <div className="hidden-sn animated deep-purple-skin">
        <div>
          {/* Header */}
          <Header />
          <main id="mainContainer">
            <div className="container">
              {/* Products */}
              <ProductContainer />
              {/* Message */}
              <MessageContainer />
              {/* Cart */}
              <CartContainer />
            </div>
          </main>
          {/* Footer */}
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
