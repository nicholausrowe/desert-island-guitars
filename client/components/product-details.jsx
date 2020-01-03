import React from 'react';

export default class ProductDetails extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      product: null
    };
  }

  componentDidMount() {
    fetch('/api/products' + '?productId=' + this.props.productId)
      .then(res => res.json())
      .then(response => this.setState({ product: response }));
  }

  render() {

    const product = this.state.product;

    if (!product) {
      return null;
    } else {
      return (

        <div className="container">

          <div className="row" >
            <div className="col">
              <h5 onClick={() => this.props.setView('catalog', {})}>
              &larr; back to catalog</h5>
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

              <a href="#" className="btn btn-primary"
                onClick={() => this.props.addToCart(product)}>
                  Add to Cart</a>
            </div>
          </div>

          <div className="row">
            <p className="card-text">{product.longDescription}</p>
          </div>

        </div>

      );
    }
  }

}
