<?php

if ($request['method'] === 'GET') {
  $link = get_db_link();
  $message = get_products($link);
  $response['body'] = $message;
  send($response);
}

function get_products($link) {
  $sql = 'SELECT * FROM `products`';
  $link->query($sql);
  $result = $link->query($sql);
  $products = mysqli_fetch_all($result, MYSQLI_ASSOC);
  return $products;
}
sadfsd;
