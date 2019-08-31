import React from 'react';

export default class CheckoutForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <React.Fragment>
        <div className="col-md-7 centered">
          <h2>Checkout</h2><br/>
          <form>

            <div className="form-group">
              <label htmlFor="inputEmail4">First Name</label>
              <input type="email" className="form-control" id="inputEmail4" placeholder="First Name"></input>
            </div>
            <div className="form-group">
              <label htmlFor="inputPassword4">Last Name</label>
              <input type="password" className="form-control" id="inputPassword4" placeholder="Last Name"></input>
            </div>

            <div className="form-group">
              <label htmlFor="inputAddress">Address 1</label>
              <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St"></input>
            </div>

            <div className="form-group">
              <label htmlFor="inputAddress2">Address 2</label>
              <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"></input>
            </div>

            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="inputCity">City</label>
                <input type="text" className="form-control" id="inputCity"></input>
              </div>

              <div className="form-group col-md-4">
                <label htmlFor="inputState">State</label>
                <select id="inputState" className="form-control">
                  <option selected>Choose...</option>
                  <option>...</option>
                </select>
              </div>

              <div className="form-group col-md-2">
                <label htmlFor="inputZip">Zip</label>
                <input type="text" className="form-control" id="inputZip"></input>
              </div>
            </div>

          </form>

          <button
            type="button d-inline-block"
            className="btn btn-success"
            onClick={() => { this.props.view('catalog', {}); }}>

            Place Order
          </button>

        </div>
      </React.Fragment>

    );
  }

}
