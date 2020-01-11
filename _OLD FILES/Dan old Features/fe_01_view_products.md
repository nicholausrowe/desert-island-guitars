# User can view the products for sale.

### Figma

The figma for this feature can be found [here](https://www.figma.com/file/BKByCT0h5swDTLY1XHGibRRr/wicked-sales?node-id=0%3A1).

### Task List

- [x] Create a figma that includes a `Header`, `ProductListItem`, and `ProductList` components.
- [x] Check out a branch from `dev` named `view-products-front-end`.
- [x] Define an `App` class component in `client/components/app.jsx`. `App` will have no initial state for now.
- [x] Define a stateless `Header` component in `client/components/header.jsx` that displays the store's name and logo. Add `Header` to `App`'s render method.
- [x] Define a stateless `ProductListItem` component in `client/components/product-list-item.jsx` that renders a single product card.
- [x] Define a stateful `ProductList` component in `client/components/product-list.jsx` that will render a grid of `ProductListItems`. Give it an initial state of `products` set to an empty `Array`.
- [x] Define a method in `ProductList` named `getProducts` that retrieves all products by sending a `GET` request to `/api/products.php`.
- [x] Add a `componentDidMount` method to `ProductList` that calls `getProducts`.
- [x] Add `ProductList` to `App`'s render method.
- [x] Push all commits to `origin view-products-front-end`.
- [x] Open a Pull Request from `view-products-front-end` to `dev`.
