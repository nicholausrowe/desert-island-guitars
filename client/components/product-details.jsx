import React from 'react';

export default class ProductDetails extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      product: null
    };
  }

  componentDidMount() {
    fetch(`/api/products.php?id=1`)
      .then(res => res.json())
      .then(response => this.setState({ product: response }));
  }

  // method to ProductDetails that retrieves the details of a specific product by id from the server with a GET request.e.g. "/api/products.php?id=1"

  render() {
    return null;

  }
}
