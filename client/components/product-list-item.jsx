import React from 'react';

export default function ProductListItem(props) {

  return (
    <div className="card" style={{ width: '18rem' }}>
      <img className="card-img-top" src={props.image} alt="Card image cap"></img>
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <h5 className="card-subtitle text-muted">{props.price}</h5>
        <p className="card-text">{props.shortDescription}</p>
      </div>
    </div>

  );
}
