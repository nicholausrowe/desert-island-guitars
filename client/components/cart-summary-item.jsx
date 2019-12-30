import React from 'react';

function CartSummaryItem(props) {
  var price = props.item.price;
  price = '$' + (price / 100).toFixed(2);

  return (
    <React.Fragment>
      <div className="col-sm">
        <img src={props.item.image} alt="item image" className=" itemImage mt-1"></img>
      </div>

      <div className="col font-weight-bold">
        {props.item.name}
        <div className="font-weight-light">
          {price}
        </div>
        <div className="font-weight-normal">
          {props.item.shortDescription}
        </div>
      </div>

    </React.Fragment>
  );
}

export default CartSummaryItem;
