import React from 'react';
import CartSummaryItem from './cart-summary-item';

function CartSummary(props) {
  var totalPrice = 0;
  props.cartArray.forEach(item => {
    totalPrice += item.price;
  });
  totalPrice = '$' + (totalPrice / 100).toFixed(2);
  var allCartItems = props.cartArray.map(product =>
    <div className="cartItemRow row border border-secondary rounded my-2" key={product.productId}>
      <CartSummaryItem item={product} />
    </div>
  );
  return (
    <React.Fragment>
      <div className="container">
        <h5 onClick={() => props.view('catalog', {})}>
          &larr; back to catalog</h5>
        <h2>Cart Summary</h2>
        {allCartItems}
        <div className="mt-2 d-inline-block mr-3">Item Total: {totalPrice}</div>
        <button type="button d-inline-block" className="btn btn-success"
          onClick={() => { props.view('checkout', {}); }}>
              Checkout
        </button>
      </div>
    </React.Fragment>
  );
}

export default CartSummary;
