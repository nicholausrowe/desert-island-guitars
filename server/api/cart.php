<?php

if ($request['method'] === 'GET') {
  $link = get_db_link();

  if (!isset($_SESSION['cart_id'])) {
    $response['body'] = [];
  } else {
    $response['body'] = get_cart_items($link);
  }
  send($response);

} else {
  if ($request['method'] === 'POST') {
    $link = get_db_link();

    if (!isset($request['body']['productId'])) {
      throw new ApiError('What kind of request is that? A bad one. That\'s what kind.', 400);
    } else {
      $cartId = check_cart_id($link);
      $productId = $request['body']['productId'];
      $response['body'] = added_to_cart($link, $cartId, $productId);
      send($response);
    }
  }
}

function get_cart_items($link) {
  $sqlCartItems =
    "SELECT
      c.cartItemId,
      c.price,
      c.productId,
      p.image,
      p.name,
      p.shortDescription
    FROM
      `cartItems` as c
    JOIN
      `products` as p
    ON
      c.productId = p.productId
    WHERE
      `cartId` = {$_SESSION['cart_id']}";

  $result = $link->query($sqlCartItems);
  $cartItems = $result->fetch_all(MYSQLI_ASSOC);
  return $cartItems;
}

function check_cart_id($link) {
  if (!isset($_SESSION['cart_id'])) {
    $_SESSION['cart_id'] = create_cart_id($link);
    return $_SESSION['cart_id'];
  };
  $cartId = $_SESSION['cart_id'];
  return $cartId;
}

function create_cart_id($link) {
  $sqlTimeStamp =
    "INSERT INTO
      carts (createdAt)
    VALUE
      (CURRENT_TIMESTAMP)";
  $link->query($sqlTimeStamp);
  $cartId = $link->insert_id;
  return $cartId;
}

function get_product_price($link, $productId) {
  $sqlProductPrice =
    "SELECT
      price
    FROM
      `products`
    WHERE
      `productId` = {$productId}";
  $result = $link->query($sqlProductPrice);
  $row = mysqli_fetch_assoc($result);
  $price = $row['price'];
  return $price;
}

function added_to_cart($link, $cartId, $productId) {
  $price = get_product_price($link, $productId);

  $sqlInsertCartItem =
    "INSERT INTO
      cartItems
    SET
      cartId = {$cartId},
      productId = {$productId},
      price = {$price}";
  $link->query($sqlInsertCartItem);
  $cartItemId = $link->insert_id;

  $sqlCartItem =
    "SELECT
      c.cartItemId,
      c.price,
      c.productId,
      p.image,
      p.name,
      p.shortDescription
    FROM
      `cartItems` as c
    JOIN
      `products` as p
    ON
      c.productId = p.productId
    WHERE
      `cartItemId` = {$cartItemId}";

  $result = $link->query($sqlCartItem);
  $cartItem = mysqli_fetch_assoc($result);
  return $cartItem;
}
