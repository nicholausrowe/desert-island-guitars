import React from 'react';
import ProductListItem from './product-list-item';

export default class ProductList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formatter: value =>
        new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD'
        }).format(value / 100),

      products: []
    };

    this.getProducts = this.getProducts.bind(this);
  }

  componentDidMount() {
    this.getProducts();
  }

  getProducts() {
    fetch(`/api/products.php`)
      .then(res => res.json())
      .then(response => this.setState({ products: response }));
  }

  render() {
    const allProductDomElements = [];
    for (let i = 0; i < this.state.products.length; i++) {

      const singleDomElement = <ProductListItem
        key= {this.state.products[i].id}
        id= {this.state.products[i].id}
        name= {this.state.products[i].name}
        price= {this.state.formatter(this.state.products[i].price)}
        shortDescription= {this.state.products[i].shortDescription}
        image= {this.state.products[i].image}
      />;
      allProductDomElements.push(singleDomElement);
    }

    return (
      <div className="row">
        {allProductDomElements}
      </div>

    );
  }

}
