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
      .then(response => this.setState({ products: response }));
  }

  // Define a method in App named getCartItems that retrieves the user's cart items with a GET request to "/api/cart.php"

  render() {

    if (this.state.view.name === 'catalog') {

      return (
        <div>
          <Header text="Wicked Sales" />
          <ProductList
            setView={this.setView}/>
        </div>);

    } else {

      return (
        <div>
          <Header text="Wicked Sales"/>
          <ProductDetails
            id={this.state.view.params.id}
            setView={this.setView}/>
        </div>
      );
    }
  }
}
