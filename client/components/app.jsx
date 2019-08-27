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
        params: params
      }
      });
  }

  // Define a setView method in App that takes two parameters; name and params.setView replaces App's view state with the new name String and params Object.

  render() {

    if (this.state.view.name === 'catalog') {

      return (
        <div>
          <Header text="Wicked Sales" />
          <ProductList
            setView={this.setView} />
        </div>);

    } else {

      return (
        <div>
          <Header text="Wicked Sales" />
          <ProductDetails
            id={this.state.view.params.id}
            setView={this.setView}/>
        </div>
      );
    }
  }
}
