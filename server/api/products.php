<?php

if ($request['method'] === 'GET') {
  $link = get_db_link();
  $message = get_product_data($link);
  $response['body'] = $message;
  send($response);
}

function get_product_data($link) {
  if (!isset($_GET['productId'])) {
    $whereClause = "";
    $longDescription = "";
  } else if (!is_numeric($_GET['productId'])) {
    throw new ApiError('ID needs to be a number', 400);
  } else {
    $whereClause = "WHERE `productId` = {$_GET['productId']}";
    $longDescription = 'longDescription,';
  };/* Maybe call this validate_request() etc */

  $sql =
    "SELECT
      image,
      {$longDescription}
      name,
      price,
      productId,
      shortDescription
    FROM
      `products`
      {$whereClause}";
  $result = $link->query($sql);/*this could possibly be 'run_query()', or join
  with above ('validate request') to create 'process_request()'*/

  if (!empty($_GET['productId']) && mysqli_num_rows($result) === 0) {
    throw new ApiError("Stop trying to make Fetch happen. It's not happening. Invalid ID: {$_GET['productId']}");
  } /* Maybe call this validate_result()*/

  $productData = $result->fetch_all(MYSQLI_ASSOC);
  if (count($productData) === 1) {
    $productData = $productData[0];
  };
  return $productData;
  /*this could possibly be 'process_response()', or join with above
  ('validate response'), still called 'process_response()'*/
}
