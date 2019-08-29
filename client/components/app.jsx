import React from 'react';
import Header from './header';
import ProductList from './product-list';
import ProductDetails from './product-details';

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
  }

  componentDidMount() {
    this.getCartItems();
  }

  setView(name, params) {
    this.setState(
      { view:
        { name: name,
          params: params
        }
      });
  }

  getCartItems() {
    fetch(`/api/cart.php`)
      .then(res => res.json())
      .then(response => this.setState({ cart: response }));
  }

  addToCart(product) {

  }

  // Define a method in App named addToCart with one parameter, product, which is a product Object.addToCart should POST the product to "/api/cart.php" before adding it to the App's cart state.

  render() {

    if (this.state.view.name === 'catalog') {

      return (
        <div>
          <Header
            text="Wicked Sales"
            cartItemCount={this.state.cart.length}/>
          <ProductList
            setView={this.setView}/>
        </div>);

    } else {

      return (
        <div>
          <Header
            text="Wicked Sales"
            cartItemCount={this.state.cart.length}/>
          <ProductDetails
            id={this.state.view.params.id}
            setView={this.setView}/>
        </div>
      );
    }
  }
}
