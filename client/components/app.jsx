import React from 'react';
import Header from './header';
import ProductList from './product-list';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      view: {
        name: 'catalog',
        params: {}
      }
    };
  }

  setView(name, params) {
    this.setState();
  }
  // Define a setView method in App that takes two parameters; name and params.setView replaces App's view state with the new name String and params Object.

  render() {
    return (
      <div>
        <Header text="Wicked Sales"/>
        <ProductList/>
      </div>

    );
  }
}
