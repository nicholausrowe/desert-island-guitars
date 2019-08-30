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
    this.addToCart = this.addToCart.bind(this);
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
    fetch(`/api/cart.php`, {
      method: 'POST',
      body: JSON.stringify(product)
    })
      .then(res => res.json())
      .then(product => {
        const newArray = this.state.cart.concat(product);
        this.setState({ cart: newArray });
      });

  }

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
            setView={this.setView}
            addToCart={this.addToCart}/>
        </div>
      );
    }
  }
}
