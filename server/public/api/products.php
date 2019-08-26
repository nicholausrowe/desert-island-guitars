<?php
require_once('db_connection.php');
require_once('functions.php');
set_exception_handler('error_handler');

startup();

if (empty($_GET['id'])) {
  $whereClause = "";
} else {
  $whereClause = "WHERE `id` = {$_GET['id']}";
};

if (!$conn) {
  throw new Exception(mysqli_connect_error());
};

$query = "SELECT * FROM `products` {$whereClause}";

$result = mysqli_query($conn, $query);

if (!$result) {
  throw new Exception("Connect failed: " . mysqli_connect_error());
};

$output = [];

while ($row = mysqli_fetch_assoc($result)) {
  array_push($output, $row);
};
print(json_encode($output));
?>
