<?php
require_once('db_connection.php');
require_once('functions.php');
set_exception_handler('error_handler');

startup();

// header('Content-Type: application/json');

// $output = file_get_contents('dummy-products-list.json');

// print($output);

if (!$conn) {
  throw new Exception(mysqli_connect_error());
};


$query = "SELECT * FROM `products`";

$result = mysqli_query($conn, $query);

if (!$result) {
  throw new Exception(mysqli_connect_error());
};

$output = [];

while ($row = mysqli_fetch_assoc($result)) {
  array_push($output, $row);
}

print(json_encode($output));

// if (empty($_GET['id'])) {
//   readfile('dummy-products-list.json');
// } else {
//   readfile('dummy-product-details.json');
// }



?>
