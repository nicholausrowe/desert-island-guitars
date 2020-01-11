<?php

if ($request['method'] === 'GET') {
  $link = get_db_link();

  if (!isset($_SESSION['cart_id'])) {
    $response['body'] = [];
  } else {
    get_cart_items($link);}

} else {
  if ($request['method'] === 'POST') {
    $link = get_db_link();

    if (!isset($request['body']['productId'])) {
      throw new ApiError('GOD DAMN IT. What kind of request is that? A bad one. That\'s what kind.', 400);
    } else {
      $productId = $request['body']['productId'];
      $message = add_to_cart($link, $productId);
      $response['body'] = $message;
    }
  }
}

send($response);

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

function add_to_cart($link, $productId) {
  $cartId = create_cart_id($link);
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

  $sqlItemInfoJoin =
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
  $joinResult = $link->query($sqlItemInfoJoin);
  $itemAssoc = mysqli_fetch_assoc($joinResult);
  $_SESSION['cart_id'] = $cartId;
  return $itemAssoc;
}

function get_cart_items($link) {
  $sqlGetCartItems =
   "SELECT * FROM cartItems
    WHERE cartId = {$_SESSION['cart_id']}";
  $getResult = $link->query($sqlGetCartItems);
  $allCartItems = $getResult->fetch_all(MYSQLI_ASSOC);
  return $allCartItems;
}
