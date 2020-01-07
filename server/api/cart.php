<?php

if ($request['method'] === 'GET') {
  $link = get_db_link();
  // $message = check_connection($link);

  if (!isset($_SESSION['cart_id'])) {

    $response['body'] = [];
    send($response);
  };
} else {
  if ($request['method'] === 'POST') {
    if (!isset($request['body']['productId'])) {
      throw new ApiError('GOD DAMN IT. What kind of request is that? A bad one. That\'s what kind.', 400);
    } else {
      $productPrice =
        "SELECT
          price
        FROM
          `products`
        WHERE
          `productId` = {$_GET['productId']}";

    }
  };
}



$sqlTimeStamp =
  "INSERT INTO
    `carts` (createdAt)
  VALUE
    (CURRENT_TIMESTAMP)";

$timeStamp = $link->query($sqlTimeStamp);
$cartId = $timeStamp->insert_id;


$sqlCartItems =
  "INSERT INTO
    `cartItems`
      (cartId,
      `productId`,
      `price`)
  VALUES
    ($cartId,
      {$_GET['productId']},
      $productPrice)";

$item = $link->query($sqlCartItems);
$cartItemId = $item->insert_id;




// function check_connection($link) {
//   $sql = 'select 1';
//   $link->query($sql);
//   return 'Successfully connected to MySQL!';
// }
