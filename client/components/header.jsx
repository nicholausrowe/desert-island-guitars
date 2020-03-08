import React from 'react';

export default function Header(props) {
  return (
    <nav className="navbar navbar-dark bg-dark">

      <span className="navbar-brand mb-0 h1" onClick={() => { props.setView('catalog', {}); }}>
        <h2>desert island guitars</h2>
      </span>

      <span className="navbar-brand mb-0 h1">
        <h3 onClick={() => props.setView('cart', {})}>[cart]{props.cartItemCount} items</h3>
      </span>

    </nav>
  );
}
