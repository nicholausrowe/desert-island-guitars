import React from 'react';

export default function Header(props) {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <span className="navbar-brand mb-0 h1">Wicked Sales</span>
    </nav>
  );
}

// Modify Header to receive a cartItemCount prop that is the number of items in App's cart state. Header should display a shopping cart icon with the number of items in the user's cart.
