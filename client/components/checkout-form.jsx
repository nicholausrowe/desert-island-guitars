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

        <button
          type="button d-inline-block"
          className="btn btn-success"
          // onClick={() => { view('catalog', {}); }}>
        >
          Place Order
        </button>

      </React.Fragment>

    );
  }

}
