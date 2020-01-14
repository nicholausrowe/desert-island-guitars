<?php

if ($request['method'] === 'POST') {
  $link = get_db_link();
  $cartId = $_SESSION['cart_id'];
  $name = $request['body']['name'];
  $creditCard = $request['body']['creditCard'];
  $shippingAddress = $request['body']['shippingAddress'];

  if (!isset($cartId)) {
    throw new ApiError('Ain\'t shit here yet. An active shopping cart is required.', 400);
  } else {
    check_customer_info($name, $creditCard, $shippingAddress);
    $message = create_order($link, $cartId, $name, $creditCard, $shippingAddress);
  }
$response['body'] = $message;
}
unset($_SESSION['cart_id']);
send($response);


function check_customer_info($name, $creditCard, $shippingAddress) {
  if (!isset($name)){
    throw new ApiError('NAME MI$$ING.', 400);
  } else if (!isset($creditCard)){
    throw new ApiError('CREDIT CARD MI$$ING.', 400);
  } else if (!isset($shippingAddress)) {
    throw new ApiError('SHIPPING ADDRESS MI$$ING', 400);
  }// ^^ also try array_key_exists($key, $array)
}

function create_order($link, $cartId, $name, $creditCard, $shippingAddress) {
  $customerInfoQuery =
  "INSERT INTO
      orders
    SET
      cartId = ?,
      name = ?,
      creditCard = ?,
      shippingAddress = ?";
  $preparedQuery = $link->stmt_init();
  $preparedQuery->prepare($customerInfoQuery);
  $preparedQuery->bind_param('isis', $cartId, $name, $creditCard, $shippingAddress);
  $orderId = $preparedQuery->execute();
  $orderId = $preparedQuery->insert_id;
  $responseArray =array(
    "creditCard" => $creditCard,
    "name" => $name,
    "orderId" => $orderId,
    "shippingAddress" => $shippingAddress);

  return $responseArray;
}
