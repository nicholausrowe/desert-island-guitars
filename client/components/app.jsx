import React from 'react';
import Header from './header';
import ProductList from './product-list';
import ProductDetails from './product-details';

export default class App extends React.Component {

  render() {
    return (
      <div>
        <Header text="Wicked Sales"/>
        <ProductList/>
        <ProductDetails/>
      </div>

    );
  }
}
