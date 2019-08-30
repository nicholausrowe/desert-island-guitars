import React from 'react';

export default function Header(props) {
  return (
    <nav className="navbar navbar-dark bg-dark">

      <span className="navbar-brand mb-0 h1">[logo] Wicked Sales</span>

      <span className="navbar-brand mb-0 h1">

      [icon] {props.cartItemCount} items</span>

    </nav>
  );
}
