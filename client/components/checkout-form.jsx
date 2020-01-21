import React from 'react';

export default class CheckoutForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      orderDetails: {
        name: '',
        creditCard: '',
        shippingAddress: ''

      }
    };
    this.handleChange = this.handleChange.bind(this);

  }

  handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState(prevState => ({
      orderDetails: {
        ...prevState.orderDetails,
        [name]: value
      }
    }));
  }

  render() {
    return (
      <React.Fragment>
        <div className="col-md-7 centered">
          <h2>Checkout</h2><br/>
          <form>

            <div className="form-group">
              <label htmlFor="inputName">First Name</label>
              <input
                type="text"
                name="name"
                value={this.state.orderDetails.name}
                onChange={this.handleChange}
                className="form-control"
                id="inputName"
                placeholder="Name"></input>
            </div>

            <div className="form-group">
              <label htmlFor="inputCreditCard">Credit Card</label>
              <input
                type="text"
                name="creditCard"
                value={this.state.orderDetails.creditCard}
                onChange={this.handleChange}
                className="form-control"
                id="inputCreditCard"
                placeholder="Credit Card"></input>
            </div>

            <div className="form-group">
              <label htmlFor="inputAddress1">Address 1</label>
              <input
                type="text"
                name="shippingAddress"
                value={this.state.orderDetails.shippingAddress}
                onChange={this.handleChange}
                className="form-control"
                id="inputAddress1"
                placeholder="1234 Main St"></input>
            </div>

            <div className="form-group">
              <label htmlFor="inputAddress2">Address 2</label>
              <input
                type="text"
                name="shippingAddress2"
                // value={this.state.name}
                onChange={this.handleChange}
                className="form-control"
                id="inputAddress2"
                placeholder="Apartment, studio, or floor"></input>
            </div>

            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="inputCity">City</label>
                <input
                  type="text"
                  name="city"
                  // value={this.state.name}
                  onChange={this.handleChange}
                  className="form-control"
                  id="inputCity"></input>
              </div>

              <div className="form-group col-md-4">
                <label htmlFor="inputState">State</label>
                <select
                  // value={this.state.name}
                  onChange={this.handleChange}
                  id="inputState"
                  className="form-control">

                  <option selected>Choose...</option>
                  <option>AZ</option>
                  <option>CA</option>
                </select>
              </div>

              <div className="form-group col-md-2">
                <label htmlFor="inputZip">Zip</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputZip"></input>
              </div>
            </div>

          </form>
          <h5 onClick={() => this.props.view('catalog', {})}>
            &larr; Continue Shopping</h5>

          <button
            type="button d-inline-block"
            className="btn btn-success"
            onClick={() => { this.props.placeOrder(this.state.orderDetails); }}>

            Place Order
          </button>

        </div>
      </React.Fragment>

    );
  }

}
