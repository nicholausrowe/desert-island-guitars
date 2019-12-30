import React from 'react';
import ProductListItem from './product-list-item';

export default class ProductList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
    this.getProducts = this.getProducts.bind(this);
    this.toDollars = this.toDollars.bind(this);
  }

  componentDidMount() {
    this.getProducts();
  }

  getProducts() {
    fetch('/api/products.php')
      .then(res => res.json())
      .then(response => this.setState({ products: response }));
  }

  toDollars(value) {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(value / 100);
  }

  render() {
    const productList = this.state.products.map(singleProductData => {
      return (
        <ProductListItem key={singleProductData.id}
          id={singleProductData.id}
          name={singleProductData.name}
          price={this.toDollars(singleProductData.price)}
          image={singleProductData.image}
          shortDescription={singleProductData.shortDescription}
          setView={this.props.setView}/>
      );
    });
    return (
      <div className="row">
        {productList}
      </div>
    );
  }
}
