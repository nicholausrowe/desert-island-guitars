<?php

if ($request['method'] === 'GET') {
  $link = get_db_link();
  if (!isset($_GET['productId'])) {
    $message = get_all_products($link);
  } else {
    $message = find_by_id($link);
  }
  $response['body'] = $message;
  send($response);
}

function get_all_products($link) {
  $sql =
    "SELECT
      image,
      name,
      price,
      productId,
      shortDescription
    FROM
      `products`";
  $result = $link->query($sql);
  $allProducts = $result->fetch_all(MYSQLI_ASSOC);
  return $allProducts;
}

function find_by_id($link) {
  if (!is_numeric($_GET['productId'])) {
    throw new ApiError('ID needs to be a number', 400);
  } else {
  $sql = "SELECT * FROM `products` WHERE `productId` = {$_GET['productId']}";
  $result = $link->query($sql);
  if (!empty($_GET['productId']) && mysqli_num_rows($result) === 0) {
    throw new ApiError("Stop trying to make Fetch happen. It's not happening. Invalid ID: {$_GET['productId']}", 404);
  };
  $singleProductData = mysqli_fetch_assoc($result);
  return $singleProductData;
  }
}
