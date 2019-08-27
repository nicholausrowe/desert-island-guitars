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
      }
    };

    this.setView = this.setView.bind(this);
  }

  setView(name, params) {
    this.setState(
      { view: {
        name: name,
        params: params,
        cart: []
      }
      });
  }

  //  Add an initial state property to App named cart set to an empty Array.

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
