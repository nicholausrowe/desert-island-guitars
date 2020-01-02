import React from 'react';
import Header from './header';
import ProductList from './product-list';
import ProductDetails from './product-details';
import CartSummary from './cart-summary';
import CheckoutForm from './checkout-form';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      view: {
        name: 'catalog',
        params: {}
      },
      cart: []
    };
    this.setView = this.setView.bind(this);
    this.getCartItems = this.getCartItems.bind(this);
    this.addToCart = this.addToCart.bind(this);
    this.placeOrder = this.placeOrder.bind(this);
    this.renderView = this.renderView.bind(this);
  }

  componentDidMount() {
    this.getCartItems();
  }

  setView(name, params) {
    this.setState(
      {
        view:
        {
          name: name,
          params: params
        }
      });
  }

  getCartItems() {
    fetch('/api/cart.php')
      .then(res => res.json())
      .then(response => this.setState({ cart: response }));
  }

  addToCart(product) {
    fetch('/api/cart.php', {
      method: 'POST',
      body: JSON.stringify(product)
    })
      .then(res => res.json())
      .then(product => {
        const newArray = this.state.cart.concat(product);
        this.setState({ cart: newArray });
      });
  }

  placeOrder() {

  }

  renderView() {
    switch (this.state.view.name) {
      case 'catalog':
        return (
          <ProductList
            setView={this.setView}/>
        );

      case 'details':
        return (
          <ProductDetails
            productId={this.state.view.params.productId}
            setView={this.setView}
            addToCart={this.addToCart}/>
        );

      case 'cart':
        return (
          <CartSummary
            cartArray={this.state.cart}
            view={this.setView}/>
        );

      case 'checkout':
        return (
          <CheckoutForm
            placeOrder={this.placeOrder}
            view={this.setView}/>
        );
    }
  }

  render() {
    return (
      <React.Fragment>
        <Header
          text="Wicked Sales"
          cartItemCount={this.state.cart.length}
          setView={this.setView}/>

        {this.renderView()}
      </React.Fragment>
    );
  }

}
