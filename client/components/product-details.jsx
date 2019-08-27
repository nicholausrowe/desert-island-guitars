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

    const product = this.state.product;

    if (!product) {
      return null;
    } else {
      return (

        <div className="container">
          <div className="row">
            <div className="col">
              <h5>&larr; back to catalog</h5>
            </div>
          </div>

          <div className="row">
            <div className="col">
              <img src={product.image}></img>
            </div>
            <div className="col">
              <h2 className="card-title">{product.name}</h2>
              <h3 className="card-subtitle text-muted">{product.price}</h3>
              <p className="card-text">{product.shortDescription}</p>
            </div>
          </div>

          <div className="row">
            <p className="card-text">{product.longDescription}</p>
          </div>

        </div>

      );
    }
  }

  // Complete the implementation of ProductDetails's render method to conditionally render a view of the product's details(as soon as the details are loaded from the server).

}
